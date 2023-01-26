---
title: '영카트 주소 ca_id 정규식'
---

# {{ $frontmatter.title }}


주소에 보면 /shop/list.php?ca_id=12313

이런식으로 되어 있는거 ca_id만 빼오는 정규식이다. 


```php
preg_replace( "/\/shop\/list.php([?])ca_id=/",'',$row['me_link']);
```
