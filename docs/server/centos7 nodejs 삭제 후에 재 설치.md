---
title: 'centos7 nodejs 삭제 후에 재설치하기'
---

# {{ $frontmatter.title }}


센토 os 환경에서 노드 를 업데이트 하는데 문제가 생겼다.

아래 처럼 에러가 뜬다..

npm does not support Node.js v10.24.0 You should probably upgrade to a newer version of node as we can't make any promises that npm will work with this version. You can find the latest version at https://nodejs.org/ /root/.npm-global/lib/node_modules/npm/lib/npm.js:32


최신버전인데 불안정하는가.. 결국엔 삭제후에 재설치 하기로 했다.

일단 삭제 한다.

```bash
rm -rf /usr/lib/node_modules/
yum remove nodejs
npm -y
```

그러고 구글링으로 찾아서 재 설치를 하는데 똑같이 문제가 생긴다..

결국엔 안정된 버전으로 설치 해야할것 같다. [https://webdoli.tistory.com/57](https://webdoli.tistory.com/57)

여기 이 방법대로 했더니 결국엔 설치 완료!!

여기서 다시 설명하자면 아래 모듈을 설치후에 원하는 버전을 확인하면...

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash nvm ls-remote
```

쭈루룩 버전이 어마어마하게 많다 근데 여기서 좀 적당한걸 찾아보니까 v16.14.0 (Latest LTS: Gallium)

이게 딱일것같다.

```bash
nvm install 16.14.0
```

근데 여기서 설치하면 에러가뜬다..

에러 메시지 보면 해결 방법이 있다.

```bash
nvm use --delete-prefix v16.14.0
```


이러고 npm -v 와 node -v로 버전을 확인하면 된다.


여기서 또 다시 문제가 생겼다.

/usr/bin/env: node: Permission denied


구글링으로 다시 찾아보니까

https://www.google.com/search?newwindow=1&rlz=1C5CHFA_enKR892KR892&sxsrf=APq-WBs1503feZ-J7LdqH_S8HgXohfUO3g:1645118295339&q=Usr/bin/env:+node:+permission+denied&sa=X&ved=2ahUKEwjilO2cn4f2AhVQZ94KHZeKAAEQ1QJ6BAgjEAE&biw=1680&bih=853&dpr=2

https://ngdeveloper.com/usr-bin-env-node-permission-denied/



위에꺼 보고 하는데 진짜 잘보고 심볼릭링크를 설정해야한다 그대로 복붙했다가는..

문제 될 수 있다.

끝!