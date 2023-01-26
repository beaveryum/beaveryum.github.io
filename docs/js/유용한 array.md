---
title: 'JavaScript 유용한 Array API'
---

# {{ $frontmatter.title }}



자바스크립트에서 유용한 Array API에 대해 알아보도록 하겠습니다.
 
## map()

메서드는 배열 내의 모든 요소 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.


```js
const numbers = [1, 2, 3, 4, 5, 6, 7];
 
const result = numbers.map((number) => number * 2);
 
console.log(result); // [2, 4, 6, 8, 10, 12, 14]
```


## some()

메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트 합니다.

```js
const fluits = ["사과", "딸기", "배", "참외", "딸기", "수박"];
 
const result = fluits.some((fluit) => fluit === "수박");
 
console.log(result); // true
```


## every()

메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트 합니다.

```js
const fluits = ["수박", "수박", "배", "수박", "수박", "수박"];
 
const result = fluits.every((fluit) => fluit === "수박");
 
console.log(result); // false
```


## filter()

메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.

```js
// 짝수만 필터링 하기
const numbers = [1, 2, 3, 4, 5, 6, 7];
 
const result = numbers.filter((number) => number % 2 === 0);
 
console.log(result); // [2, 4, 6]

```


## reduce()


메서드는 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.
 
리듀서 함수
리듀서 함수는 네 개의 매개변수를 갖습니다.

- 누적 값 (acc)

- 현재 값 (cur)

- 현재 인덱스 (idx)

- 원본 배열 (src)

리듀서 함수의 반환 값은 누적 값에 할당되고 최종 결과는 이 누적 값이 됩니다.

```js
// 누적합 구하기
const numbers = [1, 2, 3, 4, 5, 6, 7];
 
const result = numbers.reduce((acc, cur) => acc + cur);
 
console.log(result);
// 중복된 과일 제거하기
const fluits = ["사과", "딸기", "배", "참외", "딸기", "수박"];
const result = fluits.reduce((arr, cur) => {
  if (arr.includes(cur) === false) {
    arr.push(cur);
  }
  return arr;
}, []);
console.log(result);
```



## 참고 자료 :

https://www.gymcoding.co/javascript-array-api#f3d8359a5fec42ff83fa769733b34b6e




