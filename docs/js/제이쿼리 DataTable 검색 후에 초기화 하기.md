---
title: '제이쿼리 DataTable 검색 후에 초기화 하기'
---

# {{ $frontmatter.title }}


우선 검색 창 하날 만든다.

그러고 버튼 두개를 추가 한다. 하나는 검색 하기 또 하나는 초기화 버튼 만들어준다.
​
그러고 아래 소스 를 넣어서 사용하면 된다.
 
```js
var config1 = {
  
"ajax": {
  
"url": '주소',
  
"type": 'POST'
  
},
  
"bDestroy": true,
  
"searching": false,
  
"lengthChange": false,
  
"paging": true,
  
"processing": false,
  
"serverSide": true,
  
'serverMethod': 'post',
  
'columns': [
  
{ 'data': 'ip_address' },
  
{ 'data': 'path' },
  
{ 'data': 'browser' },
  
{ 'data': 'os' },
  
{ 'data': 'device' },
  
{ 'data': 'created_at' }
  
],
  
"columnDefs": [
  
{"className": "dt-center", "targets": "_all"}
  
],
  
"language": {
  
"zeroRecords" : "검색된 정보가 없습니다.",
  
"emptyTable": "데이터가 없습니다.",
  
"info": "현재 데이터 : 처음 _START_ ~ _END_ 전체 _TOTAL_ 수",
  
"infoEmpty": "전체수 : 0",
  
"search": "검색",
  
"paginate": {
  
"previous": "이전",
  
"next" : "다음"
  
}
  
}
  
};
  
​
  
var config2 = {
  
"ajax": {
  
"url": '주소',
  
"type": 'POST',
  
"data" : function(data) {
  
data.from = $("#from").val();
  
data.to = $("#to").val();
  
}
  
},
  
"destroy": true,
  
"searching": false,
  
"lengthChange": false,
  
"paging": true,
  
"processing": false,
  
"serverSide": true,
  
'serverMethod': 'post',
  
'columns': [
  
{ 'data': 'ip_address' },
  
{ 'data': 'path' },
  
{ 'data': 'browser' },
  
{ 'data': 'os' },
  
{ 'data': 'device' },
  
{ 'data': 'created_at' }
  
],
  
"columnDefs": [
  
{"className": "dt-center", "targets": "_all"}
  
],
  
"language": {
  
"zeroRecords" : "검색된 정보가 없습니다.",
  
"emptyTable": "데이터가 없습니다.",
  
"info": "현재 데이터 : 처음 _START_ ~ _END_ 전체 _TOTAL_ 수",
  
"infoEmpty": "전체수 : 0",
  
"search": "검색",
  
"paginate": {
  
"previous": "이전",
  
"next" : "다음"
  
}
  
}
  
};
  
  
​
  
$('#tablelist').DataTable(config1);
  
  
$('#cancel').click(function(){
  
$('#tablelist').DataTable(config1);
  
});
  
​
  
$('#search').click(function(){
  
$('#tablelist').DataTable(config2);
  
});​

```