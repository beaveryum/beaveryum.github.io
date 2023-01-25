---
title: 'php 시작일 종료일 비교하기'
---

# {{ $frontmatter.title }}


php start date end date compare 

키워드 검색하면된다.



```
if (strtotime( $rent->endContract ) >= strtotime( $request->startContract ) ||
    strtotime( $rent->startContract ) <= strtotime( $request->endContract ) ) {
 
}
```



## 참고 문헌 :

https://stackoverflow.com/questions/56185321/php-compare-start-and-end-dates-between-two-dates