---
title: 'centos7 locale 변경'
---

# {{ $frontmatter.title }}



1. Locale 확인

```bash
locale
```

2. Locale 변경
명령어로 Locale 변경

```bash
localectl set-locale LANG=ko_KR.utf8
```



vi /etc/locale.conf  직접 편집

```bash
LANG=ko_KR.utf8
```



혹시나 제대로 실행 안됐을경우?
서버를 재부팅 해야한다.



```bash
reboot
```





## 참고 문헌 :

https://cloud-information.tistory.com/3