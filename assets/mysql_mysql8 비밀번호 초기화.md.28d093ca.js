import{_ as n,c as l,a as s,b as e,t,d as p,o}from"./app.ff46b2ef.js";const f=JSON.parse('{"title":"mysql8 비밀번호 초기화","description":"","frontmatter":{"title":"mysql8 비밀번호 초기화"},"headers":[{"level":2,"title":"설명 :","slug":"설명","link":"#설명","children":[]},{"level":2,"title":"참고 문헌 :","slug":"참고-문헌","link":"#참고-문헌","children":[]}],"relativePath":"mysql/mysql8 비밀번호 초기화.md","lastUpdated":null}'),r={name:"mysql/mysql8 비밀번호 초기화.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=p(`<h2 id="설명" tabindex="-1">설명 : <a class="header-anchor" href="#설명" aria-hidden="true">#</a></h2><p>일단 아래 참고 사이트 보면서 그대로 따라 했다.</p><p>버전 마다 차이 있습니다.</p><p>5.7부터 8까지 는 그대로 따라하는데 비밀번호 변경 하는 문법이 8 기준에서만 동작됩니다.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">systemctl stop mysqld </span><span style="color:#676E95;font-style:italic;">// mysql 중단 mysqld --skip-grant-tables --user=mysql &amp; // 비활성화시키기</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">mysql FLUSH PRIVILEGES</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">SELECT user</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> host</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> plugin FROM user</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 계정 조회부터하고</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ALTER USER </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">localhost</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> IDENTIFIED BY </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">new_passowrd</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 비번 바꾸기</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">FLUSH PRIVILEGES</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">exit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="참고-문헌" tabindex="-1">참고 문헌 : <a class="header-anchor" href="#참고-문헌" aria-hidden="true">#</a></h2><p><a href="https://ko.linux-console.net/?p=61#gsc.tab=0" target="_blank" rel="noreferrer">https://ko.linux-console.net/?p=61#gsc.tab=0</a></p><p><a href="https://blog.jiniworld.me/72" target="_blank" rel="noreferrer">https://blog.jiniworld.me/72</a></p>`,8);function D(a,d,_,h,F,m){return o(),l("div",null,[s("h1",c,[e(t(a.$frontmatter.title)+" ",1),i]),y])}const u=n(r,[["render",D]]);export{f as __pageData,u as default};
