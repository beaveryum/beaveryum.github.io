---
title: 'nodejs post 메서드'
---

# {{ $frontmatter.title }}


nodejs post 메서드를 하는 방법에 대해서 포스팅 글 남겨본다.

 
```js
var express = require('express')
var app = express()
var bodyParser = require('body-parser') >> 추가됨
  
app.listen(3000,fuction() {
console.log('시작 노드!')
});
```

스태틱 디렉토리 설정

이미지 나 스크립트 등 디렉토리 설정을 해야되서 

따로 지정해야됨

```js
app.use(express.static('public'))
app.use(bodyParser.json()) >> 추가됨
app.use(bodyParser.urlencoded({extended:true}) >> 추가됨
``` 

```js
app.get('/',function(req,res) {
//res.send(' 반가워 ');
res.sendFile(__dirname + "/public/main.html")
});
```

form 에서 이메일 포스트를 넘겨 받아와야 하는 상황

```js
app.post('/email_post',function(req,res) {
console.log(req.body.email) 
});
```



포스트 값은 따로 모듈을 설치해서 사용할수있다.

```bash
npm install body-parser --save
```

여기서 -- save는 패키지 제이슨 내부에 기록되게 한다는 뜻...


