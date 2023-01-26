---
title: 'centos8 No URLs in mirrorlist'
---

# {{ $frontmatter.title }}


## 원인 :

인스턴스 생성후에 서버 접근하고 프로그램설치 할때 마다 밑에 에러가 자꾸 나온다..

:::dander
Error: Failed to download metadata for repo 'appstream': Cannot prepare internal mirrorlist: No URLs in mirrorlist
:::

## 해결 방법 :

루트 사용권한을 풀어야한다고 단서를 발견했다..

일단 해보니까 설치는 된다!

아래 사이트 에꺼 명령어 따라하면된다.

https://jootc.com/p/202202273852


여기서 하다가 경험담...

스트림 버전 사용하도록 풀고나서 부터 바로 업그레이드 시작해야된다.

```bash

sudo sed -i -e "s|mirrorlist=|#mirrorlist=|g" /etc/yum.repos.d/CentOS-* sudo sed -i -e "s|#baseurl=http://mirror.centos.org|baseurl=http://vault.centos.org|g" /etc/yum.repos.d/CentOS-*

```

이후에 밑에 배포판으로 교체하면 될것같다..

```bash
sudo dnf -y upgrade
```

```bash
sudo dnf install centos-release-stream -y
sudo dnf swap centos-{linux,stream}-repos -y
sudo dnf distro-sync -y
```

바로 했더니 서버 도중에 멈추고 아주 난리도 아니다..

근데 여기서 위에 배포판 설치하는게 맞는지는 모르겠다

패키지 설치 도중에 kmod-kvdo-6.2.6.14-83.el8.x86_64 패키지 이거 347번째 설치 도중에서 멈춰있고..

기다리다가..

안되겠어서 하나 넘기고 설치 이어가게 했는데..

애초에 안하고 그냥 서버 세팅 하는게 좋을지도 모르겠다는 생각이..

괜히 시간 낭비만 한거 같다..