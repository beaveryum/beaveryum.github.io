---
title: 'sly.js Unable to preventDefault inside passive'
---

# {{ $frontmatter.title }}


## 원인 : 

sly.js 를 사용하게 되면서 에러 발생 했다. 터치 드래그 옵션을 추가 하면서 아래 처럼 에러가 나온다.



Unable to preventDefault inside passive event listener due to target being treated as passive




## 해결 방법 : 


css 에서 예를들어서 .slide-container 클래스 내부에서 추가 하면된다. 


```js
-ms-touch-action: pan-y; touch-action: pan-y;
```
