---
title: '그누보드용 https nginx 설정'
---

# {{ $frontmatter.title }}


엔진엑스 전용 설정

```bash
server {
    listen 80;
    listen [::]:80;
    server_name  beaverfactory.com;
    root   /home/beaverfactory;
    return      301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    server_name beaverfactory.com;
    root /home/beaverfactory;
    index  index.html index.htm index.php;
    access_log /var/log/nginx/beaverfactory.access.log;
    error_log   /var/log/nginx/beaverfactory.error.log;

     # SSL sessions
    ssl_session_cache shared:SSL:40m;
    ssl_session_timeout 4h;
    ssl_session_tickets on;

    ssl_certificate /etc/letsencrypt/live/beaverfactory.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/beaverfactory.com/privkey.pem;

    error_page  404              /404.html;
    error_page   500 502 503 504 /50x.php;
    location = /50x.php {
        root   /etc/nginx/block;
    }

    #### 그누보드5 nginx rules BEGIN #####
    if (!-e $request_filename){
        rewrite ^/content/([0-9a-zA-Z_]+)$ /bbs/content.php?co_id=$1&rewrite=1 break;
        rewrite ^/content/([^/]+)/$ /bbs/content.php?co_seo_title=$1&rewrite=1 break;
        rewrite ^/rss/([0-9a-zA-Z_]+)$ /bbs/rss.php?bo_table=$1 break;
        rewrite ^/orderform$ /theme/factory/orderform.php?item_code=$1&rewrite=1 break;
        rewrite ^/order_confirm$ /theme/factory/order_confirm.php?order_code=$1&rewrite=1 break;
        rewrite ^/mypage$ /theme/factory/mypage.php?mode=$1&rewrite=1;
        rewrite ^/list/([^/]+)/$ /theme/factory/list.php?cate_id=$1&rewrite=1 break;
        rewrite ^/detail/([^/]+)/$ /theme/factory/detail.php?item_code=$1&rewrite=1 break;
        rewrite ^/([0-9a-zA-Z_]+)$ /bbs/board.php?bo_table=$1&rewrite=1 break;
        rewrite ^/([0-9a-zA-Z_]+)/write$ /bbs/write.php?bo_table=$1&rewrite=1 break;
        rewrite ^/([0-9a-zA-Z_]+)/([^/]+)/$ /bbs/board.php?bo_table=$1&wr_seo_title=$2&rewrite=1 break;
        rewrite ^/([0-9a-zA-Z_]+)/([0-9]+)$ /bbs/board.php?bo_table=$1&wr_id=$2&rewrite=1 break;
    }
    #### 그누보드5 nginx rules END #####
    location = /favicon.ico { log_not_found off; access_log off; }
    location = /robots.txt { log_not_found off; access_log off; allow all; }

    location ~ \.(gif|jpg|png)$ {
        add_header Vary "Accept-Encoding";
        add_header Cache-Control "public, no-transform, max-age=31536000";
    }

    # 업로드시 파일+내용 최대 크기.  php.ini 의 post_max_size 값과 동일하게 설정.
    client_max_body_size 30m;

    # 브라우저에 캐싱을 위해, 리소스 만료일 지정
    location ~*.(mp4|ogg|ogv|svg|svgz|eot|otf|woff|woff2|ttf|rss|atom|ico|zip|tgz|gz|rar|bz2|doc|xls|exe|ppt|tar|mid|midi|wav|bmp|rtf|cur)$ {
           add_header Cache-Control "max-age=31536000";
           access_log off;
    }

    ### 주의) 접근 제한 설정은 PHP FastCGI 설정보다 먼저 선언되어야 합니다. ###
    # 접근 제한 - .htaccess 와 버전관리 시스템들
    location ~ /(\.ht|\.git|\.svn) {
        access_log off;
        log_not_found off;
        deny  all;
    }


    # 접근 제한 - 그누보드 업로드 디렉토리에서 PHP 실행 제한
    location /data/ {
        location ~ \.(php|html|htm|inc)$ {
          deny all;
        }
    }

    # 접근 제한 - 그누보드 파일 세션
    location /data/session/ {
       deny all;
    }

    # 접근 제한 - 캡챠
    location /bbs/fonts/ {
       deny all;
    }

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
#     fastcgi_pass php_worker56;
     fastcgi_pass php_worker74;
#      fastcgi_pass php_worker81;
     fastcgi_index index.php;
     include fastcgi_params;
     fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }
}
```


