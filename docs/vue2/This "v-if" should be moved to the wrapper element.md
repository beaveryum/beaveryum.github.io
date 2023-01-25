---
title: 'This "v-if" should be moved to the wrapper element'
---

# {{ $frontmatter.title }}


## 원인 :

v-for과 v-if문을 같이 쓰면 생기는 에러


This 'v-if' should be moved to the wrapper element 



## 해결 방법

린트에서 해당 문법을 추가하면된다.

```js
"vue/no-use-v-if-with-v-for": "off"
```



## 참고 자료 :

https://thewayitwas.tistory.com/163