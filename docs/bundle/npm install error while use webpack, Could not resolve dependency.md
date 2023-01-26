---
title: 'npm install error while use webpack, Could not resolve dependency'
---

# {{ $frontmatter.title }}


## 원인 및 해결 방법 :

노드 패키지 설치 할적에 버전들이 레거시라서 문제 생긴것같다.

이럴때 해결 방법은 아래 꺼 참고한다.


npm@7이전 버전보다 더 엄격한 종속성 해결이 있습니다. webpack루트 프로젝트에서 의 버전을 업데이트할 수 있으면 문제가 해결될 수 있습니다. 시도할 수 있는 쉽고 빠른 대안은 npm install --legacy-peer-deps입니다. 



```bash
npm install --legacy-peer-deps
```


혹은 아래꺼 (근데 위에껏이 정답같다.. 혹시몰라서 남겨본다.

```bash
npm install --verbose --force
```



구글 키워드

dev webpack@"^4.1.1" from the root project 





## 참고 자료 :

https://stackoverflow.com/questions/67052176/npm-install-error-while-use-webpack-could-not-resolve-dependency