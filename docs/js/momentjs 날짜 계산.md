---
title: 'momentjs 날짜 계산'
---

# {{ $frontmatter.title }}


날짜 이용해서 조회 하는 기능을 만드는데 주문 조회에 보면 날짜가 3일 정도 추가 되서 나온다

그래서 날짜 계산 해보니까 맞게 나왔다. 

https://heavenly-appear.tistory.com/264

위에 링크 보면 날짜 계산 저걸 이용해서 확인하면 된다.

그리고 아래주소 보면서 해결 하면된다.

https://john015.netlify.app/moment-js%EB%A5%BC-day-js%EB%A1%9C-%EB%8C%80%EC%B2%B4%ED%95%98%EA%B8%B0


혹시 몰라서 cdn 주소를 가져왔다. 

```html
<script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment-with-locales.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/locale/ko.min.js'></script>
```

아래 형식을 참고해서 풀면 된다.

대충 설명 하자면 개월 수를 계산 할때는 day로 계산하는거 같다. 3개월은 90일 이고 6개월은 180일 등 이렇게 하면됨

```js
const date = new Date();
             
let today = moment(date).format('YYYY-MM-DD');
let week1 = moment(date).subtract(7,'d').format('YYYY-MM-DD');
let month1 = moment(date).subtract(1, 'months').format('YYYY-MM-DD');
let month3 = moment(date).add(-90, 'day').format('YYYY-MM-DD');
let month6 = moment(date).add(-180, 'day').format('YYYY-MM-DD');
let year = moment(date).add('-1','y').format('YYYY-MM-DD');
```



