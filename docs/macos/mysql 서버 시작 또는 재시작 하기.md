---
title: 'mysql 서버 시작 또는 재시작 하기(MAC)'
---

# {{ $frontmatter.title }}



1. MAC

mysql 서버 시작

```
mysql.server start
```

mysql 서버 재시작

```
mysql.server restart
```





2. Linux

mysql 서버 시작

```
service mysql start systemctl start mysql.service
```

mysql 서버 재시작

```
service mysql restart systemctl restart mysql.service
```



여기 자료 참고할것



https://heytech.tistory.com/207


https://velog.io/@taelee/mysql-%EC%84%9C%EB%B2%84-%EC%8B%9C%EC%9E%91-%EB%98%90%EB%8A%94-%EC%9E%AC%EC%8B%9C%EC%9E%91-%ED%95%98%EA%B8%B0MAC