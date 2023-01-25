---
title: 'require is not defined for img src'
---

# {{ $frontmatter.title }}



## 원인 : 

이미지 태그가 비워 있어서 나온 에러다.



## 해결 방법 : 

그냥 # 해시를 넣어준다.

이건 임시로 하는 방법이고 no image 로 하는게 훨 낫다.

​
```html
<img src='#' />
```


​
이걸로 하면 대처 될수있다.
​

```html
<img src='https://via.placeholder.com/300/09f/fff.png%20C/O%20https://placeholder.com/' />
```




