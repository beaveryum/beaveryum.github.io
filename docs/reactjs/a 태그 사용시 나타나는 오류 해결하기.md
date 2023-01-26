---
title: 'a 태그 사용시 나타나는 오류 해결하기'
---

# {{ $frontmatter.title }}

## 원인 및 해결방법 :

::: info 
" React The href attribute requires a valid value to be accessible. " 
:::

결론은 아래처럼 사용하면 된다. 

둘중에 하나 사용하면 된다.


```html
href="#!"
 
href="{() => false}"
```
