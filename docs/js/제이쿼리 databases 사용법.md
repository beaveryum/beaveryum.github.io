---
title: '제이쿼리 databases 사용법'
---

# {{ $frontmatter.title }}


## 설명 :

여기꺼 소스 참고하면 됨

설명하자면 post keyword만 나옴 


```js
$(document).ready(function () {
    $('#tablelist').DataTable({
        'processing': true,
        'serverSide': false,
        'ajax': {
            "type" : "POST",
            'url':admin_url + '/addon/fetch_data',
            "dataType": "JSON",
            'data': function(data){
                data.csrf_token_name = $("meta[name=X-CSRF-TOKEN]").attr('content');
                data.keyword = $('#search').val();
            },
            // columns: [
            //     { data: "sortOrdr" },
            //     { data: "nttSj" },
            //     { data: "ntcrNm" },
            //     { data: "frstRegisterPnttm" },
            //     { data: "inqireCo" }
            // ]
        },
        'order': [],
        "paging": true,
        "lengthChange": false,
        "searching": false,
        "ordering": true,
        "info": true,
        "autoWidth": false,
        "language": {
            "zeroRecords" : "검색된 정보가 없습니다.",
            "emptyTable":     "데이터가 없습니다.",
            "info":           "현재 데이터 : 처음 _START_  ~ _END_ 전체 _TOTAL_ 수",
            "infoEmpty":      "전체수 : 0",
            "search": "검색",
            "paginate": {
                "previous": "이전",
                "next" : "다음"
            }
        }
    });
});

function enter(e){
    if (e.keyCode == 13) {
        fn_search();
    }
}


function fn_search(){
    $("#tablelist").DataTable().ajax.reload();
}

```



## 참고 자료 : 


https://blog.naver.com/eyenein12/220323961369
