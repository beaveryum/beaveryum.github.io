---
title: 'upstream sent too big header while reading response header from upstre'
---

# {{ $frontmatter.title }}


여기 사이트 참고 했더니 버퍼 문제라고 나온다.

nginx.conf 접속해서 아래 소스 추가하면된다.



```
fastcgi_buffers 16 16k;
fastcgi_buffer_size 32k;
```

그러고 재시작 하면 바로 동작이 잘된다..





## 참고자료 :

https://dev.jaedong.kim/nginx-upstream-sent-too-big-header-while-reading-response-header-from-upstream-error/


