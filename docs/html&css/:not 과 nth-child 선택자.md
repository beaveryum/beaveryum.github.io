---
title: ':not 과 nth-child 선택자'
---

# {{ $frontmatter.title }}


not 은 특정선택자가 제외 된 경우를 뜻함 

nth-child로 넣어서 짝수를 제외 시키려면 #### 반대로 홀수면 odd 

응용해서 찾아보면 자료들이 많이 나온다. 

```css
.test:not(:nth-child(odd)) {color:red} 
```