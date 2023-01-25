---
title: 'pdf 만들기'
---

# {{ $frontmatter.title }}


## 설명 :

최근에 데이터가 날라가는 일이 있어서 다시 포스트 글을 남겨본다.

 

준비물 : mpdf 8.0, 컴포저 

 

컴포저로 다운 받는다. (센토환경에서 설치 방법은 이전 포스트글에 있어서 참고하면된다.)

 

https://packagist.org/


최신버전으로 그대로 다운 받는다.

 
```bash
composer require mpdf/mpdf
```

 

이제는 권한 설정한다. (그대로 사용하면 에러생긴다.) 

```bash
sudo chmod -R 777 vendor/mpdf/mpdf/tmp
```

나는 그누보드 내부에서 사용 하는거니까 

index.php를 만들어서 인크루드를 미리 해놓았다.

```php
require_once __DIR__ . '/vendor/autoload.php';
```

이제 좀더 구체적으로 세팅 해야된다.

경로는 이러하다. /mpdf/mpdf/src/Config/ 까지 접근한다.

 

ConfigVariables.php
```
'useAdobeCJK' => true,
```

 


FontVariables.php
```
'fontdata' => [
  
... 밑으로 내려가서 마지막쯤에..
"nanumgothic" => [
                    'R' => "NanumGothic.ttf",
                    'B' => "NanumGothicBold.ttf",
                ],
  
  
  
'BMPonly' => [
                "nanumgothic",
  
  
  
'sans_fonts' => ['nanumgothic',
  
  
  
  
  
'serif_fonts' => ['nanumgothic',
 
```




 

위치는 그냥 놓고 싶은 위치에 놓으면 된다. 저 배열 마다 나눔고딕을 넣어주면된다.

그리고나서 실제로 나눔고딕 파일을 넣어줘야한다.

 

경로는 이러하다. /mpdf/mpdf/ttfonts/ 까지 접근한다.

 

[나눔 고딕 다운 받기](https://fontmeme.com/ktype/nanum-gothic-font/	) 


 

위에꺼 그대로 링크 이동해서 다운 받으면된다. 다른곳에는 에러가 나서.. (명칭이 좀 다르게 해놓으면 에러난다.)

압축을 풀면 전부다 넣어주면된다. 볼드체,익스트라,라이트 네개 전부다!!!

 

거의 다 됐다! 

사용법은 아래 처럼 하면 된다.

```php
include_once PDF_PLUGIN_PATH; << 이건 상수로 만들어놓은거다 알아서 응용한다.
  
$mpdf = new \Mpdf\Mpdf([
    'mode' => 'utf-8',
    'format' => 'A4',
    'margin_left' => 5,
    'margin_right' => 5,
    'margin_top' => 5,
    'margin_bottom' => 5,
    'margin_header' => 0,
    'margin_footer' => 0,
]);
$mpdf->SetTitle('타이틀');
$html = file_get_contents('경로/template.php');
$mpdf->AddPage();
$mpdf->WriteHTML($html);
  
  
$filename = "파일이름.pdf";
$mpdf->Output($filename);
```

위에꺼 처럼 사용하면된다 별거 없다

일단 설명 하자면 

new \Mpdf\Mpdf 생성자 옵션을 잘 해주면된다. 위에 있는거 대로 하면 된다.

 

$mpdf->WriteHTML($html);  WriteHTML 메서드로 템플릿을 임포트하는 부분이다.

 

 

$mpdf->Output($filename); 이게 중요한거다 그냥 디스플레이용으로 쓴다면 filename 을 빼면된다.

$mpdf->Output 이대로만 쓰면 되고 만약에 다운로드까지 쓴다면

 

$mpdf->Output($filename,'d'); 두번째 인자값에 D를 넣어주면 된다.

 

여기까지 사용법을 마치겠다.

 

## 맺음말 : 

 

참고 자료를 보면서 따라 했다. 여기서 좀더 구체적으로 풀이해서 설명하였다.

하지만 템플릿 같은건 직접 만들었는데 이건 php,mysql, html inline tag에 css 로 꾸민거다.

당연히 style 태그를 넣어도 된다. 근데 점점 길어지니까 인라인 태그로... 짧게 편집 하려고 애를 썼다.

견적서를 만들려고 시도를 했다가 사람이 할짓이 아니다.. 쪼금만 틀어져도 A4 사이즈에 넘쳐날수 있고 줄어들수있고.. 패딩 마진 으로 겨우야 맞췄는데 

테이블 태그로만 해서 겨우야 하나 만들었다~ 사이즈도 적당하고.. 쌩 노가다 해야된다.. 

 

그리고 마지막 할말은 자바스크립트로도 가능하다 자료가 다양한데~ 나는 게시판 글 읽기 페이지에서 pdf 를 뷰어가 나오면서 그대로 볼 수 있는 기능을 만들어야한다.

자스로 처리하면 그렇게 쌩 노가다하면서 할 필요도 없다 해당 영역을 이미지로 캡쳐해서 pdf로 다운 받는 로직이니까 금방 된다.

내껀 의뢰 때문에.. 어쩔수없이 해야된다..

