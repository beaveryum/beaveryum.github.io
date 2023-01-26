---
title: 'nginx: [error] invalid PID number "" in "/var/run/nginx…'
---

# {{ $frontmatter.title }}


## 원인 :

nginx: [error] invalid PID number "" in "/var/run/nginx.pid"

엔진엑스가 동작하는 도중에 에러가 났을경우..



## 문제 해결 :

아래 명령어 그대로 입력하면 해결 된다.

```bash
pkill -9 nginx nginx -c /etc/nginx/nginx.conf nginx -s reload
```


## 참고 자료 :

https://gist.github.com/sun4lower/93bc1ae91dced5af4a445a89450b3176