---
title: 'Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders'
---

# {{ $frontmatter.title }}



## 원인 :

뷰를 공부하면서 아래 처럼 에러가 출력된다.

::: danger
Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders
:::




## 해결 방법 : 

이벤트 버스를 이용해서 프롭스를 전달하면 된다.
 


## 참고 자료 : 

https://juntcom.tistory.com/103