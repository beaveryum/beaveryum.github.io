import{_ as e,c as s,o as a,d as n}from"./app.bb490b37.js";const b=JSON.parse('{"title":"Warning: curl_exec() has been disabled for security reasons","description":"","frontmatter":{},"headers":[{"level":2,"title":"원인 :","slug":"원인","link":"#원인","children":[]},{"level":2,"title":"해결 방법 :","slug":"해결-방법","link":"#해결-방법","children":[]}],"relativePath":"php/에러들/Warning: curl_exec() has been disabled for security reasons.md","lastUpdated":1674544713000}'),r={name:"php/에러들/Warning: curl_exec() has been disabled for security reasons.md"},c=n(`<h1 id="warning-curl-exec-has-been-disabled-for-security-reasons" tabindex="-1">Warning: curl_exec() has been disabled for security reasons <a class="header-anchor" href="#warning-curl-exec-has-been-disabled-for-security-reasons" aria-hidden="true">#</a></h1><h2 id="원인" tabindex="-1">원인 : <a class="header-anchor" href="#원인" aria-hidden="true">#</a></h2><p>Warning: curl_exec() has been disabled for security reasons in</p><p>HP에서 cURL 및 curl_exec를 활성화하는 방법</p><p>자세히 알아보는방법은 아래 소스코드를 index.php에 넣어서 확인해보면 true로 나온다.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">extension_loaded</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">curl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">));</span></span>
<span class="line"></span></code></pre></div><h2 id="해결-방법" tabindex="-1">해결 방법 : <a class="header-anchor" href="#해결-방법" aria-hidden="true">#</a></h2><p>PHP 확장 &quot;cURL&quot;은 php.ini에서 (보통 기본적으로) 활성화되어 있습니다</p><p>extension=php_curl.dll</p><p>그러나 php.ini ( &quot;disable_functions&quot;는 VirtualHost 또는 .htaccess 파일에서 설정할 수 없음) 와 같은 개별 기능 을 비활성화curl_exec() 할 수도 있습니다.</p><p>예를 들어, php.ini는 사용 disable_functions하지 못하도록 사용 중일 수 있습니다 curl_exec()-</p><p>disable_functions = ...,curl_exec,...</p><p>이 경우 웹 사이트의 PHP 및 HTTP 오류 로그 파일에이 경고가 포함됩니다.</p><p>경고 : curl_exec ()가 보안상의 이유로 비활성화되었습니다.</p><p>&quot;disable_functions&quot;값을 편집하여 &quot;curl_exec&quot;를 제거하고 php.ini를 저장 한 다음 Apache를 다시 시작하십시오.</p><p>즉 php.ini 에서 disable_functions = ...,curl_exec,… 찾아서 curl관련된 보안을 제거 하면됨 그리고 리스타트!!</p><p>구체적으로 다시 설명을 하자면</p><p>disable_functions = exec, passthru, shell_exec, system, proc_open, curl_exec, curl_multi_exec, parse_ini_file, show_source</p><p>여기서 curl 관련된 단어 다 지워야한다.</p><p>안그럼 에러는 그대로 나오는걸로..</p><p>참고자료 :</p><p><a href="https://sir.kr/g5_tip/849" target="_blank" rel="noreferrer">https://sir.kr/g5_tip/849</a></p>`,22),p=[c];function t(i,l,o,_,d,u){return a(),s("div",null,p)}const x=e(r,[["render",t]]);export{b as __pageData,x as default};
