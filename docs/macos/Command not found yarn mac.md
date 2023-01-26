---
title: 'Command not found yarn mac'
---

# {{ $frontmatter.title }}



yarn 설치 해도 잡히지 않을경우 아래 처럼 따라 하면된다.

주의) 맥 환경이 많기 때문에 나 같은 경우 빅서 이고 옛날꺼 그대로 쓰고 있다.

환경에 다르면 안될 수 도 있고 해서 일단 참고한다.


```bash
export PATH=~/.yarn/bin:$PATH into .profile !**
```


or


try: If you are on the bash try adding alias

```bash
yarn=~/.yarn/bin/yarn.js
```

We no longer support global installation of Create React App.

Please remove any global installs with one of the following commands:
- npm uninstall -g create-react-app
- yarn global remove create-react-app

The latest instructions for creating a new app can be found here:

create-react-app.dev/docs/getting-started


@github ;)



위에 자료 보면서 문제 해결 하면된다.

그래도 설치가 안되면 삭제 후 제 설치 해야된다고 한다.


## 참고 자료 :

https://stackoverflow.com/questions/66637032/bash-yarn-command-not-found-even-after-installing-it-globally


