import{_ as n,c as l,a as s,b as o,t as p,d as e,o as t}from"./app.86428379.js";const E=JSON.parse('{"title":"mysql 필드명 변경하기","description":"","frontmatter":{"title":"mysql 필드명 변경하기"},"headers":[{"level":2,"title":"사용 방법 :","slug":"사용-방법","link":"#사용-방법","children":[]},{"level":2,"title":"참고자료:","slug":"참고자료","link":"#참고자료","children":[]}],"relativePath":"그누&영카트/mysql 필드명 변경하기.md","lastUpdated":1674745074000}'),r={name:"그누&영카트/mysql 필드명 변경하기.md"},c={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=e('<h2 id="사용-방법" tabindex="-1">사용 방법 : <a class="header-anchor" href="#사용-방법" aria-hidden="true">#</a></h2><div class="language-sql"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#F78C6C;">ALTER</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">`</span><span style="color:#C3E88D;">media_value_report</span><span style="color:#89DDFF;">`</span><span style="color:#A6ACCD;"> </span></span>\n<span class="line"><span style="color:#A6ACCD;">    CHANGE col1_old col1_new </span><span style="color:#C792EA;">varchar</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">),</span></span>\n<span class="line"><span style="color:#A6ACCD;">    CHANGE col1_old col1_new </span><span style="color:#C792EA;">varchar</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">),</span></span>\n<span class="line"><span style="color:#A6ACCD;">    ...</span></span>\n<span class="line"></span></code></pre></div><p>예시는 위 소스코드로 변경하면 된다.</p><p>아래는 직접 실행 했을때~</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">sql_query</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> select iq_hp,iq_email from </span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">g5</span><span style="color:#89DDFF;">[&#39;</span><span style="color:#C3E88D;">g5_shop_item_qa_table</span><span style="color:#89DDFF;">&#39;]}</span><span style="color:#C3E88D;"> limit 1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">false))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>\n<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">sql_query</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot; </span><span style="color:#F78C6C;">ALTER</span><span style="color:#C3E88D;"> </span><span style="color:#F78C6C;">TABLE</span><span style="color:#C3E88D;"> `</span><span style="color:#89DDFF;">{$</span><span style="color:#A6ACCD;">g5</span><span style="color:#89DDFF;">[&#39;</span><span style="color:#C3E88D;">g5_shop_item_qa_table</span><span style="color:#89DDFF;">&#39;]}</span><span style="color:#C3E88D;">` </span></span>\n<span class="line"><span style="color:#C3E88D;">                        CHANGE `iq_hp` `is_hp` </span><span style="color:#C792EA;">TINYINT</span><span style="color:#C3E88D;">(</span><span style="color:#F78C6C;">4</span><span style="color:#C3E88D;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#C3E88D;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#C3E88D;"> &#39;0&#39;, </span></span>\n<span class="line"><span style="color:#C3E88D;">                        CHANGE `iq_email` `is_email` </span><span style="color:#C792EA;">TINYINT</span><span style="color:#C3E88D;">(</span><span style="color:#F78C6C;">4</span><span style="color:#C3E88D;">) </span><span style="color:#F78C6C;">NOT NULL</span><span style="color:#C3E88D;"> </span><span style="color:#C792EA;">DEFAULT</span><span style="color:#C3E88D;"> &#39;0&#39;</span></span>\n<span class="line"><span style="color:#C3E88D;">                        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true);</span></span>\n<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">​</span></span>\n<span class="line"></span>\n<span class="line"></span></code></pre></div><h2 id="참고자료" tabindex="-1">참고자료: <a class="header-anchor" href="#참고자료" aria-hidden="true">#</a></h2><p><a href="https://stackoverflow.com/questions/10846499/alter-multiple-columns-in-a-single-statement" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/10846499/alter-multiple-columns-in-a-single-statement</a></p>',7);function C(a,D,F,_,A,d){return t(),l("div",null,[s("h1",c,[o(p(a.$frontmatter.title)+" ",1),i]),y])}const m=n(r,[["render",C]]);export{E as __pageData,m as default};
