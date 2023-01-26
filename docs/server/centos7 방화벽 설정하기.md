---
title: 'centos7 방화벽 설정하기'
---

# {{ $frontmatter.title }}


방화벽 설정

```bash
sudo firewall-cmd --permanent --zone=public --add-port=<port>/tcp

sudo firewall-cmd --permanent --zone=public --add-service=http

sudo firewall-cmd --reload
```

방화벽 확인

```bash
sudo firewall-cmd --zone=public --list-port
```

