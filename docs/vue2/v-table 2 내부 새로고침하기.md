---
title: 'v-table2 내부 새로고침하기'
---

# {{ $frontmatter.title }}


## 사용법 :

새로고침할때 이렇게 하면된다.


컴포넌트에다가 $ref 로 지정해준다.

```html
ref="table"
```


핸들러 함수를 넣고 거기다가 아래 소스를 넣어준다.

엑시오스 then 내부에다가 성공일때..

```js
this.$refs.table.refresh();
```

