---
title: 'ssl 사용법2'
---

# {{ $frontmatter.title }}



ssl 사용방법에 대해서 다시 한번 남겨본다.



https://www.happykoo.net/@happykoo/posts/210

여기 사이트에 있던 소스를 가지고 하면된다.



우선 주의 사항을 좀 더 설명하자면

nginx conf에 꼭 ssl 관련된 소스코드가 있어야된다.

```
nginx: [emerg] cannot load certificate "/etc/letsencrypt/live/beaverfactory.com/fullchain.pem": BIO_new_file() failed (SSL: error:02001002:system library:fopen:No such file or directory:fopen('/etc/letsencrypt/live/beaverfactory.com/fullchain.pem','r') error:2006D080:BIO routines:BIO_new_file:no such file)
```

이런 에러가 나오는 이유는 소스코드가 풀 키체인 경로가 없어서 그럴수있다.



두번째로 는 아래 처럼 에러를 나올때

```
Domain: beaverfactory.com
  Type:   connection
  Detail: 3.36.134.24: Fetching
  http://beaverfactory.com/.well-known/acme-challenge/v8LWKiAanUc-O3q0rm9M-XxWzIubA-np7u3mprodJWo:
  Timeout during connect (likely firewall problem)
이거는 nginx 소스에 ssl 관련 스크립트가 없거나 해당 풀 키체인 경로를 지정 안해줘서 문제된거다
```


마지막 아래 처럼 에러가 나올경우

```
An unexpected error occurred:
There were too many requests of a given type :: Error creating new order :: too many failed authorizations recently: see https://letsencrypt.org/docs/failed-validation-limit/
```

이거는 5번이내 실패 하면 에러가 나온다 1시간 이후에 명령어를 입력하라는뜻이다.







결론은 첫단추부터 중요하다

1. ssl 관련 nginx에 넣기 풀 키체인이 경로에 지정 됐는지 확인해야한다.

여기서 한가지 덧붙어 설명하자면 nginx conf 설정이 없는 상태에서 ssl을 생성 했더니 정상적으로 작동하는거를 확인 했다. 실수로 설정 파일을 이름만 default.conf1로 지정 하고 ssl 명령어를 실행 했더니 정상적으로 발급된다.

이게 좀 안전빵일수있어서.. 고민해서 다시 한번 문제되면 이런 방식으로 해보길.. (안되면 1시간 있다가 해야되서.. 잘 선택하길..)



2. nginx 를 완벽히 중단시킬것 nginx -s stop << 이걸로 하면 안된다 systemctl stop nginx로 아예 종료시켜야된다.

아래처럼 메시지 문구가 나온거면 완료 됐다는 문구이다.

```
Found the following certs:
  Certificate Name: beaverfactory.com
    Serial Number: 4c8bff36034e9790942573e670597a0ca5f
    Key Type: RSA
    Domains: beaverfactory.com
    Expiry Date: 2022-11-27 07:31:51+00:00 (VALID: 89 days)
    Certificate Path: /etc/letsencrypt/live/beaverfactory.com/fullchain.pem
    Private Key Path: /etc/letsencrypt/live/beaverfactory.com/privkey.pem
```



이렇게 해서 갱신 명령어를 써주면될것이다. 5번이내 실패를 하면 한시간 이후에 해야되서.. 실패 없이 입력할것!



일단 여기까지 개발일지 써놓고 다음에 다시 새로 올려놓을것이다.


