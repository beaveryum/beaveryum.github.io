---
title: 'macos 몬테리아 환경에서 php 설치 하기'
---

# {{ $frontmatter.title }}



php 모듈 설치하기

```bash
brew tap shivammathur/php

arch -arm64 brew tap shivammathur/php
```

php 버전 별로 설치하기 현재 8.2까지 출시됨

```bash
brew install shivammathur/php/php@7.4

arch -arm64 brew install shivammathur/php/php@7.4
```

경로 잡아주기

```bash
brew link --overwrite --force php@7.4

arch -arm64 brew link --overwrite --force php@7.4
```



편집기 열기

```bash
vi ~/.zshrc
```





마지막에 변경 한 내용 적용

```bash
source ~/.zshrc
```

재 시작하기

```bash
brew services restart php
```

여기서 버전별로 시작하려면?

```bash
brew services restart php@7.4
```

버전 확인하기

```bash
php -v
```


여기서 실습하면서 알게된 사실은

한개씩 버전을 잡아주면 된다.
나중에 이거 말고 다른 프로그램도 이런식으로 하면된다.

```bash
brew link --overwrite --force php@8.0
```


이것도 참고 해본다.
제대로 설치가 안될경우


https://getgrav.org/blog/macos-monterey-apache-multiple-php-versions



만약에 버전별로 설치를 원한다면 아래 주소 참고하자.

https://kevdees.com/macos-12-monterey-nginx-setup-multiple-php-versions/





## 참고 자료 :

https://wpbeaches.com/updating-to-php-versions-7-4-and-8-on-macos-12-monterey