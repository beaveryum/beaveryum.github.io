---
title: "mysql 카운팅 처리"
---

# {{ $frontmatter.title }}



Count 쓰실때는 count(*) 이렇게 말고 count(idx) 이런식으로 컬럼명을 적는 습관을 들이시는게 좋습니다


레코드가 적을땐 *으로 해도 속도 차이가 딱히 안나지만 레코드가 많을때는 차이가 납니다


단, 컬럼명을 넣을때 pk컬럼명을 넣어야함, where절이 없을땐 count(*)가 빠르다.