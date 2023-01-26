---
title: 'nodejs get 라우터'
---

# {{ $frontmatter.title }}



```js
var express = require('express')
var app = express()
app.listen(3000,fuction() {
console.log('시작 노드!')
});
  
app.get('/',function(req,res) {
//res.send(' 반가워 ');
res.sendFile(__dirname + "/public/main.html")
});
```



이렇게하고 저장하면됨

그러고 public 디렉토리를 만든다

내부에서 main.html 파일을 만든다
