import{_ as s,c as n,a as t,b as o,t as a,o as _}from"./app.ff46b2ef.js";const B=JSON.parse('{"title":"사파리 css 관련해서 주의사항","description":"","frontmatter":{"title":"사파리 css 관련해서 주의사항"},"headers":[],"relativePath":"html&css/사파리 css 관련해서 주의사항.md","lastUpdated":null}'),l={name:"html&css/사파리 css 관련해서 주의사항.md"},c={id:"frontmatter-title",tabindex:"-1"},i=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-hidden":"true"},"#",-1),r=t("p",null,"일단 사파리브라우저에서는 전처럼 float css가 잘 안먹힐때가 있다.",-1),d=t("p",null,"크롬이나 파폭은 아무 문제 없이 잘되는데.. 사파리만 유독 안먹힌다..",-1),h=t("p",null,"그래서 display:flex로 해서 justify-content: right; 이걸로 정렬을 해야된다. 이렇게 해도 안먹힌다면",-1),p=t("p",null,"-webkit-align-items: flex-end;",-1),f=t("p",null,"justify-content: flex-end; 으로 한다. 앞에 웹킷 이라고 따로 추가하면 먹힌다.",-1),u=t("p",null,"그리고 가로로 쭈욱 나열되다가 밑으로 꺽여서 줄 바꿈이 생기는데 line-height로 해서 균형을 맞춰야된다.",-1),m=t("p",null,"이것도 문제가 된다면 white-space:nowrap 을 주게 되면 먹힌다.",-1);function x(e,g,$,y,b,k){return _(),n("div",null,[t("h1",c,[o(a(e.$frontmatter.title)+" ",1),i]),r,d,h,p,f,u,m])}const N=s(l,[["render",x]]);export{B as __pageData,N as default};
