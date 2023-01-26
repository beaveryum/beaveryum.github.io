---
title: '그누에 ajax 사용할때 주의사항'
---

# {{ $frontmatter.title }}


## 설명 :


일단 그누에다가 ajax를 사용할때 csrf 보안 함수 와 같이 적용하는 방법에 대해서 설명하겠다.

요새 보안 이슈가 있다보니 그누에서도 적용 해야된다. 필수적으로 해놓아야한다.

 

 

스크립트 적용법 

어드민에서 사용되는 방법인데 어디든 응용해서 사용하면된다.

프론트쪽에 사용하려면 /js/common.js 확인하면 마지막 쯤에 있다. 그걸로 응용하면된다.

```js
var token = get_ajax_token();
if(!token) {
    alert("토큰 정보가 올바르지 않습니다.");
    return false;
}

if(typeof $(this).token === "undefined")
    $(this).prepend('<input type="hidden" name="token" value="">');

$(this).find("input[name=token]").val(token);

$.ajax({
    type:'post',
    url:'./test.php',
    data:{act_button:'삭제',token:$(this).find("input[name=token]").val(),ep_no:lastItemNo},
    dataType:'json',
    success:function () {},
    error:function (error) {
        console.log(error);
    }
});
```

어드민 컨펌 쪽에서 사용되는 함수들 

```php
include_once('./_common.php');
 
check_demo();
 
check_admin_token();
```

이렇게 두개정도가 필수이다.

일치하지 않으면 에러 난다.










