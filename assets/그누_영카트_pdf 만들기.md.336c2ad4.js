import{_ as n,c as p,a as s,b as l,t as o,d as e,o as t}from"./app.0c53f998.js";const h=JSON.parse('{"title":"pdf 만들기","description":"","frontmatter":{"title":"pdf 만들기"},"headers":[{"level":2,"title":"설명 :","slug":"설명","link":"#설명","children":[]},{"level":2,"title":"맺음말 :","slug":"맺음말","link":"#맺음말","children":[]}],"relativePath":"그누&영카트/pdf 만들기.md","lastUpdated":1674640550000}'),c={name:"그누&영카트/pdf 만들기.md"},D={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=e(`<h2 id="설명" tabindex="-1">설명 : <a class="header-anchor" href="#설명" aria-hidden="true">#</a></h2><p>최근에 데이터가 날라가는 일이 있어서 다시 포스트 글을 남겨본다.</p><p>준비물 : mpdf 8.0, 컴포저</p><p>컴포저로 다운 받는다. (센토환경에서 설치 방법은 이전 포스트글에 있어서 참고하면된다.)</p><p><a href="https://packagist.org/" target="_blank" rel="noreferrer">https://packagist.org/</a></p><p>최신버전으로 그대로 다운 받는다.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mpdf/mpdf</span></span>
<span class="line"></span></code></pre></div><p>이제는 권한 설정한다. (그대로 사용하면 에러생긴다.)</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">777</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vendor/mpdf/mpdf/tmp</span></span>
<span class="line"></span></code></pre></div><p>나는 그누보드 내부에서 사용 하는거니까</p><p>index.php를 만들어서 인크루드를 미리 해놓았다.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">require_once</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">__DIR__</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/vendor/autoload.php</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>이제 좀더 구체적으로 세팅 해야된다.</p><p>경로는 이러하다. /mpdf/mpdf/src/Config/ 까지 접근한다.</p><p>ConfigVariables.php</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">useAdobeCJK</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span></span>
<span class="line"></span></code></pre></div><p>FontVariables.php</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fontdata</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">...</span><span style="color:#A6ACCD;"> 밑으로 내려가서 마지막쯤에</span><span style="color:#89DDFF;">..</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nanumgothic</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">R</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NanumGothic.ttf</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">B</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NanumGothicBold.ttf</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">BMPonly</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nanumgothic</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sans_fonts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nanumgothic</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">serif_fonts</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">nanumgothic</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><p>위치는 그냥 놓고 싶은 위치에 놓으면 된다. 저 배열 마다 나눔고딕을 넣어주면된다.</p><p>그리고나서 실제로 나눔고딕 파일을 넣어줘야한다.</p><p>경로는 이러하다. /mpdf/mpdf/ttfonts/ 까지 접근한다.</p><p><a href="https://fontmeme.com/ktype/nanum-gothic-font/" target="_blank" rel="noreferrer">나눔 고딕 다운 받기</a></p><p>위에꺼 그대로 링크 이동해서 다운 받으면된다. 다른곳에는 에러가 나서.. (명칭이 좀 다르게 해놓으면 에러난다.)</p><p>압축을 풀면 전부다 넣어주면된다. 볼드체,익스트라,라이트 네개 전부다!!!</p><p>거의 다 됐다!</p><p>사용법은 아래 처럼 하면 된다.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">include_once</span><span style="color:#A6ACCD;"> PDF_PLUGIN_PATH</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;&lt;</span><span style="color:#A6ACCD;"> 이건 상수로 만들어놓은거다 알아서 응용한다</span><span style="color:#89DDFF;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">mpdf </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Mpdf</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Mpdf</span><span style="color:#89DDFF;">([</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mode</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">format</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">A4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">margin_left</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">margin_right</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">margin_top</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">margin_bottom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">margin_header</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">margin_footer</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">]);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">mpdf</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">SetTitle</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">타이틀</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">html </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">file_get_contents</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">경로/template.php</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">mpdf</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">AddPage</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">mpdf</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">WriteHTML</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">filename </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">파일이름.pdf</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">mpdf</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">Output</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">filename</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><p>위에꺼 처럼 사용하면된다 별거 없다</p><p>일단 설명 하자면</p><p>new \\Mpdf\\Mpdf 생성자 옵션을 잘 해주면된다. 위에 있는거 대로 하면 된다.</p><p>$mpdf-&gt;WriteHTML($html); WriteHTML 메서드로 템플릿을 임포트하는 부분이다.</p><p>$mpdf-&gt;Output($filename); 이게 중요한거다 그냥 디스플레이용으로 쓴다면 filename 을 빼면된다.</p><p>$mpdf-&gt;Output 이대로만 쓰면 되고 만약에 다운로드까지 쓴다면</p><p>$mpdf-&gt;Output($filename,&#39;d&#39;); 두번째 인자값에 D를 넣어주면 된다.</p><p>여기까지 사용법을 마치겠다.</p><h2 id="맺음말" tabindex="-1">맺음말 : <a class="header-anchor" href="#맺음말" aria-hidden="true">#</a></h2><p>참고 자료를 보면서 따라 했다. 여기서 좀더 구체적으로 풀이해서 설명하였다.</p><p>하지만 템플릿 같은건 직접 만들었는데 이건 php,mysql, html inline tag에 css 로 꾸민거다.</p><p>당연히 style 태그를 넣어도 된다. 근데 점점 길어지니까 인라인 태그로... 짧게 편집 하려고 애를 썼다.</p><p>견적서를 만들려고 시도를 했다가 사람이 할짓이 아니다.. 쪼금만 틀어져도 A4 사이즈에 넘쳐날수 있고 줄어들수있고.. 패딩 마진 으로 겨우야 맞췄는데</p><p>테이블 태그로만 해서 겨우야 하나 만들었다~ 사이즈도 적당하고.. 쌩 노가다 해야된다..</p><p>그리고 마지막 할말은 자바스크립트로도 가능하다 자료가 다양한데~ 나는 게시판 글 읽기 페이지에서 pdf 를 뷰어가 나오면서 그대로 볼 수 있는 기능을 만들어야한다.</p><p>자스로 처리하면 그렇게 쌩 노가다하면서 할 필요도 없다 해당 영역을 이미지로 캡쳐해서 pdf로 다운 받는 로직이니까 금방 된다.</p><p>내껀 의뢰 때문에.. 어쩔수없이 해야된다..</p>`,44);function F(a,C,A,i,d,g){return t(),p("div",null,[s("h1",D,[l(o(a.$frontmatter.title)+" ",1),r]),y])}const m=n(c,[["render",F]]);export{h as __pageData,m as default};
