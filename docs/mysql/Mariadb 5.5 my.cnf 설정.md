---
title: 'Mariadb 5.5 my.cnf 설정'
---

# {{ $frontmatter.title }}



설정환경 : Centos 7.0

설치 : yum


0. 설명

/usr/share/mysql에 보면 cnf파일들이 있다. 자신에게 맞는 적당한 녀석으로 골라서 사용하면 된다.

기본적으로 charset이 설정되어 있지 않기 때문에 charset은 기본적으로 추가해주어야한다.

그룹	상세
[mysqld]	mysqld 프로그램을 위한 설정 옵션
[mysql]	mysql 명령 클라이언트를 위한 설정 옵션
[client]	client 접속 환경 설정
[mysqldump]	dump 사용시 설정 옵션
[myisamchk]	myisamchk 복구 설정 옵션
[mysqlhotcopy]	mysqlhotcopy 백업 설정 옵션


myisamchk : check와 복구 기능

mysqlhotcopy : perl로 작성된 백업툴.



1. my.cnf

/usr/share/mysql/my-huge.cnf를 /etc/my.cnf로 복사한다. 그 후에 파란색으로 표시된 문자셋을 설정해준다. ( utf8에 utf8_general_ci로 설정한 것이다. )

# cp /usr/share/mysql/my-huge.cnf /etc/my.cnf

[client]

default-character-set=utf8

#password       = your_password

port            = 3306

socket          = /var/lib/mysql/mysql.sock



# server : mysqld라는 프로세스 데몬 ( 실제 구동되는 서버 프로그램을 위한 설정 )

[mysqld]

collation-server = utf8_general_ci

init-connect='SET NAMES utf8'

character-set-server=utf8

port            = 3306

socket          = /var/lib/mysql/mysql.sock

skip-external-locking

key_buffer_size = 384M

max_allowed_packet = 1M

table_open_cache = 512

sort_buffer_size = 2M

read_buffer_size = 2M

read_rnd_buffer_size = 8M

myisam_sort_buffer_size = 64M

thread_cache_size = 8

query_cache_size = 32M

# Try number of CPU's*2 for thread_concurrency

thread_concurrency = 8



#tmpdir         = /tmp/

#skip-networking

log-bin=mysql-bin

server-id       = 1



# dump 사용시 설정값

[mysqldump]

default-character-set=utf8

quick

max_allowed_packet = 16M



[mysql]

default-character-set=utf8

no-auto-rehash

#safe-updates



[myisamchk]

key_buffer_size = 256M

sort_buffer_size = 256M

read_buffer = 2M

write_buffer = 2M



[mysqlhotcopy]

interactive-timeout





혹시 몰라서 아래 자료도 참고 해 본다.







# mysql 또는 root 계정으로 작업을 권장합니다.

vi /etc/my.cnf



# client 부분밑에 추가

[client]

default-character-set = utf8



# mysqld 부분밑에 추가

[mysqld]

init_connect = SET collation_connection = utf8_general_ci

init_connect = SET NAMES utf8

character-set-server = utf8

collation-server = utf8_general_ci



# mysqldump 부분밑에 추가

[mysqldump]

default-character-set = utf8



# mysql 부분밑에 추가

[mysql]

default-character-set = utf8



[저장후 나가기]



# Mysql 재시작

service mysqld restart 또는 /etc/init.d/mysqld restart



# UTF8 확인하기

# Mysql 접속

mysql -u root -p [엔터]



# 현재 캐릭터셋 확인

show variables like 'c%'; [엔터]

+--------------------------+-----------------------------------------+

| Variable_name            | Value                                   |

+--------------------------+-----------------------------------------+

| character_set_client     | utf8                                    |

| character_set_connection | utf8                                    |

| character_set_database   | utf8                                    |

| character_set_filesystem | binary                                  |

| character_set_results    | utf8                                    |

| character_set_server     | utf8                                    |

| character_set_system     | utf8                                    |

| character_sets_dir       | /usr/local/server/mysql/share/charsets/ |

| collation_connection     | utf8_general_ci                         |

| collation_database       | utf8_general_ci                         |

| collation_server         | utf8_general_ci                         |

| completion_type          | NO_CHAIN                                |

| concurrent_insert        | AUTO                                    |

| connect_timeout          | 10                                      |

+--------------------------+-----------------------------------------+



# 위와 같은 형태로 나오면 변경 완료









마지막 줄이 정확한 자료 같다.





[ CentOS 7 ]



1. 현재 설정된 상태

[root@localhost ~]# mysql --version

mysql  Ver 15.1 Distrib 10.2.12-MariaDB, for Linux (x86_64) using readline 5.1



[root@localhost ~]# mysql -uroot -p

Enter password:

Welcome to the MariaDB monitor.  Commands end with ; or \g.

Your MariaDB connection id is 4

Server version: 10.2.12-MariaDB MariaDB Server



Copyright (c) 2000, 2017, Oracle, MariaDB Corporation Ab and others.



Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.



MariaDB [(none)]> show variables like "%character%"; show variables like "%collation%";

+--------------------------+----------------------------+

| Variable_name            | Value                      |

+--------------------------+----------------------------+

| character_set_client     | utf8                       |

| character_set_connection | utf8                       |

| character_set_database   | latin1                     |

| character_set_filesystem | binary                     |

| character_set_results    | utf8                       |

| character_set_server     | latin1                     |

| character_set_system     | utf8                       |

| character_sets_dir       | /usr/share/mysql/charsets/ |

+--------------------------+----------------------------+

8 rows in set (0.00 sec)



+----------------------+-------------------+

| Variable_name        | Value             |

+----------------------+-------------------+

| collation_connection | utf8_general_ci   |

| collation_database   | latin1_swedish_ci |

| collation_server     | latin1_swedish_ci |

+----------------------+-------------------+

3 rows in set (0.01 sec)



MariaDB [(none)]> exit

Bye

[root@localhost ~]#





2. server.cnf 설정

[root@localhost ~]# vi /etc/my.cnf.d/server.cnf

[client]

default-character-set=utf8mb4



[server]

character-set-server=utf8mb4

log-bin=mariadb-bin

event-scheduler=ON



[mysqld]

character-set-client-handshake = FALSE

collation-server = utf8mb4_unicode_ci

#init-connect='SET NAMES utf8mb4'

character-set-server = utf8mb4

max_allowed_packet = 32M

slow_query_log

long_query_time = 2



[mariadb-10.1]

innodb_file_format=barracuda

innodb_large_prefix=on





3. client.cnf 생성

[root@localhost ~]# vi /etc/my.cnf.d/client.cnf

[client]

default-character-set=utf8mb4