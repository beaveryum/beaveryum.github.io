---
title: "error in entry module not found error can't resolve './src' in "
---

# {{ $frontmatter.title }}


## 원인 :


에러의 원인은 많은데 그 중에서 웹팩에서 나오는 원인이 제일 크다.

나 같은 경우 지금 빌드를 하면서 에러가 발생하고 있다. 

webpack.config.js 에서 실행이 되는데 빌드에 필요한 옵션이 없어서 저런 에러가 나온다.

```dander
Insufficient number of arguments or no entry found. Alternatively, run 'webpack(-cli) --help' for us
```

 

## 해결방법 :
 
빌드 할때 옵션이 

entry, output 두가지가 꼭 있어야한다. 

여기 아래 참고 자료를 보면된다.

이렇게 경로와 같이 넣게 되면 빌드가 해결 된다.


```js
entry : "./frontend/src/index.js",
```









