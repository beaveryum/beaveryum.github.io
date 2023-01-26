---
title: 'centos7 환경에서 php 컴포저 설치'
---

# {{ $frontmatter.title }}


센토 환경에서 컴포저 설치 하는 방법에 대해서 포스팅 올린다.

아래 명령어 그대로 입력 하면 된다.


```bash
curl -sS https://getcomposer.org/installer | php

전역사용을 위하여 bin에 등록.
sudo mv composer.phar /usr/bin/composer
```


