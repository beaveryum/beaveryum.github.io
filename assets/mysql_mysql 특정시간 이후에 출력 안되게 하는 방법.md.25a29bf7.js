import{_ as a,c as e,a as s,b as n,t as o,d as l,o as _}from"./app.86428379.js";const C=JSON.parse('{"title":"mysql 특정시간 이후에 출력 안되게 하는 방법","description":"","frontmatter":{"title":"mysql 특정시간 이후에 출력 안되게 하는 방법"},"headers":[],"relativePath":"mysql/mysql 특정시간 이후에 출력 안되게 하는 방법.md","lastUpdated":1674745074000}'),r={name:"mysql/mysql 특정시간 이후에 출력 안되게 하는 방법.md"},p={id:"frontmatter-title",tabindex:"-1"},c=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=l(`<p>mysql 특정시간 지나면 출력 안되게 하려면 아래 쿼리를 활용하면 된다.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">SELECT </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> FROM 테이블 where 필드 </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">now</span><span style="color:#89DDFF;">()</span></span>
<span class="line"></span></code></pre></div><p>간단하다. 필드 값은 데이터타임으로 해서 &#39;0000-00-00 00:00:00&#39; 기본값을 넣으면 된다.</p>`,3);function d(t,m,y,h,D,f){return _(),e("div",null,[s("h1",p,[n(o(t.$frontmatter.title)+" ",1),c]),i])}const u=a(r,[["render",d]]);export{C as __pageData,u as default};
