---
title: "mysql - Invalid default value for '~' DATETIME"
---

# {{ $frontmatter.title }}


## 설명 :

1. default 로 속성 DATETIME 을 이용하여 현재 시간으로 설정하려고하니 아래와 같은 에러가 발생했다

```
Error Code: 1067. Invalid default value for 'CREATE_DATE'
```

2. 데이터 타입을 DATETIME에서 TIMESTAMP 으로 변경후,



3. 아래와 같이 DEFAULT 타입을 수정해주니 정상작동이 되었다.

```
alter table USER_INFO modify CREATE_DATE TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
```



위에 내용대로 해결이 안되서 다르게 했음



```
SET SQL_MODE='ALLOW_INVALID_DATES';
```

위에 있는 코드로 하면 '0000-00-00' 년도 처리가 된다.



## 참고 자료 :

https://stackoverflow.com/questions/35565128/mysql-incorrect-datetime-value-0000-00-00-000000