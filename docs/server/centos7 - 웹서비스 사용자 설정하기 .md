---
title: 'centos7 - 웹서비스 사용자 설정하기'
---

# {{ $frontmatter.title }}





웹 서버는 원격에서 접속하는 서비스이기 때문에 root를 사용하지 않도록 합니다.



보안에 따라 여러 가지 설정이 있지만, 본 문서는 웹 서비스를 사용할 수 있는 USER를 추가하고,

웹 서버 서비스인 nginx를 USER의 group에 추가합니다.





웹 서비스를 사용할 USER를 추가합니다.

```bash
useradd USER
passwd USER
```


웹 서비스 사용자의 기본 파일 생성 권한에서 other 에 대한 부분을 설정하여, 권한이 없는 사용자에 대한 접근을 제한합니다.

```bash
echo "umask 0027" >> /home/USER/.bash_profile
```


웹 서비스를 사용할 USER의 group에 nginx 를 추가합니다.

```bash
usermod -a -G USER nginx
```


생성한 USER의 디렉토리의 권한을 설정합니다.

```bash
chmod 750 /home/USER/
```


