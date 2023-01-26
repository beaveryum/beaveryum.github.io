---
title: 'centos7 웹서버 구축 - php 8 설치'
---

# {{ $frontmatter.title }}



이번의 php 8 와 mysql 8 최신 버전을 설치 한다.


## 1. net tools 설치하기

```bash
yum install net-tools
```



## 2. 웹서버의 시간정보를 동기화 해주는 패키지를 설치

```bash
yum -y install rdate
rdate -s time.bora.net
```



## 3. yum 저장소 추가하기

```bash
yum -y install epel-release
yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
```



## 4. php 8 설치

```bash
sudo yum -y install yum-utils
sudo yum-config-manager --enable remi-php80
```



필수 패키지 설치하기

```bash
yum install -y php php-cli php-fpm php-mysqlnd php-mysql php-mysqli php-devel php-zip php-gd php-curl php-xml php-json php-intl php-mbstring php-mcrypt php-posix php-shmop php-soap php-sysvmsg php-sysvsem php-sysvshm php-xmlrpc php-opcache
```



php fpm 동작하기

```bash
service php-fpm start
sudo systemctl enable php-fpm
```



php fpm 설정

```bash
vi /etc/php-fpm.d/www.conf

;user = apache //변경전
user = nginx

;group = apache //변경전
group = nginx

;listen.owner = nobody //변경전
listen.owner = nginx

;listen.group = nobody //변경전
listen.owner = nginx

;listen.mode = 0660 //변경전
listen.mode = 0660

;listen = 127.0.0.1:9000 //변경전
listen = /var/run/php-fpm/php-fpm.sock

;pm.max_children = 50 //변경전
pm.max_children = 130

;pm.start_servers = 5 //변경전
pm.start_servers = 30

;pm.min_spare_servers = 5 //변경전
pm.min_spare_servers = 30

pm.max_spare_servers = 35 //변경전
pm.max_spare_servers = 100

;pm.max_requests = 500 //변경전
pm.max_requests = 500

:wq
```





## 5. nginx 설정 변경하기


vi /etc/nginx/nginx.conf

```bash
user nginx;
worker_processes auto;
error_log /var/log/nginx/error.log;
pid /run/nginx.pid;

events {
    worker_connections 1024;
    multi_accept       on;
    use                epoll;
}


http {

     access_log  /var/log/nginx/access.log;

     server_tokens off;
     gzip on;

     include /etc/nginx/mime.types;
     default_type application/octet-stream;

     types_hash_max_size 4096;
     keepalive_timeout   65;
     tcp_nodelay         on;
     tcp_nopush          on;
     sendfile            on;

     client_body_buffer_size 128k;
     client_header_buffer_size 1m;
     client_max_body_size 2000m;

     server_names_hash_bucket_size 64;
     server_names_hash_max_size 2048;

     large_client_header_buffers 8 8k;

     output_buffers 1 32k;
     postpone_output 1460;

     fastcgi_buffers 8 16k;
     fastcgi_buffer_size 32k;
     fastcgi_connect_timeout 300;
     fastcgi_send_timeout 300;
     fastcgi_read_timeout 300;

     client_header_timeout 3m;
     client_body_timeout 3m;
     send_timeout 3m;

     log_format main '$remote_addr - $remote_user [$time_local] "$request" '
     '$status $body_bytes_sent "$http_referer" '
     '"$http_user_agent" "$http_x_forwarded_for"';


    upstream php_worker {
        server unix:/var/run/php-fpm/php-fpm.sock;
    }


    # HTTP 1.1 support
    proxy_http_version 1.1;
    proxy_buffering off;
    proxy_set_header Host $http_host;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    # Mitigate httpoxy attack (see README for details)
    proxy_set_header Proxy "";

    include /etc/nginx/conf.d/*.conf;


}

:wq

```


여기서 이부분이 중요하다

```bash
upstream php_worker {
        server unix:/var/run/php-fpm/php-fpm.sock;
}
```



이건 php-fpm 이랑 연동이 되야한다.

만약에 해당 경로에서 php-fpm 파일이 없다면 어떻게든 꼭 설치를 해야한다.

해당 경로 확인 한다.

```bash
ls -l /var/run/php-fpm/
```



만약에 동작이 하지 않는다면 selinux 보안을 해제 해본다.

```bash
getenforce
setenforce 0
```



그러고나서 php-fpm 재 시작 한다.  혹시나 재시작이 되지 않으면 삭제 후 다시 설치 하면 된다.

```bash
yum -y remove php-fpm
yum -y install php-fpm
```

```bash
sysctemctl start php-fpm
sysctemctl enable php-fpm
```

여기서 왜 php-fpm이 경로에 나오지 않냐면?

php fpm 설정 에서 listen 주석 처리가 되었거나 경로가 존재 하지 않아서 그렇다. 위에 php fpm 설정 을 다시 체크해본다.





nginx 서브 호스트 설정


```bash
server {
        listen 80;
        server_name 도메인;

        client_max_body_size  2G;

        access_log /var/log/nginx/도메인명.access.log;

        error_log /var/log/nginx/도메인명.error.log;

        error_page 500 502 503 504 /50x.html;

        autoindex off;

        charset utf-8;

        index index.html index.htm index.php;

        root /home/developers;

        location / {
            try_files $uri $uri/ /index.php?$args;
        }

        location ~ \.php$ {
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass   php_worker;
            fastcgi_index  index.php;
            fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
            include        fastcgi_params;

            # 아래부터 버그 해결을 위해 추가해 주실 옵션입니다.
            # 502 에러를 없애기 위한 proxy 버퍼 관련 설정입니다.
            proxy_buffer_size               128k;
            proxy_buffers                   4 256k;
            proxy_busy_buffers_size         256k;

            # 502 에러를 없애기 위한 fastcgi 버퍼 관련 설정입니다.
            fastcgi_buffering               on;
            fastcgi_buffer_size             16k;
            fastcgi_buffers                 16 16k;

            # 최대 timeout 설정입니다.
            fastcgi_connect_timeout         600s;
            fastcgi_send_timeout            600s;
            fastcgi_read_timeout            600s;

            # 이 아래 설정은 PHP 성능 향상을 위한 옵션입니다. 추가해 주시면 좋습니다.
            sendfile                        on;
            tcp_nopush                      off;
            keepalive_requests              0;
        }
}
```



## 참고자료 :

https://www.burndogfather.com/237

https://wlsvud84.tistory.com/16




## 맺음말 :

구글링으로 찾아본 자료들을 토대로 설치 했는데 아주 정상적으로 작동 됀다.

위에 블로그 덕분에 잘 해결됐다!

