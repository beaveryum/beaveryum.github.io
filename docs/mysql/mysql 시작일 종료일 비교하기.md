---
title: 'mysql 시작일 종료일 비교하기'
---

# {{ $frontmatter.title }}


## 설명 :


- 자주 헷깔리는 쿼리이기에 정리

- 컬럼 기간 : 컬럼시작일, 컬럼종료일

- 조회 기간 : 조회시작일, 조회종료일

```
SELECT * FROM Table WHERE 컬럼종료일 >= 조회시작일 AND 컬럼시작일 <= 조회종료일
```



## 자료 출처:



https://rocabilly.tistory.com/318



http://gnujava.com/board/article_view.jsp?article_no=1570&menu_cd=29&board_no=16&table_cd=EPAR06&table_no=06