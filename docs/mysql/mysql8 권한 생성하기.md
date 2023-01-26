---
title: 'mysql8 권한 생성하기'
---

# {{ $frontmatter.title }}


## 설명 :


아무래도 검색만으로 레퍼런스 찾아서 복붙하느라 정신 없어서

그냥 정리해 놓기로 했다.





관리자 계정하고 루트 계정은 따로 분리 해놓은게 해킹에 대비해서 좋다고한다.

루트 비번 따로 만들고 나면 그걸로 사용하지 말고 접속할때만 사용한다.

(즉 터미널에서 접속 할 경우에만 사용한다. 디비툴에서는 관리자 계정이나 루트계정으로 접속한다..)







유저 조회를하려면 아래 명령어로..

```
SELECT user,plugin,host FROM mysql.user;
```

관리자 생성 및 권한 주기

```
create user 'myAccount'@'%' identified by 'myPasswd';
grant all privileges on *.* to 'myAccount'@'%';
```



왠만한건 여기 일반 계정 및 디비 생성하기로 하게될것이다.



일반 생성 및 권한주기

```
create user 'abcd'@'localhost' identified by 'efgh';

create database abcd_db;

grant all privileges on adcd_db.* to 'abcd'@'localhost';
```

권한 변경하기

```
FLUSH PRIVILEGES;
```

계정 권한 보기

```
show grants for 'abcd'@'localhost';
```



## 참고 자료 :

https://hyandmj.asuscomm.com/hblog/?p=766



https://velog.io/@nari120/MySQL8-%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EB%B6%84%EC%8B%A4-%EB%B0%8F-%EB%B3%80%EA%B2%BD