---
title: '그누보드 게시판 이미지 출력에서 base64 로 인코딩이 제대로 출력 되지 않는 경우'
---

# {{ $frontmatter.title }}


## 원인 :
 
그누보드로 블로그 제작 중인데 이미지가 올려도 빈화면만 나와서 무슨 문제 있는가 하고 체크 해봤는데

이미지는 디비에 등록이 되는데 글 읽기 페이지 에선 나타나지 않아서 분석 해보았다

 

## 해결 방법 :

냑에서 자료를 찾아본 결과 질문 답변에 어떤 분이 질문 올리고 자문 자답 한 글을 봤다 

거기서 힌트를 찾을 수 있었다.

우선 /bbs/view.php 로 접근한다.거기서 120 라인에보면 소스가 보인다.

 
```php
$view['content'] = conv_content($view['wr_content'], $html);
```



여기보면 conv_content 로 접근하면 된다.

아래 소스 를 보고 해결 하면된다.

```php
// common.lib.php
// 580라인 
function html_purifier($html)
{
    $f = file(G5_PLUGIN_PATH.'/htmlpurifier/safeiframe.txt');
    $domains = array();
    foreach($f as $domain){
        // 첫행이 # 이면 주석 처리
        if (!preg_match("/^#/", $domain)) {
            $domain = trim($domain);
            if ($domain)
                array_push($domains, $domain);
        }
    }
    // 내 도메인도 추가
    array_push($domains, $_SERVER['HTTP_HOST'].'/');
    $safeiframe = implode('|', $domains);
  
    include_once(G5_PLUGIN_PATH.'/htmlpurifier/HTMLPurifier.standalone.php');
    include_once(G5_PLUGIN_PATH.'/htmlpurifier/extend.video.php');
    $config = HTMLPurifier_Config::createDefault();
    // data/cache 디렉토리에 CSS, HTML, URI 디렉토리 등을 만든다.
    $config->set('Cache.SerializerPath', G5_DATA_PATH.'/cache');
    $config->set('HTML.SafeEmbed', false);
    $config->set('HTML.SafeObject', false);
    $config->set('Output.FlashCompat', false);
    $config->set('HTML.SafeIframe', true);
    if( (function_exists('check_html_link_nofollow') && check_html_link_nofollow('html_purifier')) ){
        $config->set('HTML.Nofollow', true);    // rel=nofollow 으로 스팸유입을 줄임
    }
    $config->set('URI.SafeIframeRegexp','%^(https?:)?//('.$safeiframe.')%');
    $config->set('Attr.AllowedFrameTargets', array('_blank'));
    $config->set('URI.AllowedSchemes', array('http' => true, 'https' => true, 'data' => true));
    //유튜브, 비메오 전체화면 가능하게 하기
    $config->set('Filter.Custom', array(new HTMLPurifier_Filter_Iframevideo()));
    $purifier = new HTMLPurifier($config);
    return run_replace('html_purifier_result', $purifier->purify($html), $purifier, $html);
}
```



위에 소스 추가 된게 무엇인가 하면
  
```php
$config->set('Attr.AllowedFrameTargets', array('_blank'));  여기 라인 아랫줄에 추가 하면된다.
```

```php
$config->set('Attr.AllowedFrameTargets', array('_blank'));
$config->set('URI.AllowedSchemes', array('http' => true, 'https' => true, 'data' => true)); #추가
```

