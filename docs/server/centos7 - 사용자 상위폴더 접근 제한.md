---
title: 'centos7 - 사용자 상위폴더 접근 제한'
---

# {{ $frontmatter.title }}


 처음 리눅스 설치 후에 상위로 디렉토리 접근 되는데 접근 못하게 제한 을 줄 수 있다.

 1. 상위 폴더 접근은 퍼미션 조정으로 접근을 막는 방법

 2. SFTP에서 chroot 기능을 이용하여 사용자의 홈 폴더를 root 폴더로 지정하는 방법 (단, SSH 사용불가)


 - 퍼미션으로 접근 막기

 ```bash
 chmod 711 /
 chmod 711 /home
 chmod 711 /etc
 chmod 711 /bin
 chmod 711 /boot
 chmod 711 /dev
 chmod 711 /mnt
 chmod 711 /opt
 chmod 711 /proc
 chmod 711 /usr
 chmod 711 /usr/local
 chmod 711 /var
 ```