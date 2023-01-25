import{_ as a,c as l,a as s,b as o,t as p,d as e,o as t}from"./app.0c53f998.js";const m=JSON.parse('{"title":"한글 자음의 초성으로 검색 하기","description":"","frontmatter":{"title":"한글 자음의 초성으로 검색 하기"},"headers":[{"level":2,"title":"설명 :","slug":"설명","link":"#설명","children":[]}],"relativePath":"그누&영카트/한글 자음의 초성으로 검색 하기.md","lastUpdated":1674640550000}'),D={name:"그누&영카트/한글 자음의 초성으로 검색 하기.md"},c={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),F=e(`<h2 id="설명" tabindex="-1">설명 : <a class="header-anchor" href="#설명" aria-hidden="true">#</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 한글 자음의 초성으로 검색하기</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㄱ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^(ㄱ|ㄲ)&#39; OR ( field_name &gt;= &#39;가&#39; AND field_name &lt; &#39;나&#39; )) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㄴ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^ㄴ&#39; OR ( field_name &gt;= &#39;나&#39; AND field_name &lt; &#39;다&#39; )) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㄷ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^(ㄷ|ㄸ)&#39; OR ( field_name &gt;= &#39;다&#39; AND field_name &lt; &#39;라&#39; )) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㄹ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^ㄹ&#39; OR ( field_name &gt;= &#39;라&#39; AND field_name &lt; &#39;마&#39; )) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㅁ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^ㅁ&#39; OR ( field_name &gt;= &#39;마&#39; AND field_name &lt; &#39;바&#39; )) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㅂ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^ㅂ&#39; OR ( field_name &gt;= &#39;바&#39; AND field_name &lt; &#39;사&#39; )) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㅅ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^(ㅅ|ㅆ)&#39; OR ( field_name &gt;= &#39;사&#39; AND field_name &lt; &#39;아&#39; )) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㅇ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^ㅇ&#39; OR ( field_name &gt;= &#39;아&#39; AND field_name &lt; &#39;자&#39; )) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㅈ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^(ㅈ|ㅉ)&#39; OR ( field_name &gt;= &#39;자&#39; AND field_name &lt; &#39;차&#39; )) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㅊ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^ㅊ&#39; OR ( field_name &gt;= &#39;차&#39; AND field_name &lt; &#39;카&#39; )) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㅋ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^ㅋ&#39; OR ( field_name &gt;= &#39;카&#39; AND field_name &lt; &#39;타&#39; )) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㅌ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^ㅌ&#39; OR ( field_name &gt;= &#39;타&#39; AND field_name &lt; &#39;파&#39; )) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㅍ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^ㅍ&#39; OR ( field_name &gt;= &#39;파&#39; AND field_name &lt; &#39;하&#39; )) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">find </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ㅎ</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">and (field_name RLIKE &#39;^ㅎ&#39; OR ( field_name &gt;= &#39;하&#39;)) order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">order by field_name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">qry     </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">select * from table_name where </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">where</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">result  </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">mysql_query</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">qry</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div>`,2);function y(n,C,i,A,d,f){return t(),l("div",null,[s("h1",c,[o(p(n.$frontmatter.title)+" ",1),r]),F])}const E=a(D,[["render",y]]);export{m as __pageData,E as default};
