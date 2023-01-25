---
title: 'vue.$NextTick이란?'
---

# {{ $frontmatter.title }}


데이터를 가지고 화면을 그리기 전에 DOM이 먼저 생성되며 원하는 트리(태그)를 찾지 못하는 오류를 막을 수 있다.   


## 사용법 : 

```js
created : function() {
    this.$nextTick(function(){
        var item = document.getElementById('textBox');
        item.style.backgroundColor = 'green';
    });
}

```


## 참고 자료:

https://kku-jun.tistory.com/13