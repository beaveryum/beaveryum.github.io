---
title: 'zsh : comment not found : vue'
---

# {{ $frontmatter.title }}



## 원인 : 


터미널에 명령어 치면 이런 에러가 뜬다.

zsh : comment not found : vue 

환경 변수에 등록이 안되서 나오는 에러이다.




## 해결방법 :


1. 터미널에서 아래 명령어 입력해준다. 

```bash
vi .zshrc 
```

```bash
export PATH="$PATH:~/.npm-global/bin" source ~/.zshrc
```


저장 후에 터미널에 vue를 입력하면 된다.  

.zshrc 설정은 맥 버전 마다 설정 하는 방법이 약간 다르기 때문에 주의 해야한다. 

최신 버전에서는 이렇게 하면된다. 




## 참고 자료 :


https://kabby.tistory.com/3


https://zionh.tistory.com/28





