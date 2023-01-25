---
title: 'input checkbox checked'
---

# {{ $frontmatter.title }}


## 설명 :


체크박스 체키드 로 하는 방법



아래 소스코드 넣어주면 된다.

```
true-value="1"
false-value="0"
```



최근에 개발하면서 위에 방법으로 하다가 좀 뭔가 아닌것 같다.

바인딩으로 했더니 이게 맞는것 같다. 

일단 상황이 컴포넌트로 체크박스 하나를 만들었는데

컴포넌트 내부에서 체키드가 안되어서..



컴포넌트 내부

```vue
<input type="checkbox" value="1"
v-bind:checked="this.value == 1 ? 'checked' : ''"
```


프롭스는 이렇게

````js
props: {
           label:String,
           value:String,

````




외부에서는 이렇게...

```vue
<CustomCheckBoxField
        v-bind:label="menu_open_label"
        v-bind:value="edit.new_open"
        v-model="edit.new_open"
/>
```






## 마지막으로 다시 덧 붙이자면 

불린으로 형변환해서 하는게 훨씬 낫다..

그냥 형변환 해서 바꿀수있다면 0이나 1이 아닌 직접 바꾼게 좋다.







