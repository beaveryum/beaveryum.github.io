import{_ as e,c as t,a,b as o,t as n,d as l,o as r}from"./app.0c53f998.js";const m=JSON.parse('{"title":"Because a cookie’s SameSite attribute was not set or is invalid","description":"","frontmatter":{"title":"Because a cookie’s SameSite attribute was not set or is invalid"},"headers":[{"level":2,"title":"원인 :","slug":"원인","link":"#원인","children":[]},{"level":2,"title":"해결 방법 :","slug":"해결-방법","link":"#해결-방법","children":[]},{"level":2,"title":"참고 자료 :","slug":"참고-자료","link":"#참고-자료","children":[]}],"relativePath":"vue2/Because a cookie’s SameSite attribute was not set or is invalid.md","lastUpdated":1674640550000}'),p={name:"vue2/Because a cookie’s SameSite attribute was not set or is invalid.md"},i={id:"frontmatter-title",tabindex:"-1"},c=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=l(`<h2 id="원인" tabindex="-1">원인 : <a class="header-anchor" href="#원인" aria-hidden="true">#</a></h2><p>작업 하다보면 에디터에서 아이프레임 유투브가 실행되는 부분이 있는데 여기서 쿠키 샘 사이트 문제가 있다.</p><p>크롬에서 나오는 에러인데 크롬에서 새로운 정책이라고 알면 될것 같다.</p><p>그래서 혹시 몰라서 따로 자료 남긴다.</p><h2 id="해결-방법" tabindex="-1">해결 방법 : <a class="header-anchor" href="#해결-방법" aria-hidden="true">#</a></h2><p>해당 페이지에서 아래 소스코드 넣으면된다.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cookie </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">safeCookie1=foo; SameSite=Lax</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cookie </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">safeCookie2=foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cookie </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">crossCookie=bar; SameSite=None; Secure</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><p>여기서 백단에서도 샘사이트 쿠키 를 samesite=none; secure 로 바꿔주면된다.</p><p>백단 마다 문법이 다르기 때문에 구글링으로 먼저 찾봐서 설정을 변경하면 된다.</p><p>​</p><h2 id="참고-자료" tabindex="-1">참고 자료 : <a class="header-anchor" href="#참고-자료" aria-hidden="true">#</a></h2><p><a href="https://ifuwanna.tistory.com/223" target="_blank" rel="noreferrer">https://ifuwanna.tistory.com/223</a></p>`,12);function D(s,u,_,h,y,C){return r(),t("div",null,[a("h1",i,[o(n(s.$frontmatter.title)+" ",1),c]),d])}const A=e(p,[["render",D]]);export{m as __pageData,A as default};
