import{_ as n,c as t,a,b as s,t as o,d as l,o as r}from"./app.ff46b2ef.js";const b=JSON.parse('{"title":"Command not found yarn mac","description":"","frontmatter":{"title":"Command not found yarn mac"},"headers":[{"level":2,"title":"참고 자료 :","slug":"참고-자료","link":"#참고-자료","children":[]}],"relativePath":"macos/Command not found yarn mac.md","lastUpdated":null}'),p={name:"macos/Command not found yarn mac.md"},c={id:"frontmatter-title",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=l(`<p>yarn 설치 해도 잡히지 않을경우 아래 처럼 따라 하면된다.</p><p>주의) 맥 환경이 많기 때문에 나 같은 경우 빅서 이고 옛날꺼 그대로 쓰고 있다.</p><p>환경에 다르면 안될 수 도 있고 해서 일단 참고한다.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PATH</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">~/.yarn/bin:</span><span style="color:#A6ACCD;">$PATH into .profile </span><span style="color:#89DDFF;">!**</span></span>
<span class="line"></span></code></pre></div><p>or</p><p>try: If you are on the bash try adding alias</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">yarn</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">~/.yarn/bin/yarn.js</span></span>
<span class="line"></span></code></pre></div><p>We no longer support global installation of Create React App.</p><p>Please remove any global installs with one of the following commands:</p><ul><li>npm uninstall -g create-react-app</li><li>yarn global remove create-react-app</li></ul><p>The latest instructions for creating a new app can be found here:</p><p>create-react-app.dev/docs/getting-started</p><p>@github 😉</p><p>위에 자료 보면서 문제 해결 하면된다.</p><p>그래도 설치가 안되면 삭제 후 제 설치 해야된다고 한다.</p><h2 id="참고-자료" tabindex="-1">참고 자료 : <a class="header-anchor" href="#참고-자료" aria-hidden="true">#</a></h2><p><a href="https://stackoverflow.com/questions/66637032/bash-yarn-command-not-found-even-after-installing-it-globally" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/66637032/bash-yarn-command-not-found-even-after-installing-it-globally</a></p>`,17);function m(e,h,y,_,f,u){return r(),t("div",null,[a("h1",c,[s(o(e.$frontmatter.title)+" ",1),i]),d])}const C=n(p,[["render",m]]);export{b as __pageData,C as default};
