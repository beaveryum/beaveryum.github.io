---
title: 'centos - mysql5.7 설치하기'
---

# {{ $frontmatter.title }}



## 시스템 환경 정보 보기

```bash
cat /etc/redhat-release
```
명령어로 센토 버전 확인 가능!



Wget 설치

```bash
yum -y install wget
```



Mysql 다운로드

```bash
wget https://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm
```



 Mysql 설치

```bash
sudo rpm -ivh mysql57-community-release-el7-11.noarch.rpm

sudo yum install mysql-server
```



서비스 시작

```bash
sudo systemctl start mysqld
sudo systemctl enable mysqld
sudo systemctl status mysqld
```


비밀번호 찾는방법 2가지
설치 후에 루트 비밀번호를 아예 모를 경우 명령어로 알수있다.

(근데 잃어버릴경우는 찾을수가 없기에… 다른방법을…)

```bash
sudo grep 'temporary password' /var/log/mysqld.log
[Note] A temporary password is generated for root@localhost: 패스워드
```

이런식으로 맨 뒤에 비밀번호가 나온다.



그리고 mysql5.7 일경우 비밀번호 제한이 있다.



MySQL 5.7 버전으로 넘어오면서 password validation에 대한 강도가 높아졌다. 하나 이상의 대문자, 숫자, 특수 문자가 포함 된 12자리의 암호를 요구한다.

암호를 입력하면 암호 강도에 대한 피드백을 받게 되며, 익명의 사용자의 삭제 및 루트의 리모트 로그인을 막을 것인지 대한 질문들을 한다.



비밀번호 제한을 없애자~

```bash
$ vi /etc/my.cnf



[mysqld]

##Password Policy

validate_password_policy=LOW

#validate_password_policy=MEDIUM
```

:::info
validate_password_policy=LOW << 이 소스 코드를 입력하면 길이 제한을 늘릴 수 있다.

짧게하면 위험이 있어서 왠만하면 보안상 좀 길고 복잡하게 해 놔야 한다.
:::

```bash
systemctl restart mysqld
```

재 시작 한다.



보안 스크립트 실행

```bash
sudo mysql_secure_installation

The existing password for the user account root has expired. Please set a new password.

New password:
```
 (이전에 비번 찾기 명령어로 알아왔기때문에 바로 진행됨)

<7aHOoCWyaYg  이건 예비 비밀번호 이다. (매번 다르게 생성 되서 접근 할 수 없다.)

아래 처럼 진행을 하면 된다. (Y 대문자 와이를 했더니 넘어갔음)

```bash
Estimated strength of the password: 50

Do you wish to continue with the password provided?(Press y|Y for Yes, any other key for No) : Y

By default, a MySQL installation has an anonymous user,

allowing anyone to log into MySQL without having to have

a user account created for them. This is intended only for

testing, and to make the installation go a bit smoother.

You should remove them before moving into a production

environment.



Remove anonymous users? (Press y|Y for Yes, any other key for No) : Y

Success.





Normally, root should only be allowed to connect from

'localhost'. This ensures that someone cannot guess at

the root password from the network.



Disallow root login remotely? (Press y|Y for Yes, any other key for No) : Y

Success.



By default, MySQL comes with a database named 'test' that

anyone can access. This is also intended only for testing,

and should be removed before moving into a production

environment.





Remove test database and access to it? (Press y|Y for Yes, any other key for No) : Y

 - Dropping test database...

Success.



 - Removing privileges on test database...

Success.



Reloading the privilege tables will ensure that all changes

made so far will take effect immediately.



Reload privilege tables now? (Press y|Y for Yes, any other key for No) : Y

Success.
```


Mysql 접속한다.

```bash
mysql -u root -p
Enter password:


Welcome to the MySQL monitor.  Commands end with ; or \g.

Your MySQL connection id is 5

Server version: 5.7.28 MySQL Community Server (GPL)



Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.



Oracle is a registered trademark of Oracle Corporation and/or its

affiliates. Other names may be trademarks of their respective

owners.



Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

여기까지가 mysql 접근 한 것이다.



두번째는 비밀번호를 잊었을 때~


Mysql 정지

```bash
systemctl stop mysqld
```

Mysql 환경 옵션 설정

```bash
systemctl set-environment MYSQLD_OPTS="--skip-grant-tables"
```

Mysql 시작

```bash
systemctl start mysqld
```

Mysql 로그인

비밀번호 없이 로그인 가능!

```bash
mysql -u root
```

루트 비밀번호 변경

5.7부터는 비밀번호 컬럼이 password 에서 authentication_string으로 변경됨

```sql
UPDATE mysql.user SET authentication_string = PASSWORD('새로운 비밀번호') WHERE User = 'root' AND Host = 'localhost';
FLUSH PRIVILEGES;
```

Mysql 정지

```bash
systemctl stop mysqld
```

Mysql 환경 옵션 설정 해제

```bash
systemctl unset-environment MYSQLD_OPTS
```

Mysql 시작

```bash
systemctl start mysqld
```

Mysql 로그인

```bash
mysql -u root -p
```

접속해서 쿼리를 입력 했을 때 문제가 생겼다고 하면?

```sql
You must reset your password using ALTER USER statement before executing this statement.
```

Mysql 접속 후  password validation을 삭제 했음

```bash
mysql -u root -p
mysql> uninstall plugin validate_password;
```



사용자 추가

```sql
create user '사용자'@'localhost' identified by '비밀번호';
```



권한 부여

모든 권한을 부여함

```sql
grant all privileges on *.* to '사용자'@'%';
```


외부접속 허용

```bash
vi /etc/my.cnf bind-address 0.0.0.0
```
없으면 추가해준다.





## 참고사이트 :



https://sybd.tistory.com/216



https://blog.eomsh.com/25



https://cherrypick.co.kr/how-to-install-mysql5-7-in-centos7/







