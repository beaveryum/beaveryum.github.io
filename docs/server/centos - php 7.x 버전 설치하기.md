---
title: 'centos - php 7.x 버전 설치하기'
---

# {{ $frontmatter.title }}



## 1. 외부 저장소 추가

```bash
yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
```





## remi  설치

```bash
yum -y install http://rpms.remirepo.net/enterprise/remi-release-7.rpm
```





## 2. 유틸 설치하기

Yum-utils 설치

```bash
yum -y install yum-utils
```


php 7.x 선택해서 설치하기

```bash
yum-config-manager --enable remi-php71   [Install PHP 7.1]
yum-config-manager --enable remi-php72   [Install PHP 7.2]
yum-config-manager --enable remi-php73   [Install PHP 7.3]
yum-config-manager --enable remi-php74   [Install PHP 7.4]
```


```bash
yum -y install php php-mcrypt php-cli php-gd php-curl php-mysql php-ldap php-zip php-fileinfo
yum -y install php php-bcmath php-common php-dba php-fpm php-gd php-mbstring php-mysql php-pear php-xml
```





추가 모듈이 있으면 확인 할수있음

```bash
yum search php
```



php 설정

```bash
vi /etc/php.ini

[PHP]

date.timezone = Asia/Seoul


cgi.fix_pathinfo=0

open_basedir = /home

display_errors = Off

allow_url_fopen = Off

expose_php = Off

short_open_tag=On

```





php-fpm 설정 변경

```bash
vi /etc/php-fpm.d/www.conf

user = nginx

group = nginx


listen.owner = nginx

listen.group = nginx

listen.mode = 0660



listen = /var/run/php-fpm/php-fpm.sock
```


nginx 설정


NGINX의 Runtime user:group을 설정합니다.

nginx.conf 파일의 user 부분을 찾아서 다음과 같이 변경합니다.


```bash
# vi /etc/nginx/nginx.conf

user   nginx nginx;
```


## 참고자료:


http://bong8nim.com/post/programming/etc/centos-nginx-php-fpm-socket-%EC%84%A4%EC%A0%95/



