---
title: 'mysql 8.0.26 접속하기'
---

# {{ $frontmatter.title }}


현재 8이상 mysql으로 설치 되어서 아래 방법대로 접근해야된다.



https://velog.io/@jwoo/DB-%EB%B0%8F-%EA%B3%84%EC%A0%95-%EC%83%9D%EC%84%B1%EA%B3%BC-%EA%B6%8C%ED%95%9C-%EB%B6%80%EC%97%AC-ver.8.0.26



루트로 접근 할때는 아래 자료 참고하기

```
SELECT Host,User,plugin,authentication_string FROM mysql.user;

CREATE USER 'root'@'%' identified by '비번';

GRANT ALL PRIVILEGES ON *.* to 'root'@'%'; flush privileges;
```




https://1mini2.tistory.com/87



여기 밑에가 더 정리 잘되어 있다.



일반관리, 관리자 관리 설정 방법 다 나왔다.



https://hyandmj.asuscomm.com/hblog/?p=766