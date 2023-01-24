# php 세션 에러 해결하기


## 원인 : 


서버 설치 후에 php 세션 문제가 생겼다.
 


## 해결 방법 : 

```
chcon -R -t httpd_sys_rw_content_t /var/lib/php/session 
chown -R nginx:nginx /var/lib/php/session
```



## 참고 자료 : 

[https://www.lesstif.com/pages/viewpage.action?pageId=35356911](https://www.lesstif.com/pages/viewpage.action?pageId=35356911)