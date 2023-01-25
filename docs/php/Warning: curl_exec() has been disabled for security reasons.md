---
title: 'Warning: curl_exec() has been disabled for security reasons'
---

# {{ $frontmatter.title }}


## 원인 : 

Warning: curl_exec() has been disabled for security reasons in
 
HP에서 cURL 및 curl_exec를 활성화하는 방법
 
자세히 알아보는방법은 아래 소스코드를 index.php에 넣어서 확인해보면 true로 나온다.

```
var_dump(extension_loaded("curl"));
```


## 해결 방법 : 

PHP 확장 "cURL"은 php.ini에서 (보통 기본적으로) 활성화되어 있습니다 

extension=php_curl.dll

그러나 php.ini ( "disable_functions"는 VirtualHost 또는 .htaccess 파일에서 설정할 수 없음) 와 같은 개별 기능 을 비활성화curl_exec() 할 수도 있습니다.

예를 들어, php.ini는 사용 disable_functions하지 못하도록 사용 중일 수 있습니다 curl_exec()-

disable_functions =  ...,curl_exec,...

이 경우 웹 사이트의 PHP 및 HTTP 오류 로그 파일에이 경고가 포함됩니다.

경고 : curl_exec ()가 보안상의 이유로 비활성화되었습니다.

"disable_functions"값을 편집하여 "curl_exec"를 제거하고 php.ini를 저장 한 다음 Apache를 다시 시작하십시오.
 
즉 php.ini 에서 disable_functions =  ...,curl_exec,… 찾아서 curl관련된 보안을 제거 하면됨 그리고 리스타트!!



구체적으로 다시 설명을 하자면 

disable_functions = exec, passthru, shell_exec, system, proc_open, curl_exec, curl_multi_exec, parse_ini_file, show_source

 

여기서 curl 관련된 단어 다 지워야한다.

안그럼 에러는 그대로 나오는걸로.. 



참고자료 :

[https://sir.kr/g5_tip/849](https://sir.kr/g5_tip/849)