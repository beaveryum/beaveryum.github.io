import{_ as a,c as s,a as e,b as n,t as l,d as r,o}from"./app.86428379.js";const f=JSON.parse(`{"title":"MySQL Incorrect datetime value: '0000-00-00 00:00:00'","description":"","frontmatter":{"title":"MySQL Incorrect datetime value: '0000-00-00 00:00:00'"},"headers":[{"level":2,"title":"사용 방법 :","slug":"사용-방법","link":"#사용-방법","children":[]}],"relativePath":"mysql/MySQL Incorrect datetime value: 0000-00-00 00:00:00.md","lastUpdated":1674745074000}`),c={name:"mysql/MySQL Incorrect datetime value: 0000-00-00 00:00:00.md"},i={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=r(`<h2 id="사용-방법" tabindex="-1">사용 방법 : <a class="header-anchor" href="#사용-방법" aria-hidden="true">#</a></h2><p>mysql 5.7 이후 버전에서 사용 하려면 아래 명령어를 입력 하면 된다.</p><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">SET</span><span style="color:#A6ACCD;"> SQL_MODE</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ALLOW_INVALID_DATES</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">;</span></span>
<span class="line"></span></code></pre></div><p>이후 버전에는 따로 타임스탬프로 이용해서 한다고 들었다~ 그건 구글링으로 찾아보자~</p>`,4);function _(t,h,m,y,u,D){return o(),s("div",null,[e("h1",i,[n(l(t.$frontmatter.title)+" ",1),p]),d])}const C=a(c,[["render",_]]);export{f as __pageData,C as default};
