---
title: 'curl 와 file_get_contents 활성화 방법'
---

# {{ $frontmatter.title }}


우선은 php 에서 오픈 됐는지 확인해야한다.



php.ini 로 접속해서 확인해본다. phpinfo(); 함수로도 확인 가능하다.

```
vi /etc/opt/remi/php74/php.ini
```

allow_url_fopen 옵션이 on 으로 활성화 됐는지 확인한다. 



그리고 

curl 은 disable_functions = curl_exec  관련된게 있는지 있으면 지운다.

(전부 다 지우면 문제 되어서 잘 보고 지워야 한다.)




## 참고 자료 : 

https://seoneu.tistory.com/25