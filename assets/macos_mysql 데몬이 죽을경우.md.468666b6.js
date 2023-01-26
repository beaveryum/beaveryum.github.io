import{_ as e,c as t,a as s,b as l,t as o,d as n,o as r}from"./app.ff46b2ef.js";const f=JSON.parse('{"title":"mysql 데몬이 죽을경우..","description":"","frontmatter":{"title":"mysql 데몬이 죽을경우.."},"headers":[{"level":2,"title":"원인 :","slug":"원인","link":"#원인","children":[]},{"level":2,"title":"해결방법 :","slug":"해결방법","link":"#해결방법","children":[]},{"level":2,"title":"참고 자료 :","slug":"참고-자료","link":"#참고-자료","children":[]}],"relativePath":"macos/mysql 데몬이 죽을경우.md","lastUpdated":null}'),p={name:"macos/mysql 데몬이 죽을경우.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=n(`<h2 id="원인" tabindex="-1">원인 : <a class="header-anchor" href="#원인" aria-hidden="true">#</a></h2><p>ERROR! The server quit without updating PID file 갑자기 mysql 데몬이 죽어 있을경우</p><p>MacBookPro:~ root# mysql.server start Starting MySQL . ERROR! The server quit without updating PID file (/usr/local/var/mysql/bibeoyum-ui-MacBookPro.local.pid). MacBookPro:~ root# mysql.server restart ERROR! MySQL server PID file could not be found! Starting MySQL</p><p>이렇게 데몬이 죽어 있다면 아래꺼 참고한다.</p><h2 id="해결방법" tabindex="-1">해결방법 : <a class="header-anchor" href="#해결방법" aria-hidden="true">#</a></h2><p>첫번째 방법</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">mysql:mysql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/var/mysql</span></span>
<span class="line"></span></code></pre></div><p>두번째 방법</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">777</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/local/var/mysql</span></span>
<span class="line"></span></code></pre></div><p>이렇게 둘중에 하나 권한을 주면 정상적으로 실행된다.</p><h2 id="참고-자료" tabindex="-1">참고 자료 : <a class="header-anchor" href="#참고-자료" aria-hidden="true">#</a></h2><p><a href="https://rayner.tistory.com/2" target="_blank" rel="noreferrer">https://rayner.tistory.com/2</a></p>`,12);function h(a,y,_,u,C,m){return r(),t("div",null,[s("h1",c,[l(o(a.$frontmatter.title)+" ",1),i]),d])}const A=e(p,[["render",h]]);export{f as __pageData,A as default};
