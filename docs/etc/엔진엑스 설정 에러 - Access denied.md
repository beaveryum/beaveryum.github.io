---
title: '엔진엑스 설정 에러 - Access denied'
---

# {{ $frontmatter.title }}


## 원인 :

갑자기 'Access denied.' 라고 브라우저에서 이런 에러가 출력 됐다.






## 해결 방법 :

```bash
vi /etc/php-fpm.d/www.conf

security.limit_extensions = .php .html
```

공백으로 해두고 저장 한다.



재 시작 하기

```bash
sudo service php-fpm restart
```