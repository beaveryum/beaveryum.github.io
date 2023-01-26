---
title: 'centos7 웹서버 구축 - mysql8 설치'
---

# {{ $frontmatter.title }}




## 1. 외부 저장소 추가하기

```bash
sudo yum install -y https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
```



저장소 확인 하기

```bash
yum repolist enabled | grep "mysql.*"
```



패키지 확인하기

```bash
yum search mysql
```



## 2. 설치하기

```bash
yum install -y mysql-server
```



버전 확인 하기

```bash
mysqld -v
```



방화벽 열기

```bash
firewall-cmd --permanent --zone=public --add-port=3306/tcp
firewall-cmd --permanent --zone=public --add-port=33060/tcp
firewall-cmd --reload
```



구동하기

```bash
systemctl enable mysqld && systemctl start mysqld && systemctl status mysqld
```



8.0 은 임시비밀번호를 발급 해준다 명령어로 확인 하면 된다.

```bash
grep 'temporary password' /var/log/mysqld.log
```



mysql 접속한다.

```bash
mysql -u root -p
```



루트 비번 변경하기

```bash
ALTER USER 'root'@'localhost' IDENTIFIED BY '바꿀비번';
```



생성한 계정 확인 하기

```bash
use mysql;
select host, user, password from user;
```





해당 계정 비밀번호 와 권한 주는 방법

```mysql
CREATE USER 'root'@'localhost' IDENTIFIED BY '비번';

GRANT ALL PRIVILEGES ON *.* to 'root'@'%' IDENTIFIED BY '비번';

FLUSH PRIVILEGES;
```



만약에 해당 디비에만 권한을 준다면?

```mysql
GRANT ALL privileges ON DB명.* TO 계정아이디@locahost IDENTIFIED BY '비밀번호';
```



권한 부여 할때 어느 수준까지 가능한가?

모든 권한 부여

```mysql
grant all privileges on
```



조회, 추가, 삭제, 수정 만 부여

```mysql
grant select, insert, update on
```



사용 권한 부여 확인

```mysql
SHOW GRANTS FOR test@localhost;

SHOW GRANTS FOR test@'%';
```



사용 권한 제거

```mysql
revoke all on DB명.테이블명 from 사용자ID;
```



사용자 삭제

```mysql
drop user userid@'%';
drop user userid@localhost;
```





## 참고 자료 :


https://1mini2.tistory.com/86


https://velog.io/@inhalin/MySQL-ERROR-1410-42000


https://nickjoit.tistory.com/144


https://gofnrk.tistory.com/15










