---
title: 'nodejs view engine 템플릿 사용하기'
---

# {{ $frontmatter.title }}


esj 템플릿 설치 

 
```bash
npm install ejs --save
```

설치후에

디렉토리 / 하위에서 views라고 폴더를 만든다. 

/public

/views

이런식으로 디렉토리 구성됨  

/views/email.ejs 파일을 만든다.

 

email.ejs

html 템플릿을 만들고

내부에 따로 이메일을 확인하려면 

<%= email %>

이렇게 템플릿 문법으로 하면됨 

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
  
app.set('view engine','ejs')
  
app.set('views', path.join(__dirname,'views')) >> 이렇게 해줘야 인식된다고함 
  
  
app.get('/',function(req,res) {
  
res.sendFile(__dirname + "/public/main.html")
  
});
  
  
  
app.post('/email_post',function(req,res) {
  
res.render('email.esj',{'email' : 'req.body.email'})
  
});
```

 

여기까지 마치겠다!