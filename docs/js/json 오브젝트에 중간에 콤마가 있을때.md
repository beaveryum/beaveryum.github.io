---
title: 'json 오브젝트에 중간에 콤마가 있을때..'
---

# {{ $frontmatter.title }}


에러 출력 하는걸 만드는데.. 

제이슨 오브젝트로 출력하는데 콤마가 있어서.. 

별것도 아닌데 엄청 삽질 했네..

 

하는 방법은..

```js
"message": {
    "reply_username": "이름을 입력해주세요.",
    "reply_msg": "내용을 입력해주세요."
},
```

대충 이런식으로 나온거를 에러로 뿌려줘야할 상황이 생긴다면.. 

```js
let newArr = Object.values(response.message).map(item => item+'
').join('');
$(this).find('#error_msg').html(newArr);
```



위에 처럼 하면 결과가 이렇게 나온다.

 
가나다 (엔터)

마바사아 



