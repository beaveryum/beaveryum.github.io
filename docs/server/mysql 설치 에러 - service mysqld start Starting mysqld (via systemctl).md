---
title: 'mysql 설치 에러 - service mysqld start Starting mysqld (via systemctl)'
---

# {{ $frontmatter.title }}


## 원인 :

:::info
service mysqld start Starting mysqld (via systemctl): Job for mysqld.service failed because the control process exited with error code. See "systemctl status mysqld.service" and "journalctl -xe" for details.
:::

centos7 환경에서 서버를 재 시작 후 mysql을 실행 하려고 명령어를 치면 에러날 상황이 있습니다.



journalctl -xe 입력 후에 확인한다.




## 해결 방법  :

치료법은 아래 방법 처럼 일단 해보자!

```bash
mkdir -p /var/run/mysqld/

chown mysql.mysql /var/run/mysqld/

systemctl start mysqld
```

이렇게 하면 실행이 됩니다.



mysql의 소유주가 변경되서 그렇다.





## 맺음말 :

상황에 따라서 응용을 하면 된다. 꼭 처방 전을 따라 한다고 해서 해결 된다는 보장이 없다.

하지만 이와 같은 증상 처방전에 대해서 포스팅 글 남길 거 라서 비슷한 증상이 있으면 바로 바로 포스팅 할 것 이다.