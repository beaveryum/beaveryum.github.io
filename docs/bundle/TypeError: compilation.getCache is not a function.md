---
title: 'TypeError: compilation.getCache is not a function'
---

# {{ $frontmatter.title }}


## 원인 :

TypeError: compilation.getCache is not a function 이런 에러 가 나오는 이유는 

copy-webpack-plugin 이게 문제가 버전이 높아서 그런거 같다.

TypeError: compilation.getCache is not a function at C:\Users\maarten\Documents\projects\test7\node_modules\.....

 

## 해결방법 : 
현재 9.0.0 버전에서 마이그레이션 하면 된다.


```bash
npm i -D copy-webpack-plugin@6.3.2
```



## 참고 자료 :

https://github.com/framework7io/framework7/issues/3785