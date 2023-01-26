---
title: 'mysql 쿼리 생년월일 순서대로'
---

# {{ $frontmatter.title }}


```
SELECT <별칭>.*

FROM <테이블명> <별칭>

ORDER BY (별칭.created_at = '0000-00-00') ASC,

별칭.created_at ASC
```

