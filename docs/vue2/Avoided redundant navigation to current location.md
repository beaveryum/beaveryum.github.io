---
title: 'Avoided redundant navigation to current location:'
---

# {{ $frontmatter.title }}


## 원인 :

일단 원인은 현재 경로로 재이동하면 이러한 에러가 나온다.


Avoided redundant navigation to current location: 


## 해결방법 :

그래서 문제 해결을 하려면 아래 코드로 하면된다.

```js
this.$router.push("/admin").catch(()=>{});
```




## 참고 자료 :


https://sso-feeling.tistory.com/706