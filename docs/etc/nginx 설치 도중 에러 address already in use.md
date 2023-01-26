---
title: 'nginx 설치 도중 에러 address already in use'
---

# {{ $frontmatter.title }}


## 원인 :

nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use) 라고 에러가 출력된다.


Dec 18 14:47:09 ip-172-26-2-200.ap-northeast-2.compute.internal nginx[11497]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)

Dec 18 14:47:10 ip-172-26-2-200.ap-northeast-2.compute.internal nginx[11497]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)

Dec 18 14:47:10 ip-172-26-2-200.ap-northeast-2.compute.internal nginx[11497]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)

Dec 18 14:47:11 ip-172-26-2-200.ap-northeast-2.compute.internal nginx[11497]: nginx: [emerg] bind() to 0.0.0.0:80 failed (98: Address already in use)

Dec 18 14:47:11 ip-172-26-2-200.ap-northeast-2.compute.internal systemd[1]: nginx.service: control process exited, code=exited status=1

Dec 18 14:47:11 ip-172-26-2-200.ap-northeast-2.compute.internal nginx[11497]: nginx: [emerg] still could not bind()

Dec 18 14:47:11 ip-172-26-2-200.ap-northeast-2.compute.internal systemd[1]: Failed to start nginx - high performance web server.



## 해결 방법 :

SELinux를 비활성화 하면된다.

```bash
setenforce 0
getenforce
```

## 참고 자료 :

https://ko.stealthsettings.com/fix-nginx-start-failed-centos-7-nginx-emerg-open-path-failed-13-permission-denied.html




