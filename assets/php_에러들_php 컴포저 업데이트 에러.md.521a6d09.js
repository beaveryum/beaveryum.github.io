import{_ as e,c as a,o as s,d as p}from"./app.bb490b37.js";const u=JSON.parse('{"title":"php 컴포저 업데이트 에러","description":"","frontmatter":{},"headers":[{"level":2,"title":"참고 자료 :","slug":"참고-자료","link":"#참고-자료","children":[]}],"relativePath":"php/에러들/php 컴포저 업데이트 에러.md","lastUpdated":1674544713000}'),t={name:"php/에러들/php 컴포저 업데이트 에러.md"},o=p(`<h1 id="php-컴포저-업데이트-에러" tabindex="-1">php 컴포저 업데이트 에러 <a class="header-anchor" href="#php-컴포저-업데이트-에러" aria-hidden="true">#</a></h1><p>컴포저 패키지 업데이트 할때 메모리 에러 뜬다면</p><p>아래 명령어로 하면 된다.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">COMPOSER_MEMORY_LIMIT</span><span style="color:#89DDFF;">=-</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> composer update</span></span>
<span class="line"></span></code></pre></div><h2 id="참고-자료" tabindex="-1">참고 자료 : <a class="header-anchor" href="#참고-자료" aria-hidden="true">#</a></h2><p><a href="https://stackoverflow.com/questions/36107400/composer-update-memory-limit" target="_blank" rel="noreferrer">https://stackoverflow.com/questions/36107400/composer-update-memory-limit</a></p>`,6),n=[o];function r(c,l,_,i,d,h){return s(),a("div",null,n)}const f=e(t,[["render",r]]);export{u as __pageData,f as default};
