import{_ as n,c as a,a as e,b as t,t as o,d as r,o as l}from"./app.ff46b2ef.js";const F=JSON.parse(`{"title":"error in entry module not found error can't resolve './src' in","description":"","frontmatter":{"title":"error in entry module not found error can't resolve './src' in "},"headers":[{"level":2,"title":"원인 :","slug":"원인","link":"#원인","children":[]},{"level":2,"title":"해결방법 :","slug":"해결방법","link":"#해결방법","children":[]}],"relativePath":"bundle/webpack-4-error-in-entry-module-not-found-error-cant-resolve-src.md","lastUpdated":null}`),p={name:"bundle/webpack-4-error-in-entry-module-not-found-error-cant-resolve-src.md"},c={id:"frontmatter-title",tabindex:"-1"},i=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(`<h2 id="원인" tabindex="-1">원인 : <a class="header-anchor" href="#원인" aria-hidden="true">#</a></h2><p>에러의 원인은 많은데 그 중에서 웹팩에서 나오는 원인이 제일 크다.</p><p>나 같은 경우 지금 빌드를 하면서 에러가 발생하고 있다.</p><p>webpack.config.js 에서 실행이 되는데 빌드에 필요한 옵션이 없어서 저런 에러가 나온다.</p><div class="language-dander"><button title="Copy Code" class="copy"></button><span class="lang">dander</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Insufficient number of arguments </span><span style="color:#89DDFF;">or</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">no</span><span style="color:#A6ACCD;"> entry found</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> Alternatively</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> run </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">webpack(-cli) --help</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> us</span></span>
<span class="line"></span></code></pre></div><h2 id="해결방법" tabindex="-1">해결방법 : <a class="header-anchor" href="#해결방법" aria-hidden="true">#</a></h2><p>빌드 할때 옵션이</p><p>entry, output 두가지가 꼭 있어야한다.</p><p>여기 아래 참고 자료를 보면된다.</p><p>이렇게 경로와 같이 넣게 되면 빌드가 해결 된다.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">entry</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./frontend/src/index.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span></code></pre></div>`,11);function u(s,y,D,h,C,_){return l(),a("div",null,[e("h1",c,[t(o(s.$frontmatter.title)+" ",1),i]),d])}const A=n(p,[["render",u]]);export{F as __pageData,A as default};
