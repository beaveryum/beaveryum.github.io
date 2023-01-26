---
title: 'centos7 한국 시간 설정'
---

# {{ $frontmatter.title }}



```bash
timedatectl list-timezones | grep Seoul
sudo timedatectl set-timezone Asia/Seoul
```



확인 방법 :

```
date
```