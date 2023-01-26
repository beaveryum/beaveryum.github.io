---
title: 'php7부터 8까지 모듈 설치 방법'
---

# {{ $frontmatter.title }}


일단은 아래 소스코드 보면서 따라하면된다.


모듈에서 빼먹은게 있는지 확인한다.

```bash
php -m
```

혹시나 버전별로 설치 한경우에는

```bash
php80 -m
php74 -m
```

이런식으로 확인하면 된다.





그러면 쭈르륵 나오는데 버전별로 확인하려면 아래 명령어로 찾으면 된다.

```bash
yum list installed | grep php
```



센토 7 패키지  (이거는 따로 패키지가 등록되지 않거나 내부에 해당 패키지가 없는경우 최신껄로 설치해야된다.)

```bash
yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm
```

센토 8 패키지

```bash
sudo dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
```

8버전인데 여기서 숫자만 바꾸면된다.

```bash
sudo yum install php80 php80-php-intl php80-php-mbstring php80-php-gd php80-php-xml php80-php-imap php80-php-zip php80-php-curl php80-php-json php80-php-ldap php80-php-mysqlnd php80-php-opcache -y
```



혹시 몰라서 이것도 참고하면된다.

```bash
yum-config-manager --enable remi-php80
yum -y install php80 php80-php-common \
php80-php-fpm php80-php-gd \
php80-build php80-php php80-php-devel php80—intl \
php80-php-mysqlnd php80-php-opcache \
php80-php-mbstring php80-php-pdo \
php80-php-pecl-imagick php80-php-soap \
php80-php-pecl-imagick-devel php80-php-pecl-mcrypt \
php80-php-pecl-zip php80-php-bcmath \
curl curl-devel php80-php-xml \
libpng libpng-devel libwebp libwebp-devel \
libXpm libXpm-devel openssl openssl-devel \
autoconf zlib zlib-devel freetype freetype-devel \
gd gd-devel libmcrypt libmcrypt-devel \
libtool-ltdl-devel libxml2-devel \
libxml2 libcurl libcurl-devel \
php80-php-pecl-crypto php80-php-pecl-mysql
```

그러고 재시작 하면된다.

```bash
systemctl restart php74-php-fpm php56-php-fpm php81-php-fpm
```





## 참고 자료 :


https://www.linuxpanda.com/how-to-install-php-8-on-centos-8-7/


https://www.burndogfather.com/237


