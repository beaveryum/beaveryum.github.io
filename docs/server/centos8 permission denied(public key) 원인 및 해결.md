---
title: 'centos8 permission denied(public key) 원인 및 해결'
---

# {{ $frontmatter.title }}


## 원인 :

permission denied(public key) 업로드할때 마다 파일에서 퍼미션 디나인 에러가 나온다.

phpstorm 툴에서 연결 해서 (private key 연결 하니까) 에러 생긴다..

알아보니까 문제가 퍼미션 에러 인줄 알았는데 아니었네..? 한참동안 구글링해보니까 ssh 설정에서 문제가 있어서 그렇다네?

## 해결 방법 :

```bash
sudo vi /etc/ssh/sshd_config PasswordAuthentication을 yes로 변경
:wq
```

이렇게 수정하면 된다.


## 참고 자료 :

https://blog.naver.com/whapkj303/221572086785
