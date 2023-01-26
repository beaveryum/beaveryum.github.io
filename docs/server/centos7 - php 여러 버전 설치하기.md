---
title: 'centos7 php 여러 버전 설치하기'
---

# {{ $frontmatter.title }}



php 버전별로 설치 하기 주제로 포스팅 글을 남겨봅니다.

우선 각 버전 마다 설치를 합니다.





## 준비물

- 설치 해야 될 버전 : 5.6, 7.4, 8







## 1. 외부 저장소 추가하기

```bash
sudo yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
sudo yum -y install https://rpms.remirepo.net/enterprise/remi-release-7.rpm
```



## 2. php 버전 마다 설치하기

- 5.6 설치하기

```bash
yum install -y --enablerepo=remi, remi-php56 php php-bcmath php-cli php-common php-dba php-dbg php-devel php-embedded php-enchant php-fpm php-gd php-gmp php-imap php-interbase php-intl php-ldap php-litespeed php-mbstring php-mcrypt php-mysqlnd php-odbc php-opcache php-pdo php-pgsql php-process php-pspell php-recode php-snmp php-soap php-tidy php-xml php-xmlrpc php-curl
```



버전 확인

```bash
php -v
```



- 7.4 설치하기

```bash
sudo yum-config-manager --enable remi-php74
sudo yum -y install php php-common php-opcache php-mcrypt php-cli php-gd php-curl php-mysqlnd
```


버전 확인

```bash
php -v
```






- 8 버전 설치 하기

```bash
sudo yum -y install yum-utils
sudo yum-config-manager --disable 'remi-php*'
sudo yum-config-manager --enable remi-php80
sudo yum -y install php php-{cli,fpm,mysqlnd,zip,devel,gd,mbstring,curl,xml,pear,bcmath,json}
```bash



버전 확인

```bash
php -v
```




세 가지를 설치합니다.



## 3. php fpm 설정

```bash
vi /etc/php-fpm.d/www.conf   [PHP 7.1]
vi /opt/remi/php56/root/etc/php-fpm.d/www.conf  [PHP 5.6]
```

위에 경로는 다를수 있다보니 일단 경로 부터 찾아본다.



주의 : php을 시작하는 동안 오류가 발생하는 경우 SELinux 정책이 시작을 차단할 수 있습니다. ""SELinux가 강제 모드 인 경우 허용 모드로 설정 한 다음 서비스를 다시 시작하십시오."

```bash
getenforce
setenforce 0
```



여기서 liten 을 로컬호스트 포트 로 지정한다.

```bash
listen = 127.0.0.1:9000 [php56-php-fpm]
listen = 127.0.0.1:9001 [php74-php-fpm]
listen = 127.0.0.1:9002 [php8-php-fpm]
```

```bash
systemctl enable php56-php-fpm
systemctl start php56-php-fpm


systemctl enable php74-php-fpm
systemctl start php74-php-fpm


systemctl enable php8-php-fpm
systemctl start php8-php-fpm

```




## 4. nginx 에 설정에 접근합니다.

```bash
vi /etc/nginx/nginx.conf


upstream php_worker56 {
    server  localhost:9000;
}

upstream php_workers74 {
    server localhost:9001;
}

upstream php_worker8 {
    server localhost:9002
}

```



중간 쯤에 위에 소스를 넣어준다.

그러고 해당 경로에 있는지 확인한다.

```bash
ls -l /var/run/php-fpm
```



## 5. 모든 디렉토리에 적절한 소유권 권한을 설정한다.

```bash
chown -R root:nginx /var/www/html/example1.com/
chmod -R 755 /var/www/html/example1.com/
chown -R root:nginx /var/log/nginx/example1.com/
chmod -R 660 /var/log/nginx/example1.com/
```

아래 방법 처럼 권한을 주면 된다.

```bash
find ./ -type f -exec chmod 0644 {} \;
find ./ -type d -exec chmod 0755 {} \;

chcon -t httpd_sys_content_t /data/www/html/sites/mysite -R
chcon -t httpd_sys_rw_content_t /data/www/html/sites/mysite/logs -R
```



해당 경로로 접근해서 phpinfo 함수를 넣어준다.

```bash
vi index.php

<?php phpinfo();
```





## 6. nginx 서브 호스트 설정 추가하기

```bash
vi /etc/nginx/conf.d/example1.com.conf

server {
        listen 80;
        server_name example1.com www.example1.com;

        root   /var/www/html/example1.com/;
        index index.php index.html index.htm;

        #charset koi8-r;
        access_log /var/log/nginx/example1.com/example1_access_log;
        error_log   /var/log/nginx/example1.com/example1_error_log   error;

       location / {
                try_files $uri $uri/ /index.php?$query_string;
        }

       # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        location ~ \.php$ {

                root    /var/www/html/example1.com/;
                fastcgi_pass   php_worker56;    #set port for php-fpm to listen on
                fastcgi_index  index.php;
                fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
                include         fastcgi_params;
                include /etc/nginx/fastcgi_params;

        }
}
```



여기서 중효한게 fastcgi_pass 에 로컬 호스트 와 포트를 적절 하게 설정 해야한다.

각 php 버전마다 설정을 해야되서.. 판단을 잘해서 설정 해주면 된다.

그러나면 재 시작 을 해주면된다.

```bash
nginx -t
systemctl restart nginx php56-php-fpm php74-php-fpm php8-php-fpm
```




## 참고 자료 :

https://ko.linux-console.net/?p=2310



## 맺음말 :


레시피대로 해서 버전별로 설치 하면 된다 하지만 시스템 구축하다보면 잘 안되는게 다반사인데..

구글링으로 알아서 찾아 봐야 한다. 증상은 다양해서 치료법은.. 구글링으로..


