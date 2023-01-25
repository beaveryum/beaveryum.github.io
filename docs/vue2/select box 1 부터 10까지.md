---
title: 'select box 1 부터 10까지'
---

# {{ $frontmatter.title }}


가장 간단한 대답은 선택한 옵션을 true 또는 false로 설정하는 것입니다.

```vue
<option :selected="selectedDay === 1" value="1">1</option>
```


여기서 데이터 개체는 다음과 같습니다:

```js
data() {
    return {
        selectedDay: '1',
        // [1, 2, 3, ..., 31]
        days: Array.from({ length: 31 }, (v, i) => i).slice(1)
    }
}
```

다음은 선택한 월 일을 설정하는 예입니다:

```vue
<select v-model="selectedDay" style="width:10%;">
    <option v-for="day in days" :selected="selectedDay === day">{{ day }}</option>
</select>
```


데이터 세트 :

```js
{
    data() {
        selectedDay: 1,
        // [1, 2, 3, ..., 31]
        days: Array.from({ length: 31 }, (v, i) => i).slice(1)
    },
    mounted () {
        let selectedDay = new Date();
        this.selectedDay = selectedDay.getDate(); // Sets selectedDay to the today's number of the month
    }
}
 ```




## 참고 자료 :


https://stackoverflow.com/questions/43839066/how-can-i-set-selected-option-selected-in-vue-js-2

