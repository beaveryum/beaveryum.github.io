import{_ as e,c as l,a,b as t,t as n,d as o,o as c}from"./app.ff46b2ef.js";const f=JSON.parse('{"title":"centos7 locale 변경","description":"","frontmatter":{"title":"centos7 locale 변경"},"headers":[{"level":2,"title":"참고 문헌 :","slug":"참고-문헌","link":"#참고-문헌","children":[]}],"relativePath":"server/centos7 locale 변경.md","lastUpdated":null}'),p={name:"server/centos7 locale 변경.md"},r={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=o(`<ol><li>Locale 확인</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">locale</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li>Locale 변경 명령어로 Locale 변경</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">localectl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">set-locale</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">LANG=ko_KR.utf8</span></span>
<span class="line"></span></code></pre></div><p>vi /etc/locale.conf 직접 편집</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">LANG</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">ko_KR.utf8</span></span>
<span class="line"></span></code></pre></div><p>혹시나 제대로 실행 안됐을경우? 서버를 재부팅 해야한다.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">reboot</span></span>
<span class="line"></span></code></pre></div><h2 id="참고-문헌" tabindex="-1">참고 문헌 : <a class="header-anchor" href="#참고-문헌" aria-hidden="true">#</a></h2><p><a href="https://cloud-information.tistory.com/3" target="_blank" rel="noreferrer">https://cloud-information.tistory.com/3</a></p>`,10);function h(s,_,u,C,b,y){return c(),l("div",null,[a("h1",r,[t(n(s.$frontmatter.title)+" ",1),i]),d])}const m=e(p,[["render",h]]);export{f as __pageData,m as default};
