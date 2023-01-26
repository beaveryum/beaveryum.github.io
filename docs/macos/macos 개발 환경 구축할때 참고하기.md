---
title: 'macos 개발 환경 구축할때 참고하기'
---

# {{ $frontmatter.title }}


우선 맥에서는 개발 환경을 만들려면 일시적으로 하는 방법과 영구적으로 설치하는 방법이 있다.

일시적인 방법은 그냥 터미널에서 해당 경로를 시스템 환경 변수에 등록 해서 사용하면 되는데 단, os를 재 시작 하면 초기화가 되서 문제 될 경우가 있다.

(아래 명령어는 예시로 만든거다 테스트 할때 경로를 제대로 지정하길..)

```bash
export PATH="$PATH:~/Downloads/....."
```

반대로 영구적으로 하는 방법은 아래 설명을 보면 된다.

현재 사용 중인 쉘을 알아 보자

```bash
echo $SHELL
```



결과 Bash이면 ~/.bash_profile 이나 ~/.bashrc를 수정하면 되고
bin/zsh이면 ~/.zshrc 파일을 수정하면 된다.



내껀 bin/zsh 으로 나왔다. ~/.zshrc 로 편집 하면된다.

```bash
vi ~/.zshrc
```


```bash
export PATH="$PATH:~/Downloads/...."
```



이후에 설정 파일을 새로 고침 하면 된다. (중요하다)

```bash
source ~/.zshrc
```


설치가 됐는지 확인 하려면 아래 명령어로...

```bash
echo $PATH
```



## 참고 자료 :


https://velog.io/@taelee/%ED%99%98%EA%B2%BD-%EB%B3%80%EC%88%98-%EC%84%A4%EC%A0%95-Mac










