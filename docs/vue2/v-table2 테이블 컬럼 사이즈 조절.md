---
title: 'v-table2 테이블 컬럼 사이즈 조절'
---

# {{ $frontmatter.title }}



사실상 뷰2 내부 페이지에서 컴포넌트 렌더링한게 style 태그에 있던게 안먹힌다.

그래서 제이쿼리나 바닐라 자스로 조절하면된다.





예시는 이걸로 보면 된다.

## 해결방법 :

```vue
created() {
    this.$nextTick(function(){
        $(".table thead th:nth-child(1)").css("width","5%");
        $(".table thead th:nth-child(2)").css("width","10%");
        $(".table thead th:nth-child(3)").css("width","10%");
        $(".table thead th:nth-child(4)").css("width","40%");
        $(".table thead th:nth-child(5)").css("width","10%");
        $(".table thead th:nth-child(6)").css("width","10%");
        $(".table thead th:nth-child(7)").css("width","10%");
    });
}
```




그리고 v-table2 옵션에다가 하나 추가하면된다.

```js
table : {
       tableClass:'table table-bordered table-hover'
   },
```

