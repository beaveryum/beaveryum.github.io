import{_ as t,c as e,a as s,b as o,t as n,d as p,o as l}from"./app.86428379.js";const f=JSON.parse('{"title":"영카트 주소 ca_id 정규식","description":"","frontmatter":{"title":"영카트 주소 ca_id 정규식"},"headers":[],"relativePath":"그누&영카트/영카트 주소 ca_id 정규식.md","lastUpdated":1674745074000}'),c={name:"그누&영카트/영카트 주소 ca_id 정규식.md"},r={id:"frontmatter-title",tabindex:"-1"},_=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),i=p(`<p>주소에 보면 /shop/list.php?ca_id=12313</p><p>이런식으로 되어 있는거 ca_id만 빼오는 정규식이다.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#82AAFF;">preg_replace</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;/</span><span style="color:#C3E88D;">\\/shop\\/list.php(</span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">?</span><span style="color:#89DDFF;">]</span><span style="color:#C3E88D;">)ca_id=</span><span style="color:#89DDFF;">/&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">,$</span><span style="color:#A6ACCD;">row</span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">me_link</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">]);</span></span>
<span class="line"></span></code></pre></div>`,3);function d(a,D,F,y,h,m){return l(),e("div",null,[s("h1",r,[o(n(a.$frontmatter.title)+" ",1),_]),i])}const u=t(c,[["render",d]]);export{f as __pageData,u as default};
