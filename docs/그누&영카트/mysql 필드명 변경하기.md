---
title: 'mysql 필드명 변경하기'
---

# {{ $frontmatter.title }}


## 사용 방법 : 

```sql
ALTER TABLE `media_value_report` 
    CHANGE col1_old col1_new varchar(10),
    CHANGE col1_old col1_new varchar(10),
    ...
```

예시는 위 소스코드로 변경하면 된다.

 

아래는 직접 실행 했을때~

```php
if(sql_query(" select iq_hp,iq_email from {$g5['g5_shop_item_qa_table']} limit 1", false)) {
    sql_query(" ALTER TABLE `{$g5['g5_shop_item_qa_table']}` 
                        CHANGE `iq_hp` `is_hp` TINYINT(4) NOT NULL DEFAULT '0', 
                        CHANGE `iq_email` `is_email` TINYINT(4) NOT NULL DEFAULT '0'
                        ", true);
}​

```


## 참고자료:

https://stackoverflow.com/questions/10846499/alter-multiple-columns-in-a-single-statement