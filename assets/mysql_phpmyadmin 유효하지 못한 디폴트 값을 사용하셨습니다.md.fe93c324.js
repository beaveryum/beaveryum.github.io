import{_ as n,c as p,a as s,b as l,t as o,d as t,o as e}from"./app.ff46b2ef.js";const h=JSON.parse('{"title":"phpmyadmin 유효하지 못한 디폴트 값을 사용하셨습니다.","description":"","frontmatter":{"title":"phpmyadmin 유효하지 못한 디폴트 값을 사용하셨습니다."},"headers":[],"relativePath":"mysql/phpmyadmin 유효하지 못한 디폴트 값을 사용하셨습니다.md","lastUpdated":null}'),c={name:"mysql/phpmyadmin 유효하지 못한 디폴트 값을 사용하셨습니다.md"},r={id:"frontmatter-title",tabindex:"-1"},_=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),D=t('<p>phpmysqladmin에서는 좀 약간 바꿔서 입력해야된다.</p><p>위에 메시지가 뜰경우 아래 처럼 명령어 몇줄 더 추가하면된다.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">SET SQL_MODE </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">NO_AUTO_VALUE_ON_ZERO</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"><span style="color:#A6ACCD;">SET time_zone </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">+00:00</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#A6ACCD;">ALTER TABLE </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">테이블명</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#A6ACCD;">CHANGE </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">datetime</span><span style="color:#89DDFF;">`</span></span>\n<span class="line"><span style="color:#A6ACCD;">DATETIME NOT </span><span style="color:#89DDFF;">NULL</span><span style="color:#A6ACCD;"> DEFAULT </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0000-00-00 00:00:00</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"></span></code></pre></div>',3);function i(a,y,d,F,C,m){return e(),p("div",null,[s("h1",r,[l(o(a.$frontmatter.title)+" ",1),_]),D])}const E=n(c,[["render",i]]);export{h as __pageData,E as default};
