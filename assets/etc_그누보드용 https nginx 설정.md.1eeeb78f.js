import{_ as a,c as l,a as s,b as p,t as o,d as e,o as t}from"./app.ff46b2ef.js";const f=JSON.parse('{"title":"그누보드용 https nginx 설정","description":"","frontmatter":{"title":"그누보드용 https nginx 설정"},"headers":[],"relativePath":"etc/그누보드용 https nginx 설정.md","lastUpdated":null}'),c={name:"etc/그누보드용 https nginx 설정.md"},r={id:"frontmatter-title",tabindex:"-1"},C=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=e(`<p>엔진엑스 전용 설정</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">::</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">:80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">beaverfactory.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">/home/beaverfactory</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;">      </span><span style="color:#F78C6C;">301</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://</span><span style="color:#A6ACCD;">$host$request_uri</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">443</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ssl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">::</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">:443 </span><span style="color:#C3E88D;">ssl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http2</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">beaverfactory.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/beaverfactory</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.htm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.php</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">access_log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/log/nginx/beaverfactory.access.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">error_log</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">/var/log/nginx/beaverfactory.error.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;"># SSL sessions</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">ssl_session_cache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shared:SSL:40m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">ssl_session_timeout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">4h</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">ssl_session_tickets</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">ssl_certificate</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/letsencrypt/live/beaverfactory.com/fullchain.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">ssl_certificate_key</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/letsencrypt/live/beaverfactory.com/privkey.pem</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">error_page</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">404</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">/404.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">error_page</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">502</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">503</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">504</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/50x.php</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/50x.php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">/etc/nginx/block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#### 그누보드5 nginx rules BEGIN #####</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(!</span><span style="color:#FFCB6B;">-e</span><span style="color:#A6ACCD;"> $request_filename</span><span style="color:#89DDFF;">){</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/content/</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">-9a-zA-Z_</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/bbs/content.php?co_id=</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">rewrite</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/content/</span><span style="color:#89DDFF;">([</span><span style="color:#A6ACCD;">^/</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/bbs/content.php?co_seo_title=</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">rewrite</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/rss/</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">-9a-zA-Z_</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/bbs/rss.php?bo_table=</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/orderform</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/theme/factory/orderform.php?item_code=</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">rewrite</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/order_confirm</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/theme/factory/order_confirm.php?order_code=</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">rewrite</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/mypage</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/theme/factory/mypage.php?mode=</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">rewrite</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/list/</span><span style="color:#89DDFF;">([</span><span style="color:#A6ACCD;">^/</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/theme/factory/list.php?cate_id=</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">rewrite</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/detail/</span><span style="color:#89DDFF;">([</span><span style="color:#A6ACCD;">^/</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/theme/factory/detail.php?item_code=</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">rewrite</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">-9a-zA-Z_</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/bbs/board.php?bo_table=</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">rewrite</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">-9a-zA-Z_</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">/write</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/bbs/write.php?bo_table=</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">rewrite</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">-9a-zA-Z_</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">([</span><span style="color:#A6ACCD;">^/</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/bbs/board.php?bo_table=</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">wr_seo_title</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;font-style:italic;">$2</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">rewrite</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">-9a-zA-Z_</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">([</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">-</span><span style="color:#F78C6C;">9</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">+</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/bbs/board.php?bo_table=</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">wr_id</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;font-style:italic;">$2</span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">rewrite</span><span style="color:#89DDFF;">=</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#### 그누보드5 nginx rules END #####</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/favicon.ico</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log_not_found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">access_log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/robots.txt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">log_not_found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">access_log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">allow</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;"> \\.</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">gif</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">jpg</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">png</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Vary</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Accept-Encoding</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Cache-Control</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">public, no-transform, max-age=31536000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 업로드시 파일+내용 최대 크기.  php.ini 의 post_max_size 값과 동일하게 설정.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">client_max_body_size</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">30m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 브라우저에 캐싱을 위해, 리소스 만료일 지정</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">.</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">mp4</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">ogg</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">ogv</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">svg</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">svgz</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">eot</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">otf</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">woff</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">woff2</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">ttf</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">rss</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">atom</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">ico</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">zip</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">tgz</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">gz</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">rar</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">bz2</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">doc</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">xls</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">exe</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">ppt</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">tar</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">mid</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">midi</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">wav</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">bmp</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">rtf</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">cur</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Cache-Control</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">max-age=31536000</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#FFCB6B;">access_log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">### 주의) 접근 제한 설정은 PHP FastCGI 설정보다 먼저 선언되어야 합니다. ###</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 접근 제한 - .htaccess 와 버전관리 시스템들</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">\\.ht</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">\\.git</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">\\.svn</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">access_log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">log_not_found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">deny</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 접근 제한 - 그누보드 업로드 디렉토리에서 PHP 실행 제한</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/data/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;"> \\.</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">php</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">html</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">htm</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">inc</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#FFCB6B;">deny</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 접근 제한 - 그누보드 파일 세션</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/data/session/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">deny</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># 접근 제한 - 캡챠</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/bbs/fonts/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">deny</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">try_files</span><span style="color:#A6ACCD;"> $uri $uri</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#F78C6C;">404</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;"> \\.</span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#FFCB6B;">fastcgi_split_path_info</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">+\\.php</span><span style="color:#89DDFF;">)(</span><span style="color:#FFCB6B;">/</span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">+</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#     fastcgi_pass php_worker56;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">fastcgi_pass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php_worker74</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#      fastcgi_pass php_worker81;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">fastcgi_index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.php</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fastcgi_params</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#FFCB6B;">fastcgi_param</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SCRIPT_FILENAME</span><span style="color:#A6ACCD;"> $document_root$fastcgi_script_name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,2);function D(n,F,A,i,B,E){return t(),l("div",null,[s("h1",r,[p(o(n.$frontmatter.title)+" ",1),C]),y])}const d=a(c,[["render",D]]);export{f as __pageData,d as default};
