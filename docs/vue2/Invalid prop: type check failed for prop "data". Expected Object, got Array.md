---
title: 'Invalid prop: type check failed for prop "data". Expected Object, got Array'
---

# {{ $frontmatter.title }}



## 원인 :

Invalid prop: type check failed for prop "data". Expected Object, got Array.

이런 에러가 뜨는 경우는 오브젝트 혹은 배열로 프롭스를 변환 하는데 문제 생기는 에러다..



## 해결 방법 :

엑시오스로 list 변수 받아오는 부분을 오브젝트로 해야된다.

```js
list:{}
```

그리고 컴포넌트 내부에 프롭스를 넣어준다.

```js
props: {
data: [Array, Object]
}
```

이렇게 하면 에러가 없어진걸 확인 할 수 있다.


## 참고 자료 :


https://github.com/gilbitron/laravel-vue-pagination/issues/18