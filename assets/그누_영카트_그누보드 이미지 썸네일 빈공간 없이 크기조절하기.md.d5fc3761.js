import{_ as a,c as s,a as t,b as _,t as n,d as i,o as l}from"./app.0c53f998.js";const g=JSON.parse('{"title":"그누보드 이미지 썸네일 빈공간 없이 크기조절하기","description":"","frontmatter":{"title":"그누보드 이미지 썸네일 빈공간 없이 크기조절하기"},"headers":[],"relativePath":"그누&영카트/그누보드 이미지 썸네일 빈공간 없이 크기조절하기.md","lastUpdated":1674640550000}'),o={name:"그누&영카트/그누보드 이미지 썸네일 빈공간 없이 크기조절하기.md"},p={id:"frontmatter-title",tabindex:"-1"},r=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),c=i(`<p>그누보드 이미지 썸네일</p><p>빈공간 없이 크기 조절 하는방법</p><p>우선 썸네일 그전에 가지고 있던 함수를 복제하고 함수명을 new_thumbnail 등 임시적으로 만든다 /lib/thumbnail.lib.php - 292행 부분아래 내용 주석 처리</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// if($size[0] &lt; $thumb_width || $size[1] &lt; $thumb_height)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// $is_large = false;</span></span>
<span class="line"></span></code></pre></div><p>이부분 주석처리 해놓고 썸네일 사용하면된다.</p>`,5);function d(e,h,m,f,u,b){return l(),s("div",null,[t("h1",p,[_(n(e.$frontmatter.title)+" ",1),r]),c])}const y=a(o,[["render",d]]);export{g as __pageData,y as default};
