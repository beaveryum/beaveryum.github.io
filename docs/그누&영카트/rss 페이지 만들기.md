---
title: 'rss 페이지 만들기'
---

# {{ $frontmatter.title }}




## 설명 :


최근에 데이터가 날라가서 다시 포스팅 글 남겨본다.  

그누보드에 보면 rss 페이지가 게시판에 있긴하다.. 근데 게시판에서만 동작 하니까~ 다시 만들어줘야한다.

이건 게시판 뿐만 아니라 모든 페이지에서 활성화 될 수 있는 페이지다(?)


 

아래 소스코드를 보면서 설명한다.

여기서 보면 쿼리가 이런게 있다.

```sql
wr_is_comment = 0 and wr_option not like '%secret%'
```


옵션이 시크릿은 제외 시킨다는 뜻이다

그리고 bo_read_level 은 읽기 권한 옵션인데 1이상이면 낮은거니까 낮은순서로 오픈해서 보여준다는뜻이다.

 

밑에 보면 컨텐츠 테이블도 보인다 거기는 내가 일부러 만들어서 넣었다~ 

아무튼 이부분 그대로 쓰면 된다.


```php
<?php
include_once "./_common.php";
  
header("Content-type: text/xml;charset=utf-8");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
  
$limit = 100;
  
$Search = " where (1) ";
$Search .= " and wr_is_comment = 0 and wr_option not like '%secret%'";
$SelectBoard = " select bo_table,bo_subject from ".$g5['board_table']." where bo_read_level = 1 ";
$QueryBoard = sql_query($SelectBoard);
  
while($RowBoard = sql_fetch_array($QueryBoard)){
    $ResultSelect[] = "( select wr_id,wr_subject,wr_content,wr_datetime,wr_name, '".$RowBoard['bo_table']."' as bo_table from ".$g5['write_prefix'].$RowBoard['bo_table'].$Search." )"; }
$ResultQuery = implode(" union all ", $ResultSelect);
  
  
$ResultQuery .= " order by wr_datetime desc limit 0 , $limit ";
$Query = sql_query($ResultQuery);
  
$data = [];
while($row = sql_fetch_array($Query)){
    $content = strip_tags($row['wr_content']);
    $content = str_replace("&nbsp;"," ",$content);
    $data[] = $row;
}
  
// 허용된 co_id
$allowed = ["about"];
$co_id = implode("','", $allowed);
$contentQuery = " select co_id,co_subject,co_content from ".$g5['content_table']." where co_id in('".$co_id."') order by co_id desc ";
$contentRR = sql_query($contentQuery);
$content_arr = [];
for ($i=0;$cnrow = sql_fetch_array($contentRR);$i++) {
    $content_arr[$i]['co_id'] = $cnrow['co_id'];
    $content_arr[$i]['co_subject'] = $cnrow['co_subject'];
    $content_arr[$i]['co_content'] = $cnrow['co_content'];
    $content_arr[$i]['co_name'] = '비버';
    $content_arr[$i]['co_datetime'] = G5_TIME_YMDHIS;
}
  
$buff = '';
$buff .= "<?xml version=\"1.0\" encoding=\"UTF-8\"?>".PHP_EOL;
$buff .= '<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">'.PHP_EOL;
$buff .= '<channel>'.PHP_EOL;
$buff .= '<title>'.specialchars_replace($config['cf_title']).'</title>'.PHP_EOL;
$buff .= '<link>'.G5_URL.'</link>'.PHP_EOL;
$buff .= '<description><![CDATA['.$config['cf_1'].']]></description>'.PHP_EOL;
$buff .= '<language>ko</language>'.PHP_EOL;
  
// 내용관리 데이터 출력
foreach ($content_arr as $item) {
    $buff .= "<item>".PHP_EOL;
    $buff .= "<category><![CDATA[".$item['co_id']."]]></category>".PHP_EOL;
    $buff .= "<title><![CDATA[".$item['co_subject']."]]></title>".PHP_EOL;
    $buff .= "<link>".specialchars_replace(get_pretty_url('content',$item['co_id']))."</link>".PHP_EOL;
    $buff .= "<description><![CDATA[".$file.conv_content($item['co_content'], $html)."]]></description>".PHP_EOL;
    //$buff .= "<description><![CDATA[".mb_strimwidth($item['co_content'],0,400,'..','utf-8')."]]></description>".PHP_EOL;
   // $buff .= "<dc:creator>".specialchars_replace($item['co_name'])."</dc:creator>".PHP_EOL;
    $buff .= "<pubDate>".date("r", strtotime($item['co_datetime']))."</pubDate>".PHP_EOL;
    $buff .= "</item>".PHP_EOL;
}
  
// 게시판 데이터 출력
foreach ($data as $item) {
    $buff .= "<item>".PHP_EOL;
    $buff .= "<category><![CDATA[".$item['bo_table']."]]></category>".PHP_EOL;
    $buff .= "<title><![CDATA[".$item['bo_table']." - ".$item['wr_subject']."]]></title>".PHP_EOL;
    $buff .= "<link>".get_pretty_url($item['bo_table'],$item['wr_id'])."</link>".PHP_EOL;
    //$buff .= "<description><![CDATA[".mb_strimwidth($item['wr_content'],0,400,'..','utf-8')."]]></description>".PHP_EOL;
    $buff .= "<description><![CDATA[".$file.conv_content($item['wr_content'], $html)."]]></description>".PHP_EOL;
   // $buff .= "<dc:creator>".specialchars_replace($item['wr_name'])."</dc:creator>".PHP_EOL;
    $buff .= "<pubDate>".date("r", strtotime($item['wr_datetime']))."</pubDate>".PHP_EOL;
    $buff .= "</item>".PHP_EOL;
}
  
$buff .= "</channel>".PHP_EOL;
$buff .= "</rss>";
  
echo $buff;
```

금방 쉽게 만든 소스코드이다 바로 이대로 쓰면된다.

 

 

## 맺음말 :

만약에 다시 만들고 싶다면 티스토리에보면 rss 형식이 있다 네이버도 있어서 네이버 형식도 참고해본다.

이대로 쓰면 아무런 문제 없다.