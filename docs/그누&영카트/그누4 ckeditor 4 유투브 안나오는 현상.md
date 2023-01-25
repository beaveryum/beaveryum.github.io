---
title: '그누4 ckeditor 4 유투브 안나오는 현상'
---

# {{ $frontmatter.title }}



## 원인 :
 
ckeditor 4 유투브 안나온 현상.. 

처음에 유투브를 넣을때는 정상적으로 작동되는데 저장 후에 수정 페이지로 접근 하니까 나오지 않는다.

그누보드 최신에서 ckeditor5 에서는 아주 정상적으로 작동 된다.




## 해결 방법 :

ckeditor 4 설정에서 추가하면 된다. 

```js
config.allowedContent = true;
```







