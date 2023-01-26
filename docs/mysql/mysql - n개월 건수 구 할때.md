---
title: "mysql - n개월 건수 구 할때"
---

# {{ $frontmatter.title }}



## 문제 :


디비 테이블 에는 날짜(CONDATE)와 건수(CNT)가 있습니다.

예들 들어 올해 월별 건수를 구할 때

4월부터는 아직 데이터가 없으니까 0으로 표시되게 하고 싶은데요



1월   2월  3월  4월 ..... 12월

10    15    10     0............0





## 해결 방법 :

아래 sql 쿼리를 참고하면 된다.


```sql
SELECT IFNULL(SUM(CASE mm WHEN '01' THEN cnt END), 0) "01"

     , IFNULL(SUM(CASE mm WHEN '02' THEN cnt END), 0) "02"

     , IFNULL(SUM(CASE mm WHEN '03' THEN cnt END), 0) "03"

     , IFNULL(SUM(CASE mm WHEN '04' THEN cnt END), 0) "04"

     , IFNULL(SUM(CASE mm WHEN '05' THEN cnt END), 0) "05"

     , IFNULL(SUM(CASE mm WHEN '06' THEN cnt END), 0) "06"

     , IFNULL(SUM(CASE mm WHEN '07' THEN cnt END), 0) "07"

     , IFNULL(SUM(CASE mm WHEN '08' THEN cnt END), 0) "08"

     , IFNULL(SUM(CASE mm WHEN '09' THEN cnt END), 0) "09"

     , IFNULL(SUM(CASE mm WHEN '10' THEN cnt END), 0) "10"

     , IFNULL(SUM(CASE mm WHEN '11' THEN cnt END), 0) "11"

     , IFNULL(SUM(CASE mm WHEN '12' THEN cnt END), 0) "12"

  FROM (SELECT DATE_FORMAT(condate, '%m') mm

             , SUM(cnt) cnt

          FROM t

         WHERE condate >= '2017-01-01'

           AND condate <  '2018-01-01'

         GROUP BY DATE_FORMAT(condate, '%m')

        ) a

```



