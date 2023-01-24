# count(): Argument #1 ($value) must be of type Countable|array, string ...


## 원인 :

카운트 에러 날때 해결 방법 

php8 에서는 아래 방법을 써서 에러를 해결 하면된다.

```php
count((array)$test) 
혹은 
count([$test])
```

8이하 버전에서는 이렇게 예외처리를 통해서 처리 해야된다.

```php
$aa = is_array($aa) ? count($aa) : 0 ;
```


## 참고 자료 :

https://stackoverflow.com/questions/66671269/fatal-error-uncaught-typeerror-count-argument-1-var-must-be-of-type-cou