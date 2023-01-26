---
title: 'centos7 php 세션 문제'
---

# {{ $frontmatter.title }}


## 원인 :

서버 설치 후에 php 세션 문제가 생겼다.


## 해결 방법 :

```bash
chcon -R -t httpd_sys_rw_content_t /var/lib/php/session
chown -R nginx:nginx /var/lib/php/session
```