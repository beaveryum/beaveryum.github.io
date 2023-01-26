---
title: 'centos7 tmp 임시파일 문제'
---

# {{ $frontmatter.title }}



Linux 또는 Unix 계열 시스템에서 문제를 어떻게 해결합니까?
 
이 오류는 MySQL 서버가 / tmp 디렉토리에 액세스하여 임시 파일을 작성하고 작성할 수 없음을 의미합니다. 

루트 사용자가 / tmp 디렉토리를 소유하고 / tmp 디렉토리에 고정 비트가 설정되어 있는지 확인하면된다.

루트 사용자로 로그인하고 다음을 입력해야 한다.


```bash
chown root:root /tmp
  
chmod 1777 /tmp
  
/etc/init.d/mysqld start
```





