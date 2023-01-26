---
title: 'nodejs ajax 사용법'
---

# {{ $frontmatter.title }}


아래 모듈을 설치 한다.

 
```bash
npm install cors --save
```

 

[소스명 : form.html]
```html
<!doctype html>
  
<html>
  
  <head>
  
      <meta charset="utf-8">
  
      <title>email form</title>
  
  </head>
  
  <body>
  
    <form action="/email_post" method="post">
  
      email : <input type="text" name="email">
 
  
      <input type="submit">
  
    </form>
  
    <button class="ajaxsend">ajaxsend</button>
  
    <div class="result"></div>
  
    <script>
  
      document.querySelector('.ajaxsend').addEventListener('click',function() {
  
        var inputdata = document.forms[0].elements[0].value;
  
        sendAjax('/ajax_send_email', inputdata);
  
      })
  
      function sendAjax(url, data) {
  
        var data = {'email' : data};
  
        data = JSON.stringify(data);
  
        var xhr = new XMLHttpRequest();
  
        xhr.open('POST',url);
  
        xhr.setRequestHeader('Content-Type', "application/json");
  
        xhr.send(data);
  
        xhr.addEventListener('load', function() {
  
          console.log(xhr.responseText);
  
      //  var result = xhr.responseText;
  
          var result = JSON.parse(xhr.responseText);
  
      // document.querySelector(".result").innerHTML="dsfds";
  
          if(result.result !== "ok") return;
  
          document.querySelector(".result").innerHTML=result.email;
  
        });
  
      }
  
    </script>
  
  </body>
  
</html>
```


[소스명 : app.js]

```js
var express = require('express')
  
var app = express()
  
var bodyParser = require('body-parser')
  
var cors = require('cors')
  
app.listen(3000, function() {
  
 console.log("start, express server on port 3000");
  
});
  
app.use(express.static('public'))
  
app.use(bodyParser.json())
  
app.use(bodyParser.urlencoded({extended:true}))
  
app.set('view engine', 'ejs')
  
app.use(cors())
  
//url routing
  
app.get('/', function(req,res) {
  
  console.log('test');
  
  res.sendFile(__dirname+"/public/main.html")
  
});
  
app.get('/main', function(req,res) {
  
  res.sendFile(__dirname+"/public/main.html")
  
})
  
app.post('/email_post', function(req,res) {
  
  console.log(req.body.email)
  
//  res.send("post response")
  
//res.send("<h1>welcome " + req.body.email + "</h1>")
  
res.render('email.ejs', {'email' : req.body.email})
  
})
  
app.post('/ajax_send_email', function(req, res) {
  
 console.log(req.body.email)
  
 var responsData = {'result' : 'ok', 'email' : req.body.email};
  
 res.json(responseData);
  
})
```  