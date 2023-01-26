import{_ as n,c as p,a as s,b as l,t as o,d as e,o as c}from"./app.ff46b2ef.js";const m=JSON.parse('{"title":"centos7 php 여러 버전 설치하기","description":"","frontmatter":{"title":"centos7 php 여러 버전 설치하기"},"headers":[{"level":2,"title":"준비물","slug":"준비물","link":"#준비물","children":[]},{"level":2,"title":"1. 외부 저장소 추가하기","slug":"_1-외부-저장소-추가하기","link":"#_1-외부-저장소-추가하기","children":[]},{"level":2,"title":"2. php 버전 마다 설치하기","slug":"_2-php-버전-마다-설치하기","link":"#_2-php-버전-마다-설치하기","children":[]},{"level":2,"title":"3. php fpm 설정","slug":"_3-php-fpm-설정","link":"#_3-php-fpm-설정","children":[]},{"level":2,"title":"4. nginx 에 설정에 접근합니다.","slug":"_4-nginx-에-설정에-접근합니다","link":"#_4-nginx-에-설정에-접근합니다","children":[]},{"level":2,"title":"5. 모든 디렉토리에 적절한 소유권 권한을 설정한다.","slug":"_5-모든-디렉토리에-적절한-소유권-권한을-설정한다","link":"#_5-모든-디렉토리에-적절한-소유권-권한을-설정한다","children":[]},{"level":2,"title":"6. nginx 서브 호스트 설정 추가하기","slug":"_6-nginx-서브-호스트-설정-추가하기","link":"#_6-nginx-서브-호스트-설정-추가하기","children":[]},{"level":2,"title":"참고 자료 :","slug":"참고-자료","link":"#참고-자료","children":[]},{"level":2,"title":"맺음말 :","slug":"맺음말","link":"#맺음말","children":[]}],"relativePath":"server/centos7 - php 여러 버전 설치하기.md","lastUpdated":null}'),t={name:"server/centos7 - php 여러 버전 설치하기.md"},r={id:"frontmatter-title",tabindex:"-1"},C=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=e(`<p>php 버전별로 설치 하기 주제로 포스팅 글을 남겨봅니다.</p><p>우선 각 버전 마다 설치를 합니다.</p><h2 id="준비물" tabindex="-1">준비물 <a class="header-anchor" href="#준비물" aria-hidden="true">#</a></h2><ul><li>설치 해야 될 버전 : 5.6, 7.4, 8</li></ul><h2 id="_1-외부-저장소-추가하기" tabindex="-1">1. 외부 저장소 추가하기 <a class="header-anchor" href="#_1-외부-저장소-추가하기" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://rpms.remirepo.net/enterprise/remi-release-7.rpm</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-php-버전-마다-설치하기" tabindex="-1">2. php 버전 마다 설치하기 <a class="header-anchor" href="#_2-php-버전-마다-설치하기" aria-hidden="true">#</a></h2><ul><li>5.6 설치하기</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--enablerepo=remi,</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remi-php56</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-bcmath</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-common</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-dba</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-dbg</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-devel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-embedded</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-enchant</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-fpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-gd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-gmp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-imap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-interbase</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-intl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-ldap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-litespeed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-mbstring</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-mcrypt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-mysqlnd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-odbc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-opcache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-pdo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-pgsql</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-process</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-pspell</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-recode</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-snmp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-soap</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-tidy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-xml</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-xmlrpc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-curl</span></span>
<span class="line"></span></code></pre></div><p>버전 확인</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span></code></pre></div><ul><li>7.4 설치하기</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum-config-manager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remi-php74</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-common</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-opcache</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-mcrypt</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-gd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-mysqlnd</span></span>
<span class="line"></span></code></pre></div><p>버전 확인</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span></code></pre></div><ul><li>8 버전 설치 하기</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum-utils</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum-config-manager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--disable</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">remi-php*</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum-config-manager</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remi-php80</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php-{cli,fpm,mysqlnd,zip,devel,gd,mbstring,curl,xml,pear,bcmath,json}</span></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">버전</span><span style="color:#C3E88D;"> 확인</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">\`\`\`</span><span style="color:#FFCB6B;">bash</span></span>
<span class="line"><span style="color:#FFCB6B;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span></span>
<span class="line"></span></code></pre></div><p>세 가지를 설치합니다.</p><h2 id="_3-php-fpm-설정" tabindex="-1">3. php fpm 설정 <a class="header-anchor" href="#_3-php-fpm-설정" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/php-fpm.d/www.conf</span><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">PHP </span><span style="color:#F78C6C;">7.1</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/opt/remi/php56/root/etc/php-fpm.d/www.conf</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">PHP </span><span style="color:#F78C6C;">5.6</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><p>위에 경로는 다를수 있다보니 일단 경로 부터 찾아본다.</p><p>주의 : php을 시작하는 동안 오류가 발생하는 경우 SELinux 정책이 시작을 차단할 수 있습니다. &quot;&quot;SELinux가 강제 모드 인 경우 허용 모드로 설정 한 다음 서비스를 다시 시작하십시오.&quot;</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">getenforce</span></span>
<span class="line"><span style="color:#FFCB6B;">setenforce</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"></span></code></pre></div><p>여기서 liten 을 로컬호스트 포트 로 지정한다.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">127.0.0.1:</span><span style="color:#F78C6C;">9000</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">php56-php-fpm</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">127.0.0.1:</span><span style="color:#F78C6C;">9001</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">php74-php-fpm</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">127.0.0.1:</span><span style="color:#F78C6C;">9002</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">php8-php-fpm</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php56-php-fpm</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php56-php-fpm</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php74-php-fpm</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php74-php-fpm</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">enable</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php8-php-fpm</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">start</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php8-php-fpm</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h2 id="_4-nginx-에-설정에-접근합니다" tabindex="-1">4. nginx 에 설정에 접근합니다. <a class="header-anchor" href="#_4-nginx-에-설정에-접근합니다" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/nginx/nginx.conf</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">upstream</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php_worker56</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">localhost:</span><span style="color:#F78C6C;">9000</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">upstream</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php_workers74</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">localhost:</span><span style="color:#F78C6C;">9001</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">upstream</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php_worker8</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">localhost:</span><span style="color:#F78C6C;">9002</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>중간 쯤에 위에 소스를 넣어준다.</p><p>그러고 해당 경로에 있는지 확인한다.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">ls</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/run/php-fpm</span></span>
<span class="line"></span></code></pre></div><h2 id="_5-모든-디렉토리에-적절한-소유권-권한을-설정한다" tabindex="-1">5. 모든 디렉토리에 적절한 소유권 권한을 설정한다. <a class="header-anchor" href="#_5-모든-디렉토리에-적절한-소유권-권한을-설정한다" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">chown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root:nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/www/html/example1.com/</span></span>
<span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">755</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/www/html/example1.com/</span></span>
<span class="line"><span style="color:#FFCB6B;">chown</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">root:nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/log/nginx/example1.com/</span></span>
<span class="line"><span style="color:#FFCB6B;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">660</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/log/nginx/example1.com/</span></span>
<span class="line"></span></code></pre></div><p>아래 방법 처럼 권한을 주면 된다.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0644</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{}</span><span style="color:#A6ACCD;"> \\;</span></span>
<span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-type</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-exec</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">chmod</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0755</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{}</span><span style="color:#A6ACCD;"> \\;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">chcon</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">httpd_sys_content_t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/data/www/html/sites/mysite</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span></span>
<span class="line"><span style="color:#FFCB6B;">chcon</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">httpd_sys_rw_content_t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/data/www/html/sites/mysite/logs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-R</span></span>
<span class="line"></span></code></pre></div><p>해당 경로로 접근해서 phpinfo 함수를 넣어준다.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php </span><span style="color:#82AAFF;">phpinfo</span><span style="color:#89DDFF;">();</span></span>
<span class="line"></span></code></pre></div><h2 id="_6-nginx-서브-호스트-설정-추가하기" tabindex="-1">6. nginx 서브 호스트 설정 추가하기 <a class="header-anchor" href="#_6-nginx-서브-호스트-설정-추가하기" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">vi</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/nginx/conf.d/example1.com.conf</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">listen</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">server_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">example1.com</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">www.example1.com</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">/var/www/html/example1.com/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">index</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.html</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.htm</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">#charset koi8-r;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">access_log</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/var/log/nginx/example1.com/example1_access_log</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">error_log</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">/var/log/nginx/example1.com/example1_error_log</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">error</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">try_files</span><span style="color:#A6ACCD;"> $uri $uri</span><span style="color:#C3E88D;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/index.php?</span><span style="color:#A6ACCD;">$query_string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;"># pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~</span><span style="color:#A6ACCD;"> \\.</span><span style="color:#C3E88D;">php</span><span style="color:#A6ACCD;">$ </span><span style="color:#C3E88D;">{</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">root</span><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">/var/www/html/example1.com/</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">fastcgi_pass</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">php_worker56</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#set port for php-fpm to listen on</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">fastcgi_index</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">index.php</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">fastcgi_param</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">SCRIPT_FILENAME</span><span style="color:#A6ACCD;">  $document_root$fastcgi_script_name</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;">         </span><span style="color:#C3E88D;">fastcgi_params</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#FFCB6B;">include</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/nginx/fastcgi_params</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><p>여기서 중효한게 fastcgi_pass 에 로컬 호스트 와 포트를 적절 하게 설정 해야한다.</p><p>각 php 버전마다 설정을 해야되서.. 판단을 잘해서 설정 해주면 된다.</p><p>그러나면 재 시작 을 해주면된다.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span></span>
<span class="line"><span style="color:#FFCB6B;">systemctl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">restart</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nginx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php56-php-fpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php74-php-fpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">php8-php-fpm</span></span>
<span class="line"></span></code></pre></div><h2 id="참고-자료" tabindex="-1">참고 자료 : <a class="header-anchor" href="#참고-자료" aria-hidden="true">#</a></h2><p><a href="https://ko.linux-console.net/?p=2310" target="_blank" rel="noreferrer">https://ko.linux-console.net/?p=2310</a></p><h2 id="맺음말" tabindex="-1">맺음말 : <a class="header-anchor" href="#맺음말" aria-hidden="true">#</a></h2><p>레시피대로 해서 버전별로 설치 하면 된다 하지만 시스템 구축하다보면 잘 안되는게 다반사인데..</p><p>구글링으로 알아서 찾아 봐야 한다. 증상은 다양해서 치료법은.. 구글링으로..</p>`,48);function D(a,A,i,h,d,F){return c(),p("div",null,[s("h1",r,[l(o(a.$frontmatter.title)+" ",1),C]),y])}const g=n(t,[["render",D]]);export{m as __pageData,g as default};
