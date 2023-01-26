import{_ as p,c as t,a as s,b as e,t as l,d as n,o}from"./app.ff46b2ef.js";const r="/assets/2023-01-26-001.b05f5098.png",i="/assets/2023-01-26-002.5eed92a6.png",c="/assets/2023-01-26-003.15903830.png",h="/assets/2023-01-26-004.62859ddf.png",v=JSON.parse('{"title":"aws lightsail ssh 접속 불가 문제","description":"","frontmatter":{"title":"aws lightsail ssh 접속 불가 문제"},"headers":[{"level":2,"title":"원인 :","slug":"원인","link":"#원인","children":[]},{"level":2,"title":"해결 방법 :","slug":"해결-방법","link":"#해결-방법","children":[]}],"relativePath":"server/aws lightsail ssh 접속 불가 문제.md","lastUpdated":null}'),_={name:"server/aws lightsail ssh 접속 불가 문제.md"},d={id:"frontmatter-title",tabindex:"-1"},C=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),y=n('<p>센토환경에서 ssh 접속 불가 문제 생길 경우</p><h2 id="원인" tabindex="-1">원인 : <a class="header-anchor" href="#원인" aria-hidden="true">#</a></h2><p>루트 비밀번호를 잊어버려서 접속을 못하거나 텀키를 잊어버려서 접속 못하는 상황이다.</p><h2 id="해결-방법" tabindex="-1">해결 방법 : <a class="header-anchor" href="#해결-방법" aria-hidden="true">#</a></h2><p>1 . 해당 인스턴스에서 스냅샷를 하나 만든다.</p><p><img src="'+r+'" alt="111.png" title="111.png"></p><ol start="2"><li>홈으로 접근해서 스냅샷을 접근한다.</li></ol><p><img src="'+i+'" alt="222.png" title="222.png"></p><ol start="3"><li>새 인스턴스 만들기</li></ol><p><img src="'+c+'" alt="333.png" title="333.png"></p><p>여기서 중요한게 펌키가 있는지 없는지를 확인해야됩니다. 펌키 없으면 새 인스턴스만들때 새로 생성하면됩니다.</p><p>만약에 펌키를 새로 생성하려면 맨 위에 메뉴바에 계정 ▼ 를 누릅니다.</p><p>그리고 계정 눌러서 접근하면 되고 여기서 프로필 및 연락처 옆에 ssh키 를 눌러서 접근합니다.</p><p>키페어 생성하기를 눌러주면 됩니다.</p><p>중요한게 펌키를 꼭 필수로 가지고 있어야됩니다.</p><p>여기서 새로 만들면 되지만 자주 만들면 보안에 취약할 수 있어서 주의해야됩니다.</p><ol start="4"><li>시작 스크립트에 추가한다.</li></ol><p><img src="'+h+`" alt="444.png" title="444.png"></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remove</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssh-server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssh-clients</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssh-askpass</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yum</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-y</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssh-server</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssh-clients</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">openssh-askpass</span></span>
<span class="line"></span></code></pre></div><p>위에 명령어를 그대로 넣으면 된다.</p><p>그리고나서 인스턴스 명을 지정하고 인스턴스 생성 하기 누르면 된다.</p><p>(새 인스턴스 만들때 가격때랑 옵션 같은거는 변경 해도 되는데 필자 같은 경우에는 그냥 그대로 적용했습니다.)</p><p>스크립트쪽에만 넣었고 나머진 바뀐게 없이 그대로 적용 했습니다.</p><ol start="5"><li>브라우저 터미널을 접근한다.</li></ol><p>이게 바로 되지 않아서 처음에 접근하고 &quot;오류가 발생하여 인스턴스에 연결하거나 연결 상태를 유지할 수 없습니다. 이 인스턴스가 방금 시작된 경우 1~2분 후에 다시 시도하십시오.&quot;</p><p>이런 메시지가 뜬다면</p><p>1~3번정도 재부팅 을 하다보면 &quot;로그인에 실패했습니다. 이 인스턴스가 방금 시작된 경우 1~2분 후에 다시 시도하십시오.&quot; 이 메시지가 나온다. 메시지가 분명히 나옵니다.</p><p>이때 putty 혹은 terminal로 접근해서 계정 로그인 하면 접속 됩니다.</p><p>포트번호는 당연히 22 포트로 하면 되고 비밀번호는 필요 없이 그냥 펌키만 적용해주면 됩니다.</p><p>참고로 요금은 그대로 나옵니다. 하루정도만 소요했기 때문에..</p>`,30);function g(a,A,D,m,u,f){return o(),t("div",null,[s("h1",d,[e(l(a.$frontmatter.title)+" ",1),C]),y])}const b=p(_,[["render",g]]);export{v as __pageData,b as default};
