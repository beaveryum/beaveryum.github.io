---
title: 'vuejs3 컴퓨티드 계산된 속성'
---

# {{ $frontmatter.title }}


템플릿 문법({{ }})은 간단히 사용 하면 매우 편리합니다. 하지만 템플릿 표현식 내 코드가 길어질 경우 가독성이 떨어지고 유지보수가 어려워질 수 있습니다. 예를 들어 아래와 같이 객체가 있는경우:

``` js
const teacher = reactive({
  name: '짐코딩',
  lectures: [
    'HTML/CSS',
    'JavaScript',
    'Vue3'
  ]
})
```

 
그리고 < template > 에 author가 책을 갖고 있는지 없는지 여부를 표시하고 싶습니다.
 
``` js
<p>강의가 존재 합니까?:</p>
<span>{{ teacher.lectures.length > 0 ? 'Yes' : 'No' }}</span>
```

이 시점에서 템플릿 표현식은 복잡해지며 선언적이지 않습니다. 또 이러한 코드를 여러곳에서 반복적으로 사용해야 한다면 더더욱 비효율 적일 것입니다.
 

이럴때 사용하는 것이 계산된 속성(computed property)입니다.

``` js
const hasLecture = computed(() => {
  return teacher.lectures.length > 0 ? 'Yes' : 'No'
})
<p>강의가 존재 합니까?:</p>
<span>{{ hasLecture }}</span>
```






