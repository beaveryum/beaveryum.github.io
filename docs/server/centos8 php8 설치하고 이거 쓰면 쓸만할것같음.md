---
title: 'centos8 php8 설치하고 버전 숨기기'
---

# {{ $frontmatter.title }}


PHP 버전 정보 숨기기

php.ini 파일 경로 찾기

```bash
php --ini | egrep "Loaded Configuration File"
Loaded Configuration File: /etc/php.ini
```



PHP 버전 숨기기

```bash
sed -i "s/expose_php = On/expose_php = Off/g" /etc/php.ini
```


## 참고 자료 :

https://scbyun.com/1206