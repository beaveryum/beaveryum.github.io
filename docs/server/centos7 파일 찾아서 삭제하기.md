---
title: 'centos7 파일 찾아서 삭제하기'
---

# {{ $frontmatter.title }}


제일 쉬운 방법이

which [파일명]

whereis [파일명]



이렇게 해서 경로를 찾아야한다.

그리고 rm -rf 로 삭제 처리



그러고 삭제가 되지 않은것 같더라면 캐시삭제를 해야됨



```bash
yum clean all sudo

rm -rf /var/cache/yum/*
```



