import{_ as e,c as t,a as s,b as n,t as r,d as o,o as l}from"./app.86428379.js";const m=JSON.parse('{"title":"nginx 설치 도중 에러 address already in use 2","description":"","frontmatter":{"title":"nginx 설치 도중 에러 address already in use 2"},"headers":[],"relativePath":"server/nginx 설치 도중 에러 address already in use 2.md","lastUpdated":1674745074000}'),d={name:"server/nginx 설치 도중 에러 address already in use 2.md"},p={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),_=o(`<p>nginx 에러 중에서 address already in use 라고 나오면 프로세스를 끄면 된다.</p><p>80포트를 끄면 해결 될수도 있다.. 추측이다..</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fuser</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-k</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#C3E88D;">/tcp</span></span>
<span class="line"></span></code></pre></div>`,3);function c(a,u,y,C,h,f){return l(),t("div",null,[s("h1",p,[n(r(a.$frontmatter.title)+" ",1),i]),_])}const x=e(d,[["render",c]]);export{m as __pageData,x as default};
