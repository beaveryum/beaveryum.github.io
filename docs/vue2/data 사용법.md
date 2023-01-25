---
title: 'data 사용법'
---

# {{ $frontmatter.title }}


data 문법에서 헷갈리는 것이 있을것이다.

1. data () { return { } } 
 
2. data:() => ({ })

둘중에 어떤게 더 좋을까?


1번은 es5 문법이다.

2번은 es6 문법이다 둘중에 es5를 선호 한다. 에로우 펑션은 일부 에러가 생길 수 있어서...

data() { return { ....} }

위 소스 코드 처럼 하는게 낫다.


## 참고자료 : 

https://hj-tilblog.tistory.com/78