---
title: 'nodejs static 디렉토리 설정'
---

# {{ $frontmatter.title }}


```js
var express = require('express')
var app = express()
app.listen(3000,fuction() {
console.log('시작 노드!')
});
```





스태틱 디렉토리 설정

이미지 나 스크립트 등 디렉토리 설정을 해야되서 

따로 지정해야됨 

 
```js
app.use(express.static('public'))
  
app.get('/',function(req,res) {
//res.send(' 반가워 ');
res.sendFile(__dirname + "/public/main.html")
});
```


