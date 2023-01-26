---
title: 'mysql 한달 이후 혹은 n일 이후에'
---

# {{ $frontmatter.title }}


아래 쿼리 를 사용하면 된다.


```
select * from 테이블 where date(필드) >= date(now()-interval 30 day)
```