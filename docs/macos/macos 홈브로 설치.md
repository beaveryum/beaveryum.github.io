---
title: 'macos 홈브로 설치'
---

# {{ $frontmatter.title }}




맥에서 제일 편리성 있게 설치하는 방법 중 홈브로가 있다.

이걸 설치해서 사용하면 아주 편하다

홈브로 설치

```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```





설치 도중에 문제가 생겼을때

```bash
Error: The Ruby Homebrew installer is now disabled and has been rewritten in
Bash. Please migrate to the following command:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```



이럴 경우 혹시 몰라서 xcode를 설치 해야된다.

```bash
gcc --version

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

brew doctor

brew update
```

혹은 아래 내용을 참고한다.

Homebrew를 위해 Mac을 설정하는 방법

1단계 :

이미 Xcode를 설치했는지 확인하십시오. 터미널에서 아래 명령을 실행하십시오.

```bash
/usr/bin/xcodebuild -version
```
Xcode 12.3 빌드 버전 12C33



2단계 :

이제 Xcode를 엽니다.

- 기본 설정 선택
- 위치 탭 선택
- 이제 명령줄 도구의 드롭다운 메뉴에서 Xcode 버전을 선택합니다.

3단계 :

터미널에서 아래 명령을 실행합니다.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

참고: M1 Chip Mac이 있는 경우 아래 명령을 실행하고 터미널을 닫았다가 다시 엽니다.

```bash
echo "export PATH=/opt/homebrew/bin:$PATH" >> ~/.zshrc
```


```bash
code ~/.zshrc

export PATH=/usr/local/bin:/usr/local/sbin:$PATH​
```



brew -- version 을 입력해봤는데, brew 명령어가 아직 먹히지 않는데요,
Warning: /opt/homebrew/bin is not in your PATH에 나와 있듯이, 아직 PATH 에 등록이 되지 않아서 그렇습니다.
vim 에디터에 들어가서 수정해주면 되지만, 아래 한줄 입력으로 더 간단하게 등록할 수 있습니다.

```bash
echo 'export PATH=/opt/homebrew/bin:$PATH' >> ~/.zshrc
```

참고로 m1 환경에서는 다르게 적용해야된다. (아래 명령어 한줄 입력한다.)

```bash
eval $(/opt/homebrew/bin/brew shellenv)
```



혹시나 제대로 설치가 안 됐을 경우 이걸로 하면된다.

https://shanepark.tistory.com/45





## 참고 자료 :


https://stackoverflow.com/questions/20381128/installing-homebrew-on-macos

