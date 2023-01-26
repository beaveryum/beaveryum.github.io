---
title: 'centos7 selinux 보안해제'
---

# {{ $frontmatter.title }}


:::info
SELinux

인터넷에 연결된 리눅스라면 SELinux를 사용하는 게 좋다고 하지만, 설정이 어렵습니다.

위험을 감수하고서라도 편하게 사용하고 싶다면 SELinux를 끌 수 있습니다. SELinux를 끄는 두 가지 방법을 포스팅 글 남겨봅니다.
:::






## 방법 1
다음과 같이 명령하면 SELinux가 꺼집니다. 재부팅하면 다시 SELinux가 켜집니다.

```bash
setecforce 0
```

만약 다시 SELinux를 사용하고 싶다면 다음과 같이 명령합니다.

```bash
setecforce 1
```

## 방법 2
/etc/selinux/config에 다음과 같은 코드가 있습니다.

```bash
SELINUX=enforcing
```

다음과 같이 바꿉니다.

```bash
SELINUX=disabled
```

시스템을 재부팅하면 적용됩니다.

방법 1과는 달리 재부팅해도 설정이 유지됩니다.



selinux가 활성화상태인지 확인한다. 활성화상태라면 비활성화하여야 한다.

```bash
vi /etc/selinux/config

SELINUX=disabled
```



## 자료 출처 :

https://simjaejin.tistory.com/13?category=668180