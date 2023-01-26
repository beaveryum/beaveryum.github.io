import{_ as a,c as l,a as s,b as p,t as o,d as e,o as c}from"./app.86428379.js";const t="/assets/2023-01-26-01.fa13a8ab.png",f=JSON.parse('{"title":"nginx 설정파일 백엔드 프론트엔드 분리","description":"","frontmatter":{"title":"nginx 설정파일 백엔드 프론트엔드 분리"},"headers":[],"relativePath":"etc/nginx 설정파일 백엔드 프론트엔드 분리.md","lastUpdated":1674745074000}'),r={name:"etc/nginx 설정파일 백엔드 프론트엔드 분리.md"},C={id:"frontmatter-title",tabindex:"-1"},y=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),D=e(`<p>아래 설정 파일은 frontend 와 backend 위주로 폴더 분리 해야된다.</p><p>소스코드</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">toyci4vue.beavertech.or.kr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">client_max_body_size</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">2G</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">access_log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/log/nginx/ci4_toy_vue.access.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">error_log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/log/nginx/ci4_toy_vue.error.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">error_page</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">502</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">503</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">504</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/50x.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">autoindex</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">charset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">utf-</span><span style="color:#F78C6C;">8</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/ci4_toy_vue/frontend/dist</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">try_files</span><span style="color:#A6ACCD;"> $uri $uri</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/api</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/ci4_toy_vue/backend/public</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/api/</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">try_files</span><span style="color:#A6ACCD;"> $uri $uri</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/index.php?/</span><span style="color:#A6ACCD;">$request_uri</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.php</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;"> \\.</span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> $newurl $request_uri</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$newurl </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> ^/api/</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> $newurl </span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/ci4_toy_vue/backend/public</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">fastcgi_split_path_info</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">+\\.php</span><span style="color:#89DDFF;">)(</span><span style="color:#FFCB6B;">/</span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">+</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fastcgi_params</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">fastcgi_pass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php_worker</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">fastcgi_index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.php</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">fastcgi_param</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SCRIPT_FILENAME</span><span style="color:#A6ACCD;"> $document_root$fastcgi_script_name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">fastcgi_intercept_errors</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">fastcgi_buffer_size</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">16k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">fastcgi_buffers</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">16k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(!</span><span style="color:#FFCB6B;">-e</span><span style="color:#A6ACCD;"> $request_filename </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/index.php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">last</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">\\. </span><span style="color:#C3E88D;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">deny</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">app</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">system</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">vendor</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">Themes</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">tests</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">403</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>여기서 추가적으로 nuxt 기준으로 한다면?</p><p>서버폴더는 내부에 따로 있음</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;">       </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">beaverbuilder.beavertech.or.kr</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/beaverbuilder/dist</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.htm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.php</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">X-Frame-Options</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">SAMEORIGIN</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">X-XSS-Protection</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1; mode=block</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">add_header</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">X-Content-Type-Options</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nosniff</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">access_log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/log/nginx/beaverbuilder.access.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">error_log</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">/var/log/nginx/beaverbuilder.error.log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">error_page</span><span style="color:#A6ACCD;">  </span><span style="color:#F78C6C;">404</span><span style="color:#A6ACCD;">              </span><span style="color:#C3E88D;">/404.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">error_page</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">500</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">502</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">503</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">504</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/50x.php</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/50x.php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">/etc/nginx/block</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;"># 접근 제한 -  업로드 디렉토리에서 PHP 실행 제한</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/writable/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;"> \\.</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">php</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">html</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">htm</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">inc</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">deny</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#FFCB6B;">try_files</span><span style="color:#A6ACCD;"> $uri $uri</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/index.html</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/api</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/beaverbuilder/server/public</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/api/</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">break</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#FFCB6B;">try_files</span><span style="color:#A6ACCD;"> $uri $uri</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/index.php?/</span><span style="color:#A6ACCD;">$request_uri</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;"> \\.</span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> $newurl $request_uri</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">$newurl </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;"> ^/api/</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> $newurl </span><span style="color:#A6ACCD;font-style:italic;">$1</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">              </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/home/beaverbuilder/server/public</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">fastcgi_split_path_info</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">+\\.php</span><span style="color:#89DDFF;">)(</span><span style="color:#FFCB6B;">/</span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">+</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fastcgi_params</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">fastcgi_pass</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php_worker81</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">fastcgi_index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.php</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">fastcgi_param</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SCRIPT_FILENAME</span><span style="color:#A6ACCD;"> $document_root$fastcgi_script_name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">fastcgi_intercept_errors</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">fastcgi_buffer_size</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">16k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">fastcgi_buffers</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">4</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">16k</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(!</span><span style="color:#FFCB6B;">-e</span><span style="color:#A6ACCD;"> $request_filename </span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">rewrite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^</span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">.</span><span style="color:#FFCB6B;">*</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">/index.php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">last</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^/</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">app</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">system</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">vendor</span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">tests</span><span style="color:#89DDFF;">)</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">403</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/favicon.ico</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">access_log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">log_not_found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/robots.txt</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">access_log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">log_not_found</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">off</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">error_page</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">404</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/index.php</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;">\\. </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#FFCB6B;">deny</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">all</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>이렇게 내부에 server 폴더 있어야된다.</p><p><img src="`+t+'" alt="2023-01-26-01"></p><p>참고 자료 :</p><p><a href="https://gist.github.com/mreschke/27bfafb84add38d3bab8" target="_blank" rel="noreferrer">https://gist.github.com/mreschke/27bfafb84add38d3bab8</a></p>',10);function F(n,A,i,B,E,_){return c(),l("div",null,[s("h1",C,[p(o(n.$frontmatter.title)+" ",1),y]),D])}const u=a(r,[["render",F]]);export{f as __pageData,u as default};
