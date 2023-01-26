---
title: 'mysql8 비밀번호 초기화'
---

# {{ $frontmatter.title }}


## 설명 :

일단 아래 참고 사이트 보면서 그대로 따라 했다.

버전 마다 차이 있습니다.

5.7부터 8까지 는 그대로 따라하는데 비밀번호 변경 하는 문법이 8 기준에서만 동작됩니다.

```
systemctl stop mysqld // mysql 중단 mysqld --skip-grant-tables --user=mysql & // 비활성화시키기


mysql FLUSH PRIVILEGES;

SELECT user, host, plugin FROM user;

// 계정 조회부터하고

ALTER USER 'root'@'localhost' IDENTIFIED BY 'new_passowrd';

// 비번 바꾸기

FLUSH PRIVILEGES;

exit;
```







## 참고 문헌 :



https://ko.linux-console.net/?p=61#gsc.tab=0



https://blog.jiniworld.me/72