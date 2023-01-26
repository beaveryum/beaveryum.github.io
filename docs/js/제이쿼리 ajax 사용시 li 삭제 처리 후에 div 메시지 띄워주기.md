---
title: '제이쿼리 ajax 사용시 li 삭제 처리 후에 div 메시지 띄워주기'
---

# {{ $frontmatter.title }}



제이쿼리 에이젝스로 내부에서 

ul li 리스트가 삭제 후에 메시지 처리 하는 방법

여기 예시를 보면 밑에 이런 코드가 있을것이다.

```js
if($('.sch_item_list').is(":empty")) {
```



처음에는 이거랑 다르게 이렇게 했더니

```js
if($('.sch_item_list li').length == 0)) {
```

도저히 안먹히고.. 콘솔로 찍어서 보니까 0 아니면 1 이상한 숫자만 나온다.

제대로 안먹혀서.. 하는수 없이 empty 셀렉터가 있다고해서 구글링으로 참고해서 했더니 잘 된다!

이유는 잘 모르겠으나 제이쿼리에선 좀 버그 같이 저렇게 안될수있어서.. vuejs에서는 다른방법이 있는데.. 

 
```js
// 한줄 낱개로 삭제
$(document).on('click','.sch_content_del',function () {
    let element = $(this);
    let name = element.closest('.item').find('.keyword').children().data('name');

    $.ajax({
        url:주소,
        type:'post',
        dataType:'json',
        context:this,
        cache: false,
        async: true,
        success:function(data){
            element.closest('.item').remove();
            
            if($('.sch_item_list').is(":empty")) {
                .....
            }
        }
    });
});

```



## 맺은말 : 

이 방법도 도저히 안 먹힐 때가 있다.. 이럴땐 고유아이디를 이용해서 #test_1 이렇게 셀렉트를 잡아서 해야 된다.

별거 아닌데 이런 짜잘 한것때문에 하루 이틀 시간만 날라가 버린다.

특히나 제이쿼리 비동기로 써서 하면 조건이 Success 일때 한줄이 없어지고 내용이 없습니다 가 생성 되야하는데

몇번이나 해도 안먹힌다.. 고유아이디만 이용해서 paseint(data.id) == 0 조건문 주고 이러면 이게 먹힐때도 있다.

다양한 방법으로 연구를 해보자..