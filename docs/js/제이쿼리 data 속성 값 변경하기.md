---
title: '제이쿼리 data 속성 값 변경하기'
---

# {{ $frontmatter.title }}


제이쿼리에서 data 속성을 바꾸려면 빡세게 해야된다.

아래 방법 처럼 하면된다.

이벤트는 클릭하면 속성값 변경하는 방법이다..

```js
$(document).on("click", ".btn-toggle-expand", function() {
 $('.filter-category').attr('data-expand',$('.filter-category').attr('data-expand')==='true'?'false':'true');
});
```



