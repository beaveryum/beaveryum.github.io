import{_ as a,c as l,a as s,b as p,t as o,d as e,o as t}from"./app.a1a9e66d.js";const f=JSON.parse('{"title":"엔진엑스 설정 (최종 원본)","description":"","frontmatter":{"title":"엔진엑스 설정 (최종 원본)"},"headers":[],"relativePath":"etc/엔진엑스 설정 (최종 원본).md","lastUpdated":1674745074000}'),c={name:"etc/엔진엑스 설정 (최종 원본).md"},r={id:"frontmatter-title",tabindex:"-1"},C=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=e(`<p>참고해서 응용하면 된다.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">user</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">worker_processes</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">auto</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">error_log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/log/nginx/error.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">pid</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/run/nginx.pid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#include /usr/share/nginx/modules/*.conf;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">events</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">worker_connections</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1024</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">multi_accept</span><span style="color:#A6ACCD;">       </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">use</span><span style="color:#A6ACCD;">                </span><span style="color:#C3E88D;">epoll</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">http</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                      &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#                      &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">access_log</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">/var/log/nginx/access.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">server_tokens</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">gzip</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">client_max_body_size</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">120m</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">fastcgi_buffers</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">16k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">fastcgi_buffer_size</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">32k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">fastcgi_connect_timeout</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">fastcgi_send_timeout</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">fastcgi_read_timeout</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">sendfile</span><span style="color:#A6ACCD;">            </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">tcp_nopush</span><span style="color:#A6ACCD;">          </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">tcp_nodelay</span><span style="color:#A6ACCD;">         </span><span style="color:#C3E88D;">on</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">keepalive_timeout</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">65</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">types_hash_max_size</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4096</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;">             </span><span style="color:#C3E88D;">/etc/nginx/mime.types</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">default_type</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">application/octet-stream</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">upstream</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php_worker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">unix:/var/run/php-fpm/php-fpm.sock</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># HTTP 1.1 support</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_http_version</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1.1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_buffering</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Host</span><span style="color:#A6ACCD;"> $http_host</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Upgrade</span><span style="color:#A6ACCD;"> $http_upgrade</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">X-Real-IP</span><span style="color:#A6ACCD;"> $remote_addr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">X-Forwarded-For</span><span style="color:#A6ACCD;"> $proxy_add_x_forwarded_for</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Mitigate httpoxy attack (see README for details)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">proxy_set_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Proxy</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># Load modular configuration files from the /etc/nginx/conf.d directory.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># See http://nginx.org/en/docs/ngx_core_module.html#include</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;"># for more information.</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/nginx/conf.d/</span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">.conf</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,2);function D(n,i,A,F,_,d){return t(),l("div",null,[s("h1",r,[p(o(n.$frontmatter.title)+" ",1),C]),y])}const u=a(c,[["render",D]]);export{f as __pageData,u as default};
