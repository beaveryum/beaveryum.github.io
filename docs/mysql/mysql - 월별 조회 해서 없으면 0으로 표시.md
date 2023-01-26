---
title: "mysql - 월별 조회 해서 없으면 0으로 표시"
---

# {{ $frontmatter.title }}


## SQL 사용 방법 :

설명하자면 1일부터 30일까지 총합 표시 (없으면 0으로 표시)


```sql
SELECT IFNULL(SUM(CASE dd WHEN '01' THEN cnt END), 0) "01"
     , IFNULL(SUM(CASE dd WHEN '02' THEN cnt END), 0) "02"
     , IFNULL(SUM(CASE dd WHEN '03' THEN cnt END), 0) "03"
     , IFNULL(SUM(CASE dd WHEN '04' THEN cnt END), 0) "04"
     , IFNULL(SUM(CASE dd WHEN '05' THEN cnt END), 0) "05"
     , IFNULL(SUM(CASE dd WHEN '06' THEN cnt END), 0) "06"
     , IFNULL(SUM(CASE dd WHEN '07' THEN cnt END), 0) "07"
     , IFNULL(SUM(CASE dd WHEN '08' THEN cnt END), 0) "08"
     , IFNULL(SUM(CASE dd WHEN '09' THEN cnt END), 0) "09"
     , IFNULL(SUM(CASE dd WHEN '10' THEN cnt END), 0) "10"
     , IFNULL(SUM(CASE dd WHEN '11' THEN cnt END), 0) "11"
     , IFNULL(SUM(CASE dd WHEN '12' THEN cnt END), 0) "12"
     , IFNULL(SUM(CASE dd WHEN '13' THEN cnt END), 0) "13"
     , IFNULL(SUM(CASE dd WHEN '14' THEN cnt END), 0) "14"
     , IFNULL(SUM(CASE dd WHEN '15' THEN cnt END), 0) "15"
     , IFNULL(SUM(CASE dd WHEN '16' THEN cnt END), 0) "16"
     , IFNULL(SUM(CASE dd WHEN '17' THEN cnt END), 0) "17"
     , IFNULL(SUM(CASE dd WHEN '18' THEN cnt END), 0) "18"
     , IFNULL(SUM(CASE dd WHEN '19' THEN cnt END), 0) "19"
     , IFNULL(SUM(CASE dd WHEN '20' THEN cnt END), 0) "20"
     , IFNULL(SUM(CASE dd WHEN '21' THEN cnt END), 0) "21"
     , IFNULL(SUM(CASE dd WHEN '22' THEN cnt END), 0) "22"
     , IFNULL(SUM(CASE dd WHEN '23' THEN cnt END), 0) "23"
     , IFNULL(SUM(CASE dd WHEN '24' THEN cnt END), 0) "24"
     , IFNULL(SUM(CASE dd WHEN '25' THEN cnt END), 0) "25"
     , IFNULL(SUM(CASE dd WHEN '26' THEN cnt END), 0) "26"
     , IFNULL(SUM(CASE dd WHEN '27' THEN cnt END), 0) "27"
     , IFNULL(SUM(CASE dd WHEN '28' THEN cnt END), 0) "28"
     , IFNULL(SUM(CASE dd WHEN '29' THEN cnt END), 0) "29"
     , IFNULL(SUM(CASE dd WHEN '30' THEN cnt END), 0) "30"
  FROM (SELECT DATE_FORMAT(vi_datetime, '%d') dd
             , count(*) as cnt
          FROM mainsite.bv_visitor
          WHERE month(vi_datetime) = month(NOW())
         GROUP BY DATE_FORMAT(vi_datetime, '%d')
        ) a
```



## 맺은말 :

이 방법은 역시나 통계를 할때 사용 된다~ 구루비 커뮤니티 글을 참고하면 된다. 도움 될게 많다.




## 참고 자료 :

http://www.gurubee.net/

