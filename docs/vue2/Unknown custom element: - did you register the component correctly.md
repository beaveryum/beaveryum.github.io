---
title: 'unknown custom element : did you register the component correctly?'
---

# {{ $frontmatter.title }}



## 원인 : 

::: danger
Unknown custom element: < navbar > - did you register the component correctly? For recursive components, make sure to provide the "name" option. 
:::


이런 에러가 계속 뜬다면 원인이 컴포넌트 선언을 오타가 나거나 잘못 입력 했을 경우가 백프로이다.

아래 문법대로 했는지 확인한다.


## 해결방법 :

```js
components: {}
```







