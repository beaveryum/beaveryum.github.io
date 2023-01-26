---
title: "phpmyadmin 유효하지 못한 디폴트 값을 사용하셨습니다."
---

# {{ $frontmatter.title }}


phpmysqladmin에서는 좀 약간 바꿔서 입력해야된다.

위에 메시지가 뜰경우 아래 처럼 명령어 몇줄 더 추가하면된다.

```
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

ALTER TABLE `테이블명`
CHANGE `date` `datetime`
DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00'
```