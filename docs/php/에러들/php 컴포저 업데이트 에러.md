# php 컴포저 업데이트 에러


컴포저 패키지 업데이트 할때 메모리 에러 뜬다면

아래 명령어로 하면 된다. 

```php
COMPOSER_MEMORY_LIMIT=-1 composer update
```



## 참고 자료 : 

https://stackoverflow.com/questions/36107400/composer-update-memory-limit