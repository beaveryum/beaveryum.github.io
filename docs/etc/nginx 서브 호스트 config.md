---
title: 'nginx 서브 호스트 config'
---

# {{ $frontmatter.title }}



```bash
server {
        listen  80;
        server_name            도메인
        root                  /디렉토리;
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
                include        fastcgi_params;
                fastcgi_pass   php_worker;
                fastcgi_index  index.php;
                fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
        }

}
```


