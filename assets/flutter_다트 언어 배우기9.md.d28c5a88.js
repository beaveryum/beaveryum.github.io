import{_ as n,c as l,a as s,b as p,t as e,d as o,o as t}from"./app.a1a9e66d.js";const h=JSON.parse('{"title":"다트 언어 배우기9 - 인터페이스","description":"","frontmatter":{"title":"다트 언어 배우기9 - 인터페이스"},"headers":[{"level":2,"title":"느낀점 :","slug":"느낀점","link":"#느낀점","children":[]}],"relativePath":"flutter/다트 언어 배우기9.md","lastUpdated":1674745074000}'),c={name:"flutter/다트 언어 배우기9.md"},r={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=o(`<div class="info custom-block"><p class="custom-block-title">INFO</p><p>인터페이스는</p><p>특수한 구조를 설계만 하고 이런 형태로 받아서 사용한다고 생각 하면된다.</p></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">void </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  Tree tree </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Tree</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">소나무</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  tree</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">sayName</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">abstract</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TreeInterface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">TreeInterface</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  void </span><span style="color:#82AAFF;">sayName</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tree</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">implements</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">TreeInterface</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">Tree</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  void </span><span style="color:#82AAFF;">sayName</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">나무의 이름은 </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">name</span><span style="color:#C3E88D;"> 이다.</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="느낀점" tabindex="-1">느낀점 : <a class="header-anchor" href="#느낀점" aria-hidden="true">#</a></h2><p>자바를 생각하면된다. 자바에서 사용한것을 다트에서도 문법만 좀 다르게 쓰이는것이다</p><p>영상을 보고 따라하는거라서.. 모르면 영상 참고하면된다.</p><p><a href="https://youtu.be/7e80Il_7Z70?t=0s" target="_blank" rel="noreferrer"><img src="http://img.youtube.com/vi/7e80Il_7Z70/0.jpg" alt="Video Label"></a></p>`,6);function F(a,i,A,C,d,_){return t(),l("div",null,[s("h1",r,[p(e(a.$frontmatter.title)+" ",1),D]),y])}const u=n(c,[["render",F]]);export{h as __pageData,u as default};
