---
title: 'vuejs ssr rendering php'
---

# {{ $frontmatter.title }}


php 와 vuejs를 서버 사이더 렌더링 하는 방법을 찾아봤다.

이게 어떻게 알게 됐냐면 줌 기술 블로그에서 잠깐 포스팅을 읽다보니까 알게됐다.



https://zuminternet.github.io/ZUM-Mobile-NodeJS/




위에 포스팅글 읽다보면 스프링 부트에서 노드로 갈아탄다고 하는데 vuejs 랑 노드를 혼합해서 사용하려고 노드로 갈아탄다는 말인데



혹시나 php 관련된 자료가 있을건가 알아봤더니 라라벨이랑 뷰랑 혼합해서 쓴게 있는데 이건 예전부터 있던건데 php-v8js인가 이거랑 연동해서 쓰는경우도 있다고 한다. (아래 링크 참고)



https://blog.kesuskim.com/archives/spl-php-vue-ssr/

https://vuejsdevelopers.com/2017/11/06/vue-js-laravel-server-side-rendering/

https://github.com/anthonygore/vue-js-laravel-ssr


근데 이 자료는 라라벨 위주라서 그런지 라라벨에 최적화 되어 있다. 결국엔 ci4랑 연동 하려면.. 문제가 될건가 하고 다른 자료들도 찾아봤다.


여기 이자료는 그냥 순수 php 로 연동한 자료가 있다.

https://rojas.io/vue-js-server-side-rendering-with-php/


이러면 굳이 라라벨을 안하고 ci4 나 순수 php 로 가능할것같다.


그리고 좀더 찾아보니까 패키지리스트에 자료가 렌더링 관련 자료가 있다.


https://packagist.org/packages/spatie/server-side-rendering


이걸 사용하면 리액트나 뷰 등 같이 사용 할 수 있는것같다.


사실 내가 이전에도 비슷하게 개발을 했는데~ 근데 이게 단점이 많아서.. 이 방식이 좀 올바른건지.. 알송달송 한 느낌인데 

이번에 찾은 자료로 다시 개발을 하면 될것같다. 만약에 서버 세션까지 되면 금상첨화라고 생각한다.  

jwt 이용해서 하던지 아님 세션을 줘서 해보고 싶다. nuxtjs로 개발하는데 좀 힘든것도 있고 설정이라던지 api 로그인을 통해서 하려니까.. 



어쨋든간에 서버사이더 렌더링 방식으로 다시 개발해보고 리뷰 남겨봐야지..



https://github.com/leorojas22/vue-ssr-php-example




