import{_ as s,c as a,o as n,d as p}from"./app.bb490b37.js";const i=JSON.parse('{"title":"금액 원화 만단위부터 경까지 표시하기","description":"","frontmatter":{},"headers":[{"level":2,"title":"참고 자료 :","slug":"참고-자료","link":"#참고-자료","children":[]}],"relativePath":"php/기타/금액 원화 만단위부터 경까지 표시하기.md","lastUpdated":1674544713000}'),l={name:"php/기타/금액 원화 만단위부터 경까지 표시하기.md"},o=p(`<h1 id="금액-원화-만단위부터-경까지-표시하기" tabindex="-1">금액 원화 만단위부터 경까지 표시하기 <a class="header-anchor" href="#금액-원화-만단위부터-경까지-표시하기" aria-hidden="true">#</a></h1><p>금액을 만단위로해서 표시하기</p><p>예시 ) 199만9,990원</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">price_format</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">price</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">memey_arr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">만</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">억</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">조</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">경</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">str </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">count</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">memey_arr</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">i </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">--$</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">unit </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pow</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">part </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">floor</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">price </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">unit</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">part </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">str </span><span style="color:#89DDFF;">.=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">number_format</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">part</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">memey_arr</span><span style="color:#89DDFF;">[$</span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">];</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">price </span><span style="color:#89DDFF;">%=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">unit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">str</span><span style="color:#89DDFF;">.&quot;</span><span style="color:#C3E88D;">원</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="참고-자료" tabindex="-1">참고 자료 : <a class="header-anchor" href="#참고-자료" aria-hidden="true">#</a></h2><p><a href="https://gist.github.com/PresentKim/b37a05cf41624ce4432b47ecbbe2dad4" target="_blank" rel="noreferrer">https://gist.github.com/PresentKim/b37a05cf41624ce4432b47ecbbe2dad4</a></p>`,6),e=[o];function t(r,D,c,F,y,C){return n(),a("div",null,e)}const _=s(l,[["render",t]]);export{i as __pageData,_ as default};
