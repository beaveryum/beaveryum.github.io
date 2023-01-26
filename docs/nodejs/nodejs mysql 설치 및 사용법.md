---
title: 'nodejs mysql 설치 및 사용법'
---

# {{ $frontmatter.title }}

일단 mysql을 설치한다.

```bash
npm install mysql --save
```

 

여기 아래 소스를 넣고 실행한다.

```js
var mysql = require('mysql')
  
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '비번',
  database : '디비명'
});
```

여기서 에러가 생김 

어떤 문제 냐면 바로 되는게 아니라 

만약 ‘ER_NOT_SUPPORTED_AUTH_MODE’ 에러가 발생하면 아래 sql을 실행하고 다시 접속해보자.

::: info
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '< MySQL password >';
FLUSH PRIVILEGES;
:::

 

## 참고자료 : 

https://poiemaweb.com/nodejs-mysql
	

https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
	
