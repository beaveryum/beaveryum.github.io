---
title: 'Because a cookie’s SameSite attribute was not set or is invalid'
---

# {{ $frontmatter.title }}


## 원인 : 

작업 하다보면 에디터에서 아이프레임 유투브가 실행되는 부분이 있는데 여기서 쿠키 샘 사이트 문제가 있다.

크롬에서 나오는 에러인데  크롬에서 새로운 정책이라고 알면 될것 같다.


그래서 혹시 몰라서 따로 자료 남긴다.


## 해결 방법 : 


해당 페이지에서 아래 소스코드 넣으면된다.

```js
document.cookie = "safeCookie1=foo; SameSite=Lax"; 
document.cookie = "safeCookie2=foo"; 
document.cookie = "crossCookie=bar; SameSite=None; Secure";
```




여기서 백단에서도 샘사이트 쿠키 를 samesite=none; secure 로 바꿔주면된다.

백단 마다 문법이 다르기 때문에 구글링으로 먼저 찾봐서 설정을 변경하면 된다.

​
## 참고 자료 :

https://ifuwanna.tistory.com/223