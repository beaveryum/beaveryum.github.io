---
title: '제이쿼리 ajax 사용시 li 삭제하기'
---

# {{ $frontmatter.title }}


## 원인 :

에이젝스 사용 할때 li를 삭제 하는데 여기서 fadeout 이벤트를 적용해서 삭제 처리가 안된다.

 

 

## 해결 방법 :

여기서 fadeout 이벤트를 쓰면 자동으로 display none 처리가 된다. 그래서 삭제는 안되고 상품이 없습니다 메시지가 안뜨는것이다.


```js
$(document).on("click", ".del_item", function() {
    var element = $(this);
    var re_id = $(this).closest('li').find('.re_id').val();
    var p_id = $(this).closest('li').find('.re_id').data('p_id');
    var del_id = element.closest('li').attr('id').replace(/[^0-9]/g, '');

    $.ajax({
        type:'post',
        url : 주소,
        data:{w:'d',it_id:re_id,p_id:p_id},
        context: this,
        dataType:'json',
        success:function (data) {
            $('#reg_ele'+del_id).remove();

            if($('#reg_relation li').length == 0) {
                $('#reg_relation').children('ul').remove();
                $("#reg_relation").html("<p>선택된 상품이 없습니다.</p>");
            }

        }
    });
});
```

위에 처럼 사용하면된다.


여기서 다른 방법 으로는 아래 소스코드 참고하면 된다.


```js
$(document).on("click", ".del_item", function() {
    var element = $(this);
    var re_id = element.closest('li').find('.re_id').val();
    var p_id = element.closest('li').find('.re_id').data('p_id');

    $.ajax({
        type:'post',
        url : 주소,
        data:{w:'d',it_id:re_id,p_id:p_id},
        context: this,
        dataType:'json',
        success:function (data) {
            element.closest('li').remove();
            if($('#reg_relation li').length == 0) {
               .....
            }
        }
    });
});

```



## 맺은말 :

꼭 이 방법이 올바른 방법 이라고 할 수 없다 그냥 응용 해서 써야 된다.. 

안되면 고유아이디로 이용해서 쓰는게 좋다.



