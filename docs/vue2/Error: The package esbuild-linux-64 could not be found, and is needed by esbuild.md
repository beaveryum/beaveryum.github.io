---
title: '"esbuild-linux-64" 패키지를 찾을 수 없으며 esbuild #1646 에 필요합니다.'
---

# {{ $frontmatter.title }}


## 원인 :

Error: The package "esbuild-linux-64" could not be found, and is needed by esbuild


이게 인텔에서 amd로 바뀌니까 생긴것같은데 저거 깃헙에서 자세히 읽어보니까 별거 없다.

그냥 node_modules 를 삭제 하고 재설치 했더니 완벽하게 실행된다.


## 문제 해결 :

https://github.com/evanw/esbuild/issues/1646 