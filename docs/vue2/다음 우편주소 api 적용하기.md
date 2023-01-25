---
title: '다음 우편주소 api 적용하기'
---

# {{ $frontmatter.title }}


## 설명 :

일단 사용법은 구글링을통해서 알아냈지만 혹시 몰라서 남긴다.

meta-tag 패키지가 있다는 가정하에 아래 소스를 참고한다.


```js
metaInfo: {
    script: [
         { src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js', async: true, defer: true }
    ],
},
```



```js
methods: {
    execDaumPostcode() {
        new window.daum.Postcode({
            oncomplete: (data) => {
                let fullRoadAddr = data.roadAddress; // 도로명 주소 변수
                let extraRoadAddr = ''; // 도로명 조합형 주소 변수
    
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraRoadAddr += data.bname;
                }
    
                if(data.buildingName !== '' && data.apartment === 'Y'){
                    extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                } // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
    
                if(extraRoadAddr !== ''){
                    extraRoadAddr = ' (' + extraRoadAddr + ')';
                } // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
    
                if(fullRoadAddr !== ''){
                    fullRoadAddr += extraRoadAddr;
                } // 우편번호와 주소 정보를 해당 필드에 넣는다.
    
                this.$refs.zip.value = data.zonecode; //5자리 새우편번호 사용
                this.$refs.address1.value = fullRoadAddr;
    
                this.form.zip = this.$refs.zip.value;
                this.form.address1 = this.$refs.address1.value;
            }
        }).open()
    },
}
```



여기서 중요한게 input에 refs="address1" 가 있어야된다.

그리고나서 따로 변수에다가 연결 시켜서 하면된다.

인풋은 3가지로 있다 우편번호, 상세주소, 나머지주소


```js
this.$refs.zip.value = data.zonecode; 
this.$refs.address1.value = fullRoadAddr;
 
this.form.zip = this.$refs.zip.value;
this.form.address1 = this.$refs.address1.value;
```

이게 핵심이다. 만약에 변수에다가 연결 안하면 인풋값들이 날라간다. 주의하길..








