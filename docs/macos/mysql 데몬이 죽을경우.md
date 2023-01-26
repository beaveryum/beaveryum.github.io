---
title: 'mysql 데몬이 죽을경우..'
---

# {{ $frontmatter.title }}


## 원인 :

ERROR! The server quit without updating PID file 갑자기 mysql 데몬이 죽어 있을경우



MacBookPro:~ root# mysql.server start Starting MySQL . ERROR! The server quit without updating PID file (/usr/local/var/mysql/bibeoyum-ui-MacBookPro.local.pid). MacBookPro:~ root# mysql.server restart ERROR! MySQL server PID file could not be found! Starting MySQL



이렇게 데몬이 죽어 있다면 아래꺼 참고한다.






## 해결방법 :


첫번째 방법

```bash
sudo chown -R mysql:mysql /usr/local/var/mysql
```

두번째 방법

```bash
sudo chmod -R 777 /usr/local/var/mysql
```

이렇게 둘중에 하나 권한을 주면 정상적으로 실행된다.




## 참고 자료 :


https://rayner.tistory.com/2