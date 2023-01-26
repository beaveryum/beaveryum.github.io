---
title: "mysql 평점 표시하기"
---

# {{ $frontmatter.title }}



## SQL 사용방법 :


select avg(평점) from 평점테이블 where id='가져올아이디'

이런식으로 해당 아이디의 평점을 하나하나 가져오겠죠... 한꺼번에 가져오고 싶으면

select id,avg(평점) from 평점테이블 group by id





4.00 표시됨



```sql
SELECT  user_id  /* 사용자 아이디 */
,category /* 항목 카테고리 */
,ROUND(AVG(score), 2) AS avg_score  /* 평균을 구하고 소수점 셋째자리에서 반올림 하여 둘째까지 표시 */

FROM     tb_result

WHERE  user_id = '유저아이디'

GROUP   BY category
```





## 느낀점 :


역시나 응용해서 써야 한다. 이 방법으로 안 풀릴때는 구글링으로 찾아본다.