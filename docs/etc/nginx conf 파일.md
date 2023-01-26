---
title: 'nginx conf 파일'
---

# {{ $frontmatter.title }}


옛날 회사에서 사용 했던 소스코드


```bash
worker_processes  4;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
    multi_accept        on;
    use                 epoll;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server_tokens off;

    gzip on;
    sendfile on;

    client_max_body_size 120m;
    types_hash_max_size 2048;

    access_log off;
    keepalive_timeout  65;

    upstream php_worker {
        server localhost:9052;  # unix:/var/run/php52.socket;  # localhost:9054;
    }

    upstream php_workers5 {
        server localhost:9056; #unix:/var/run/php54.socket;  # localhost:9054;
    }

    upstream php_worker54 {
        server unix:/var/run/php54.socket;  # localhost:9054;
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
    include /mnt/extra01/nginx/*.conf;
}
```


```bash
worker_processes  4;

error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
    multi_accept        on;
    use                 epoll;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server_tokens off;

    gzip on;
    sendfile on;

    client_max_body_size 120m;
    types_hash_max_size 2048;

    access_log off;
    keepalive_timeout  65;

    upstream php_worker {
        server localhost:9052;  # unix:/var/run/php52.socket;  # localhost:9054;
    }

    upstream php_workers5 {
        server localhost:9056; #unix:/var/run/php54.socket;  # localhost:9054;
    }

    upstream php_worker54 {
        server unix:/var/run/php54.socket;  # localhost:9054;
    }

    # HTTP 1.1 support

ser  nginx;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;


events {
    worker_connections  1024;
    multi_accept        on;
    use                 epoll;
}


http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    server_tokens off;

    gzip on;
    sendfile on;

    client_max_body_size 120m;
    types_hash_max_size 2048;

    access_log off;
    keepalive_timeout  65;

    upstream php_worker {
        server localhost:9052;  # unix:/var/run/php52.socket;  # localhost:9054;
    }

    upstream php_workers5 {
        server localhost:9056; #unix:/var/run/php54.socket;  # localhost:9054;
    }
  upstream php_worker54 {
        server unix:/var/run/php54.socket;  # localhost:9054;
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
    include /mnt/extra01/nginx/*.conf;
}
```

```bash
server {
        listen  80;
        server_name           klera.or.kr www.klera.or.kr klera.rcsoft.co.kr;
        root                  /mnt/extra01/home/klera/wwwhost;
        client_max_body_size  2G;
        include               /etc/nginx/conf.d/_validate_site_;


        error_page   500 502 503 504 /50x.html;
        location = /50x.html {
                root   /usr/share/nginx/html;
        }

        location / {
                proxy_set_header   Host             $host;
                proxy_set_header   X-Real-IP        $remote_addr;
                proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
                proxy_pass_request_headers on;
                try_files $uri $uri/ /index.php?/$request_uri;
                index  index.html index.htm index.php;
        }

        location ~ \.(php|htm|html)$ {
                try_files $uri =404;
                include        fastcgi_params;
                fastcgi_pass   php_worker;
                fastcgi_index  index.php;
                fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        }

}
```




