import{_ as a,c as s,a as e,b as n,t as o,d as r,o as l}from"./app.0c53f998.js";const D=JSON.parse('{"title":"그누4 ckeditor 4 유투브 안나오는 현상","description":"","frontmatter":{"title":"그누4 ckeditor 4 유투브 안나오는 현상"},"headers":[{"level":2,"title":"원인 :","slug":"원인","link":"#원인","children":[]},{"level":2,"title":"해결 방법 :","slug":"해결-방법","link":"#해결-방법","children":[]}],"relativePath":"그누&영카트/그누4 ckeditor 4 유투브 안나오는 현상.md","lastUpdated":1674640550000}'),i={name:"그누&영카트/그누4 ckeditor 4 유투브 안나오는 현상.md"},c={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),p=r(`<h2 id="원인" tabindex="-1">원인 : <a class="header-anchor" href="#원인" aria-hidden="true">#</a></h2><p>ckeditor 4 유투브 안나온 현상..</p><p>처음에 유투브를 넣을때는 정상적으로 작동되는데 저장 후에 수정 페이지로 접근 하니까 나오지 않는다.</p><p>그누보드 최신에서 ckeditor5 에서는 아주 정상적으로 작동 된다.</p><h2 id="해결-방법" tabindex="-1">해결 방법 : <a class="header-anchor" href="#해결-방법" aria-hidden="true">#</a></h2><p>ckeditor 4 설정에서 추가하면 된다.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">config</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">allowedContent </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,7);function _(t,h,f,u,k,C){return l(),s("div",null,[e("h1",c,[n(o(t.$frontmatter.title)+" ",1),d]),p])}const y=a(i,[["render",_]]);export{D as __pageData,y as default};
