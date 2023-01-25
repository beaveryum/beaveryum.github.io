---
title: 'vue2 cli service dotenv 설정'
---

# {{ $frontmatter.title }}


일단 패키지에 소스를 넣는다.

```
"scripts": { "dev":"vue-cli-service serve --open --mode deveplopment", }
```



아래 처럼 경로를 이렇게 잡는다 

/frontend/ 

ㄴ .env.deveplopment



src에서 넣지말고 외부에 넣어야 한다. 

그리고 prefix 변수를 VUE_APP_ 

이렇게 하면된다.



