import{_ as a,c as l,a as s,b as p,t as o,d as e,o as t}from"./app.86428379.js";const m=JSON.parse('{"title":"다트 언어 배우기8 - 오버라이딩","description":"","frontmatter":{"title":"다트 언어 배우기8 - 오버라이딩"},"headers":[],"relativePath":"flutter/다트 언어 배우기8.md","lastUpdated":1674745074000}'),c={name:"flutter/다트 언어 배우기8.md"},r={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),A=e(`<div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">void </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  Tree trees </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tree</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">100</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">trees</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ageCalc</span><span style="color:#89DDFF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  Sonamoo strong </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Sonamoo</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">튼튼이</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">10</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">strong</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ageCalc</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tree</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#C792EA;">final</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> age</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#82AAFF;">Tree</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">     this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ageCalc</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">age </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Sonamoo</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Tree</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">Sonamoo</span><span style="color:#89DDFF;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">String</span><span style="color:#A6ACCD;"> name</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> age</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">super</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">age</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">override</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">int</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ageCalc</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> super</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ageCalc</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">120</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><p><a href="https://youtu.be/7e80Il_7Z70?t=0s" target="_blank" rel="noreferrer"><img src="http://img.youtube.com/vi/7e80Il_7Z70/0.jpg" alt="Video Label"></a></p>`,2);function C(n,y,F,i,_,d){return t(),l("div",null,[s("h1",r,[p(o(n.$frontmatter.title)+" ",1),D]),A])}const h=a(c,[["render",C]]);export{m as __pageData,h as default};
