---
title: '컴포지션 api'
---

# {{ $frontmatter.title }}

Composition API

Composition API는 옵션(data, methos, ...)을 선언하는 대신 가져온 함수(ref, onMounted, ...)를 사용하여 Vue 컴포넌트를 작성할 수 있는 API 세트를 말합니다.

다음은 Composition API에서 각각의 API(ref, onMounted, ...)들을 포괄하는 용어 입니다.

반응형 API (Reactivity API)

라이프 사이클 훅 (Lifecycle Hooks)

종속성 주입 (Dependency Injection)

배열 및 컬렉션의 참조 Unwarpping

반응형 객체와 달리 ref가 반응형 배열 또는 Map과 같은 기본 컬렉션 타입의 요소로 접근될 때 수행되는 래핑 해제가 없습니다.


```js
const books = reactive([ref('Vue 3 Guide')])
// need .value here
console.log(books[0].value)
 
const map = reactive(new Map([['count', ref(0)]]))
// need .value here
console.log(map.get('count').value)
```

객체에서는 .value를 안붙는다.

배열에서는 .value를 붙는다.



반응형 상태 구조 분해하기(Destructuring)

큰 반응형 객체의 몇몇 속성을 사용하길 원할 때, 원하는 속성을 얻기 위해 ES6 구조 분해 할당을 사용하는 것은 매우 일반적입니다.


```js
import { reactive } from 'vue'
 
const book = reactive({
  author: 'Vue Team',
  year: '2020',
  title: 'Vue 3 Guide',
  description: '당신은 이 책을 지금 바로 읽습니다 ;)',
  price: '무료'
})
 
let { author, title } = book
```

안타깝게도, 그러한 구조 분해로 두 속성은 반응형을 잃게 될 것 입니다. 이런 경우, 반응형 객체를 일련의 ref 들로 변환해야 합니다. 이러한 ref 들은 소스 객체에 대한 반응형 연결을 유지합니다.
 
toRefs 와 toRef는 반응형 객체로 만들어준다. (이전에는 스트링인데..)

::: danger
toRefs, toRef를 사용하면 반응형 객체의 속성과 동기화 됩니다. 그래서 원본 속성을 변경하면 ref 객체가 업데이트되고 그 반대의 경우도 마찬가지 입니다.
:::


```js
import { reactive, toRefs } from 'vue'
 
const book = reactive({
  author: 'Vue Team',
  year: '2020',
  title: 'Vue 3 Guide',
  description: '당신은 지금 바로 이 책을 읽습니다  ;)',
  price: '무료'
})
 
let { author, title } = toRefs(book)
 
title.value = 'Vue 3 상세 Guide' // title 이 ref 이므로 .value 를 사용해야 합니다.
console.log(book.title) // 'Vue 3 Detailed Guide'
```






