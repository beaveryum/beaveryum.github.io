---
title: 'MySQL 1분전, 하루전, 한시간전, 하루전, 한달전 데이터 조회'
---

# {{ $frontmatter.title }}


## 설명 :

```
// 1분전 데이터 조회
SELECT * FROM 테이블명
where 시간칼럼명 >= DATE_ADD(NOW(), INTERVAL -1 MINUTE)

// 10분전 데이터 조회
SELECT * FROM 테이블명
where 시간칼럼명 >= DATE_ADD(NOW(), INTERVAL -10 MINUTE);

// 한시간전 데이터 조회
SELECT * FROM 테이블명
where 시간칼럼명 >= DATE_ADD(NOW(), INTERVAL -1 HOUR);

// 하루전 데이터 조회
SELECT * FROM 테이블명
where 시간칼럼명 >= DATE_ADD(NOW(), INTERVAL -1 DAY);

// 한달전 데이터 조회
SELECT * FROM 테이블명
where 시간칼럼명 >= DATE_ADD(NOW(), INTERVAL -1 MONTH);
```



- 시간 (-) 전 시간대

- 시간 (+) 이후 시간대
