---
title: "mysql error 1045 'root@localhost' (using password yes) 에러"
---

# {{ $frontmatter.title }}


## 원인 :

error 1045 'root@localhost' (using password yes)







## 해결 방법 :

버전 5.7 이상 해결방법이다.

처음 설치 이후에 비밀번호가 디폴트 이기 때문에 직접적 으로 비밀번호를 바꿔야 한다.

```
mysqladmin -u root password [new password]
```

위에 명령어로 비번을 바꾸면 됨.