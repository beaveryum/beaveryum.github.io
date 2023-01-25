import{_ as a,c as l,a as s,b as p,t as o,d as t,o as D}from"./app.0c53f998.js";const h=JSON.parse('{"title":"그누보드 쉽게 엑셀 파일 만들기","description":"","frontmatter":{"title":"그누보드 쉽게 엑셀 파일 만들기"},"headers":[{"level":2,"title":"설명 :","slug":"설명","link":"#설명","children":[]}],"relativePath":"그누&영카트/그누보드 쉽게 엑셀 파일 만들기.md","lastUpdated":1674640550000}'),e={name:"그누&영카트/그누보드 쉽게 엑셀 파일 만들기.md"},c={id:"frontmatter-title",tabindex:"-1"},F=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),r=t(`<h2 id="설명" tabindex="-1">설명 : <a class="header-anchor" href="#설명" aria-hidden="true">#</a></h2><p>쉽게 엑셀 파일을 만든 방법이 있다.</p><p>보통 이런 방식으로 만들긴하는데 만약에 테이블 구조가 복잡하면 이런 방법 보다 라이브러리 써서 만든게 좋다.</p><p>우선 쉽게 만든 방법에 대해서 글 올린다.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">sub_menu </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">500300</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">include_once</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./_common.php</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#82AAFF;">auth_check</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">auth</span><span style="color:#89DDFF;">[$</span><span style="color:#A6ACCD;">sub_menu</span><span style="color:#89DDFF;">],</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">w</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 상품이 많을 경우 대비 설정변경</span></span>
<span class="line"><span style="color:#82AAFF;">set_time_limit</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">ini_set</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">memory_limit</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">50M</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">fileName </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">date</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Y-m-d H:i:s</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#89DDFF;">.&quot;</span><span style="color:#C3E88D;">_상담신청목록</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">sql </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">select * from </span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">g5</span><span style="color:#89DDFF;">[&#39;</span><span style="color:#C3E88D;">reser_content_table</span><span style="color:#89DDFF;">&#39;]}</span><span style="color:#C3E88D;"> ORDER BY re_no DESC</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sql_query</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">sql</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">list </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">array</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;$</span><span style="color:#A6ACCD;">row </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">sql_fetch_array</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">);$</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">list</span><span style="color:#89DDFF;">[$</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#82AAFF;">header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Type: application/vnd.ms-excel</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Expires: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">gmdate</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">D, d M Y H:i:s</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;"> GMT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Content-Disposition: attachment; filename=&#39;</span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">fileName</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">&#39;.xls</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Cache-Control: must-revalidate, post-check=0, pre-check=0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Pragma: public</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">header</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">content-transfer-encoding: binary</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">?&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">doctype html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">html lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ko</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">meta charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">title</span><span style="color:#89DDFF;">&gt;&lt;?=$</span><span style="color:#A6ACCD;">fileName</span><span style="color:#89DDFF;">?&gt;&lt;/</span><span style="color:#A6ACCD;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">table border</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">thead</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">th scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">번호</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">th scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">진료과목</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">th scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">진료구분</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">th scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">휴대번호</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">th scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">진료시간</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">th scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">제목</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">th scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">성함</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">th scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">상태</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">th scope</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">col</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">내용</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">th</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">thead</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">tbody</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php </span><span style="color:#89DDFF;font-style:italic;">foreach</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">list </span><span style="color:#89DDFF;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;&lt;?=$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">re_no</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]?&gt;&lt;/</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;&lt;?=$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">category</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]?&gt;&lt;/</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;&lt;?=$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">division</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]?&gt;&lt;/</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;&lt;?=$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">phone</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]?&gt;&lt;/</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;&lt;?=$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">reservetime</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]?&gt;&lt;/</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;&lt;?=$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">title</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]?&gt;&lt;/</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;&lt;?=$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">mb_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]?&gt;&lt;/</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;&lt;?=$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">status</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]?&gt;&lt;/</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;&lt;?=$</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">content</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]?&gt;&lt;/</span><span style="color:#A6ACCD;">td</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">tr</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php </span><span style="color:#89DDFF;font-style:italic;">endforeach</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">?&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">tbody</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">table</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><p>이렇게 바이너리를 엑셀로 변환해서 하면 페이지 접근했을때 엑셀 다운 받기가 된다.</p><p>간단하게 목록만 따로 출력되는거라서 쉽게 구현 된다.</p><p>여기까지 설명하겠다.</p>`,8);function y(n,C,A,i,g,d){return D(),l("div",null,[s("h1",c,[p(o(n.$frontmatter.title)+" ",1),F]),r])}const _=a(e,[["render",y]]);export{h as __pageData,_ as default};
