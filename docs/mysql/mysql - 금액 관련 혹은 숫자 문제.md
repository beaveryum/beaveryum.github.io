---
title: "mysql - 금액 관련 혹은 숫자 문제"
---

# {{ $frontmatter.title }}


금액 단위를 1 부터 10까지 한다고 예를들면..

```
where ( price >= 1000000 and price <= 10000000 )
```

이렇게 하는데

절대 따옴표를 넣지 말고 숫자만 입력 해야한다.

만약에 숫자 안에 다가 소수점이 존재 하면 자릿 수 를 생각해서 round 함수를 쓰면 된다.



그리고 위에 비교 함수 말고 between 함수를 쓰면서

```
where field between '시작' and '종료'
```

이렇게 하면됨 비트윈 함수를 안 하면 무조건 숫자로만 표현해야 된다.



만약에 셀렉트 박스에서 100단위부터 1천단위 혹은 1억 단위로 하게 되면

100 >> 1000000 백만원으로 표현해야됨 (* 10000) 곱하기 1만을 넣어줘서 100만원으로 맞춰야 한다.