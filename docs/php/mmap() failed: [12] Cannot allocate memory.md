---
title: 'mmap() failed: [12] Cannot allocate memory'
---

# {{ $frontmatter.title }}

## 원인 : 

컴포저 설치 하고나서 패키지 다운 받으려 하니까 에러가 생겼다.

mmap() failed: [12] Cannot allocate memory


## 해결 방법 : 

php.ini 에서 따로 메모리 리미트를 -1로 하면 된다. 명령어로 하는 방법도 있어서 아래꺼로 입력 한다.

```php
/bin/dd if=/dev/zero of=/var/swap.1 bs=1M count=1024 /sbin/mkswap /var/swap.1 /sbin/swapon /var/swap.1
```



