---
title: 'ceontos7 웹서버 구축 - 기본 설정 및 엔진엑스 설치'
---

# {{ $frontmatter.title }}


centos 7 환경에서 웹서버 구축에 대해서 포스팅 글 남겨 봅니다.



## 1. 시스템 환경 확인

```bash
cat /etc/redhat-release
```

## 2. 최고 관리자로 전환하기 (루트 계정으로 바뀐다.)

```bash
sudo -i
```



## 3. 시스템 업데이트 하기

- 업데이트 를 통해서 패키지 최신으로 설치 하면 됩니다.

```bash
yum -y update
```



## 4. 외부 저장소 추가하기

```bash
yum -y install epel-release
rpm -Uvh https://dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/epel-release-7-11.noarch.rpm
```

둘다 설치 한다.



설치 했는지 확인하기

```bash
rpm -qa | grep epel
```

## 5. nginx 설치하기

설치하기전에 nginx 작동을 하기 위한 패키지를 설치한다.

```bash
yum -y install pcre-devel libxml2-devel zlib zlib-devel openssl openssl-devel gcc g++ cpp gcc-c++ libxslt libxslt-devel php-gd libgd-dev gd gd-devel perl perl-ExtUtils-Embed geoip-devel
```

nginx 설치 한다.

```bash
yum install -y nginx
```



버전 확인 하기

```bash
nginx -v
```



nginx 구동하기

```bash
systemctl enable nginx
systemctl start nginx
```



상태 확인 하기

```bash
systemctl status nginx
```

## 6. 방화벽 설정 하기

방화벽 설치 됐는지 확인하기

```bash
rpm -qa | grep firewalld
```

방화벽 열기

```bash
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
```

방화벽 확인 하기

```bash
firewall-cmd --zone=public --list-port
```

만약에 yum 패키지가 제대로 설치가 되지 않는다면?

```bash
yum clean all
```