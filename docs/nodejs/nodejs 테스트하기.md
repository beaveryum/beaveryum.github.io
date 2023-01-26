---
title: 'nodejs 테스트하기'
---

# {{ $frontmatter.title }}


편집기를 열어서 아래 소스를 넣는다.

```js
var express = require('express')
  
var app = express()
  
app.listen(3000,fuction() {
  
console.log('시작 노드!')
  
});
 
``` 


저장 하고 터미널에서 명령어를 입력한다.

 
```bash 
node app.js
```

모듈 설치

 

```bash
sudo npm install nodemon -g
npm install nodemon --save-dev
```

이건 자동으로 알아서 서버를 실행되면서 저장된다.

 

package.js 열어두고 스크립트 추가한다.

 
```js
"scripts": {
    "start": "nodemon app.js"
}
```

시작하기

```bash
npm start
```

 

 