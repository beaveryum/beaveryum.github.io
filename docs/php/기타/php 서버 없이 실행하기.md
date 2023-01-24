# php 서버 없이 실행하기


일단 파일 구조가 

public/index.php 로 있어야된다.

없으면 퍼블릭 내부에 인덱스 파일 만든다.





파일을 만든다

파일명 : run.sh

아래 소스코드 추가한다.

```php
#!/usr/bin/env bash
php -S localhost:8000 -t public
```

이러고 명령어 한줄 치면 된다.

```base
./run.sh

혹은 

sh run.sh
```


