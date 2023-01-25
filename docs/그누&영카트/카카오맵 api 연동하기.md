---
title: '카카오맵 api 연동하기'
---

# {{ $frontmatter.title }}


## 제작 방법 :


최근에 데이터가 날라가서 다시 포스팅 글 남겨본다.

 
카카오 맵 연동 하기 위해서 준비물을 소개한다.

 

## 준비물 :
 
::: info
카카오 REST API 키,카카오 JavaScript 키
:::
 

 

카카오 개발자에서 발급 받아야한다.

https://developers.kakao.com/
	

 

발급 받고 그누보드에 연동 하는건 알아서 한다.

 

여기 아래 소스코드로 맵을 만들면된다.

 
주소는 따로 우편번호, 기본주소, 상세 주소 이렇게 분리해서 디비에 저장하면된다.

아니면 기본 주소만 따로 디비에 저장 하는 방식으로.. 우편번호랑 뒷자리 주소는 빼고..

주소를 분리해서 디비 저장 하는 이유는 내가 경험해 본게 있는데 만약에 주소1|주소2 이렇게 붙어서 여분필드에 저장 했더니 불러들 일때 문제가 생긴다.

따로 중간 주소 빼고 다시 저장 해야하고 이래야 되서.. 불편하다 그냥 분리시켜서 저장하면된다.

(중간에 기본주소 빼고 저장하고 이런 방법을 알고 있으면 해도 된다. 말리진 않는다 방식을 알면 바로 써먹자~)

 

 

여기서 풀어드레스 변수는 기본 주소만 넣어주면 된다.

 

단, 버그가 있다~ 지도 검색이 안되면 맵이 흰색으로만 변한다. 

우리 집 주소가 그렇다.. 서울 주소가 흰색으로만 나온다.

 
```html
<div id="map_canvas"></div>
```

```php
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=<?=$config['cf_kakao_js_apikey']?>&libraries=services"></script>
  
var kakao_rest_api = "";
var full_addresss = "";
  
$.ajax({
    url: 'https://dapi.kakao.com/v2/local/search/address.json?query=' + encodeURIComponent(full_address),
    type: 'GET',
    headers: {'Authorization': "KakaoAK " + kakao_rest_api},
    success: function (data) {
        var inputData = [data.documents[0].address_name]
        var mapContainer = document.getElementById('map_canvas'),
            mapOption = {center: new kakao.maps.LatLng(data.documents[0].x, data.documents[0].y), level: 3};
        var map = new kakao.maps.Map(mapContainer, mapOption);
        var count = 0;
        var ps = new kakao.maps.services.Places();
        var bounds = new kakao.maps.LatLngBounds();
        if (inputData != null) {
            kewwordSearch(inputData[count]);
        }
  
        function kewwordSearch(keword) {
            ps.keywordSearch(keword, placesSearchCB);
            count = count + 1;
        }
  
        function placesSearchCB(data, status) {
            if (status === kakao.maps.services.Status.OK) {
                displayMarker(data[0]);
                bounds.extend(new kakao.maps.LatLng(data[0].y, data[0].x));
                setBounds();
            }
        }
  
        function displayMarker(place) {
            var marker = new kakao.maps.Marker({map: map, position: new kakao.maps.LatLng(place.y, place.x),});
            kakao.maps.event.addListener(marker, 'click', function () {
                var position = this.getPosition();
                var url = 'https://map.kakao.com/link/map/' + place.id;
                window.open(url, '_blank');
            });
        }
  
        function setBounds() {
            map.setBounds(bounds, 90, 30, 10, 30);
        }
    }, /*error : function(e){}*/
});
 
```


 

## 느낀점 :

지도 연동할때 위 와 같이 하는 방법이 대부분이다~ 일단 지도 하나에서 마커가 생기는데 업체 소개 할때 쓰이면 좋다

이제는 다양하게 마커 만드는 방법을 포스팅 남겨볼것이다. 사용법을 연구해서 많이 올려봐야징..



