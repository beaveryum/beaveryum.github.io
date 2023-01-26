---
title: 'nginx 강제 종료, 테스트 하기'
---

# {{ $frontmatter.title }}


[root@nginx ~]# /usr/local/nginx/sbin/nginx
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)
nginx: [emerg] still could not bind()





NGINX 강제종료

```bash
/usr/local/nginx/sbin/nginx -s stop
```



NGINX 구성파일 변경

```bash
/usr/local/nginx/sbin/nginx -s reload
```




NGINX 구성파일 테스트-1

```bash
/usr/local/nginx/sbin/nginx -t
```
NGINX 서버 설정 변경 시 -t 옵션을 입력하여 테스트를 하는 명령어 입니다


NGINX 구성파일 테스트-2

```bash
/usr/local/nginx/sbin/nginx -t -c [설정파일.conf]
```



실제로 운영 중인 서버에 설정 파일을 조작하였을 경우 위험이 생길 수 있으니

-c 옵션과 설정을 변경하려는 파일을 옵션으로 NGINX 설정파일이 이상이 없는지 확인할 수 있습니다.



## 참고 문헌 :

https://server-talk.tistory.com/302