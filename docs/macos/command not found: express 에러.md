---
title: 'command not found: express 에러'
---

# {{ $frontmatter.title }}



## 원인 :

zsh: command not found: expres

설치는 했는데 맥 환경설정에 제대로 동작되지 않는다.


해결 방법 :

https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally


```bash
npm config set prefix '~/.npm-global'

export PATH=~/.npm-global/bin:$PATH

source ~/.profile

npm install -g jshint
```



1. 커맨드창을 열어서 cd ~ 여기로 접근한다.

2. open .zshrc 열어준다 혹은 없으면 vi .zshrc 새로 만든다.

3. 파일안에 이렇게 쓰고 저장 한다. export PATH=~/.npm-global/bin:$PATH

환경설정을 여기까지 해줘야됨

4. source .bash_profile 이렇게 적용시켜주면 됨

5. echo $path 로 찍어줘서 확인하면 등록된것이 보임



위에 방법이 잘 안되면 아래 주소 참고 한다.

