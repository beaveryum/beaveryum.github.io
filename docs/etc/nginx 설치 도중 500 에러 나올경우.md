---
title: 'nginx 설치 도중 500 에러 나올경우'
---

# {{ $frontmatter.title }}


## 원인 :

초기 설정 도중에 갑자기 500 에러가 뜬다..



에러 확인 방법은

journalctl -xe 명령어로 확인 할 수 있다.



## 해결 방법 :

방화벽을 다시 열어주기

```bash
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
```

외부 방화벽도 열어줘야 한다.

만약에 아마존 서버를 쓴다면 인스턴스 상세에서 인바운드를 80, 443 추가 해준다.

