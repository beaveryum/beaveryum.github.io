import{_ as e,c as n,a as s,b as t,t as o,d as l,o as p}from"./app.ff46b2ef.js";const A=JSON.parse('{"title":"centos7 환경에서 node 설치","description":"","frontmatter":{"title":"centos7 환경에서 node 설치"},"headers":[{"level":2,"title":"참고 문헌 :","slug":"참고-문헌","link":"#참고-문헌","children":[]}],"relativePath":"server/centos7 환경에서 node 설치.md","lastUpdated":null}'),r={name:"server/centos7 환경에서 node 설치.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),d=l(`<ol><li>노드가 있는지 확인 한다.</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">list</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">installed</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span></span>
<span class="line"></span></code></pre></div><p>만약에 epel 저장소가 없으면 따로 설치 해야된다. ( 저장소가 있는 과정하에 설명함)</p><ol start="2"><li>노드 특정 버전 설치하기</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">gcc-c++</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">make</span></span>
<span class="line"></span></code></pre></div><h1 id="_8점대-버전을-다운-받으려는-경우" tabindex="-1">8점대 버전을 다운 받으려는 경우 <a class="header-anchor" href="#_8점대-버전을-다운-받으려는-경우" aria-hidden="true">#</a></h1><p>curl -sL <a href="https://rpm.nodesource.com/setup_8.x" target="_blank" rel="noreferrer">https://rpm.nodesource.com/setup_8.x</a> | sudo -E bash -</p><h1 id="_9점대-버전을-다운-받으려는-경우" tabindex="-1">9점대 버전을 다운 받으려는 경우 <a class="header-anchor" href="#_9점대-버전을-다운-받으려는-경우" aria-hidden="true">#</a></h1><p>curl -sL <a href="https://rpm.nodesource.com/setup_9.x" target="_blank" rel="noreferrer">https://rpm.nodesource.com/setup_9.x</a> | sudo -E bash -</p><h1 id="_12점대-버전을-다운-받으려는-경우" tabindex="-1">12점대 버전을 다운 받으려는 경우 <a class="header-anchor" href="#_12점대-버전을-다운-받으려는-경우" aria-hidden="true">#</a></h1><p>curl -sL <a href="https://rpm.nodesource.com/setup_12.x" target="_blank" rel="noreferrer">https://rpm.nodesource.com/setup_12.x</a> | sudo -E bash -</p><p>현재 16 버전이 안정적이다.</p><p>curl -sL <a href="https://rpm.nodesource.com/setup_16.x" target="_blank" rel="noreferrer">https://rpm.nodesource.com/setup_16.x</a> | sudo -E bash -</p><ol start="3"><li>노드 설치한다.</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nodejs</span></span>
<span class="line"></span></code></pre></div><ol start="4"><li>버전 확인하기</li></ol><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span></code></pre></div><h2 id="참고-문헌" tabindex="-1">참고 문헌 : <a class="header-anchor" href="#참고-문헌" aria-hidden="true">#</a></h2><p><a href="https://nirsa.tistory.com/193" target="_blank" rel="noreferrer">https://nirsa.tistory.com/193</a></p>`,19);function h(a,C,_,u,y,m){return p(),n("div",null,[s("h1",c,[t(o(a.$frontmatter.title)+" ",1),i]),d])}const D=e(r,[["render",h]]);export{A as __pageData,D as default};
