---
title: 'jquery validate plugin'
---

# {{ $frontmatter.title }}


제이쿼리 검증 플러그인 정규식 포함 


```js
$.validator.addMethod("koreanLetters", function(value, element){
   return this.optional(element) || value.match("/^[가-힣]+$/");
}, "한글로 입력 해주세요.");

$.validator.addMethod("pw_regexp",  function( value, element ) {
   return this.optional(element) || value.match("/^.*(?=.*\\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/");
},'영문 대 소문자, 숫자, 특수문자를 사용하세요.');


$.validator.addMethod("phone_regexp", function(phone_number, element) {
   phone_number = phone_number.replace(/\s+/g, "");
   return this.optional(element) || phone_number.length > 9 &&
       phone_number.match(/^(?:(010-\d{4})|(01[1|6|7|8|9]-\d{3,4}))-(\d{4})$/)
       || this.optional(element) || phone_number.length > 9 &&
       phone_number.match(/^\d{2,3}-\d{3,4}-\d{4}$/);
}, "정확한 형식을 입력하여 주세요.");


$.extend( $.validator.messages, { required: "필수 항목입니다.", remote: "항목을 수정하세요.", email: "유효하지 않은 E-Mail주소입니다.", url: "유효하지 않은 URL입니다.", date: "올바른 날짜를 입력하세요.", dateISO: "올바른 날짜(ISO)를 입력하세요.", number: "유효한 숫자가 아닙니다.", digits: "숫자만 입력 가능합니다.", creditcard: "신용카드 번호가 바르지 않습니다.", equalTo: "같은 값을 다시 입력하세요.", extension: "올바른 확장자가 아닙니다.", maxlength: $.validator.format( "{0}자를 넘을 수 없습니다. " ), minlength: $.validator.format( "{0}자 이상 입력하세요." ), rangelength: $.validator.format( "문자 길이가 {0} 에서 {1} 사이의 값을 입력하세요." ), range: $.validator.format( "{0} 에서 {1} 사이의 값을 입력하세요." ), max: $.validator.format( "{0} 이하의 값을 입력하세요." ), min: $.validator.format( "{0} 이상의 값을 입력하세요." ) } );

$.validator.setDefaults({
   highlight: function (element) {},
   errorElement: 'span',
   errorClass: 'error'
});

$("#fregisterform").validate({
   rules: {
       mb_id: {
           required : true
       },
       mb_name : {
           required: true,
           minlength: 2,
           koreanLetters:true
       },
       mb_email : {
           required: true,
           email : true
       },
       mb_password:{
           pw_regexp : true,
           minlength : 8,
           maxlength : 20
       },
       mb_password_re:{
           equalTo : '#mb_password',
           required: true,
       },
       mb_nick : {
           required: true,
           minlength : 2,
           maxlength : 12
       },
       mb_hp: {
           required : true,
           phone_regexp : true
       }
   },
   messages: {
       mb_id: "필수 입력 사항입니다.",
       mb_name : {
           required: "필수 입력 사항입니다.",
           minlength: "{0} 이내 입력하세요.",
       },
       mb_email : {
           required: "필수 입력 사항입니다.",
       },
       mb_password: {
           required: "필수 입력 사항입니다.",
           minlength : '{0}자 이내 입력하세요.',
           maxlength : '{0}자 이상 입력하세요.',
       },
       mb_password_re: {
           equalTo: "이전 비밀번호를 다시 입력하세요.",
       },
       mb_nick : {
           required: "필수 입력 사항입니다.",
           minlength: "{0}자 이내 입력하세요.",
           maxlength : '{0}자 이상 입력하세요.'
       },
       mb_hp: {
           required: "필수 입력 사항입니다."
       }
   },
   submitHandler: function(form) {
       form.submit();
   }
});

```



