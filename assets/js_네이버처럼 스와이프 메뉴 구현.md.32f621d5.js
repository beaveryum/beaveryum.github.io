import{_ as a,c as l,a as s,b as p,t as o,d as e,o as t}from"./app.a1a9e66d.js";const d=JSON.parse('{"title":"네이버처럼 스와이프 메뉴 구현","description":"","frontmatter":{"title":"네이버처럼 스와이프 메뉴 구현 "},"headers":[],"relativePath":"js/네이버처럼 스와이프 메뉴 구현.md","lastUpdated":1674745074000}'),c={name:"js/네이버처럼 스와이프 메뉴 구현.md"},r={id:"frontmatter-title",tabindex:"-1"},D=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),F=e(`<p>네이버처럼 스와이프 메뉴 구현</p><div class="language-htm"><button title="Copy Code" class="copy"></button><span class="lang">htm</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#A6ACCD;">DOCTYPE html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">html lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">meta charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">utf-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Swiper demo</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#A6ACCD;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">meta name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;!--</span><span style="color:#A6ACCD;"> Link Swiper</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">s CSS --&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;link rel=&quot;stylesheet&quot; href=&quot;./swiper.css&quot;&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;!-- Demo styles --&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;style&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    body {</span></span>
<span class="line"><span style="color:#C3E88D;">        background: #eee;</span></span>
<span class="line"><span style="color:#C3E88D;">        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;</span></span>
<span class="line"><span style="color:#C3E88D;">        font-size: 14px;</span></span>
<span class="line"><span style="color:#C3E88D;">        color:#000;</span></span>
<span class="line"><span style="color:#C3E88D;">        margin: 0;</span></span>
<span class="line"><span style="color:#C3E88D;">        padding: 0;</span></span>
<span class="line"><span style="color:#C3E88D;">        overflow-x: hidden;</span></span>
<span class="line"><span style="color:#C3E88D;">    }</span></span>
<span class="line"><span style="color:#C3E88D;">    ul, li {list-style-type:none;margin:0;padding:0;}</span></span>
<span class="line"><span style="color:#C3E88D;">    .tabs &gt; li { width: 20%; }</span></span>
<span class="line"><span style="color:#C3E88D;">    .tabs &gt; li &gt; a { color: #666; padding: 22px 0 20px 0; display: block; background: #fff; text-align: center; text-decoration: none; font-size: 15px; line-height: 20px; border-bottom: 2px solid transparent; -webkit-transition: all .2s ease-in-out; transition: all .2s ease-in-out; }</span></span>
<span class="line"><span style="color:#C3E88D;">    .tabs &gt; li.active &gt; a { border-bottom: 2px solid #cc0066; color: #cc0066; }</span></span>
<span class="line"><span style="color:#C3E88D;">     </span></span>
<span class="line"><span style="color:#C3E88D;">    /* 2016-05-13 수정 */</span></span>
<span class="line"><span style="color:#C3E88D;">    .swiper-container-2 { padding: 30px 0; overflow: hidden; }</span></span>
<span class="line"><span style="color:#C3E88D;">    .swiper-container-2 .swiper-slide { background:#fff; border:1px dashed #ccc; padding: 20px 15px; font-size: 20px; box-sizing: border-box; }</span></span>
<span class="line"><span style="color:#C3E88D;">    /* //2016-05-13 수정 */</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    #footer{background:pink;padding:20px 15px;font-size:16px;}</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;/style&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/head&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;body&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;!-- Swiper --&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;div class=&quot;swiper-container&quot;&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;ul class=&quot;swiper-wrapper tabs&quot;&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;li class=&quot;swiper-slide active&quot;&gt;&lt;a href=&quot;#&quot;&gt;뉴스&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;li class=&quot;swiper-slide&quot;&gt;&lt;a href=&quot;#&quot;&gt;연예&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;li class=&quot;swiper-slide&quot;&gt;&lt;a href=&quot;#&quot;&gt;스포츠&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;li class=&quot;swiper-slide&quot;&gt;&lt;a href=&quot;#&quot;&gt;웹툰뿜&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;li class=&quot;swiper-slide&quot;&gt;&lt;a href=&quot;#&quot;&gt;차테크&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;li class=&quot;swiper-slide&quot;&gt;&lt;a href=&quot;#&quot;&gt;쇼핑&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;li class=&quot;swiper-slide&quot;&gt;&lt;a href=&quot;#&quot;&gt;동영상&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;li class=&quot;swiper-slide&quot;&gt;&lt;a href=&quot;#&quot;&gt;리빙푸드&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;li class=&quot;swiper-slide&quot;&gt;&lt;a href=&quot;#&quot;&gt;20PICK&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;li class=&quot;swiper-slide&quot;&gt;&lt;a href=&quot;#&quot;&gt;추가메뉴-1&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;li class=&quot;swiper-slide&quot;&gt;&lt;a href=&quot;#&quot;&gt;추가메뉴-2&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;li class=&quot;swiper-slide&quot;&gt;&lt;a href=&quot;#&quot;&gt;추가메뉴-3&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;li class=&quot;swiper-slide&quot;&gt;&lt;a href=&quot;#&quot;&gt;추가메뉴-4&lt;/a&gt;&lt;/li&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;/ul&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;div class=&quot;swiper-container-2&quot;&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;div class=&quot;swiper-wrapper&quot;&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div class=&quot;swiper-slide&quot;&gt;뉴스&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div class=&quot;swiper-slide&quot;&gt;내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div class=&quot;swiper-slide&quot;&gt;스포츠&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div class=&quot;swiper-slide&quot;&gt;웹툰뿜&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div class=&quot;swiper-slide&quot;&gt;내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div class=&quot;swiper-slide&quot;&gt;쇼핑 내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div class=&quot;swiper-slide&quot;&gt;동영상&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div class=&quot;swiper-slide&quot;&gt;리빙푸드&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div class=&quot;swiper-slide&quot;&gt;내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div class=&quot;swiper-slide&quot;&gt;추가메뉴-1&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div class=&quot;swiper-slide&quot;&gt;내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div class=&quot;swiper-slide&quot;&gt;추가메뉴-3&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">            &lt;div class=&quot;swiper-slide&quot;&gt;내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">내용이 긴부분</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        &lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;div id=&quot;footer&quot;&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">        Footer 영역</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;/div&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;!-- Swiper JS --&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;script src=&quot;https://code.jquery.com/jquery-1.11.3.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/Swiper/7.0.7/swiper-bundle.min.js&quot;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;!-- Initialize Swiper --&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;script&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">    var swiper_1 = new Swiper(</span><span style="color:#89DDFF;">&#39;.</span><span style="color:#A6ACCD;">swiper</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, {</span></span>
<span class="line"><span style="color:#C3E88D;">        pagination: </span><span style="color:#89DDFF;">&#39;.</span><span style="color:#A6ACCD;">swiper</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">pagination</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">,</span></span>
<span class="line"><span style="color:#C3E88D;">        slidesPerView: 5,</span></span>
<span class="line"><span style="color:#C3E88D;">        paginationClickable: true,</span></span>
<span class="line"><span style="color:#C3E88D;">        spaceBetween: 0,</span></span>
<span class="line"><span style="color:#C3E88D;">        freeMode: true,</span></span>
<span class="line"><span style="color:#C3E88D;">        pagination: false</span></span>
<span class="line"><span style="color:#C3E88D;">    });</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    $(</span><span style="color:#89DDFF;">&#39;.</span><span style="color:#A6ACCD;">tabs </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> li </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">).on(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">click</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, function(e){</span></span>
<span class="line"><span style="color:#C3E88D;">        $(this).parent().addClass(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">).siblings().removeClass(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">);</span></span>
<span class="line"><span style="color:#C3E88D;">        var tabIdx = $(this).parent().index();</span></span>
<span class="line"><span style="color:#C3E88D;">        swiper_2.slideTo(tabIdx+1, 300);</span></span>
<span class="line"><span style="color:#C3E88D;">        e.preventDefault();</span></span>
<span class="line"><span style="color:#C3E88D;">    });</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    var tabLen = $(</span><span style="color:#89DDFF;">&#39;.</span><span style="color:#A6ACCD;">tabs </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> li</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">).length;</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    /* 2016-05-13 수정 */</span></span>
<span class="line"><span style="color:#C3E88D;">    var swiper_2 = new Swiper(</span><span style="color:#89DDFF;">&#39;.</span><span style="color:#A6ACCD;">swiper</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">-</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">, {</span></span>
<span class="line"><span style="color:#C3E88D;">        autoHeight: true,</span></span>
<span class="line"><span style="color:#C3E88D;">        slidesPerView: 1,</span></span>
<span class="line"><span style="color:#C3E88D;">        spaceBetween: 0,</span></span>
<span class="line"><span style="color:#C3E88D;">        pagination: false,</span></span>
<span class="line"><span style="color:#C3E88D;">        loop: true,</span></span>
<span class="line"><span style="color:#C3E88D;">        onInit: function(swiper){</span></span>
<span class="line"><span style="color:#C3E88D;">             </span></span>
<span class="line"><span style="color:#C3E88D;">        },</span></span>
<span class="line"><span style="color:#C3E88D;">        onSlideChangeStart: function(swiper){</span></span>
<span class="line"><span style="color:#C3E88D;">            var idx = swiper.activeIndex-1;</span></span>
<span class="line"><span style="color:#C3E88D;">            if( idx &lt; 0 ) { </span></span>
<span class="line"><span style="color:#C3E88D;">                idx = tabLen - 1;</span></span>
<span class="line"><span style="color:#C3E88D;">            } else if( idx == tabLen ){</span></span>
<span class="line"><span style="color:#C3E88D;">                idx = 0;</span></span>
<span class="line"><span style="color:#C3E88D;">            }</span></span>
<span class="line"><span style="color:#C3E88D;">            $(</span><span style="color:#89DDFF;">&#39;.</span><span style="color:#A6ACCD;">tabs </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> li</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">).removeClass(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">).eq(idx).addClass(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">active</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">);</span></span>
<span class="line"><span style="color:#C3E88D;">            if( idx &lt; tabLen ) {</span></span>
<span class="line"><span style="color:#C3E88D;">                swiper_1.slideTo(idx-1, 300);</span></span>
<span class="line"><span style="color:#C3E88D;">            }</span></span>
<span class="line"><span style="color:#C3E88D;">        }</span></span>
<span class="line"><span style="color:#C3E88D;">    });</span></span>
<span class="line"><span style="color:#C3E88D;">    /* //2016-05-13 수정 */</span></span>
<span class="line"><span style="color:#C3E88D;">  </span></span>
<span class="line"><span style="color:#C3E88D;">    &lt;/script&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/body&gt;</span></span>
<span class="line"><span style="color:#C3E88D;">&lt;/html&gt;</span></span>
<span class="line"></span></code></pre></div><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-no-flexbox</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">float</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-vertical</span><span style="color:#89DDFF;">&gt;.</span><span style="color:#FFCB6B;">swiper-wrapper</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-box-orient</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> vertical</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-box-orient</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> vertical</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-flex-direction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> column</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-flex-direction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> column</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex-direction</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> column</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-wrapper</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -webkit-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -moz-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -ms-flexbox</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -webkit-flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -webkit-transform</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -moz-transform</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-o-transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -o-transform</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -ms-transform</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> transform</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> content-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> content-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-sizing</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> content-box</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-android</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-wrapper</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-o-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-multirow</span><span style="color:#89DDFF;">&gt;.</span><span style="color:#FFCB6B;">swiper-wrapper</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-box-lines</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> multiple</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-box-lines</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> multiple</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-flex-wrap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> wrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-flex-wrap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> wrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex-wrap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> wrap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-free-mode</span><span style="color:#89DDFF;">&gt;.</span><span style="color:#FFCB6B;">swiper-wrapper</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transition-timing-function</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ease-out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transition-timing-function</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ease-out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-transition-timing-function</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ease-out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-o-transition-timing-function</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ease-out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transition-timing-function</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ease-out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-flex-shrink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-flex</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">flex-shrink</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-autoheight</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-autoheight</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-autoheight</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-wrapper</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-box-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> start</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-flex-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> start</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex-start</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">align-items</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> flex-start</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -webkit-transform</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -moz-transform</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-o-transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -o-transform</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -ms-transform</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> transform</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">height</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-notification</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-1000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-wp8-horizontal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-touch-action</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pan-y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">touch-action</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pan-y</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-wp8-vertical</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-touch-action</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pan-x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">touch-action</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pan-x</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-prev</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-button-next</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">27px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">44px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-22px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">cursor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pointer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-background-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">27px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">44px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-background-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">27px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">44px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">27px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">44px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-repeat</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> no-repeat</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-prev</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-disabled</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-button-next</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-disabled</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.35</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">cursor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-prev</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-rtl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-next</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%2027%2044&#39;%3E%3Cpath%20d%3D&#39;M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z&#39;%20fill%3D&#39;%23007aff&#39;%2F%3E%3C%2Fsvg%3E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-prev</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-black</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-rtl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-next</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-black</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%2027%2044&#39;%3E%3Cpath%20d%3D&#39;M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z&#39;%20fill%3D&#39;%23000000&#39;%2F%3E%3C%2Fsvg%3E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-prev</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-white</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-rtl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-next</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-white</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%2027%2044&#39;%3E%3Cpath%20d%3D&#39;M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z&#39;%20fill%3D&#39;%23ffffff&#39;%2F%3E%3C%2Fsvg%3E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-next</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-rtl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-prev</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%2027%2044&#39;%3E%3Cpath%20d%3D&#39;M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z&#39;%20fill%3D&#39;%23007aff&#39;%2F%3E%3C%2Fsvg%3E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-next</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-black</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-rtl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-prev</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-black</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%2027%2044&#39;%3E%3Cpath%20d%3D&#39;M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z&#39;%20fill%3D&#39;%23000000&#39;%2F%3E%3C%2Fsvg%3E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-next</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-white</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-rtl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-prev</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-button-white</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20viewBox%3D&#39;0%200%2027%2044&#39;%3E%3Cpath%20d%3D&#39;M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z&#39;%20fill%3D&#39;%23ffffff&#39;%2F%3E%3C%2Fsvg%3E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> center</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300ms</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300ms</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-o-transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300ms</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300ms</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-o-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-hidden</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-fraction</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-pagination-custom</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-horizontal</span><span style="color:#89DDFF;">&gt;.</span><span style="color:#FFCB6B;">swiper-pagination-bullets</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-bullet</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> inline-block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#FFCB6B;">button</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-bullet</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">box-shadow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-appearance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-appearance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-appearance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">appearance</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-clickable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-bullet</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">cursor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> pointer</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-white</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-bullet</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-bullet-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">007aff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-white</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-bullet-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-black</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-bullet-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-vertical</span><span style="color:#89DDFF;">&gt;.</span><span style="color:#FFCB6B;">swiper-pagination-bullets</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-o-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">translate3d</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">-50%</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-vertical</span><span style="color:#89DDFF;">&gt;.</span><span style="color:#FFCB6B;">swiper-pagination-bullets</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-bullet</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-horizontal</span><span style="color:#89DDFF;">&gt;.</span><span style="color:#FFCB6B;">swiper-pagination-bullets</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-bullet</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-progress</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.25</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-progress</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-progressbar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">007aff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">scale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">scale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-o-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">scale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">scale</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-o-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-rtl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-progress</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-progressbar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> right top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> right top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> right top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-o-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> right top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> right top</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-horizontal</span><span style="color:#89DDFF;">&gt;.</span><span style="color:#FFCB6B;">swiper-pagination-progress</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-vertical</span><span style="color:#89DDFF;">&gt;.</span><span style="color:#FFCB6B;">swiper-pagination-progress</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-progress</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-white</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-progress</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-white</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-progressbar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">fff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-progress</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-black</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-pagination-progressbar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-perspective</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-perspective</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-o-perspective</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">perspective</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-wrapper</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-left</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-right</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-top</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-bottom</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-cube-shadow</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transform-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> preserve-3d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transform-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> preserve-3d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-transform-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> preserve-3d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> preserve-3d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-left</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-right</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-top</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-bottom</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-left</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -webkit-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">linear</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">left top</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">right top</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">)),</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">-webkit-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">-moz-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">-o-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(to</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -webkit-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">linear</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">right top</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">left top</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">)),</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">-webkit-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">-moz-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">-o-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(to</span><span style="color:#A6ACCD;"> right</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-top</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -webkit-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">linear</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">left top</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">left bottom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">)),</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">-webkit-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">bottom</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">-moz-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">bottom</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">-o-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">bottom</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(to</span><span style="color:#A6ACCD;"> top</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-3d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-bottom</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> -webkit-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">linear</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">left bottom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">left top</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">from</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">)),</span><span style="color:#A6ACCD;">to</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">)));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">-webkit-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">-moz-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">-o-linear-gradient</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">top</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">linear-gradient</span><span style="color:#89DDFF;">(to</span><span style="color:#A6ACCD;"> bottom</span><span style="color:#89DDFF;">,</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">),</span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">));</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-coverflow</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-wrapper</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-flip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-wrapper</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-perspective</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1200px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-flip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> visible</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-flip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-backface-visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-backface-visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-backface-visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">backface-visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-flip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-active</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-flip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-active</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-active</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-flip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-top</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-flip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-top</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-bottom</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-flip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-bottom</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-left</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-flip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-left</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-right</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-flip</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-shadow-right</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-backface-visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-backface-visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-backface-visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">backface-visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-rtl</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-active</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-next</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-prev</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-next</span><span style="color:#89DDFF;">+.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">visibility</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> visible</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-cube</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-cube-shadow</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0.6</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">blur</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">filter</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">blur</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-fade</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-free-mode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transition-timing-function</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ease-out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transition-timing-function</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ease-out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-transition-timing-function</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ease-out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-o-transition-timing-function</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ease-out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transition-timing-function</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> ease-out</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-fade</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> opacity</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> opacity</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-o-transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> opacity</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transition-property</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> opacity</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-fade</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-fade</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-active</span><span style="color:#89DDFF;">,.</span><span style="color:#FFCB6B;">swiper-container-fade</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-slide-active</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-scrollbar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-ms-touch-action</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.1</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-horizontal</span><span style="color:#89DDFF;">&gt;.</span><span style="color:#FFCB6B;">swiper-scrollbar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">bottom</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">98%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-container-vertical</span><span style="color:#89DDFF;">&gt;.</span><span style="color:#FFCB6B;">swiper-scrollbar</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">right</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">98%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-scrollbar-drag</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> relative</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rgba</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0.5</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-radius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-scrollbar-cursor-drag</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">cursor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> move</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-lazy-preloader</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">42px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">42px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> absolute</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-21px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">-21px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">transform-origin</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-animation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> swiper-preloader-spin </span><span style="color:#F78C6C;">1s</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">steps</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">end</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> infinite</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-moz-animation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> swiper-preloader-spin </span><span style="color:#F78C6C;">1s</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">steps</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">end</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> infinite</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">animation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> swiper-preloader-spin </span><span style="color:#F78C6C;">1s</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">steps</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">end</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> infinite</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-lazy-preloader</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">content</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D&#39;0%200%20120%20120&#39;%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20xmlns%3Axlink%3D&#39;http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink&#39;%3E%3Cdefs%3E%3Cline%20id%3D&#39;l&#39;%20x1%3D&#39;60&#39;%20x2%3D&#39;60&#39;%20y1%3D&#39;7&#39;%20y2%3D&#39;27&#39;%20stroke%3D&#39;%236c6c6c&#39;%20stroke-width%3D&#39;11&#39;%20stroke-linecap%3D&#39;round&#39;%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.27&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.27&#39;%20transform%3D&#39;rotate(30%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.27&#39;%20transform%3D&#39;rotate(60%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.27&#39;%20transform%3D&#39;rotate(90%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.27&#39;%20transform%3D&#39;rotate(120%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.27&#39;%20transform%3D&#39;rotate(150%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.37&#39;%20transform%3D&#39;rotate(180%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.46&#39;%20transform%3D&#39;rotate(210%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.56&#39;%20transform%3D&#39;rotate(240%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.66&#39;%20transform%3D&#39;rotate(270%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.75&#39;%20transform%3D&#39;rotate(300%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.85&#39;%20transform%3D&#39;rotate(330%2060%2C60)&#39;%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">50%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">-webkit-background-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-repeat</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> no-repeat</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">swiper-lazy-preloader-white</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">after</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background-image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D&#39;0%200%20120%20120&#39;%20xmlns%3D&#39;http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg&#39;%20xmlns%3Axlink%3D&#39;http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink&#39;%3E%3Cdefs%3E%3Cline%20id%3D&#39;l&#39;%20x1%3D&#39;60&#39;%20x2%3D&#39;60&#39;%20y1%3D&#39;7&#39;%20y2%3D&#39;27&#39;%20stroke%3D&#39;%23fff&#39;%20stroke-width%3D&#39;11&#39;%20stroke-linecap%3D&#39;round&#39;%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.27&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.27&#39;%20transform%3D&#39;rotate(30%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.27&#39;%20transform%3D&#39;rotate(60%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.27&#39;%20transform%3D&#39;rotate(90%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.27&#39;%20transform%3D&#39;rotate(120%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.27&#39;%20transform%3D&#39;rotate(150%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.37&#39;%20transform%3D&#39;rotate(180%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.46&#39;%20transform%3D&#39;rotate(210%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.56&#39;%20transform%3D&#39;rotate(240%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.66&#39;%20transform%3D&#39;rotate(270%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.75&#39;%20transform%3D&#39;rotate(300%2060%2C60)&#39;%2F%3E%3Cuse%20xlink%3Ahref%3D&#39;%23l&#39;%20opacity%3D&#39;.85&#39;%20transform%3D&#39;rotate(330%2060%2C60)&#39;%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@-webkit-keyframes</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">swiper-preloader-spin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">100%</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">-webkit-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">360deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">@keyframes</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">swiper-preloader-spin</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">100%</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#B2CCD6;">transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">rotate</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">360deg</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,3);function C(n,y,i,A,B,E){return t(),l("div",null,[s("h1",r,[p(o(n.$frontmatter.title)+" ",1),D]),F])}const w=a(c,[["render",C]]);export{d as __pageData,w as default};
