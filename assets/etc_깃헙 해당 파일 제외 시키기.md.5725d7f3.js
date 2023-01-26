import{_ as a,c as l,a as s,b as p,t as e,d as o,o as c}from"./app.ff46b2ef.js";const u=JSON.parse('{"title":"깃헙 해당 파일 제외 시키기","description":"","frontmatter":{"title":"깃헙 해당 파일 제외 시키기"},"headers":[],"relativePath":"etc/깃헙 해당 파일 제외 시키기.md","lastUpdated":null}'),t={name:"etc/깃헙 해당 파일 제외 시키기.md"},i={id:"frontmatter-title",tabindex:"-1"},r=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=o(`<p>아래 명령어 참고한다.</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cached</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">git ignore add</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">혹은</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">아래꺼</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--set-upstream</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">브랜치명</span></span>
<span class="line"></span></code></pre></div><p>명령어로 업로드 하면 된다.</p><p>루트 위에다가 파일 하나를 만든다.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">gitignore</span></span>
<span class="line"></span></code></pre></div><p>파일 작성하기</p><p>여기서 아래 소스에서 제외 할 것들 추가 하면 된다.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># Directories #</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">build</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">bin</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">target</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">classes</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">META</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">INF</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OS Files #</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DS_Store</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#89DDFF;">.</span><span style="color:#C792EA;">class</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Package Files #</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">jar</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">war</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ear</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">######################</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Windows</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">######################</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Windows image file caches</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Thumbs</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">db</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Folder config file</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Desktop</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ini</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">######################</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># OSX</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">######################</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">DS_Store</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">svn</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Thumbnails</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">_</span><span style="color:#89DDFF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Files that might appear on external disk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Spotlight</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">V100</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Trashes</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">######################</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Eclipse</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">######################</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">pydevproject</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">project</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">metadata</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">bin</span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">tmp/**</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">tmp/**/</span><span style="color:#89DDFF;">*</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">tmp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">bak</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">swp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*~</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">nib</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">classpath</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">settings</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">loadpath</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">src</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">main</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">resources</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">rebel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># External tool builders</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">externalToolBuilders</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Locally stored &quot;Eclipse launch configurations&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">launch</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># CDT-specific</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">cproject</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># PDT-specific</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">buildpath</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Created by https://www.gitignore.io/api/intellij</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">### Intellij ###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Covers JetBrains IDEs: IntelliJ, RubyMine, PhpStorm, AppCode, PyCharm, CLion, Android Studio and Webstorm</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Reference: https://intellij-support.jetbrains.com/hc/en-us/articles/206544839</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># User-specific stuff:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#676E95;font-style:italic;">/**/</span><span style="color:#A6ACCD;">workspace</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#676E95;font-style:italic;">/**/</span><span style="color:#A6ACCD;">tasks</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">dictionaries</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Sensitive or high-churn files:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#676E95;font-style:italic;">/**/</span><span style="color:#A6ACCD;">dataSources</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#676E95;font-style:italic;">/**/</span><span style="color:#A6ACCD;">dataSources</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">ids</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#676E95;font-style:italic;">/**/</span><span style="color:#A6ACCD;">dataSources</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#676E95;font-style:italic;">/**/</span><span style="color:#A6ACCD;">dataSources</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#676E95;font-style:italic;">/**/</span><span style="color:#A6ACCD;">sqlDataSources</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#676E95;font-style:italic;">/**/</span><span style="color:#A6ACCD;">dynamic</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#676E95;font-style:italic;">/**/</span><span style="color:#A6ACCD;">uiDesigner</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># ci4</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">backend</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">writable</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">frontend</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">node_modules</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Gradle:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#676E95;font-style:italic;">/**/</span><span style="color:#A6ACCD;">gradle</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#676E95;font-style:italic;">/**/</span><span style="color:#A6ACCD;">libraries</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># CMake</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cmake</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">build</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">debug</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Mongo Explorer plugin:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#676E95;font-style:italic;">/**/</span><span style="color:#A6ACCD;">mongoSettings</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## File-based project format:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">*</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">iws</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">## Plugin-specific files:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># IntelliJ</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">out</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># mpeltonen/sbt-idea plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea_modules</span><span style="color:#89DDFF;">/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># JIRA plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">atlassian</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ide</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">plugin</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Cursive Clojure plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">replstate</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Crashlytics plugin (for Android Studio and IntelliJ)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">com_crashlytics_export_strings</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">crashlytics</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">properties</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">crashlytics</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">build</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">properties</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">fabric</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">properties</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">### Intellij Patch ###</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Comment Reason: https://github.com/joeblau/gitignore.io/issues/186#issuecomment-215987721</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># *.iml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># modules.xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># .idea/misc.xml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># *.ipr</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">​</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># Sonarlint plugin</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">idea</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">sonarlint</span></span>
<span class="line"></span></code></pre></div>`,8);function D(n,C,A,F,d,f){return c(),l("div",null,[s("h1",i,[p(e(n.$frontmatter.title)+" ",1),r]),y])}const m=a(t,[["render",D]]);export{u as __pageData,m as default};
