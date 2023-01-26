---
title: 'ssl 재 갱신 하는방법'
---

# {{ $frontmatter.title }}


진짜로 쉽다!!!


하는방법 아래 처럼 하면 된다.


우선 nginx 웹서버를 중단한다.

nginx 를 완벽히 중단시킬것 nginx -s stop << 이걸로 하면 안된다



강제 종료시켜야된다.

```bash
systemctl stop nginx
```

재 갱신 시작하기

```bash
certbot renew
```

웹서버 재 시작하기

```bash
systemctl start nginx
```



## 주의 사항:

5번 넘으면 안된다 1~2 시간 지나서 명령어가 실행된다.


끝!!!!