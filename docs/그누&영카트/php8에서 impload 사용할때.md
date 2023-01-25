---
title: 'php8 에서 impload 사용할때 문제'
---

# {{ $frontmatter.title }}

impload 함수를 사용할 때 주의 해야 되는것은 배열 형태인지 확인 해야된다.

만약에 인풋에 배열 네임으로 적용해서 써야된다면  
```html
<input name="test[]" />
```
이렇게 해야된다.


그리고 백단으로 넘길때는 

update 나 insert 쿼리 문 써서 넘길적에 아래 처럼 하면된다.
 
```php
$wr_1 = isset($_REQUEST['wr_1']) && is_array($_REQUEST['wr_1']) ? $_REQUEST['wr_1'] : [];
$wr_1 = implode('|', $wr_1);

$sql = " update {$write_table}
set   wr_1 = '{$wr_1}'
where wr_id = '{$wr_id}' ";
sql_query($sql);
```

위 소스코드를 설명하자면 in_array나 isset으로 설정된 변수인지 검사 해야된다. 

어쨌든 php8이 제일 까탈스러워서.. 위 방법을 해야된다.

 
불러올때는 아래 처럼 하면된다.

```php
<?php $array = explode('|', $write['wr_1']); ?>
<input type="checkbox" name="wr_1[]" value="신규" <?php if(in_array('신규', $array)) echo 'checked'; ?>>
 ```
 
이러면 문제 없이 작동 될 것이다. 

