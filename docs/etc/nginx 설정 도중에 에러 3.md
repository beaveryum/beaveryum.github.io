---
title: 'nginx 설정 도중에 에러 3'
---

# {{ $frontmatter.title }}


nginx 설정 도중에 에러가 났는데 증상과 치료법을 포스팅 글 올려본다.


## 원인 :

nginx 설정에서 문법 에러 났을 경우

nginx: [emerg] unknown directive "unix:/var/run/php-fpm/php-fpm.sock" in /etc/nginx/nginx.conf:42

nginx: configuration file /etc/nginx/nginx.conf test failed




journalctl -xe 명령어로 확인 할 수 있다. 혹은 nginx -t 명령어로 확인 할 수 있다.


## 해결 방법 :

42번째 줄 위치를 확인하면 server 문법이 빠져 있어서 나온 에러 같다.

```bash
upstream php_worker {
    server unix:/var/run/php-fpm/php-fpm.sock;
}

nginx -t && nginx -s reload
```