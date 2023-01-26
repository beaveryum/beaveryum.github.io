---
title: 'nginx 설치 도중 에러 address already in use 2'
---

# {{ $frontmatter.title }}


nginx 에러 중에서 address already in use 라고 나오면 프로세스를 끄면 된다.

80포트를 끄면 해결 될수도 있다.. 추측이다..

```bash
sudo fuser -k 80/tcp
```