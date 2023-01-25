const n=/[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]/,e=[{title:"ci4 설치하기",content:`
# {{ $frontmatter.title }}

`,link:"/ci4/설치하기"},{title:"vitepress 로 가이드 만든 방법",content:`
# {{ $frontmatter.title }}


## 1. node 설치 하기 (원래 설치 됐으면 넘긴다.)

## 2. mydoc 폴더를 하나 만들기 (응용해서 폴더명 짓는다.)

## 3. 터미널 열고 명령어 입력한다.

\`\`\`bash
cd mydoc
\`\`\`
## 4. 패키지 생성(초기화)

\`\`\`bash
npm init

yarn init
\`\`\`

## 5. 아래 명령어 입력한다. 둘중에 하나 선택

\`\`\`bash
npm install -d vitepress vue

yarn add -d vitepress vue
\`\`\`

## 6. 아래 명령어 입력한다. 폴더 docs 만들어서 index.md 파일 만든다.
\`\`\`bash
mkdir docs && echo '# hello vitepress' > docs/index.md
\`\`\`

## 7. vitepress 테스트 실행한다.
\`\`\`bash
npx vitepress dev docs
\`\`\`



## 8. 패키지 초기화 내용에 아래 소스코드 추가한다.

\`\`\`json
"docs:dev": "vitepress dev docs",
"docs:build": "vitepress build docs",
"docs:preview": "vitepress preview docs"
\`\`\`

테스트 실행할때 아래 명령어로 한다.

yarn docs:dev


## 9. vitepress 설정 에 추가한다.

아래 패키지를 선택에 따라서 설치한다.

\`\`\`json
"devdependencies": {
    "@giscus/vue": "^2.2.6",
    "deepmerge": "^4.2.2",
    "vitepress": "^1.0.0-alpha.40",
    "vitepress-tags": "^0.6.5",
    "vue": "^3.2.45"
  },
  "dependencies": {
    "vitepress-plugin-auto-sidebar": "^1.0.5",
    "vitepress-plugin-simple-search": "^1.3.3"
  }
\`\`\`



만약에 없을경우 디렉토리 새로 만든다.


docs/.vitepress/config.js

위 경로 대로 파일을 만든다.

\`\`\`js
import { getsidebar } from 'vitepress-plugin-auto-sidebar';
import gettags from 'vitepress-tags';
import { defineconfig } from 'vitepress';

const pages = gettags({
    dir: "./docs",
    pattern: "/**/*.md",
    publicmedia: ["icon", "cover"],
    ignore: ["**/public/", "**/node_modules/**/*.md"],
    mediafolder: "_media",
})

export default defineconfig({
    head: [],
    lang: 'ko_kr',
    base: "/",
    markdown: {defaulthighlightlang: 'php'},
    lastupdated: true,
    titletemplate: ':title',
    title: "비버팩토리 기술 블로그",
    themeconfig: {
        sitetitle: '비버팩토리 기술 블로그',
        nav: [
            {
                text: "info",
                items: [
                    {text: "about", link: "/about/"},
                ]
            }
        ],
        sidebar: getsidebar({
            contentroot: '/docs/',
            contentdirs: ['php', 'macos', 'ci4', 'nodejs', 'mysql', 'etc', 'js', 'server', 'vue', '그누&영카트'],
            collapsible: true,
            collapsed: true
        }),
        customdata: {
            pages: pages
        },
        docfooter: {
            prev: '이전',
            next: '다음'
        },
        footer: {
            copyright: "copyright © 2022-2023 비버팩토리 it 블로그 all rights reserved",
        }
    },
});

\`\`\`

위 설정에서 중요한것을 설명한다면?

base: "/", 이부분은 뒷주소가 /docs 로 했을경우 base: "/docs/" 로 추가 해준다.
그리고 일부 애드센스를 넣으려면 
head 배열에다가 추가해야된다.
애드센스 는 구글링으로 직접 찾아본다.

그리고 여기 사이드바 소스 코드를 보면 
contentdirs 가 보일 것이다. 이건 사이드바에 노출할 것들을 수동으로 추가 해준다.
안그럼 노출 안되어서..



docs/.vitepress/theme 

custom.css 새로 만든다.

\`\`\`css
@import url('https://fonts.googleapis.com/css2?family=noto+sans+kr:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=noto+sans+kr:wght@100;300;400;500;700;900&family=roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

:root {
    --vp-c-brand: #ff7340;
    --vp-c-brand-light: #ff5719;
    --vp-c-brand-lighter: #ff7340;
    --vp-c-brand-lighter: rgba(255, 135, 23, 0.25);
    --vp-c-brand-dark: #ff622d;
    --vp-c-brand-darker: #e23c00;

    --vp-c-sponsor: #fd1d7c;

    /* typography */
    --vp-font-family-base: "noto sans kr", "roboto" sans-serif;

    /* code snippet font */
    --vp-font-family-mono: "noto sans kr", "roboto", sans-serif;
}
\`\`\` 

index.js 파일 만든다.


\`\`\`js
import { h, watch } from 'vue';
import defaulttheme from 'vitepress/theme';
import { usedata, useroute, userouter } from 'vitepress';
import comment from './comment.vue';
import "./custom.css";

export default {
    ...defaulttheme,
    layout() {
        const { isdark } = usedata();
        const route = useroute();
        const router = userouter();

        if (({}).node_env === 'production') {
            watch(route, (path) => {
                const el = document.queryselector('giscus-widget');
                if (el) {
                    el.update();
                }

                if (window.gtag) {
                    gtag('send', 'pageview', path);
                }
            }, { immediate: true });

            watch(isdark, (dark) => {
                const el = document.queryselector('giscus-widget');
                if (el) {
                    el.theme = dark ? 'transparent_dark' : 'light';
                }
            });

            return h(defaulttheme.layout, null, {
                'doc-footer-before': () => h(comment, { theme: isdark.value ? 'transparent_dark' : 'light' })
            })
        }

        return h(defaulttheme.layout, null, {
            'doc-footer-before': () => h('p', {style: 'text-align: center; font-size: 0.625rem;'}, ['댓글 출력 위치. (docs:dev 환경에서는 댓글을 출력하지 않음)'])
        });
    }
}
\`\`\`

comment.vue 파일 만든다.
\`\`\`js
<template>
    <clientonly>
        <div style="margin-top: 3rem;">
            <giscus
                    id="comments"
                    repo="beaveryum/beaveryum.github.io"
                    repoid="r_kgdoi1lxmw"
                    category="문서 댓글"
                    categoryid="dic_kwdoi1lxm84ctxzi"
                    mapping="pathname"
                    term=""
                    strict="0"
                    reactionsenabled="1"
                    emitmetadata="0"
                    inputposition="bottom"
                    :theme="theme"
                    lang="ko"
                    loading="lazy"
            />
        </div>
    </clientonly>
</template>

<script setup>
    import giscus from '@giscus/vue';
    defineprops({
        theme: string
    })
<\/script>
\`\`\`

여기서 필요한게 giscus 이 설치 됐는지 확인후에 없으면 아래 링크 보고 설치한다.

https://giscus.app/ko

사용법은 아래꺼 참고. 

https://dev-ujin.github.io/jekyll-blog/add-comments-and-likes-with-giscus

혹은 따로 구글링 할때 giscus 사용법 찾는다.


.gitignore 파일 만든다.
 
\`\`\`bash
docs/.vitepress/cache
docs/.vitepress/dist
node_modules
.idea
deploy.sh
\`\`\`


마지막 으로 검색창을 만들려면 

vitepress-plugin-simple-search 패키지를 설치한다.

그리고나서 ./docs/vite.config.js 파일을 만든다.

\`\`\`js
import { simplesearch } from "vitepress-plugin-simple-search";
import { defineconfig } from "vite";

export default defineconfig({
    plugins: [simplesearch({partialstoignore:['about'],regexforcontentstripping:''})],
});
\`\`\`

이렇게 소스코드를 넣어준다.

여기서 플러그인을 설명하자면 
partialstoignore 제외대상을 배열로 추가해준다.

regexforcontentstripping 정규식을 추가해준다.

한글,숫자,영문(대소문자) 로 추가해준다.

여기서 정규식을 추가 안하면 한글이 검색이 안된다. 

아래 링크 참고 하자..

https://github.com/stuyk/vitepress-plugin-simple-search


## 참고 자료 :

[매뉴얼](https://vitepress.vuejs.org/guide/getting-started) 

https://dev-ujin.github.io/jekyll-blog/add-comments-and-likes-with-giscus

https://giscus.app/ko


https://github.com/stuyk/vitepress-plugin-simple-search


`,link:"/etc/vitepress 가이드만들기"},{title:"깃헙 페이지에 등록하기",content:`
# {{ $frontmatter.title }}



## 1. 깃헙 주소를 하나 만든다.

예를들어서 "아이디.github.io" 라고 만든다.

커밋을 공개로 설정한다.

그리고 저장소를 생성한다.
 
여기 보고 참고한다.

https://phodobit.kr/49

참고는 대신에 저장소만 만들어 놓은다. 다른거 말고.. 



## 2. 아래 명령어로 main 에 등록해 놓은다.

\`\`\` base
git init
git add -a
git commit -m "feature: github action 자동배포"
git branch -m main
git remote add origin https://github.com/[:userid]/[:userid].github.io.git
git push -f origin main
\`\`\`


## 3. 빌드 해서 배포물 만든다.

\`\`\` base
# build
yarn docs:build
\`\`\`


## 4. 배포 후에 깃헙 등록하기 

배포 폴더 접근 후 
\`\`\` base
cd docs/.vitepress/dist
\`\`\`

깃헙에 등록한다. 아래 명령어 그대로 따라하면된다.

\`\`\` base
git init
git remote add origin https://github.com/[:userid]/[:userid].github.io.git
git pull origin gh-pages
git checkout -b gh-pages
git add -a
git commit -m 'deploy with vitepress'
git push -f origin gh-pages
cd -
\`\`\`


























`,link:"/etc/vitepress 깃헙등록하기"},{title:"깃헙에 등록 할때 에러문제",content:`
# {{ $frontmatter.title }}



만약에 깃헙을 새로 가입해서 만들었다고 치자 

그러면 깃헙 올릴때 에러 하나쯤 생긴다.


support for password authentication was removed on january 24, 2023. please use a personal access token instead. ... the requested url returned error: 403


아래 링크 참고한다.

https://leveloper.tistory.com/211 


여기서 한가지 덧붙여서 설명하자면 

::: danger
5. personal access token 생성 할때 

repo 는 최상위 체크 하고

workflow 도 같이 추가 한다.

user 도 추가한다.
:::

비밀번호는 토큰이라서 꼭 복붙해서 메모 해둔다. (중요해서..) 




깃헙 토큰 인증후 로그인 할때는 아래 처럼 한다.

::: info
$ git clone https://github.com/username/repo.git

username: your_username

password: your_token
::: 



만약에 맥os 일때 키체인이 등록 됐다면 

키체인 들어가서 github 검색 후 종류가 인터넷 암호인 항목을 수정 하던지

삭제 한다.


키 체인이 중복 될 수 없어서 원래 기록이 있었으면 삭제 후에 새로 만들던지 아니면 항목만 수정한다.


## 참고 자료 :


https://velog.io/@shin6949/github-token-%eb%b0%a9%ec%8b%9d%ec%9c%bc%eb%a1%9c-%eb%a1%9c%ea%b7%b8%ec%9d%b8%ed%95%98%ea%b8%b0-ch3ra7vc


[[github] refusing to allow a personal access token to create or update workflow 에러 해결](https://coding-nyan.tistory.com/61)






















`,link:"/etc/vitepress 깃헙에러문제"},{title:"비버팩토리 기술 블로그",content:"",link:"/index"},{title:"js",content:`
# {{ $frontmatter.title }}


자바스크립트 공부 및 에러 해결 방법에 대해서 기록을 저장 합니다.`,link:"/js/index"},{title:"macos",content:`
# {{ $frontmatter.title }}


macos 서버 방법과 에러 해결 방법에 대해서 기록을 저장 합니다.`,link:"/macos/index"},{title:"mysql",content:`
# {{ $frontmatter.title }}



mysql 공부 방법과 에러 해결 방법에 대해서 기록을 저장 합니다.`,link:"/mysql/index"},{title:"nodejs",content:`
# {{ $frontmatter.title }}


nodejs 공부 방법과 에러 해결 방법에 대해서 기록을 저장 합니다.`,link:"/nodejs/index"},{title:"count(): Argument #1 ($value) must be of type Countable|array, string",content:`
# {{ $frontmatter.title }}

## 원인 :

카운트 에러 날때 해결 방법 

php8 에서는 아래 방법을 써서 에러를 해결 하면된다.

\`\`\`php
count((array)$test) 
혹은 
count([$test])
\`\`\`

8이하 버전에서는 이렇게 예외처리를 통해서 처리 해야된다.

\`\`\`php
$aa = is_array($aa) ? count($aa) : 0 ;
\`\`\`


## 참고 자료 :

https://stackoverflow.com/questions/66671269/fatal-error-uncaught-typeerror-count-argument-1-var-must-be-of-type-cou`,link:"/php/count() : Argument ($value) must be of type Countable|array, string"},{title:"curl 와 file_get_contents 활성화 방법",content:`
# {{ $frontmatter.title }}


우선은 php 에서 오픈 됐는지 확인해야한다.



php.ini 로 접속해서 확인해본다. phpinfo(); 함수로도 확인 가능하다.

\`\`\`
vi /etc/opt/remi/php74/php.ini
\`\`\`

allow_url_fopen 옵션이 on 으로 활성화 됐는지 확인한다. 



그리고 

curl 은 disable_functions = curl_exec  관련된게 있는지 있으면 지운다.

(전부 다 지우면 문제 되어서 잘 보고 지워야 한다.)




## 참고 자료 : 

https://seoneu.tistory.com/25`,link:"/php/curl 와 file_get_contents 활성화 방법"},{title:"php",content:`
# {{ $frontmatter.title }}


php 공부 및 에러 해결 방법에 대해서 기록을 저장 합니다.`,link:"/php/index"},{title:"jquery php 구글 포토 를 이용해서 이미지 업로드 하기",content:`
# {{ $frontmatter.title }}



https://github.com/googleapis/google-api-php-client/tree/main/examples


https://stackoverflow.com/questions/49726542/how-to-access-google-photos-using-api-in-php 



https://www.jqueryscript.net/gallery/full-featured-image-viewer-gallery.html 



구글 포토 를 이용해서 이미지 업로드 하기


`,link:"/php/jquery php 구글 포토 를 이용해서 이미지 업로드 하기"},{title:"mmap() failed: [12] Cannot allocate memory",content:`
# {{ $frontmatter.title }}

## 원인 : 

컴포저 설치 하고나서 패키지 다운 받으려 하니까 에러가 생겼다.

mmap() failed: [12] cannot allocate memory


## 해결 방법 : 

php.ini 에서 따로 메모리 리미트를 -1로 하면 된다. 명령어로 하는 방법도 있어서 아래꺼로 입력 한다.

\`\`\`php
/bin/dd if=/dev/zero of=/var/swap.1 bs=1m count=1024 /sbin/mkswap /var/swap.1 /sbin/swapon /var/swap.1
\`\`\`



`,link:"/php/mmap() failed: [12] Cannot allocate memory"},{title:"path 프레임워크",content:`
# {{ $frontmatter.title }}


일단 참고만한다.

여기 보면 이양반이 프레임워크 만들려고 고생했는데 업데이트가 없어서.. 망한것 같은데 

일단 깃헙 주소만 남겨본다.


https://github.com/wharley01/path
`,link:"/php/path 프레임워크"},{title:"php file upload 할때 tmp null로 나올경우",content:`
# {{ $frontmatter.title }}



파일 업로드를 하는도중에 파일이 업로드가 되지 않아서 원인을 찾아봤다.

일단 디버깅부터 해서 파일 업로드 체크 하자..

 \`\`\`php
 print_r($_files);
 die();
 \`\`\`


이러고 에러 6번이 나온다.

upload_err_no_tmp_dir

 
구글링하니까 tmp 파일에 임시파일 업로드가 제대로 되지 않아서 에러가 나온다.

아래 참고 자료를 확인해서 tmp 로 경로를 잡아줬더니 제대로 업로드 된다.

 
여러 원인이 많아서 해결 하려면 에러코드 부터 찾아보고 원인에 맞게 설정을 줘야한다.

upload_max_file 머시기 등등 설정을 줘야된다.



## 해결 방법 :

 \`\`\`php
upload_tmp_dir = /tmp/
\`\`\`

## 참고 자료 :
 
https://blog.naver.com/postview.nhn?blogid=shiaru&logno=222300256531`,link:"/php/php file upload 할때 tmp null로 나올경우"},{title:"php meta og 태그 정보 가져오는 자료",content:`
# {{ $frontmatter.title }}



깃헙 주소 남겨본다.

https://github.com/baj84/metadata`,link:"/php/php meta og 태그 정보 가져오는 자료"},{title:"php timezone 문제",content:`
# {{ $frontmatter.title }}



개발 하다가 알게 된 사실인데 

타임존 설정을 함수를 이용해서 수정을 해도 안먹힐때가 있다.. 

그럴경우 php.ini에서 수정하는게 훨 낫다~ 

아무리 타임존 함수 해도 변경이 안될때가 있다니..`,link:"/php/php timezone 문제"},{title:"디자인 패턴 참고 문헌",content:`
# {{ $frontmatter.title }}


아래 링크 참고한다.

https://codingtalk.tistory.com/category/design%20pattern`,link:"/php/php 디자인 패턴 공부"},{title:"랜덤 함수 이용해서",content:`
# {{ $frontmatter.title }}


guest00~99 문자열 표시하기 

\`\`\`
echo "guest".str_pad(rand(0,99), 2, "0", str_pad_left)."~".str_pad(rand(0,99), 2, "0", str_pad_left);
\`\`\`

`,link:"/php/php 랜덤 함수"},{title:"php 백일로 표시하기 생후 000일",content:`
# {{ $frontmatter.title }}

아래 소스코드 참고한다.

\`\`\`php
echo "생후 " . (int)((time() - strtotime("2019-4-14")) / (24 * 60 * 60) + 1) . "일";
\`\`\``,link:"/php/php 백일로 표시하기 생후 000일"},{title:"php 서버 없이 실행하기",content:`
# {{ $frontmatter.title }}


일단 파일 구조가 

public/index.php 로 있어야된다.

없으면 퍼블릭 내부에 인덱스 파일 만든다.





파일을 만든다

파일명 : run.sh

아래 소스코드 추가한다.

\`\`\`php
#!/usr/bin/env bash
php -s localhost:8000 -t public
\`\`\`

이러고 명령어 한줄 치면 된다.

\`\`\`base
./run.sh

혹은 

sh run.sh
\`\`\`


`,link:"/php/php 서버 없이 실행하기"},{title:"php 세션 에러 해결하기",content:`
# {{ $frontmatter.title }}


## 원인 : 


서버 설치 후에 php 세션 문제가 생겼다.
 


## 해결 방법 : 

\`\`\`
chcon -r -t httpd_sys_rw_content_t /var/lib/php/session 
chown -r nginx:nginx /var/lib/php/session
\`\`\`



## 참고 자료 : 

[https://www.lesstif.com/pages/viewpage.action?pageid=35356911](https://www.lesstif.com/pages/viewpage.action?pageid=35356911)`,link:"/php/php 세션 에러 해결하기"},{title:"php 셀렉트 박스 시간때 표시하기",content:`
# {{ $frontmatter.title }}

\`\`\`php
$hour=0;
while($hour++<24)
{
$timetoprint=date('g:i:s',mktime($hour,0,0,1,1,2011));
echo$timetoprint;
}
for($t=15;$t<=1440;$t+=15)
$arr[]=sprintf("%02d:%02d",$t/60%24,$t%60);
debug($arr);
\`\`\`


예시) 00:00 ~ 24:00 

\`\`\`php
<selectclass=""id="shour"name="shour">
<?php
for($i=9;$i<=24;$i++){
if($i<10){$i="0".$i;}
for($k=00;$k<=24;$k+=30){
if($k==00){$k="0".$k;}
?>
<optionvalue="<?=$i.":".$k?>"><?=$i.":".$k?></option>
<?php}}?>
</select>
$range=range(strtotime("09:00"),strtotime("24:00"),30*60);
foreach($rangeas$time){
echodate("h:i",$time)."\\n";
}
\`\`\`

`,link:"/php/php 셀렉트 박스 시간때 표시하기"},{title:"php 시작일 종료일 비교하기",content:`
# {{ $frontmatter.title }}


php start date end date compare 

키워드 검색하면된다.



\`\`\`
if (strtotime( $rent->endcontract ) >= strtotime( $request->startcontract ) ||
    strtotime( $rent->startcontract ) <= strtotime( $request->endcontract ) ) {
 
}
\`\`\`



## 참고 문헌 :

https://stackoverflow.com/questions/56185321/php-compare-start-and-end-dates-between-two-dates`,link:"/php/php 시작일 종료일 비교하기"},{title:"php 암호화처리",content:`
# {{ $frontmatter.title }}


아래 링크 참고하자..

https://www.happyjung.com/lecture/3063?sca=php&sst=wr_good&sod=desc&sop=and&page=3&device=pc`,link:"/php/php 암호화처리"},{title:"php 에러 로그 보는 법",content:`
# {{ $frontmatter.title }}


아래 소스코드 참고 하자 

\`\`\`php
error_reporting(e_all); 
ini_set('display_errors', '1');
\`\`\``,link:"/php/php 에러 로그 보는 법"},{title:"php 컴포저 업데이트 에러",content:`
# {{ $frontmatter.title }}


컴포저 패키지 업데이트 할때 메모리 에러 뜬다면

아래 명령어로 하면 된다. 

\`\`\`php
composer_memory_limit=-1 composer update
\`\`\`



## 참고 자료 : 

https://stackoverflow.com/questions/36107400/composer-update-memory-limit`,link:"/php/php 컴포저 업데이트 에러"},{title:"ssr 패키지 주소",content:`
# {{ $frontmatter.title }}


깃헙 주소 남겨본다.


https://github.com/spatie/server-side-rendering



`,link:"/php/ssr 패키지 주소"},{title:"Warning: curl_exec() has been disabled for security reasons",content:`
# {{ $frontmatter.title }}


## 원인 : 

warning: curl_exec() has been disabled for security reasons in
 
hp에서 curl 및 curl_exec를 활성화하는 방법
 
자세히 알아보는방법은 아래 소스코드를 index.php에 넣어서 확인해보면 true로 나온다.

\`\`\`
var_dump(extension_loaded("curl"));
\`\`\`


## 해결 방법 : 

php 확장 "curl"은 php.ini에서 (보통 기본적으로) 활성화되어 있습니다 

extension=php_curl.dll

그러나 php.ini ( "disable_functions"는 virtualhost 또는 .htaccess 파일에서 설정할 수 없음) 와 같은 개별 기능 을 비활성화curl_exec() 할 수도 있습니다.

예를 들어, php.ini는 사용 disable_functions하지 못하도록 사용 중일 수 있습니다 curl_exec()-

disable_functions =  ...,curl_exec,...

이 경우 웹 사이트의 php 및 http 오류 로그 파일에이 경고가 포함됩니다.

경고 : curl_exec ()가 보안상의 이유로 비활성화되었습니다.

"disable_functions"값을 편집하여 "curl_exec"를 제거하고 php.ini를 저장 한 다음 apache를 다시 시작하십시오.
 
즉 php.ini 에서 disable_functions =  ...,curl_exec,… 찾아서 curl관련된 보안을 제거 하면됨 그리고 리스타트!!



구체적으로 다시 설명을 하자면 

disable_functions = exec, passthru, shell_exec, system, proc_open, curl_exec, curl_multi_exec, parse_ini_file, show_source

 

여기서 curl 관련된 단어 다 지워야한다.

안그럼 에러는 그대로 나오는걸로.. 



참고자료 :

[https://sir.kr/g5_tip/849](https://sir.kr/g5_tip/849)`,link:"/php/Warning: curl_exec() has been disabled for security reasons"},{title:"그누보드 메타 태그 추가 함수",content:`
# {{ $frontmatter.title }}



어떤분이 그누보드를 이용해서 메타태그를 함수화로 만들어서 추가 하는 방법을 올려놨다. 

소스코드를 직접 만들어서 올린거라서 이거 참고해서 내가 만든 블로그 솔루션에 추가 해놨다. 

혹시 몰라서 주소를 올려본다. 

http://chongmoa.com/gnuboard/19720`,link:"/php/그누보드 메타 태그 추가 함수"},{title:"금액 원화 만단위부터 경까지 표시하기",content:`
# {{ $frontmatter.title }}


금액을 만단위로해서 표시하기

예시 ) 199만9,990원

\`\`\`php
function price_format($price){
    $memey_arr = ["", "만", "억", "조", "경"];
    $str = "";
    for($i = count($memey_arr) - 1; $i >= 0; --$i){
        $unit = pow(10000, $i);
        $part = floor($price / $unit);
        if($part > 0){
            $str .= number_format($part) . $memey_arr[$i];
        }
        $price %= $unit;
    }
    return $str."원";
}
\`\`\`
 

## 참고 자료 : 

https://gist.github.com/presentkim/b37a05cf41624ce4432b47ecbbe2dad4`,link:"/php/금액 원화 만단위부터 경까지 표시하기"},{title:"디비 사용량 과 용량 구하기",content:`
# {{ $frontmatter.title }}

아래 소스코드 참고하자.


\`\`\`php
// 그누보드 전체 디비용량 구하기
$result = sql_query("show table status from ".g5_mysql_db." like 'g5%'");
$db_size = 0;
while($dbdata=sql_fetch_array($result)){
$db_size += $dbdata['data_length']+$dbdata['index_length'];
}
printf("%0.2f mb",$db_size / (1024*1024));
 
계정 사용량
// 계정 용량 구하기
$du = \`du -csk\`;
printf("%0.2f mb",$du / 1024);
\`\`\`
`,link:"/php/디비 사용량"},{title:"마스킹 처리 하기",content:`
# {{ $frontmatter.title }}


사업자 번호 마스킹

\`\`\`php
/**
 * 사업자 번호 마스킹
 */
if(!function_exists('bn_marking')) {
    function bn_marking($string = '')
    {
        return preg_replace('/^[0-9]{3}(-?)[0-9]{2}(-?)[0-9]{5}$/', '**********', $string);
    }
}
\`\`\`



휴대폰번호 마스킹

\`\`\`php
/**
 * 휴대폰번호 마스킹
 * @param string $phone
 * @return null|string|string[]
 */
if(!function_exists('phone_marking')) {
    function phone_marking($phone = '')
    {
        return preg_replace('/^(\\d{3,4})(-?)(\\d{3,4})(\\w*)(-?)(\\d*)/','010 - **** - ****',$phone);
    }
}
\`\`\`


이름 마스킹

\`\`\`php
/**
 * 이름 마스킹
 * @param string $name
 * @return null|string|string[]
 */
if(!function_exists('name_marking')) {
    function name_marking($name = '')
    {
        return preg_replace('/.(?=.$)/u', '*', $name);
    }
}
\`\`\`

https://koreanred.tistory.com/90


이메일 마스킹

\`\`\`php
/**
 * 이메일 마스킹
 * @param $str
 * @return null|string|string[]
 */
if(!function_exists('email_marking')) {
    function email_marking($email = '')
    {
        return preg_replace('/(\\w+)(\\w{3})(@.{1})([\\w*?]+)(.+)/i', '\\1***\\3*\\5', $email);
    }
}
\`\`\`


문자열 마스킹 


\`\`\`php
if(!function_exists('strlenname')) {
    /**
     * 문자열 마스킹
     * @param $name
     * @return string
     */
    function strlenname($name)
    {
        $name_length = mb_strlen($name, "utf-8");
        $sung = mb_substr($name, 0, 1, "utf-8");
        $name_star = '';
        for ($i = 1; $i < $name_length; $i++) {
            $name_star .= "*";
        }
 
        return $sung . $name_star;
    }
}
\`\`\`



`,link:"/php/마스킹처리"},{title:"배열을 12개씩 내부에 4개씩 묶어서 출력할경우",content:`
# {{ $frontmatter.title }}


배열이 1부터 12개까지 출력하는데 1배열에 4개씩 묶어서 출력하려면 어떻게 하는지 찾아보니까..

이렇게 하면된다.

\`\`\`php
$list = [];
// 리뷰글 가져오기
$sql = " select * from \`{$g5['g5_shop_item_use_table']}\` where is_confirm = '1' order by is_time desc limit 0,12";
$result = sql_query($sql);
for ($i=0; $rows = sql_fetch_array($result); $i++) {
$list[$i]['subject'] = conv_subject($rows['is_subject'],12,"…");
$list[$i]['content'] = conv_content($rows['is_content'],2);
$list[$i]['score'] = get_star($rows['is_score']);
$list[$i]['writer'] = mb_substr(get_text($rows['is_name']), 0, 1, 'utf-8') . "***" . mb_substr($rows['is_name'], -1, 0, 'utf-8');
$list[$i]['datetime'] = date('y-m-d',strtotime($rows['is_time']));
}

$output = array_chunk($list,4,true);
\`\`\`


여기서 중요한게 array_chunk 함수를 이용해서 4개씩 묶어서 출력한다. `,link:"/php/배열을 12개씩 내부에 4개씩 묶어서 출력할경우"},{title:"순차번호할때 디비에서는",content:`
# {{ $frontmatter.title }}


## 설명 :

순서대로 증가하는 거라면 해당 db컬럼에 uniq 속성을 부여하시고 공란으로 insert 하기 그러면 절대 중복되지 않는 순차번호가 생긴다
`,link:"/php/순차번호할때 디비에서는"},{title:"엑셀 파일 읽어와서 mysql db 올리기",content:`
# {{ $frontmatter.title }}


## 레시피  

이번 주제는 엑셀에 내용을 읽어서 mysql 디비에 올리는 방법에 대해서 포스팅 글 남겨본다.


구글링으로 찾아보니까 두가지 방법을 찾게 됐는데 장단점이 있다.

첫번째는 phpexcel 1.8 버전이 있다 이건 구글링에서 자주 보게 되는 플러그인인데 흔하지만 단점이 있다.

php7이하에서 사용된다. 상위버전에서는 에러가 많다. (실제로 이걸로 썼는데 에러 투성이라서 삭제 했다.)

사용법은 금방 찾을 수 있어서 포스팅에 올리지 않는다. 

  

두번째는 phpspreadsheet 이다. 스프레드시트는 php 8이상에서도 동작을 한다.

결국엔  이걸로 채택 했다. 구글링 검색 키워드는 phpspreadsheet import excel to mysql php 로 찾아보면 자료가 많다.

 

사용법은 우선 컴포저를 설치 해야한다.

\`\`\`base
composer require phpoffice/phpspreadsheet
\`\`\`

아래 소스를 참고해서 응용하면된다. 

\`\`\`php
<?php
require_once 'vendor/autoload.php';
require_once 'config.php';
   
use phpoffice\\phpspreadsheet\\spreadsheet;
use phpoffice\\phpspreadsheet\\reader\\csv;
use phpoffice\\phpspreadsheet\\reader\\xlsx;
   
if (isset($_post['submit'])) {
   
    $file_mimes = array('text/x-comma-separated-values', 'text/comma-separated-values', 'application/octet-stream', 'application/vnd.ms-excel', 'application/x-csv', 'text/x-csv', 'text/csv', 'application/csv', 'application/excel', 'application/vnd.msexcel', 'text/plain', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
       
    if(isset($_files['file']['name']) && in_array($_files['file']['type'], $file_mimes)) {
       
        $arr_file = explode('.', $_files['file']['name']);
        $extension = end($arr_file);
       
        if('csv' == $extension) {
            $reader = new \\phpoffice\\phpspreadsheet\\reader\\csv();
        } else {
            $reader = new \\phpoffice\\phpspreadsheet\\reader\\xlsx();
        }
   
        $spreadsheet = $reader->load($_files['file']['tmp_name']);
   
        $sheetdata = $spreadsheet->getactivesheet()->toarray();
   
        if (!empty($sheetdata)) {
            for ($i=1; $i<count($sheetdata); $i++) { //skipping first row
                $name = $sheetdata[$i][0];
                $email = $sheetdata[$i][1];
                $company = $sheetdata[$i][2];
  
                $db->query("insert into users(name, email, company) values('$name', '$email', '$company')");
            }
        }
        echo "records inserted successfully.";
    } else {
        echo "upload only csv or excel file.";
    }
}
?>
\`\`\`

일단 나는 1만건 이상의 디비를 업로드 했더니 약간 로딩 되고나서 정상적으로 업로드 됐다. 



## 참고 자료 :

[https://artisansweb.net/read-csv-excel-file-php-using-phpspreadsheet/](https://artisansweb.net/read-csv-excel-file-php-using-phpspreadsheet/)

[https://www.studentstutorial.com/php/import-excel-data-php-spreadsheet.php](https://www.studentstutorial.com/php/import-excel-data-php-spreadsheet.php)
`,link:"/php/엑셀 파일 읽어와서 mysql db 올리기"},{title:"요일별 방문자수",content:`
# {{ $frontmatter.title }}


아래 링크 참고하자 

https://chicpro.dev/%ec%9a%94%ec%9d%bc%eb%b3%84-%eb%b0%a9%eb%ac%b8%ec%9e%90%ec%88%98-%ea%b5%ac%ed%95%98%ea%b8%b0/`,link:"/php/요일별 방문자수"},{title:"원 화폐 단위를 한글로 표시",content:`
# {{ $frontmatter.title }}


\`\`\`php
function num_to_han($mny,$st=0,$t=0){
//숫자를 완벽하게 한글로 바꿔준다.
//num_to_han('123456789') -> 1억2천3백4십5만6천7백8십9
//num_to_han('123456789',0,0) -> 1억2천3백4십5만6천7백8십9
//num_to_han('123456789',6,0) -> 1억2천3백만
//num_to_han('123456789',0,1) -> 일억이천삼백사십오만육천칠백팔십구
//num_to_han('123456789',6,1) -> 일억이천삼백만
 
    if (ereg("[^0-9]",$mny)) return false;
    $mny=(string)$mny;
 
    $sepss=array("","십","백","천");
    $sepsl=array("","만","억","조","경","해","자","양","구","간","정","재","극");
    $nums=array("","일","이","삼","사","오","육","칠","팔","구");
    
    $return_txt = array(); // 반환되는 값
 
    $arr = array_reverse(str_split($mny));
    if ($st==0) $idx=0;
    else $idx=$st;
    
    $zero_cnt=0;
    for($i=$idx; $i<count($arr); $i++) {
        if ($i%4==0) {
            if ($zero_cnt==4) array_pop($return_txt);
            $zero_cnt=0;
            $return_txt[] = $sepsl[(int)($i/4)] ;
        }
        
        if ($arr[$i] != "0") {
            if ($t==0) $return_txt[] = $arr[$i] . $sepss[($i%4)];
            else if ($t==1) $return_txt[] = $nums[(int)$arr[$i]] . $sepss[($i%4)];
            else return false;
        }
        else $zero_cnt++;
    }
    if ($idx!=0) array_unshift($return_txt, $sepsl[(int)($idx/4)]) ;
    
    $return_txt=array_reverse($return_txt);
 
    $r_txt="";
    for($i=0;$i<count($return_txt);$i++)
        if ($return_txt[$i] != "") $r_txt .= $return_txt[$i];
 
    return $r_txt;
}
\`\`\`



결과 값은 1억2천3백 이런식으로 숫자, 한글 단위로 표시 된다.
`,link:"/php/원 화폐 단위를 한글로 표시"},{title:"좋아요 버튼 ",content:`
# {{ $frontmatter.title }}


아래 주소 접근하면된다.

이거 참고해서 제작하면 된다.

https://steemit.com/utopian-io/@faad/php-tutorial-how-to-develop-like-button-in-php-using-ajax

`,link:"/php/좋아요 버튼 참고 자료"},{title:"vue.$NextTick이란?",content:`
# {{ $frontmatter.title }}


데이터를 가지고 화면을 그리기 전에 dom이 먼저 생성되며 원하는 트리(태그)를 찾지 못하는 오류를 막을 수 있다.   


## 사용법 : 

\`\`\`js
created : function() {
    this.$nexttick(function(){
        var item = document.getelementbyid('textbox');
        item.style.backgroundcolor = 'green';
    });
}

\`\`\`


## 참고 자료:

https://kku-jun.tistory.com/13`,link:"/vue2/$NextTick"},{title:"Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders",content:`
# {{ $frontmatter.title }}



## 원인 :

뷰를 공부하면서 아래 처럼 에러가 출력된다.

::: danger
avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders
:::




## 해결 방법 : 

이벤트 버스를 이용해서 프롭스를 전달하면 된다.
 


## 참고 자료 : 

https://juntcom.tistory.com/103`,link:"/vue2/Avoid mutating a prop directly since the value will be overwritten whe"},{title:"Avoided redundant navigation to current location:",content:`
# {{ $frontmatter.title }}


## 원인 :

일단 원인은 현재 경로로 재이동하면 이러한 에러가 나온다.


avoided redundant navigation to current location: 


## 해결방법 :

그래서 문제 해결을 하려면 아래 코드로 하면된다.

\`\`\`js
this.$router.push("/admin").catch(()=>{});
\`\`\`




## 참고 자료 :


https://sso-feeling.tistory.com/706`,link:"/vue2/Avoided redundant navigation to current location"},{title:"Because a cookie’s SameSite attribute was not set or is invalid",content:`
# {{ $frontmatter.title }}


## 원인 : 

작업 하다보면 에디터에서 아이프레임 유투브가 실행되는 부분이 있는데 여기서 쿠키 샘 사이트 문제가 있다.

크롬에서 나오는 에러인데  크롬에서 새로운 정책이라고 알면 될것 같다.


그래서 혹시 몰라서 따로 자료 남긴다.


## 해결 방법 : 


해당 페이지에서 아래 소스코드 넣으면된다.

\`\`\`js
document.cookie = "safecookie1=foo; samesite=lax"; 
document.cookie = "safecookie2=foo"; 
document.cookie = "crosscookie=bar; samesite=none; secure";
\`\`\`




여기서 백단에서도 샘사이트 쿠키 를 samesite=none; secure 로 바꿔주면된다.

백단 마다 문법이 다르기 때문에 구글링으로 먼저 찾봐서 설정을 변경하면 된다.

​
## 참고 자료 :

https://ifuwanna.tistory.com/223`,link:"/vue2/Because a cookie’s SameSite attribute was not set or is invalid"},{title:"ci4 vuejs2 json 적용할때",content:`
# {{ $frontmatter.title }}


## 경험담 :

json 을 적용할때는 

json.strongify 로 변환해서 백단(서버)으로 넘기고

받아올때는 json.parse로 하면되고

그리고 백단에서는 따로 json 변환해서 넣지 말기..

왜냐면 변환해서 넣으면 다시 받아올때 다시 형변환해야되는데

여기서 빡세다.. 그냥 배열로 넣어버리면 된다.

`,link:"/vue2/ci4 vuejs2 json 적용할때"},{title:"data 사용법",content:`
# {{ $frontmatter.title }}


data 문법에서 헷갈리는 것이 있을것이다.

1. data () { return { } } 
 
2. data:() => ({ })

둘중에 어떤게 더 좋을까?


1번은 es5 문법이다.

2번은 es6 문법이다 둘중에 es5를 선호 한다. 에로우 펑션은 일부 에러가 생길 수 있어서...

data() { return { ....} }

위 소스 코드 처럼 하는게 낫다.


## 참고자료 : 

https://hj-tilblog.tistory.com/78`,link:"/vue2/data 사용법"},{title:"error ' is defined but never used no-unused-vars",content:`
# {{ $frontmatter.title }}



eslint 문제에서 추가하면 된다.


https://godffs.tistory.com/3504`,link:"/vue2/error is defined but never used no-unused-vars"},{title:'"esbuild-linux-64" 패키지를 찾을 수 없으며 esbuild #1646 에 필요합니다.',content:`
# {{ $frontmatter.title }}


## 원인 :

error: the package "esbuild-linux-64" could not be found, and is needed by esbuild


이게 인텔에서 amd로 바뀌니까 생긴것같은데 저거 깃헙에서 자세히 읽어보니까 별거 없다.

그냥 node_modules 를 삭제 하고 재설치 했더니 완벽하게 실행된다.


## 문제 해결 :

https://github.com/evanw/esbuild/issues/1646 `,link:"/vue2/Error: The package esbuild-linux-64 could not be found, and is needed by esbuild"},{title:"getters 내부에 파라메터 있을때 사용법",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..


https://dev.to/coderdal/how-to-pass-arguments-to-the-vuex-getters-1dkk`,link:"/vue2/getters 내부에 파라메터 있을때 사용법"},{title:"input checkbox checked",content:`
# {{ $frontmatter.title }}


## 설명 :


체크박스 체키드 로 하는 방법



아래 소스코드 넣어주면 된다.

\`\`\`
true-value="1"
false-value="0"
\`\`\`



최근에 개발하면서 위에 방법으로 하다가 좀 뭔가 아닌것 같다.

바인딩으로 했더니 이게 맞는것 같다. 

일단 상황이 컴포넌트로 체크박스 하나를 만들었는데

컴포넌트 내부에서 체키드가 안되어서..



컴포넌트 내부

\`\`\`vue
<input type="checkbox" value="1"
v-bind:checked="this.value == 1 ? 'checked' : ''"
\`\`\`


프롭스는 이렇게

\`\`\`\`js
props: {
           label:string,
           value:string,

\`\`\`\`




외부에서는 이렇게...

\`\`\`vue
<customcheckboxfield
        v-bind:label="menu_open_label"
        v-bind:value="edit.new_open"
        v-model="edit.new_open"
/>
\`\`\`






## 마지막으로 다시 덧 붙이자면 

불린으로 형변환해서 하는게 훨씬 낫다..

그냥 형변환 해서 바꿀수있다면 0이나 1이 아닌 직접 바꾼게 좋다.







`,link:"/vue2/input checkbox checked"},{title:'Invalid prop: type check failed for prop "data". Expected Object, got Array',content:`
# {{ $frontmatter.title }}



## 원인 :

invalid prop: type check failed for prop "data". expected object, got array.

이런 에러가 뜨는 경우는 오브젝트 혹은 배열로 프롭스를 변환 하는데 문제 생기는 에러다..



## 해결 방법 :

엑시오스로 list 변수 받아오는 부분을 오브젝트로 해야된다.

\`\`\`js
list:{}
\`\`\`

그리고 컴포넌트 내부에 프롭스를 넣어준다.

\`\`\`js
props: {
data: [array, object]
}
\`\`\`

이렇게 하면 에러가 없어진걸 확인 할 수 있다.


## 참고 자료 :


https://github.com/gilbitron/laravel-vue-pagination/issues/18`,link:'/vue2/Invalid prop: type check failed for prop "data". Expected Object, got Array'},{title:"jwt 활용해서 로그인 만들기",content:`
# {{ $frontmatter.title }}




## 사용법 설명
 
몇가지 설명을 덧붙이자면 여기서 핵심이 네비게이션 가이드쪽이 핵심이라 생각한다 엑시오스 인터셉터도 그 역할을 하지만

토큰 재발급 하는과정이 네이게이션 가이드를 통해서 재 발급이 된다 이거 때문에 한 일주일 넘도록 고생했다. 

백단은 일단 firebase/jwt 활용했다 여기서 토큰 만료 되는 시간하고 쿠키랑 같아야된다 

억세스 토큰은 5분씩 해줬고 리프레시토큰은 2주정도 했다. 

리프레시 토큰은 디비에 저장 하거나 레디스에 저장하면된다. 

백단 라우트는 로그인, 로그아웃 리프레시토큰, 어덴티케이션 만 있으면 된다. 

설명을 하자면 로그인 메서드에서 억세스와 리프레시토큰이 발급 된다. 

리프레시토큰 메서드는 http 헤더의 리프레시토큰이 존재하면 억세스 발급을 해준다. 

즉 억세스 토큰이 http 401 상태가 되면 리프레시토큰에 의해서 새 발급을 해준다 그것도 5분 간격으로 발급해준다. 

어덴티케이션 메서드는 여기서 토큰을 base64 디코더로 해독해서 이메일을 받아온것을 회원 정보 테이블로 조회해서 가져온다. 

완성 시키면 깃헙에 올릴것이다. 참고하면 된다.
 

## 참고 자료 :

https://kdinner.tistory.com/60


https://jasonwatmore.com/post/2018/07/06/vue-vuex-jwt-authentication-tutorial-example`,link:"/vue2/jwt 활용해서 로그인 만들기"},{title:"require is not defined for img src",content:`
# {{ $frontmatter.title }}



## 원인 : 

이미지 태그가 비워 있어서 나온 에러다.



## 해결 방법 : 

그냥 # 해시를 넣어준다.

이건 임시로 하는 방법이고 no image 로 하는게 훨 낫다.

​
\`\`\`html
<img src='#' />
\`\`\`


​
이걸로 하면 대처 될수있다.
​

\`\`\`html
<img src='https://via.placeholder.com/300/09f/fff.png%20c/o%20https://placeholder.com/' />
\`\`\`




`,link:"/vue2/require is not defined for img src"},{title:"select box 1 부터 10까지",content:`
# {{ $frontmatter.title }}


가장 간단한 대답은 선택한 옵션을 true 또는 false로 설정하는 것입니다.

\`\`\`vue
<option :selected="selectedday === 1" value="1">1</option>
\`\`\`


여기서 데이터 개체는 다음과 같습니다:

\`\`\`js
data() {
    return {
        selectedday: '1',
        // [1, 2, 3, ..., 31]
        days: array.from({ length: 31 }, (v, i) => i).slice(1)
    }
}
\`\`\`

다음은 선택한 월 일을 설정하는 예입니다:

\`\`\`vue
<select v-model="selectedday" style="width:10%;">
    <option v-for="day in days" :selected="selectedday === day">{{ day }}</option>
</select>
\`\`\`


데이터 세트 :

\`\`\`js
{
    data() {
        selectedday: 1,
        // [1, 2, 3, ..., 31]
        days: array.from({ length: 31 }, (v, i) => i).slice(1)
    },
    mounted () {
        let selectedday = new date();
        this.selectedday = selectedday.getdate(); // sets selectedday to the today's number of the month
    }
}
 \`\`\`




## 참고 자료 :


https://stackoverflow.com/questions/43839066/how-can-i-set-selected-option-selected-in-vue-js-2

`,link:"/vue2/select box 1 부터 10까지"},{title:'This "v-if" should be moved to the wrapper element',content:`
# {{ $frontmatter.title }}


## 원인 :

v-for과 v-if문을 같이 쓰면 생기는 에러


this 'v-if' should be moved to the wrapper element 



## 해결 방법

린트에서 해당 문법을 추가하면된다.

\`\`\`js
"vue/no-use-v-if-with-v-for": "off"
\`\`\`



## 참고 자료 :

https://thewayitwas.tistory.com/163`,link:'/vue2/This "v-if" should be moved to the wrapper element'},{title:"투두 리스트",content:`
# {{ $frontmatter.title }}



투두 리스트 여기꺼 참고 하길..

다른거 다 찾아봐도 정리가 잘 안된것만 나와서...



https://haneunbi.github.io/2020/05/08/vue-todolist/

https://github.com/haneunbi/vue-todolis`,link:"/vue2/todolist"},{title:"unknown custom element : did you register the component correctly?",content:`
# {{ $frontmatter.title }}



## 원인 : 

::: danger
unknown custom element: < navbar > - did you register the component correctly? for recursive components, make sure to provide the "name" option. 
:::


이런 에러가 계속 뜬다면 원인이 컴포넌트 선언을 오타가 나거나 잘못 입력 했을 경우가 백프로이다.

아래 문법대로 했는지 확인한다.


## 해결방법 :

\`\`\`js
components: {}
\`\`\`







`,link:"/vue2/Unknown custom element: - did you register the component correctly"},{title:'v-on handler: "TypeError: Cannot read properties of undefined',content:`
# {{ $frontmatter.title }}


이런 에러가 뜨는건 부모 인스턴스를 잘 보면서 methods가 아니라 method 라고 오타가 있는지 확인해야한다.

아니면 빼먹거나 없을경우 에러가 생긴다.



## 참고 링크 :

https://heewon26.tistory.com/89`,link:'/vue2/v-on handler: "TypeError: Cannot read properties of undefined'},{title:"v-table2 내부 새로고침하기",content:`
# {{ $frontmatter.title }}


## 사용법 :

새로고침할때 이렇게 하면된다.


컴포넌트에다가 $ref 로 지정해준다.

\`\`\`html
ref="table"
\`\`\`


핸들러 함수를 넣고 거기다가 아래 소스를 넣어준다.

엑시오스 then 내부에다가 성공일때..

\`\`\`js
this.$refs.table.refresh();
\`\`\`

`,link:"/vue2/v-table 2 내부 새로고침하기"},{title:"v-table2 테이블 컬럼 사이즈 조절",content:`
# {{ $frontmatter.title }}



사실상 뷰2 내부 페이지에서 컴포넌트 렌더링한게 style 태그에 있던게 안먹힌다.

그래서 제이쿼리나 바닐라 자스로 조절하면된다.





예시는 이걸로 보면 된다.

## 해결방법 :

\`\`\`vue
created() {
    this.$nexttick(function(){
        $(".table thead th:nth-child(1)").css("width","5%");
        $(".table thead th:nth-child(2)").css("width","10%");
        $(".table thead th:nth-child(3)").css("width","10%");
        $(".table thead th:nth-child(4)").css("width","40%");
        $(".table thead th:nth-child(5)").css("width","10%");
        $(".table thead th:nth-child(6)").css("width","10%");
        $(".table thead th:nth-child(7)").css("width","10%");
    });
}
\`\`\`




그리고 v-table2 옵션에다가 하나 추가하면된다.

\`\`\`js
table : {
       tableclass:'table table-bordered table-hover'
   },
\`\`\`

`,link:"/vue2/v-table2 테이블 컬럼 사이즈 조절"},{title:"vite 번들러 설명",content:`
# {{ $frontmatter.title }}


vite.config.js

vite 명령어로 dev 서버를 실행할 때 프로젝트 루트의 vite.config.js 파일 확인을 시도합니다. 

그리고 내부에 설정된 값을 참고합니다.

\`\`\`js
import { fileurltopath, url } from 'url'
 
import { defineconfig } from 'vite'
import vue from '@vitejs/plugin-vue'
 
// https://vitejs.dev/config/
export default defineconfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileurltopath(new url('./src', import.meta.url))
    }
  }
})
\`\`\`

alias : 파일 시스템의 경로에 별칭을 만들 때 사용합니다. 미리 설정된 '@' 기호를 통하여 './src' 디렉토리에 절대경로로 쉽게 접근할 수 있습니다.

package.json

npm 으로 관리하기 위한 프로젝트 정보를 갖고 있는 파일






`,link:"/vue2/vite 번들러"},{title:"vite 이미지 불러올때",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..

https://github.com/vitejs/vite/issues/5701`,link:"/vue2/vite 이미지 불러올때"},{title:"vue cookie",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자.

https://github.com/cmp-cc/vue-cookies`,link:"/vue2/vue cookie"},{title:"vue express ssr 사이트 제작",content:`
# {{ $frontmatter.title }}


아래 링크 참고하자

https://ezcode.kr/board/vuessr/read/1`,link:"/vue2/vue express ssr 사이트 제작"},{title:"vue html 변환 할때",content:`
# {{ $frontmatter.title }}


# 경험담 :

html 태그 나오게 변환 할때 백단에서는 그냥 뿌려주기만 하면된다

그러니까 백엔드에서 html 변환 함수 이런거 필요 없고 그냥 내용물 그대로 출력하면된다.

그러면 v-html 으로 써서 뷰에서 해결 하면된다.


`,link:"/vue2/vue html 변환 할때"},{title:"vue 세션 사용법",content:`
# {{ $frontmatter.title }}

여기 자료 참고하면 된다.

https://sjwiq200.tistory.com/37`,link:"/vue2/vue 세션 사용법"},{title:"vue 프로젝트 구조",content:`
# {{ $frontmatter.title }}


아래 링크 참고하자 

https://velog.io/@seulgea/vue-%ed%8f%b4%eb%8d%94-%ea%b5%ac%ec%a1%b0`,link:"/vue2/vue 프로젝트 구조"},{title:"vue-quill-editor 사용법",content:`
# {{ $frontmatter.title }}


일단 블로그 보면서 참고했는데 여기 자료애서 좀 수정을 거쳐야된다.

커스텀 컴포넌트로 만들려고 했더니 약간의 난이도가 있다.

여기 소스코드 그대로 사용하면된다.



editor.vue
\`\`\`vue
<template>
  <div>
    <quill-editor
            class="editor"
            ref="mytexteditor"
            :disabled="false"
            :content="editorvalue"
            v-model="editorvalue"
            :options="editoroption"
            @change="oneditorchange"
            @blur="oneditorblur($event)"
            @focus="oneditorfocus($event)"
            @ready="oneditorready($event)"
    />
  </div>
</template>

<script>
export default {
  name: "editors",
  props: {content:{ type:string }},
  data() {
      return {
          editoroption: {
              placeholder: "내용을 입력해주세요.",
              modules: {
                  toolbar: [
                      ["bold", "italic", "underline", "strike"], // <strong>, <em>, <u>, <s>
                      ["blockquote", "code-block"], // <blockquote>, <pre class="ql-syntax" spellcheck="false">
                      [{ header: 1 }, { header: 2 }], // <h1>, <h2>
                      [{ list: "ordered" }, { list: "bullet" }],
                      [{ script: "sub" }, { script: "super" }], // <sub>, <sup>
                      [{ indent: "-1" }, { indent: "+1" }], // class제어
                      [{ direction: "rtl" }], //class 제어
                      [{ size: ["small", false, "large", "huge"] }], //class 제어 - html로 되도록 확인
                      [{ header: [1, 2, 3, 4, 5, 6, false] }], // <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, normal
                      [{ font: [] }], // 글꼴 class로 제어
                      [{ color: [] }, { background: [] }], //style="color: rgb(230, 0, 0);", style="background-color: rgb(230, 0, 0);"
                      [{ align: [] }], // class
                      // ["clean"],
                      ["link", "image", "video"],
                  ]
              },
          },
      }
  },
  methods: {
      oneditorchange({ quill, html, text }) {
         // console.log('editor change!', quill, html, text)
          //this.content = html
      },
      oneditorblur(editor) {
          //console.log("editor blur!", editor);
      },
      oneditorfocus(editor) {
          //console.log("editor focus!", editor);
      },
      oneditorready(editor) {
         // console.log("editor ready!", editor);
      },
  },
  computed: {
    editor() {
        return this.$refs.myquilleditor.quill
    },
    editorvalue: {
        get() {
            return this.content
        },
        set(val){
            this.$emit('input', val)
        }
    }
  },
  mounted() {}
};
<\/script>
 
<style>
  .ql-container, .ql-editor {
    min-height: inherit!important;
  }
  .ql-container {
    height: 300px!important;
  }
</style>
\`\`\`

 







## 사용법 :

\`\`\`vue
<editors v-model="form.mp_content" v-bind:content="form.mp_content" />
\`\`\`

적절한 곳에 아래 크롬 이슈 방지 소스를 넣어준다.

\`\`\`js
created(){
    // 20230103 크롬 80 이슈 문제
    document.cookie = "safecookie1=foo; samesite=lax";
    document.cookie = "safecookie2=foo";
    document.cookie = "crosscookie=bar; samesite=none; secure";
},
\`\`\`


## 참고 자료 :

https://hjh0827.tistory.com/76


https://laracasts.com/discuss/channels/general-discussion/using-v-model-with-nested-compoennts-in-vue`,link:"/vue2/vue-quill-editor 사용법"},{title:"Vue.js 개발을 위한 조언",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..


https://han-um.tistory.com/18`,link:"/vue2/Vue.js 개발을 위한 조언"},{title:"vue2 cli service dotenv 설정",content:`
# {{ $frontmatter.title }}


일단 패키지에 소스를 넣는다.

\`\`\`
"scripts": { "dev":"vue-cli-service serve --open --mode deveplopment", }
\`\`\`



아래 처럼 경로를 이렇게 잡는다 

/frontend/ 

ㄴ .env.deveplopment



src에서 넣지말고 외부에 넣어야 한다. 

그리고 prefix 변수를 vue_app_ 

이렇게 하면된다.



`,link:"/vue2/vue2 cli service dotenv 설정"},{title:"vue2 config sass-loader 사용법",content:`
# {{ $frontmatter.title }}


위에 사이트 접속해서 제일 맨 마지막에 있는걸 쓰면 된다..


웹팩을 그대로 가져다 쓰면되는데 

혹시 모르고 지웠으면 이걸로 쓰면 된다. 



https://stackoverflow.com/questions/46963043/sass-file-from-npm-package-not-found-when-importing-in-vue-application`,link:"/vue2/vue2 config sass-loader 사용법"},{title:"vue2 moment 라이브러리",content:`
# {{ $frontmatter.title }}


아래 링크 참고하자..

https://mishka.kr/21`,link:"/vue2/vue2 moment 라이브러리"},{title:"vue2 router 사용법",content:`
# {{ $frontmatter.title }}


아래 링크 참고 할것.


https://sunny921.github.io/posts/vuejs-router-03/`,link:"/vue2/vue2 router 사용법"},{title:"vue2 ssr 관련 자료",content:`
# {{ $frontmatter.title }}

아래 링크 참고 하자

https://github.com/lincenying/mmf-blog-vue2-pwa-ssr`,link:"/vue2/vue2 ssr 관련 자료"},{title:"vuex axios todo list",content:`
# {{ $frontmatter.title }}


일단 어제 했던 공부를 포스팅으로 남겨본다. 이전에도 이런 실수 있어서 포스팅 올렸는데

자료가 섞이고 섞이다보니 어디론가 사라져서 다시 올려본다. 반복 실수 하지 않기 위해서..


일단 스토어에서는 이렇게 짜야된다.

\`\`\`js
const state = () => ({
    menu_data: [],
});
 
const mutations = {
    setmenu(state, payload) {
        state.menu_data = payload;
    },
    addmenu (state, customer) {
        state.menu_data.push(customer)
    }
};
 
const actions = {
    list({commit}) {
        return getapi(\`/admin/design/menu/list\`)
        .then((res) => {
            commit('setmenu', res.result);
            return res;
        }).catch((res) => {
            throw res;
        })
    },
    save({commit}, {id,form}) {
        if(typeof id == "undefined") {
            return getpost(\`/admin/design/menu/write\`, form)
                .then((res) => {
                    commit('addmenu', res.result);
                    return res;
                }).catch((res) => {
                    throw res;
                });
        }else {
            return getpost(\`/admin/design/menu/update/\${id}\`, form)
        }
    },
}
 
 
const getters = {
    getmenu: state => state.menu_data
}
 
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
\`\`\`


자! 이걸 설명하자면 여기서 중요한게 커밋하는부분이랄까?

리스트에서 setmenu는 바로 세터로 적용하면 목록에 보이는데

여기서 글쓰기는 커밋을 배열 푸시를 써서 올려주면 된다.

그러면 알림과 동시에 바로 쌓이는걸 볼수있다.

그리고 사용법은 아래 처럼 하면된다.

\`\`\`js
computed: {
            ...mapgetters('menu',['getmenu']),
            draggablelist: {
                get() {
                    return this.$store.state.menu.menu_data;
                },
                set(value) {
                    this.$store.commit("menu/setmenu", value);
                },
            },
        },

methods : {
           ...mapmutations('menu',['setmenu']),
\`\`\`


드래그리스트는 드래그드롭 패키지 때문에 한거고

맵겟터랑 맵뮤테이션으로 추가 하면 된다.



그리고 삭제 기능을 추가한다면 이렇게 하면된다.

\`\`\`js
const mutations = {
    setmenu(state, payload) {
        state.menu_data = payload;
    },
    addmenu (state, payload) {
        state.menu_data.push(payload)
    },
    removemenu(state, payload){
        let todos = state.menu_data;
        todos.splice(todos.indexof(payload), 1)
    }
};
\`\`\`


뮤테이션은 이렇게 쓰면된다.

\`\`\`js
const actions = {
delete({commit},id) {
        return getpost(\`/admin/design/menu/delete/\${id}\`)
            .then((res) => {
                commit('removemenu', res.result);
                return res;
            }).catch((res) => {
                throw res;
            });
    },
}
\`\`\`

액션스에 삭제 고유번호만 넣으면된다. 그럼 커밋이 작동되어서 알아서 삭제처리됨.


이거 한 라인에서 수정 버튼 누르면 나머지 부분 숨기고 

해당 라인만 보임 처리 하는 방법을 올려본다.

이거는 그냥 상황에 맞게 구현하면된다.


\`\`\`js
data() {
            return {
              selectedlistitem: [],
           }
}
\`\`\`

이렇게 오브젝트 변수를 추가한다. 


\`\`\`js
edithandler(param) {
    this.selectedlistitem = param.mn_id;

    this.iseditinputshow = !this.iseditinputshow;
    this.iseditshow = !this.iseditshow;
    this.iseditbtnshow = !this.iseditbtnshow;
    this.isdraggble = !this.isdraggble;

    this.edit.title = param.mn_title;
    this.edit.url = param.mn_url;
},
\`\`\`

여기서 새로 추가된 부분이 this.$set 이건데 세터로 방금 생성한 오브젝트 변수에다가 고유번호를 추가한 부분이다.

이 부분이 제일 중요하다.



그대로 save펑션에도 스토어 디스패치 이후에 then((res) => ..... 성공일때 

\`\`\`js
this.selectedlistitem = id
\`\`\`


위에 한줄만 코드 넣으면 된다.

그리고 숨김 보임 변수를 밑에 있으면된다. (아래 코드 넣어준다.)

\`\`\`js
this.iseditinputshow = !this.iseditinputshow;
this.iseditshow = !this.iseditshow;
this.iseditbtnshow = !this.iseditbtnshow;
this.isdraggble = !this.isdraggble;
\`\`\`



`,link:"/vue2/vue2 vuex axios todo list"},{title:"vue2 webpack 에 대해서",content:`
# {{ $frontmatter.title }}



아래 참고 주소 보면서 공부 하자..


https://github.com/wonwookang/vue-and-vuex


http://labs.brandi.co.kr/2019/04/30/kangww.html


http://labs.brandi.co.kr/2018/12/13/kangww.html`,link:"/vue2/vue2 webpack 에 대해서"},{title:"vue2 레이아웃 설정",content:`
# {{ $frontmatter.title }}


레이아웃 설정 방법 아래 링크 참고하면된다.


https://ospace.tistory.com/788`,link:"/vue2/vue2 레이아웃 설정"},{title:"vue2 설치하기",content:`
# {{ $frontmatter.title }}


아래 링크 참고하기

https://carrotweb.tistory.com/108`,link:"/vue2/vue2 설치하기"},{title:"vue2 에서 미들웨어 추가하기",content:`
# {{ $frontmatter.title }}



미들웨어 사용법 블로그 

https://blog.logrocket.com/vue-middleware-pipelines/


깃헙 소스코드 

https://github.com/dotunj/vue-middleware-pipelines`,link:"/vue2/vue2 에서 미들웨어 추가하기"},{title:"vue2 초보들의 흔한 에러",content:`
# {{ $frontmatter.title }}



흔한 에러 참고하길..

https://joshua1988.github.io/web-development/vuejs/common-error-cases/`,link:"/vue2/vue2 초보들의 흔한 에러"},{title:"vue2 페이지네이션",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..


https://vuejsexamples.com/pagination-component-for-vue-js-2/`,link:"/vue2/vue2 페이지네이션"},{title:"vue2 폰트 추가",content:`
# {{ $frontmatter.title }}


\`\`\`bash
npm i google-fonts-webpack-plugin -d
\`\`\`



webpack.config.js 내부에 아래 소스코드를 넣어준다. (응용) 

\`\`\`js
const googlefontsplugin = require("google-fonts-webpack-plugin")

module.exports = {
    "entry": "index.js",
    /* ... */
    plugins: [
        new googlefontsplugin({
            fonts: [
                { family: "source sans pro" },
                { family: "roboto", variants: [ "400", "700italic" ] }
            ]
        })
    ]
}
\`\`\`


###############################


근데 웹팩 5 이상에서만 되는것같다 지금 3정도 쓴데 작동 안되서 일단 보류 한다.




## 참고 자료 :
 
https://stackoverflow.com/questions/51516084/how-do-i-add-a-google-font-to-a-vuejs-component
`,link:"/vue2/vue2 폰트 추가"},{title:"vuejs 2 로그인 구현",content:`
# {{ $frontmatter.title }}


여기 주소 참고한다.

https://minu0807.tistory.com/64`,link:"/vue2/vuejs 2 로그인 구현"},{title:"vuejs ssr rendering php",content:`
# {{ $frontmatter.title }}


php 와 vuejs를 서버 사이더 렌더링 하는 방법을 찾아봤다.

이게 어떻게 알게 됐냐면 줌 기술 블로그에서 잠깐 포스팅을 읽다보니까 알게됐다.



https://zuminternet.github.io/zum-mobile-nodejs/




위에 포스팅글 읽다보면 스프링 부트에서 노드로 갈아탄다고 하는데 vuejs 랑 노드를 혼합해서 사용하려고 노드로 갈아탄다는 말인데



혹시나 php 관련된 자료가 있을건가 알아봤더니 라라벨이랑 뷰랑 혼합해서 쓴게 있는데 이건 예전부터 있던건데 php-v8js인가 이거랑 연동해서 쓰는경우도 있다고 한다. (아래 링크 참고)



https://blog.kesuskim.com/archives/spl-php-vue-ssr/

https://vuejsdevelopers.com/2017/11/06/vue-js-laravel-server-side-rendering/

https://github.com/anthonygore/vue-js-laravel-ssr


근데 이 자료는 라라벨 위주라서 그런지 라라벨에 최적화 되어 있다. 결국엔 ci4랑 연동 하려면.. 문제가 될건가 하고 다른 자료들도 찾아봤다.


여기 이자료는 그냥 순수 php 로 연동한 자료가 있다.

https://rojas.io/vue-js-server-side-rendering-with-php/


이러면 굳이 라라벨을 안하고 ci4 나 순수 php 로 가능할것같다.


그리고 좀더 찾아보니까 패키지리스트에 자료가 렌더링 관련 자료가 있다.


https://packagist.org/packages/spatie/server-side-rendering


이걸 사용하면 리액트나 뷰 등 같이 사용 할 수 있는것같다.


사실 내가 이전에도 비슷하게 개발을 했는데~ 근데 이게 단점이 많아서.. 이 방식이 좀 올바른건지.. 알송달송 한 느낌인데 

이번에 찾은 자료로 다시 개발을 하면 될것같다. 만약에 서버 세션까지 되면 금상첨화라고 생각한다.  

jwt 이용해서 하던지 아님 세션을 줘서 해보고 싶다. nuxtjs로 개발하는데 좀 힘든것도 있고 설정이라던지 api 로그인을 통해서 하려니까.. 



어쨋든간에 서버사이더 렌더링 방식으로 다시 개발해보고 리뷰 남겨봐야지..



https://github.com/leorojas22/vue-ssr-php-example




`,link:"/vue2/vuejs ssr rendering php"},{title:"vuejs를 php 코드로 사용가능하는 패키지",content:`
# {{ $frontmatter.title }}



웹서핑하다가 어떤분이 vuejs를 php코드로 사용하는거 올려놔서..

보고 너무 신기해서.. 

나중에 써봐야지..


https://viewi.net/`,link:"/vue2/vuejs를 php 코드로 사용가능하는 패키지"},{title:"vuelidate 컴포넌트로 분리해서 사용하는 방법",content:`
# {{ $frontmatter.title }}


이거 보고 쓰면된다.

https://codesandbox.io/s/mjxzpvpw6j?from-embed=&file=/src/app.vue`,link:"/vue2/vuelidate 컴포넌트로 분리해서 사용하는 방법"},{title:"vuetify 네비게이션",content:`
# {{ $frontmatter.title }}

https://stackoverflow.com/questions/55503676/vuetify-navigation-drawer-with-sub-menus

여기 참고해서 개발하면 될것 같다.`,link:"/vue2/vuetify 네비게이션"},{title:"vuex 상태관리",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..

https://goodteacher.tistory.com/439
`,link:"/vue2/vuex 상태관리"},{title:"vue로 개발한 페이지 검색엔진에 노출시키는 법",content:`
# {{ $frontmatter.title }}



일단 아래 방법 그대로 참고만 하면된다.



https://dong-queue.tistory.com/3`,link:"/vue2/vue로 개발한 페이지 검색엔진에 노출시키는 법"},{title:"zsh : comment not found : vue",content:`
# {{ $frontmatter.title }}



## 원인 : 


터미널에 명령어 치면 이런 에러가 뜬다.

zsh : comment not found : vue 

환경 변수에 등록이 안되서 나오는 에러이다.




## 해결방법 :


1. 터미널에서 아래 명령어 입력해준다. 

\`\`\`bash
vi .zshrc 
\`\`\`

\`\`\`bash
export path="$path:~/.npm-global/bin" source ~/.zshrc
\`\`\`


저장 후에 터미널에 vue를 입력하면 된다.  

.zshrc 설정은 맥 버전 마다 설정 하는 방법이 약간 다르기 때문에 주의 해야한다. 

최신 버전에서는 이렇게 하면된다. 




## 참고 자료 :


https://kabby.tistory.com/3


https://zionh.tistory.com/28





`,link:"/vue2/zsh : comment not found : vue"},{title:"노드, 뷰2,socket.io 채팅 구현하기",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자..


https://taehyeki.tistory.com/319`,link:"/vue2/노드 뷰2 socket.io 채팅 구현하기"},{title:"다음 우편주소 api 적용하기",content:`
# {{ $frontmatter.title }}


## 설명 :

일단 사용법은 구글링을통해서 알아냈지만 혹시 몰라서 남긴다.

meta-tag 패키지가 있다는 가정하에 아래 소스를 참고한다.


\`\`\`js
metainfo: {
    script: [
         { src: '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js', async: true, defer: true }
    ],
},
\`\`\`



\`\`\`js
methods: {
    execdaumpostcode() {
        new window.daum.postcode({
            oncomplete: (data) => {
                let fullroadaddr = data.roadaddress; // 도로명 주소 변수
                let extraroadaddr = ''; // 도로명 조합형 주소 변수
    
                if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                    extraroadaddr += data.bname;
                }
    
                if(data.buildingname !== '' && data.apartment === 'y'){
                    extraroadaddr += (extraroadaddr !== '' ? ', ' + data.buildingname : data.buildingname);
                } // 도로명, 지번 조합형 주소가 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
    
                if(extraroadaddr !== ''){
                    extraroadaddr = ' (' + extraroadaddr + ')';
                } // 도로명, 지번 주소의 유무에 따라 해당 조합형 주소를 추가한다.
    
                if(fullroadaddr !== ''){
                    fullroadaddr += extraroadaddr;
                } // 우편번호와 주소 정보를 해당 필드에 넣는다.
    
                this.$refs.zip.value = data.zonecode; //5자리 새우편번호 사용
                this.$refs.address1.value = fullroadaddr;
    
                this.form.zip = this.$refs.zip.value;
                this.form.address1 = this.$refs.address1.value;
            }
        }).open()
    },
}
\`\`\`



여기서 중요한게 input에 refs="address1" 가 있어야된다.

그리고나서 따로 변수에다가 연결 시켜서 하면된다.

인풋은 3가지로 있다 우편번호, 상세주소, 나머지주소


\`\`\`js
this.$refs.zip.value = data.zonecode; 
this.$refs.address1.value = fullroadaddr;
 
this.form.zip = this.$refs.zip.value;
this.form.address1 = this.$refs.address1.value;
\`\`\`

이게 핵심이다. 만약에 변수에다가 연결 안하면 인풋값들이 날라간다. 주의하길..








`,link:"/vue2/다음 우편주소 api 적용하기"},{title:"뷰 컴포넌트 데이터 바인딩 - 모달",content:`
# {{ $frontmatter.title }}



여기 참고 사이트 보면서 따라하면 되는데 참고로 

뷰는 0부터 시작 하는거다.

모달에 배열을 고유번호로 지정할때 0부터 지정된것만 가능하다.



https://goodmemory.tistory.com/146`,link:"/vue2/뷰 컴포넌트 데이터 바인딩 - 모달"},{title:"체크 유무를 특정 값으로 바인딩 방법",content:`
# {{ $frontmatter.title }}


## 원인 : 
인풋 체크 박스에서 바인딩하면

모델이 true 와 false가 안먹히는 현상이 있다.



## 해결 방법 :

인풋 에다가 true-value, false-value 추가한다. 


\`\`\`html
<input type="checkbox" v-model="agreeyn" true-value="y" false-value="n"/>
\`\`\`

  

## 참고 사이트 :

https://tjddnjs625.tistory.com/34`,link:"/vue2/체크 유무를 특정 값으로 바인딩 방법"},{title:"캡틴판교 nuxt2 강의",content:`
# {{ $frontmatter.title }}


아래 링크 참고 하자


https://github.com/joshua1988/learn-nuxt`,link:"/vue2/캡틴판교 nuxt 2 강의"},{title:"ref vs reactive",content:`
# {{ $frontmatter.title }}



강의에서 처럼 ref vs reactive는 둘다 반응형상태를 만드는데 사용합니다.

차이점은 ref 는.value 가 붙고, reactive는 .value가 붙지 않습니다. 

그렇기 때문에 reactive로 primitive type(number, string, boolean ...)반응형 상태를 선언시 반응성이 유지되지 않습니다. 

반면 ref는 .value로 접근하기에 primitive type은 물론이고 object type도 선언할 수 있습니다.`,link:"/vue3/ref vs reactive"},{title:"vite vue3 jwt",content:`
# {{ $frontmatter.title }}


https://minu0807.tistory.com/130`,link:"/vue3/vite vue3 jwt"},{title:"vuejs3 컴퓨티드 계산된 속성",content:`
# {{ $frontmatter.title }}


템플릿 문법({{ }})은 간단히 사용 하면 매우 편리합니다. 하지만 템플릿 표현식 내 코드가 길어질 경우 가독성이 떨어지고 유지보수가 어려워질 수 있습니다. 예를 들어 아래와 같이 객체가 있는경우:

\`\`\` js
const teacher = reactive({
  name: '짐코딩',
  lectures: [
    'html/css',
    'javascript',
    'vue3'
  ]
})
\`\`\`

 
그리고 < template > 에 author가 책을 갖고 있는지 없는지 여부를 표시하고 싶습니다.
 
\`\`\` js
<p>강의가 존재 합니까?:</p>
<span>{{ teacher.lectures.length > 0 ? 'yes' : 'no' }}</span>
\`\`\`

이 시점에서 템플릿 표현식은 복잡해지며 선언적이지 않습니다. 또 이러한 코드를 여러곳에서 반복적으로 사용해야 한다면 더더욱 비효율 적일 것입니다.
 

이럴때 사용하는 것이 계산된 속성(computed property)입니다.

\`\`\` js
const haslecture = computed(() => {
  return teacher.lectures.length > 0 ? 'yes' : 'no'
})
<p>강의가 존재 합니까?:</p>
<span>{{ haslecture }}</span>
\`\`\`






`,link:"/vue3/vuejs3 컴퓨티드 계산된 속성"},{title:"짐코딩 강의 깃허브",content:`
# {{ $frontmatter.title }}



https://github.com/gymcoding/vue3-posts

실전편 코드 



https://github.com/gymcoding/learn-vue3 

기본편 코드







`,link:"/vue3/짐코딩 강의"},{title:"컴포지션 api 를 사용하는이유",content:`
# {{ $frontmatter.title }}

기존에 vuejs2에서는 옵션 에이피 아이를 사용하는데 코드 분석이 어렵고 논리적 관심사 로직이 분산되어 있어서 쉽게 찾을수 없다는 단점이 있다

그래서 컴포지션 에이피아이를 사용하면 코드 분석도 금방 찾을 수 있고 코드 재 사용도 가능해서 컴포지션 에이피아이를 쓰는것을 추천한다.




## 코드 재사용성 


composition api의 가장 큰 장점은 composable 함수의 형태로 로직의 재사용이 가능하다는 것입니다. options api의 기본 로직 재사용 메커니즘인 mixins의 모든 단점을 해결합니다. composition api의 재사용 기능은 계속해서 증가하는 구성 가능한 유틸리티 모음인 vueuse와 같은 인상적인 커뮤니티 프로젝트를 탄생시켰습니다. 또한 immutable data, state machines, rxjs와 같은 상태 저장 타사 서비스 또는 라이브러리를 vue의 반응성 시스템(reactivity system)에 쉽게 통합하기 위한 깨끗한 메커니즘 역할을 합니다. 

compositions api는 options api가 가지고 있던 2가지 주요 제한 사항을 해결합니다.`,link:"/vue3/컴포지션 api 를 사용하는이유"},{title:"컴포지션 api",content:`
# {{ $frontmatter.title }}

composition api

composition api는 옵션(data, methos, ...)을 선언하는 대신 가져온 함수(ref, onmounted, ...)를 사용하여 vue 컴포넌트를 작성할 수 있는 api 세트를 말합니다.

다음은 composition api에서 각각의 api(ref, onmounted, ...)들을 포괄하는 용어 입니다.

반응형 api (reactivity api)

라이프 사이클 훅 (lifecycle hooks)

종속성 주입 (dependency injection)

배열 및 컬렉션의 참조 unwarpping

반응형 객체와 달리 ref가 반응형 배열 또는 map과 같은 기본 컬렉션 타입의 요소로 접근될 때 수행되는 래핑 해제가 없습니다.


\`\`\`js
const books = reactive([ref('vue 3 guide')])
// need .value here
console.log(books[0].value)
 
const map = reactive(new map([['count', ref(0)]]))
// need .value here
console.log(map.get('count').value)
\`\`\`

객체에서는 .value를 안붙는다.

배열에서는 .value를 붙는다.



반응형 상태 구조 분해하기(destructuring)

큰 반응형 객체의 몇몇 속성을 사용하길 원할 때, 원하는 속성을 얻기 위해 es6 구조 분해 할당을 사용하는 것은 매우 일반적입니다.


\`\`\`js
import { reactive } from 'vue'
 
const book = reactive({
  author: 'vue team',
  year: '2020',
  title: 'vue 3 guide',
  description: '당신은 이 책을 지금 바로 읽습니다 ;)',
  price: '무료'
})
 
let { author, title } = book
\`\`\`

안타깝게도, 그러한 구조 분해로 두 속성은 반응형을 잃게 될 것 입니다. 이런 경우, 반응형 객체를 일련의 ref 들로 변환해야 합니다. 이러한 ref 들은 소스 객체에 대한 반응형 연결을 유지합니다.
 
torefs 와 toref는 반응형 객체로 만들어준다. (이전에는 스트링인데..)

::: danger
torefs, toref를 사용하면 반응형 객체의 속성과 동기화 됩니다. 그래서 원본 속성을 변경하면 ref 객체가 업데이트되고 그 반대의 경우도 마찬가지 입니다.
:::


\`\`\`js
import { reactive, torefs } from 'vue'
 
const book = reactive({
  author: 'vue team',
  year: '2020',
  title: 'vue 3 guide',
  description: '당신은 지금 바로 이 책을 읽습니다  ;)',
  price: '무료'
})
 
let { author, title } = torefs(book)
 
title.value = 'vue 3 상세 guide' // title 이 ref 이므로 .value 를 사용해야 합니다.
console.log(book.title) // 'vue 3 detailed guide'
\`\`\`






`,link:"/vue3/컴포지션 api"},{title:"[우편번호 서비스] API 로딩시 허용되지 않은 파라미터가 감지되어 API 작동이 중지되었습니다",content:`
# {{ $frontmatter.title }}


아래 링크 참고

https://sir.kr/g5_tip/15675`,link:"/그누&영카트/[우편번호 서비스] API 로딩시 허용되지 않은 파라미터가 감지되어 API 작동이 중지되었습니다"},{title:"dropzone 이미지 업로드 플러그인 만들기",content:`
# {{ $frontmatter.title }}


## 설명 :

드롭존 이미지 업로드 플러그인에 대해서 설명한다.

그누보드에서 사용되는 드롭존 플러그인이다 필요 에 따라서 응용해서 사용하면된다.

간단하게 포스팅 하는거라서 에러는 알아서들 해결 하면 된다.

 

일단 필요한 디비들은 이러하다 

설정 테이블에서 하나를 추가 하면된다.

\`\`\`php
// 팝업 설정 이미지 토큰 필드 추가
if(!sql_query(" select nw_token_id from {$g5['new_win_table']} limit 1", false)) {
    sql_query(" alter table \`{$g5['new_win_table']}\` 
                      add \`nw_token_id\` varchar(255) not null after \`nw_content_html\`
                        ", true);
}
\`\`\`

위에 소스는 토큰 유니크 아이디 이다 설정 테이블, 이미지 테이블에 둘 다 존재 해야 된다.

필드 값이 설정, 이미지 두 곳에 똑같이 존재 해야 하는데 설정 테이블에 없거나 다르면 이미지가 삭제 처리 된다. (이건 맨 밑에 로직을 넣었다.)

\`\`\`php
// 이미지 테이블
if(!sql_query(" desc {$g5['new_win_image_table']} ", false)) {
    sql_query(" create table if not exists \`{$g5['new_win_image_table']}\` (
                      \`bf_no\` int(11) unsigned not null auto_increment,
                      \`bf_source\` varchar(255) not null default '',
                      \`bf_file\` varchar(255) not null default '',
                      \`bf_download\` int(11) not null,
                      \`bf_content\` text not null,
                      \`bf_fileurl\` varchar(255) not null default '',
                      \`bf_thumburl\` varchar(255) not null default '',
                      \`bf_storage\` varchar(50) not null default '',
                      \`bf_filesize\` int(11) not null default '0',
                      \`bf_width\` int(11) not null default '0',
                      \`bf_height\` smallint(6) not null default '0',
                      \`bf_type\` tinyint(4) not null default '0',
                      \`bf_datetime\` datetime not null default current_timestamp,
                      \`bf_token_id\` varchar(100) not null default '',
                      primary key (\`bf_no\`)
                    ) engine=innodb default charset=utf8; ", true);
}
\`\`\`

이게 이미지 테이블이다. 여기서 테이블 배열 변수만 바꾸면 된다.  위에 보면 bf_token_id 필드가 존재한다.

 

이제는 폼으로 접근한다. 예를 들어서 팝업 레이어 폼에서 사용하고 싶다면 거기 폼에 접근해서 form 태그 밑에 아래 코드를 넣는다.

토큰 인풋이 보이면 거기 바로 밑에 소스를 넣으면 된다.

\`\`\`php
<input type="hidden" name="token_id" id="token_id" value="<?php echo $nw['nw_token_id'] ? $nw['nw_token_id'] : get_uniqid(); ?>">
\`\`\`

위에 php 소스를 설명하자면 3항 연산자이고 토큰 아이디가 존재 하면 토큰 아이디 $row 배열 변수가 출력 되지만 만약에 없을 경우 유니크아이디가 생성된다. 이 유니크아이디는 영카트에 있다 (즉, 토큰 아이디는 유니크 아이디이다)

(5.4.15 버전에서는 영카트 와 통합 되서 존재 한다. 5.3 이하 면 없 을 경우가 있어서 영카트에서 소스를 떼 와야 한다.)

 

이제는 드롭존 플러그인 렌더링 할 곳에 알 맞 은 자리에 아 래 소스를 넣 어 주면 된다. (보통 맨 아 래에 넣는다.)

\`\`\`php
<tr>
    <th scope="row"><label for="nw_upload">이미지 업로드<strong class="sound_only"> 필수</strong></label></th>
    <td>
        <div id="mydropzone" class="dropzone"></div>
    </td>
</tr>
\`\`\`

cdn를 알 맞 은 위치에 넣 어 주면 된다.  

\`\`\`
<link href='https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.css' type='text/css' rel='stylesheet'>
<script src='https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.4.0/dropzone.js' type='text/javascript'><\/script>
\`\`\`

이게 제일 핵심 코드이다. 세팅이 다 됐으니.. 수정 할 곳 은 그냥 에이젝스 쓸 경로만 수정 하면 될 것 이다.

대충 설명 한다면 maxfiles는 최대 업로드 수 이고 이 것은 알 맞 게 수정 한다.  나머지 파라메터는 tokenid를 지정하면된다. 제이쿼리를 하던지 바닐라자스로 지정 하면된다.

(토큰 아이디는 중요 해서 빠지면 에러 생긴다.)

\`\`\`php
<script>
dropzone.options.mydropzone = {
    maxfiles: 5,
    paramname:"upload",
    params: {mode:'upload',token_id:$('#token_id').val()},
    dictdefaultmessage: "<strong>클릭하거나 파일을 여기로 옮겨주세요.</strong>",
    dictcancelupload: "업로드 취소",
    dictremovefile: "파일삭제",
    url: "<?php echo g5_admin_url."/newwin_img_ajax.php"?>",
    addremovelinks: true,
    success: function (file, res) {
        $(file.previewelement).attr("data-bf_no", res['bf_no']);
        $(file.previewelement).find(".dz-details").click(function(){
            if(res['image']) {
                editor_instance.inserthtml(\`<img src="\${res['path']}" alt="\${file['name']}"/>\`);
            } else {
                editor_instance.inserthtml(\`<a href="\${res['path']}" target="_blank">\${file['name']}</a>\`);
            }
        });
    },
    init: function() {
        let mydropzone = this;
        $.ajax({
            method:"post",
            url: "<?php echo g5_admin_url."/newwin_img_ajax.php"?>",
            data: {mode:'upload_list',token_id:$('#token_id').val()},
            datatype: 'json',
            success: function(data){
                if(data['count']>0) {
                    data['list'].foreach(function(el){
                        const mockfile = {
                            name: el['name'],
                            size: el['size'],
                            type: el['mime'],
                            accepted: true            // required if using 'maxfiles' option
                        };
                        const res = {'path':el['path'], 'bf_no':el['bf_no'], 'image':el['image']};
                        mydropzone.emit("addedfile", mockfile);
                        if(el['thumb']) {
                            mydropzone.emit("thumbnail", mockfile, el['thumb']);
                        } else {
                            mydropzone.emit("thumbnail", mockfile, el['path']);
                        }
                        mydropzone.emit("success", mockfile, res);
                        mydropzone.emit("complete", mockfile);
                        mydropzone.files.push(mockfile);    // add to files array
                    });
                }
            }
        });
  
        this.on("thumbnail", function(file, dataurl) {
            $('.dz-image').last().find('img').attr({width: '100%', height: '100%'});
        })
    },
    removedfile: function (file) {
        const bf_no = $(file.previewelement).data("bf_no");
        $.ajax({
            url: "<?php echo g5_admin_url."/newwin_img_ajax.php"?>",
            method:"post",
            data: {mode:'upload_remove',token_id:$('#token_id').val(),bf_no:bf_no},
            datatype: 'json',
            success: function(data){
                if(data['success']) {
                    $(file.previewelement).remove();
                }
            }
        });
    }
}
<\/script>
\`\`\`



밑에꺼는 ajax.php 소스이다.

여기서는 소스 분석해서 수정 해야 된다. 일단 썸네일부분이 미흡하다. 썸네일 빼고 업로드는 잘 된다.

중요한게 디렉토리 경로 수정 하고 디비 인설트 업데이트 델리트 문을 좀 변경만 하면 된다.

$mode 변수를 따로 만든것이니 직접 포스트로 만들어주면된다.

\`\`\`php
<?php
  
include_once('./_common.php');
  
if($mode == "upload") {
  
    // 디렉토리가 생성
    @mkdir(g5_data_path.'/new_win_image/', g5_dir_permission);
    @chmod(g5_data_path.'/new_win_image/', g5_dir_permission);
  
    $tmp_file  = $_files['upload']['tmp_name'];
    $filesize  = $_files['upload']['size'];
    $filename  = $_files['upload']['name'];
    $filename  = get_safe_filename($filename);
    $dest_file = null;
  
    $success = false;
    $file_path = '';
    $bf_no = 0;
    $is_image = false;
  
    $chars_array = array_merge(range(0,9), range('a','z'), range('a','z'));
  
    if (is_uploaded_file($tmp_file)) {
  
        //=================================================================\\
        // 090714
        // 이미지나 플래시 파일에 악성코드를 심어 업로드 하는 경우를 방지
        // 에러메세지는 출력하지 않는다.
        //-----------------------------------------------------------------
        $timg = @getimagesize($tmp_file);
        // image type
        if (
            preg_match("/\\.({$config['cf_image_extension']})$/i", $filename) ||
            preg_match("/\\.({$config['cf_flash_extension']})$/i", $filename)
        ) {
            if ($timg['2'] < 1 || $timg['2'] > 16) return;
        }
        //=================================================================
  
        $upload['image'] = $timg;
  
        // 프로그램 원래 파일명
        $upload['source'] = $filename;
        $upload['filesize'] = $filesize;
  
        $upload['fileurl'] = '';
        $upload['thumburl'] = '';
        $upload['storage'] = '';
  
        // 아래의 문자열이 들어간 파일은 -x 를 붙여서 웹경로를 알더라도 실행을 하지 못하도록 함
        $filename = preg_replace("/\\.(php|pht|phtm|htm|cgi|pl|exe|jsp|asp|inc)/i", "$0-x", $filename);
  
        shuffle($chars_array);
        $shuffle = implode('', $chars_array);
  
        // 첨부파일 첨부시 첨부파일명에 공백이 포함되어 있으면 일부 pc에서 보이지 않거나 다운로드 되지 않는 현상이 있습니다. (길상여의 님 090925)
        $upload['file'] = abs(ip2long($_server['remote_addr'])).'_'.substr($shuffle,0,8).'_'.replace_filename($filename);
  
        $dest_file = g5_data_path.'/new_win_image/'.$upload['file'];
  
        // 업로드가 안된다면 에러메세지 출력하고 죽어버립니다.
        $error_code = move_uploaded_file($tmp_file, $dest_file) or die($_files['bf_file']['error']);
  
        // 올라간 파일의 퍼미션을 변경합니다.
        chmod($dest_file, g5_file_permission);
  
        //썸네일 여기서 썸네일 사이즈 는 새로 적용해줘야한다. 
        $thumb_files = thumb($dest_file,$default['de_pthumb_width'],$default['de_pthumb_height']);
  
        $token_id = $_post['token_id'];
  
        $sql = " insert into {$g5['new_win_image_table']} set  
                 bf_source = '{$upload['source']}',
                 bf_file = '{$upload['file']}',
                 bf_content = '',
                 bf_fileurl = '{$upload['fileurl']}',
                 bf_thumburl = '{$thumb_files}',
                 bf_storage = '{$upload['storage']}',
                 bf_download = 0,
                 bf_filesize = '".(int)$upload['filesize']."',
                 bf_width = '".(int)$upload['image'][0]."',
                 bf_height = '".(int)$upload['image'][1]."',
                 bf_type = '".(int)$upload['image'][2]."',
                 bf_datetime = '".g5_time_ymdhis."',
                 bf_token_id = '{$token_id}'";
        sql_query($sql);
        $success = true;
        $file_path = '/data/new_win_image/'.$upload['file'];
        $mime = mime_content_type(g5_data_path.'/new_win_image/'.$upload['file']);
        if(strpos($mime,'image') !== false) {
            $is_image = true;
        }
    }
  
  
    header("content-type: application/json");
    echo json_encode([
        'success'=>$success,
        'bf_no'=>$bf_no,
        'image'=>$is_image,
        'path'=> $file_path
    ]);
  
}
else
if($mode == "upload_list") {
  
    $token_id = strip_tags(clean_xss_attributes($_post['token_id']));
  
    $sql = "
         select bf_source as name, bf_file, bf_no, bf_filesize as size, bf_width as width, bf_height as height
         from {$g5['new_win_image_table']} where bf_token_id = '{$token_id}'
        ";
    $result = sql_query($sql);
  
    $list = [];
    while ($row = sql_fetch_array($result)) {
        $row['path'] = '/data/new_win_image/'.$row['bf_file'];
        $row['image'] = true;
        if(is_file(g5_data_path.'/new_win_image/'.$row['bf_file'])) {
            $row['mime'] = mime_content_type(g5_data_path.'/new_win_image/'.$row['bf_file']);
            if(strpos($row['mime'],'image') === false) {
                $ext = pathinfo($row['name'],pathinfo_extension);
                $row['thumb'] = g5_data_path.'/new_win_image/img/extensions/'.$ext.'.svg';
                $row['image'] = false;
            }
        }
        $list[] = $row;
    }
  
    header("content-type: application/json");
    echo json_encode([
        'count'=>sizeof($list),
        'list'=>$list
    ]);
  
  
}
else
if($mode == "upload_remove") {
  
    $token_id = strip_tags(clean_xss_attributes($_post['token_id']));
    $bf_no = strip_tags(clean_xss_attributes($_post['bf_no']));
  
    $success = false;
    if($bf_no) {
        $row = sql_fetch("
                     select *
                     from {$g5['new_win_image_table']}
                     where bf_token_id = {$token_id}
                     and bf_no = '{$bf_no}'
                    limit 1
                    ");
  
        $delete_file = g5_data_path.'/new_win_image/'.$row['bf_file'];
        if( file_exists($delete_file) ){
            @unlink(g5_data_path.'/new_win_image/'.$row['bf_file']);
        }
  
        sql_query("
            delete from {$g5['new_win_image_table']}
            where bf_token_id = '{$token_id}'
            and bf_no = '{$bf_no}'
        ");
        $success = true;
    }
  
  
    header("content-type: application/json");
    echo json_encode(['success'=>$success]);
}
\`\`\`

위에 보면 썸네일 함수 보면 없던 설정 디비 필드가 보 일 것이다. 저건 직접 만들어주던지 아니면 썸네일 사이즈를 지정해주면 된다. 예를들어서 300, 300 으로 해주면된다.

이제 마지막으로 이미지 파일 삭제 소스이다.

이건 이미지 설정에서 토큰 아이디가 불일치 하거나 없으면 쓰레기값이 되는거니 만들어주면 좋다.

불필요한 이미지를 없애주는 로직이다.

 

admin.memu100.php 에 접근해서 아래 소스를 알맞는 곳에 넣어주면 된다.

 

\`\`\`php
array('100930', '이미지파일 일괄삭제',g5_admin_url.'/newwin_image_delete.php',   'newwin_image_delete', 1),
\`\`\`
newwin_image_delete.php 

\`\`\`php
<?php
  
$sub_menu = '100930';
  
include_once('./_common.php');
  
include_once(g5_theme_path.'/autoload.php');
  
  
  
if ($is_admin != 'super')
  
alert('최고관리자만 접근 가능합니다.', g5_url);
  
  
  
$g5['title'] = '이미지파일 일괄삭제';
  
include_once('./admin.head.php');
  
?>
  
  
  
<div class="local_desc02 local_desc">
  
<p>
  
완료 메세지가 나오기 전에 프로그램의 실행을 중지하지 마십시오.
  
</p>
  
</div>
  
  
  
<?php
  
  
  
$sql = "
  
select a.bf_token_id,
  
a.bf_file,
  
a.bf_no,
  
a.bf_thumburl,
  
b.nw_token_id
  
from {$g5['new_win_image_table']} a
  
left join {$g5['new_win_table']} b
  
on a.bf_token_id = b.nw_token_id
  
where b.nw_token_id is null
  
order by a.bf_no asc
  
";
  
$list = [];
  
$result = sql_query($sql);
  
for ($i=0;$files = sql_fetch_array($result);$i++) {
  
$path = g5_data_path.'/new_win_image/';
  
if(is_file($path.$files['bf_file'])) {
  
$list[$i]['files'] = $path.$files['bf_file'];
  
$list[$i]['thumb'] = $path.$files['bf_thumburl'];
  
}
  
}
  
  
  
  
  
  
  
flush();
  
  
  
if (empty($list)) {
  
echo '<p>이미지 디렉토리를 열지 못했습니다.</p>';
  
}
  
  
  
$cnt=0;
  
echo '<ul>'.php_eol;
  
  
  
foreach($list as $image) {
  
if (is_file($image['files'])) {
  
$cnt++;
  
@unlink($image['files']);
  
  
  
echo '<li>'.$image['files'].'</li>'.php_eol;
  
  
  
flush();
  
  
  
if ($cnt%10==0)
  
echo php_eol;
  
}
  
}
  
  
  
  
  
foreach($list as $image) {
  
if (is_file($image['thumb'])) {
  
$cnt++;
  
@unlink($image['thumb']);
  
  
  
echo '<li>'.$image['thumb'].'</li>'.php_eol;
  
  
  
flush();
  
  
  
if ($cnt%10==0)
  
echo php_eol;
  
}
  
}
  
  
  
  
  
  
  
// 이미지 삭제
  
  
  
$sql = "
  
select a.bf_no,a.bf_token_id,
  
a.bf_source as name,
  
a.bf_file,
  
a.bf_no,
  
a.bf_filesize as size,
  
a.bf_width as width,
  
a.bf_height as height,
  
b.nw_token_id
  
from {$g5['new_win_image_table']} a
  
left join {$g5['new_win_table']} b
  
on a.bf_token_id = b.nw_token_id
  
where b.nw_token_id is null
  
order by a.bf_no asc
  
";
  
$list = [];
  
$result = sql_query($sql);
  
while ($row = sql_fetch_array($result)) {
  
if($row['bf_no']) {
  
$sql2 = "delete from {$g5['new_win_image_table']} where bf_no = {$row['bf_no']}";
  
sql_query($sql2);
  
}
  
}
  
  
  
  
  
echo '<li>완료됨</li></ul>'.php_eol;
  
echo '<div class="local_desc01 local_desc"><p><strong>이미지 '.$cnt.'건의 삭제 완료됐습니다.</strong>
프로그램의 실행을 끝마치셔도 좋습니다.</p></div>'.php_eol;
  
?>
  
  
  
<?php
  
include_once('./admin.tail.php');
\`\`\`

여기까지 마치겠다. 끝!!

추가적으로 함수가 새로 생겼다. 

\`\`\`php
// 썸네일 간단하게 사용 할때...
  
function thumb($path, $width = 320, $height = 180) {
  
include_once(g5_lib_path."/thumbnail.lib.php");
  
$filename = end(explode("/", $path));
  
$path = dirname($path);
  
return thumbnail($filename, $path, $path, $width, $height, false, true);
  
}
\`\`\`






`,link:"/그누&영카트/dropzone 이미지 업로드 플러그인 만들기"},{title:"kcp 본인인증 안전하지 않는 페이지 뜨는경우",content:`
# {{ $frontmatter.title }}


## 설명 :


아래 링크 참고 하자.

https://sir.kr/qa/453045?stx=kcp+%eb%b3%b8%ec%9d%b8%ec%9d%b8%ec%a6%9d&sst=wr_num&sop=and&unanswered=0&unadopted=0&adopted=0&s_tag=



결국엔 ssl을 달아야한다... 

`,link:"/그누&영카트/kcp 본인인증 안전하지 않는 페이지 뜨는경우"},{title:"pdf 만들기",content:`
# {{ $frontmatter.title }}


## 설명 :

최근에 데이터가 날라가는 일이 있어서 다시 포스트 글을 남겨본다.

 

준비물 : mpdf 8.0, 컴포저 

 

컴포저로 다운 받는다. (센토환경에서 설치 방법은 이전 포스트글에 있어서 참고하면된다.)

 

https://packagist.org/


최신버전으로 그대로 다운 받는다.

 
\`\`\`bash
composer require mpdf/mpdf
\`\`\`

 

이제는 권한 설정한다. (그대로 사용하면 에러생긴다.) 

\`\`\`bash
sudo chmod -r 777 vendor/mpdf/mpdf/tmp
\`\`\`

나는 그누보드 내부에서 사용 하는거니까 

index.php를 만들어서 인크루드를 미리 해놓았다.

\`\`\`php
require_once __dir__ . '/vendor/autoload.php';
\`\`\`

이제 좀더 구체적으로 세팅 해야된다.

경로는 이러하다. /mpdf/mpdf/src/config/ 까지 접근한다.

 

configvariables.php
\`\`\`
'useadobecjk' => true,
\`\`\`

 


fontvariables.php
\`\`\`
'fontdata' => [
  
... 밑으로 내려가서 마지막쯤에..
"nanumgothic" => [
                    'r' => "nanumgothic.ttf",
                    'b' => "nanumgothicbold.ttf",
                ],
  
  
  
'bmponly' => [
                "nanumgothic",
  
  
  
'sans_fonts' => ['nanumgothic',
  
  
  
  
  
'serif_fonts' => ['nanumgothic',
 
\`\`\`




 

위치는 그냥 놓고 싶은 위치에 놓으면 된다. 저 배열 마다 나눔고딕을 넣어주면된다.

그리고나서 실제로 나눔고딕 파일을 넣어줘야한다.

 

경로는 이러하다. /mpdf/mpdf/ttfonts/ 까지 접근한다.

 

[나눔 고딕 다운 받기](https://fontmeme.com/ktype/nanum-gothic-font/	) 


 

위에꺼 그대로 링크 이동해서 다운 받으면된다. 다른곳에는 에러가 나서.. (명칭이 좀 다르게 해놓으면 에러난다.)

압축을 풀면 전부다 넣어주면된다. 볼드체,익스트라,라이트 네개 전부다!!!

 

거의 다 됐다! 

사용법은 아래 처럼 하면 된다.

\`\`\`php
include_once pdf_plugin_path; << 이건 상수로 만들어놓은거다 알아서 응용한다.
  
$mpdf = new \\mpdf\\mpdf([
    'mode' => 'utf-8',
    'format' => 'a4',
    'margin_left' => 5,
    'margin_right' => 5,
    'margin_top' => 5,
    'margin_bottom' => 5,
    'margin_header' => 0,
    'margin_footer' => 0,
]);
$mpdf->settitle('타이틀');
$html = file_get_contents('경로/template.php');
$mpdf->addpage();
$mpdf->writehtml($html);
  
  
$filename = "파일이름.pdf";
$mpdf->output($filename);
\`\`\`

위에꺼 처럼 사용하면된다 별거 없다

일단 설명 하자면 

new \\mpdf\\mpdf 생성자 옵션을 잘 해주면된다. 위에 있는거 대로 하면 된다.

 

$mpdf->writehtml($html);  writehtml 메서드로 템플릿을 임포트하는 부분이다.

 

 

$mpdf->output($filename); 이게 중요한거다 그냥 디스플레이용으로 쓴다면 filename 을 빼면된다.

$mpdf->output 이대로만 쓰면 되고 만약에 다운로드까지 쓴다면

 

$mpdf->output($filename,'d'); 두번째 인자값에 d를 넣어주면 된다.

 

여기까지 사용법을 마치겠다.

 

## 맺음말 : 

 

참고 자료를 보면서 따라 했다. 여기서 좀더 구체적으로 풀이해서 설명하였다.

하지만 템플릿 같은건 직접 만들었는데 이건 php,mysql, html inline tag에 css 로 꾸민거다.

당연히 style 태그를 넣어도 된다. 근데 점점 길어지니까 인라인 태그로... 짧게 편집 하려고 애를 썼다.

견적서를 만들려고 시도를 했다가 사람이 할짓이 아니다.. 쪼금만 틀어져도 a4 사이즈에 넘쳐날수 있고 줄어들수있고.. 패딩 마진 으로 겨우야 맞췄는데 

테이블 태그로만 해서 겨우야 하나 만들었다~ 사이즈도 적당하고.. 쌩 노가다 해야된다.. 

 

그리고 마지막 할말은 자바스크립트로도 가능하다 자료가 다양한데~ 나는 게시판 글 읽기 페이지에서 pdf 를 뷰어가 나오면서 그대로 볼 수 있는 기능을 만들어야한다.

자스로 처리하면 그렇게 쌩 노가다하면서 할 필요도 없다 해당 영역을 이미지로 캡쳐해서 pdf로 다운 받는 로직이니까 금방 된다.

내껀 의뢰 때문에.. 어쩔수없이 해야된다..

`,link:"/그누&영카트/pdf 만들기"},{title:"php8 에서 impload 사용할때 문제",content:`
# {{ $frontmatter.title }}

impload 함수를 사용할 때 주의 해야 되는것은 배열 형태인지 확인 해야된다.

만약에 인풋에 배열 네임으로 적용해서 써야된다면  
\`\`\`html
<input name="test[]" />
\`\`\`
이렇게 해야된다.


그리고 백단으로 넘길때는 

update 나 insert 쿼리 문 써서 넘길적에 아래 처럼 하면된다.
 
\`\`\`php
$wr_1 = isset($_request['wr_1']) && is_array($_request['wr_1']) ? $_request['wr_1'] : [];
$wr_1 = implode('|', $wr_1);

$sql = " update {$write_table}
set   wr_1 = '{$wr_1}'
where wr_id = '{$wr_id}' ";
sql_query($sql);
\`\`\`

위 소스코드를 설명하자면 in_array나 isset으로 설정된 변수인지 검사 해야된다. 

어쨌든 php8이 제일 까탈스러워서.. 위 방법을 해야된다.

 
불러올때는 아래 처럼 하면된다.

\`\`\`php
<?php $array = explode('|', $write['wr_1']); ?>
<input type="checkbox" name="wr_1[]" value="신규" <?php if(in_array('신규', $array)) echo 'checked'; ?>>
 \`\`\`
 
이러면 문제 없이 작동 될 것이다. 

`,link:"/그누&영카트/php8에서 impload 사용할때"},{title:"rss 페이지 만들기",content:`
# {{ $frontmatter.title }}




## 설명 :


최근에 데이터가 날라가서 다시 포스팅 글 남겨본다.  

그누보드에 보면 rss 페이지가 게시판에 있긴하다.. 근데 게시판에서만 동작 하니까~ 다시 만들어줘야한다.

이건 게시판 뿐만 아니라 모든 페이지에서 활성화 될 수 있는 페이지다(?)


 

아래 소스코드를 보면서 설명한다.

여기서 보면 쿼리가 이런게 있다.

\`\`\`sql
wr_is_comment = 0 and wr_option not like '%secret%'
\`\`\`


옵션이 시크릿은 제외 시킨다는 뜻이다

그리고 bo_read_level 은 읽기 권한 옵션인데 1이상이면 낮은거니까 낮은순서로 오픈해서 보여준다는뜻이다.

 

밑에 보면 컨텐츠 테이블도 보인다 거기는 내가 일부러 만들어서 넣었다~ 

아무튼 이부분 그대로 쓰면 된다.


\`\`\`php
<?php
include_once "./_common.php";
  
header("content-type: text/xml;charset=utf-8");
header("cache-control: no-cache, must-revalidate");
header("pragma: no-cache");
  
$limit = 100;
  
$search = " where (1) ";
$search .= " and wr_is_comment = 0 and wr_option not like '%secret%'";
$selectboard = " select bo_table,bo_subject from ".$g5['board_table']." where bo_read_level = 1 ";
$queryboard = sql_query($selectboard);
  
while($rowboard = sql_fetch_array($queryboard)){
    $resultselect[] = "( select wr_id,wr_subject,wr_content,wr_datetime,wr_name, '".$rowboard['bo_table']."' as bo_table from ".$g5['write_prefix'].$rowboard['bo_table'].$search." )"; }
$resultquery = implode(" union all ", $resultselect);
  
  
$resultquery .= " order by wr_datetime desc limit 0 , $limit ";
$query = sql_query($resultquery);
  
$data = [];
while($row = sql_fetch_array($query)){
    $content = strip_tags($row['wr_content']);
    $content = str_replace("&nbsp;"," ",$content);
    $data[] = $row;
}
  
// 허용된 co_id
$allowed = ["about"];
$co_id = implode("','", $allowed);
$contentquery = " select co_id,co_subject,co_content from ".$g5['content_table']." where co_id in('".$co_id."') order by co_id desc ";
$contentrr = sql_query($contentquery);
$content_arr = [];
for ($i=0;$cnrow = sql_fetch_array($contentrr);$i++) {
    $content_arr[$i]['co_id'] = $cnrow['co_id'];
    $content_arr[$i]['co_subject'] = $cnrow['co_subject'];
    $content_arr[$i]['co_content'] = $cnrow['co_content'];
    $content_arr[$i]['co_name'] = '비버';
    $content_arr[$i]['co_datetime'] = g5_time_ymdhis;
}
  
$buff = '';
$buff .= "<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?>".php_eol;
$buff .= '<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/">'.php_eol;
$buff .= '<channel>'.php_eol;
$buff .= '<title>'.specialchars_replace($config['cf_title']).'</title>'.php_eol;
$buff .= '<link>'.g5_url.'</link>'.php_eol;
$buff .= '<description><![cdata['.$config['cf_1'].']]></description>'.php_eol;
$buff .= '<language>ko</language>'.php_eol;
  
// 내용관리 데이터 출력
foreach ($content_arr as $item) {
    $buff .= "<item>".php_eol;
    $buff .= "<category><![cdata[".$item['co_id']."]]></category>".php_eol;
    $buff .= "<title><![cdata[".$item['co_subject']."]]></title>".php_eol;
    $buff .= "<link>".specialchars_replace(get_pretty_url('content',$item['co_id']))."</link>".php_eol;
    $buff .= "<description><![cdata[".$file.conv_content($item['co_content'], $html)."]]></description>".php_eol;
    //$buff .= "<description><![cdata[".mb_strimwidth($item['co_content'],0,400,'..','utf-8')."]]></description>".php_eol;
   // $buff .= "<dc:creator>".specialchars_replace($item['co_name'])."</dc:creator>".php_eol;
    $buff .= "<pubdate>".date("r", strtotime($item['co_datetime']))."</pubdate>".php_eol;
    $buff .= "</item>".php_eol;
}
  
// 게시판 데이터 출력
foreach ($data as $item) {
    $buff .= "<item>".php_eol;
    $buff .= "<category><![cdata[".$item['bo_table']."]]></category>".php_eol;
    $buff .= "<title><![cdata[".$item['bo_table']." - ".$item['wr_subject']."]]></title>".php_eol;
    $buff .= "<link>".get_pretty_url($item['bo_table'],$item['wr_id'])."</link>".php_eol;
    //$buff .= "<description><![cdata[".mb_strimwidth($item['wr_content'],0,400,'..','utf-8')."]]></description>".php_eol;
    $buff .= "<description><![cdata[".$file.conv_content($item['wr_content'], $html)."]]></description>".php_eol;
   // $buff .= "<dc:creator>".specialchars_replace($item['wr_name'])."</dc:creator>".php_eol;
    $buff .= "<pubdate>".date("r", strtotime($item['wr_datetime']))."</pubdate>".php_eol;
    $buff .= "</item>".php_eol;
}
  
$buff .= "</channel>".php_eol;
$buff .= "</rss>";
  
echo $buff;
\`\`\`

금방 쉽게 만든 소스코드이다 바로 이대로 쓰면된다.

 

 

## 맺음말 :

만약에 다시 만들고 싶다면 티스토리에보면 rss 형식이 있다 네이버도 있어서 네이버 형식도 참고해본다.

이대로 쓰면 아무런 문제 없다.`,link:"/그누&영카트/rss 페이지 만들기"},{title:"구글 sns 로그인 달기",content:`
# {{ $frontmatter.title }}


## 설명 :




https://cutebabypig15.tistory.com/55
	


여기 레퍼런스 참고하면된다.

네이버랑 카카오도 비슷한데 구글이 좀더 조건 까다롭다..

결국엔 2차 도메인까지 달아놓은 상태에서 해야된다.

구글 처음에 생성할때 구글 + api 저거 사용하기 누르면된다.

아래 식스샵 자료가 최신자료라서 정확하다.

https://help.sixshop.com/learn-sixshop/store-manager/add-ons/social-login/googlelogin
	


https://gnustudy.com/bbs/board.php?bo_table=gnu_tip&wr_id=65
	
`,link:"/그누&영카트/구글 sns 로그인 달기"},{title:"그누4 ckeditor 4 유투브 안나오는 현상",content:`
# {{ $frontmatter.title }}



## 원인 :
 
ckeditor 4 유투브 안나온 현상.. 

처음에 유투브를 넣을때는 정상적으로 작동되는데 저장 후에 수정 페이지로 접근 하니까 나오지 않는다.

그누보드 최신에서 ckeditor5 에서는 아주 정상적으로 작동 된다.




## 해결 방법 :

ckeditor 4 설정에서 추가하면 된다. 

\`\`\`js
config.allowedcontent = true;
\`\`\`







`,link:"/그누&영카트/그누4 ckeditor 4 유투브 안나오는 현상"},{title:"그누보드 게시판 이미지 출력에서 base64 로 인코딩이 제대로 출력 되지 않는 경우",content:`
# {{ $frontmatter.title }}


## 원인 :
 
그누보드로 블로그 제작 중인데 이미지가 올려도 빈화면만 나와서 무슨 문제 있는가 하고 체크 해봤는데

이미지는 디비에 등록이 되는데 글 읽기 페이지 에선 나타나지 않아서 분석 해보았다

 

## 해결 방법 :

냑에서 자료를 찾아본 결과 질문 답변에 어떤 분이 질문 올리고 자문 자답 한 글을 봤다 

거기서 힌트를 찾을 수 있었다.

우선 /bbs/view.php 로 접근한다.거기서 120 라인에보면 소스가 보인다.

 
\`\`\`php
$view['content'] = conv_content($view['wr_content'], $html);
\`\`\`



여기보면 conv_content 로 접근하면 된다.

아래 소스 를 보고 해결 하면된다.

\`\`\`php
// common.lib.php
// 580라인 
function html_purifier($html)
{
    $f = file(g5_plugin_path.'/htmlpurifier/safeiframe.txt');
    $domains = array();
    foreach($f as $domain){
        // 첫행이 # 이면 주석 처리
        if (!preg_match("/^#/", $domain)) {
            $domain = trim($domain);
            if ($domain)
                array_push($domains, $domain);
        }
    }
    // 내 도메인도 추가
    array_push($domains, $_server['http_host'].'/');
    $safeiframe = implode('|', $domains);
  
    include_once(g5_plugin_path.'/htmlpurifier/htmlpurifier.standalone.php');
    include_once(g5_plugin_path.'/htmlpurifier/extend.video.php');
    $config = htmlpurifier_config::createdefault();
    // data/cache 디렉토리에 css, html, uri 디렉토리 등을 만든다.
    $config->set('cache.serializerpath', g5_data_path.'/cache');
    $config->set('html.safeembed', false);
    $config->set('html.safeobject', false);
    $config->set('output.flashcompat', false);
    $config->set('html.safeiframe', true);
    if( (function_exists('check_html_link_nofollow') && check_html_link_nofollow('html_purifier')) ){
        $config->set('html.nofollow', true);    // rel=nofollow 으로 스팸유입을 줄임
    }
    $config->set('uri.safeiframeregexp','%^(https?:)?//('.$safeiframe.')%');
    $config->set('attr.allowedframetargets', array('_blank'));
    $config->set('uri.allowedschemes', array('http' => true, 'https' => true, 'data' => true));
    //유튜브, 비메오 전체화면 가능하게 하기
    $config->set('filter.custom', array(new htmlpurifier_filter_iframevideo()));
    $purifier = new htmlpurifier($config);
    return run_replace('html_purifier_result', $purifier->purify($html), $purifier, $html);
}
\`\`\`



위에 소스 추가 된게 무엇인가 하면
  
\`\`\`php
$config->set('attr.allowedframetargets', array('_blank'));  여기 라인 아랫줄에 추가 하면된다.
\`\`\`

\`\`\`php
$config->set('attr.allowedframetargets', array('_blank'));
$config->set('uri.allowedschemes', array('http' => true, 'https' => true, 'data' => true)); #추가
\`\`\`

`,link:"/그누&영카트/그누보드 게시판 이미지 출력에서 base64 로 인코딩이 제대로 출력 되지 않는 경우"},{title:"그누보드 모바일웹에서 쇼핑몰만 사용하기",content:`
# {{ $frontmatter.title }}


## 설명 :

그누보드 5.4 위주로 설명한다. (최신버전도 가능하다.)

일단 theme.config.php에 접근한다.


모바일 넣어주고 

\`\`\`php
if(! defined('g5_community_use')) define('g5_community_use', false);
\`\`\`
true에서 false로 불린값을 변경하자..

이렇게 설정해주면 커뮤니티는 사용불가이고 모바일 위주로 영카트만 가능하다.

`,link:"/그누&영카트/그누보드 모바일웹에서 쇼핑몰만 사용하기"},{title:"그누보드 분류관리 커스텀",content:`
# {{ $frontmatter.title }}



브랜드 관리 소스 추가 

categoryform.php 접속해서 소스 추가한다.

\`\`\`php
//적절한 곳에서 추가하면된다.
 <tr>
    <th scope="row"><label for="it_img">브랜드이미지</label></th>
    <td>
        <?php echo help("브랜드 이미지를 입력해주세요."); ?>
        <input type="file" name="ca_brand_img" id="ca_brand_img">
        <?php
        $ca_brand_img = g5_data_path.'/brand/'.$ca['ca_brand_img'];
        $ca_brand_img_exists = is_file($ca_brand_img) && file_exists($ca_brand_img);
        if($ca_brand_img_exists) {
            $thumb = get_brand_thumbnail($ca['ca_brand_img'], 25, 25);
            $img_tag = "<img src='".g5_data_url."/brand/".$ca['ca_brand_img']."' class='shop_item_preview_image' >";
            ?>
            <label for="ca_brand_del"><span class="sound_only">이미지 </span>파일삭제</label>
            <input type="checkbox" name="ca_brand_del" id="ca_brand_del" value="1">
            <span class="sit_wimg_limg1"><?php echo $thumb; ?></span>
            <div id="limg1" class="banner_or_img">
                <?php echo $img_tag; ?>
                <button type="button" class="sit_wimg_close">닫기</button>
            </div>
            <script>
                $('<button type="button" id="it_limg1_view" class="btn_frmline sit_wimg_view">이미지 확인</button>').appendto('.sit_wimg_limg1');
            <\/script>
        <?php } ?>
    </td>
</tr>
\`\`\`

shop.lib.php 에서 추가하면된다. 혹은 extend에서 추가해도 좋다. 

\`\`\`php
// 브랜드 이미지 썸네일 20210917
function get_brand_thumbnail($img, $width, $height=0, $id='', $is_crop=false)
{
    $str = '';
  
    if ( $replace_tag = run_replace('get_brand_thumbnail', $str, $img, $width, $height, $id, $is_crop) ){
        return $replace_tag;
    }
  
    $file = g5_data_path.'/brand/'.$img;
    if(is_file($file))
        $size = @getimagesize($file);
  
    if (! (isset($size) && is_array($size)))
        return '';
  
    if($size[2] < 1 || $size[2] > 3)
        return '';
  
    $img_width = $size[0];
    $img_height = $size[1];
    $filename = basename($file);
    $filepath = dirname($file);
  
    if($img_width && !$height) {
        $height = round(($width * $img_height) / $img_width);
    }
  
    $thumb = thumbnail($filename, $filepath, $filepath, $width, $height, false, $is_crop, 'center', false, $um_value='80/0.5/3');
  
    if($thumb) {
        $file_url = str_replace(g5_path, g5_url, $filepath.'/'.$thumb);
        $str = '<img src="'.$file_url.'" width="'.$width.'" height="'.$height.'"';
        if($id)
            $str .= ' id="'.$id.'"';
        $str .= ' alt="">';
    }
  
    return $str;
}
  
  
  
// 브랜드 이미지 업로드 추가 20210917
function brand_img_upload($srcfile, $filename, $dir)
{
    if($filename == '')
        return '';
  
    $size = @getimagesize($srcfile);
    if($size[2] < 1 || $size[2] > 3)
        return '';
  
    //php파일도 getimagesize 에서 image type flag 를 속일수 있다
    if (!preg_match('/\\.(gif|jpe?g|png)$/i', $filename))
        return '';
  
    if(!is_dir($dir)) {
        @mkdir($dir, 707);
        @chmod($dir, 707);
    }
  
    $pattern = "/[#\\&\\+\\-%@=\\/\\\\:;,'\\"\\^\`~\\|\\!\\?\\*\\$#<>\\(\\)\\[\\]\\{\\}]/";
  
    $filename = preg_replace("/\\s+/", "", $filename);
    $filename = preg_replace( $pattern, "", $filename);
  
    $filename = preg_replace_callback("/[가-힣]+/", '_callback_it_img_upload', $filename);
  
    $filename = preg_replace( $pattern, "", $filename);
    $prepend = '';
  
    // 동일한 이름의 파일이 있으면 파일명 변경
    if(is_file($dir.'/'.$filename)) {
        for($i=0; $i<20; $i++) {
            $prepend = str_replace('.', '_', microtime(true)).'_';
  
            if(is_file($dir.'/'.$prepend.$filename)) {
                usleep(mt_rand(100, 10000));
                continue;
            } else {
                break;
            }
        }
    }
  
    $filename = $prepend.$filename;
  
    upload_file($srcfile, $filename, $dir);
  
    $file = str_replace(g5_data_path.'/brand/', '', $dir.'/'.$filename);
  
    return $file;
}


//categoryformupdate.php
  
//여기서 $ca_id 변수 밑에서 소스 추가를 하면된다.
  
  
@mkdir(g5_data_path."/brand", 707);
@chmod(g5_data_path."/brand", 707);
  
  
$ca_brand_img = '';
// 파일정보
if($w == "u") {
    $sql = " select ca_brand_img
            from {$g5['g5_shop_category_table']}
            where ca_id = '$ca_id' ";
    $file = sql_fetch($sql);
  
    $ca_brand_img = $file['ca_brand_img'];
}
  
$brand_dir = g5_data_path.'/brand';
  
  
$ca_brand_del = isset($_post['ca_brand_del']) ? $_post['ca_brand_del'] : 0;
  
// 파일삭제
if ($ca_brand_del) {
    $file_img1 = $brand_dir.'/'.clean_relative_paths($ca_brand_img);
    @unlink($file_img1);
    delete_item_thumbnail(dirname($file_img1), basename($file_img1));
    $ca_brand_del = '';
}
  
// 이미지업로드
if ($_files['ca_brand_img']['name']) {
    if($w == 'u' && $ca_brand_img) {
        $file_img1 = $brand_dir.'/'.clean_relative_paths($ca_brand_img);
        @unlink($file_img1);
        delete_item_thumbnail(dirname($file_img1), basename($file_img1));
    }
    $ca_brand_img = brand_img_upload($_files['ca_brand_img']['tmp_name'], $_files['ca_brand_img']['name'], $brand_dir.'/'.$ca_id);
}
  
$brand_full_path = $ca_brand_img;
  
190줄에서 추가하면된다.
$sql_common = "
ca_brand_img            = '$brand_full_path', "
\`\`\`

여기서 파일 등록이 안되면 쓰기권한을 줘야한다. 707로 brand 파일 권한을 주면 된다. 

 

## 원인 :

분류관리에서 커스텀 작업 했는데 자료가 없습니다. 라는 메시지가 뜬다. 

그누보드에서 분류관리 브랜드 이미지 추가 하는 작업을 하고 있는데 문제가 발생됐을때..

밑에 보니까 $check_str_keys 배열에 추가가 되지 않아서 생기는 문제다.




## 해결 방법 :  

\`\`\`php
$check_str_keys = array(
    'ca_brand_img' => 'str',
)
\`\`\`

`,link:"/그누&영카트/그누보드 분류관리 커스텀"},{title:"그누보드 사이트 점검 페이지 만들기",content:`
# {{ $frontmatter.title }}


## 설명 : 

페이지 중간에 문제가 발생했을때 잠깐 점검 페이지를 보여주기 위해서 만들어놓으면 좋을 것같다

원래는 sir 에서 찾아보니까 그걸로 써봤는데 수정 할 부분이 많아서.. 직접 만들기로 했다.

extend/inspect.extend.php 만든다.

\`\`\`php
<?php
  
######################### 사이트점검 플러그인 상수 ################################
  
  
define('inspect',      'inspect');
define('inspect_admin',      'inspect_admin');
  
  
define('inspect_plugin_path', g5_theme_path.'/'.g5_plugin_dir.'/'.inspect);
define('inspect_plugin_url', g5_theme_url.'/'.g5_plugin_dir.'/'.inspect);
  
define('inspect_plugin_lib_path', g5_theme_path.'/'.g5_plugin_dir.'/'.inspect.'/'.g5_lib_dir);
  
  
$g5['inspect_table'] = "config_inspect";
  
  
######################### 사이트점검 로직 ################################
  
$inspect_rows = sql_fetch(" select * from {$g5['inspect_table']}");
  
  
$c42df = preg_replace("\`\\/[^/]*\\.php$\`i", "/", $_server['php_self']);
  
  
// ...............................................
// url 검사를 해서 최상위 디덱토리로 이동해버린다.
// ...............................................
  
// 점검 시간이 종료
if (time() > strtotime($inspect_rows['insp_end']))
{
    // 현재시간을 날짜 형태로 저장한다.
    $d_tmp = date("y-m-d h:i:s", time());
    sql_query("update {$g5['inspect_table']} set \`insp_use\` = 0, \`last_date\` = '{$d_tmp}' where \`insp_use\` = 1",true);
}
  
if ($is_admin != "super" && $inspect_rows['insp_use'] == 1)
{
    $cnt_possible_ip = trim($inspect_rows['possible_ip']);
    if ($cnt_possible_ip) {
        $is_possible_ip = false;
        $pattern = explode("\\n", $cnt_possible_ip);
        for ($i=0; $i<count($pattern); $i++) {
            $pattern[$i] = trim($pattern[$i]);
            if (empty($pattern[$i]))
                continue;
  
            $pattern[$i] = str_replace(".", "\\.", $pattern[$i]);
            $pattern[$i] = str_replace("+", "[0-9\\.]+", $pattern[$i]);
            $pat = "/^{$pattern[$i]}$/";
            $is_possible_ip = preg_match($pat, $_server['remote_addr']);
            if ($is_possible_ip)
                break;
        }
    }
  
    if (!$is_possible_ip && $is_admin != "super") {
        define('_sircrypt_', true);
        include_once inspect_plugin_lib_path.'/inspect.lib.php';
        include_once inspect_plugin_path.'/inspect_view.php';
    }
}
\`\`\`

/theme/plugin/inspect 

lib/inspect.lib.php
\`\`\`php
<?php
  
// 이 파일은 새로운 파일 생성시 반드시 포함되어야 함
  
if (!defined('_sircrypt_')) exit; // 개별 페이지 접근 불가
  
  
  
$startdate = array(
  
date("y-m-d h:i", strtotime($inspect_rows['insp_start'])),
  
date("y", strtotime($inspect_rows['insp_start'])),
  
date("n", strtotime($inspect_rows['insp_start'])),
  
date("d", strtotime($inspect_rows['insp_start'])),
  
date("g", strtotime($inspect_rows['insp_start'])),
  
date("i", strtotime($inspect_rows['insp_start'])),
  
date("a", strtotime($inspect_rows['insp_start']))
  
);
  
  
  
$enddate = array(
  
date("y-m-d h:i", strtotime($inspect_rows['insp_end'])),
  
date("y", strtotime($inspect_rows['insp_end'])),
  
date("n", strtotime($inspect_rows['insp_end'])),
  
date("d", strtotime($inspect_rows['insp_end'])),
  
date("g", strtotime($inspect_rows['insp_end'])),
  
date("i", strtotime($inspect_rows['insp_end'])),
  
date("a", strtotime($inspect_rows['insp_end']))
  
);
  

function copyright_year($startdate='2021')
{
    return (date('y')==$startdate)?(date('y')):"$startdate - ".date('y');
}
\`\`\`



_common.php 

\`\`\`php
<?php
  
include_once "../../../../common.php";
\`\`\`



fliptimer.css 

\`\`\`css
@-webkit-keyframes fliptop {
  
0% {
  
-webkit-transform: perspective(400px) rotatex(0deg); }
  
  
  
100% {
  
-webkit-transform: perspective(400px) rotatex(-90deg); } }
  
  
  
@-webkit-keyframes flipbottom {
  
0% {
  
-webkit-transform: perspective(400px) rotatex(90deg); }
  
  
  
100% {
  
-webkit-transform: perspective(400px) rotatex(0deg); } }
  
  
  
@-moz-keyframes fliptop {
  
0% {
  
-moz-transform: perspective(400px) rotatex(0deg); }
  
  
  
100% {
  
-moz-transform: perspective(400px) rotatex(-90deg); } }
  
  
  
@-moz-keyframes flipbottom {
  
0% {
  
-moz-transform: perspective(400px) rotatex(90deg); }
  
  
  
100% {
  
-moz-transform: perspective(400px) rotatex(0deg); } }
  
  
  
@-ms-keyframes fliptop {
  
0% {
  
-ms-transform: perspective(400px) rotatex(0deg); }
  
  
  
100% {
  
-ms-transform: perspective(400px) rotatex(-90deg); } }
  
  
  
@-ms-keyframes flipbottom {
  
0% {
  
-ms-transform: perspective(400px) rotatex(90deg); }
  
  
  
100% {
  
-ms-transform: perspective(400px) rotatex(0deg); } }
  
  
  
@-keyframes fliptop {
  
0% {
  
transform: perspective(400px) rotatex(0deg); }
  
  
  
100% {
  
transform: perspective(400px) rotatex(-90deg); } }
  
  
  
@-keyframes flipbottom {
  
0% {
  
transform: perspective(400px) rotatex(90deg); }
  
  
  
100% {
  
transform: perspective(400px) rotatex(0deg); } }
  
  
  
.fliptimer {
  
color: #fff;
  
font-family: "helvetica neue", helvetica, sans-serif;
  
font-size: 90px;
  
font-weight: bold;
  
line-height: 100px;
  
height: 100px; }
  
.fliptimer .seperator {
  
vertical-align: top;
  
margin: 0 -20px;
  
display: inline; }
  
.fliptimer .seconds,
  
.fliptimer .minutes,
  
.fliptimer .hours,
  
.fliptimer .days {
  
height: 100%;
  
display: inline; }
  
.fliptimer .digit-set {
  
border-radius: 10px;
  
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  
border: 1px solid #111111;
  
width: 70px;
  
height: 100%;
  
display: inline-block;
  
position: relative;
  
margin: 0 1px; }
  
.fliptimer .digit {
  
position: absolute;
  
height: 100%; }
  
.fliptimer .digit > div {
  
position: absolute;
  
left: 0;
  
overflow: hidden;
  
height: 50%;
  
padding: 0 10px; }
  
.fliptimer .digit > div.digit-top, .fliptimer .digit > div.shadow-top {
  
background-color: #333;
  
border-bottom: 1px solid #333;
  
box-sizing: border-box;
  
top: 0;
  
z-index: 0;
  
border-radius: 10px 10px 0 0; }
  
.fliptimer .digit > div.digit-top:before, .fliptimer .digit > div.shadow-top:before {
  
content: "";
  
box-shadow: inset 0 10px 25px rgba(0, 0, 0, 0.4);
  
height: 100%;
  
width: 100%;
  
position: absolute;
  
left: 0;
  
top: 0; }
  
.fliptimer .digit > div.shadow-top {
  
background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0)), to(black));
  
width: 70px;
  
opacity: 0;
  
-webkit-transition: opacity 0.3s ease-in; }
  
.fliptimer .digit > div.digit-bottom, .fliptimer .digit > div.shadow-bottom {
  
background-color: #333;
  
bottom: 0;
  
z-index: 0;
  
border-radius: 0 0 10px 10px; }
  
.fliptimer .digit > div.digit-bottom .digit-wrap, .fliptimer .digit > div.shadow-bottom .digit-wrap {
  
display: block;
  
margin-top: -100%; }
  
.fliptimer .digit > div.digit-bottom:before, .fliptimer .digit > div.shadow-bottom:before {
  
content: "";
  
box-shadow: inset 0 10px 25px rgba(0, 0, 0, 0.3);
  
border-radius: 0 0 10px 10px;
  
height: 100%;
  
width: 100%;
  
position: absolute;
  
left: 0;
  
top: 0; }
  
.fliptimer .digit > div.shadow-bottom {
  
background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(black), to(rgba(0, 0, 0, 0)));
  
width: 50px;
  
opacity: 0;
  
-webkit-transition: opacity 0.3s ease-in; }
  
.fliptimer .digit.previous .digit-top,
  
.fliptimer .digit.previous .shadow-top {
  
opacity: 1;
  
z-index: 2;
  
-webkit-transform-origin: 50% 100%;
  
-webkit-animation: fliptop 0.3s ease-in both;
  
-moz-transform-origin: 50% 100%;
  
-moz-animation: fliptop 0.3s ease-in both;
  
-ms-transform-origin: 50% 100%;
  
-ms-animation: fliptop 0.3s ease-in both;
  
transform-origin: 50% 100%;
  
animation: fliptop 0.3s ease-in both; }
  
.fliptimer .digit.previous .digit-bottom,
  
.fliptimer .digit.previous .shadow-bottom {
  
z-index: 1;
  
opacity: 1; }
  
.fliptimer .digit.active .digit-top {
  
z-index: 1; }
  
.fliptimer .digit.active .digit-bottom {
  
z-index: 2;
  
-webkit-transform-origin: 50% 0%;
  
-webkit-animation: flipbottom 0.3s 0.3s ease-out both;
  
-moz-transform-origin: 50% 0%;
  
-moz-animation: flipbottom 0.3s 0.3s ease-out both;
  
-ms-transform-origin: 50% 0%;
  
-ms-animation: flipbottom 0.3s 0.3s ease-out both;
  
transform-origin: 50% 0%;
  
animation: flipbottom 0.3s 0.3s ease-out both; }
\`\`\`



inspect_view.php 

\`\`\`php
<?php
  
// 이 파일은 새로운 파일 생성시 반드시 포함되어야 함
  
if (!defined('_gnuboard_')) exit; // 개별 페이지 접근 불가
  
if (!defined('_sircrypt_')) exit;
  
  
  
include_once('./_common.php');
  
  
  
$g5_head_title = "서비스 점검중입니다.";
  
  
  
  
  
/*
  
// 만료된 페이지로 사용하시는 경우
  
header("cache-control: no-cache"); // http/1.1
  
header("expires: 0"); // rfc2616 - section 14.21
  
header("pragma: no-cache"); // http/1.0
  
*/
  
?>
  
<!doctype html>
  
<html lang="ko">
  
<head>
  
<meta charset="utf-8">
  
<?php
  
if (g5_is_mobile) {
  
echo '<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=10">'.php_eol;
  
echo '<meta name="handheldfriendly" content="true">'.php_eol;
  
echo '<meta name="format-detection" content="telephone=no">'.php_eol;
  
} else {
  
echo '<meta http-equiv="imagetoolbar" content="no">'.php_eol;
  
echo '<meta http-equiv="x-ua-compatible" content="ie=edge">'.php_eol;
  
}
  
  
  
if($config['cf_add_meta'])
  
echo $config['cf_add_meta'].php_eol;
  
?>
  
<title><?php echo $g5_head_title; ?></title>
  
<!--[if lte ie 8]>
  
<script src="<?php echo g5_js_url ?>/html5.js"><\/script>
  
<![endif]-->
  
<link rel="stylesheet" href="<?php echo inspect_plugin_url ?>/style.min.css">
  
<link rel="stylesheet" href="<?php echo inspect_plugin_url ?>/fliptimer.css" />
  
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js"><\/script>
  
</head>
  
<body>
  
<section class="inspection_wrp">
  
<aside class="logo"><span class="none">로고</span></aside>
  
<h1><img src="<?php echo inspect_plugin_url?>/img/ins_text_title.gif" alt="보다 나은 서비스 제공을 위한 점검 시간입니다."></h1>
  
  
  
<p class="info_txt">
  
<?php echo $rows['content'];?>
  
</p>
  
  
  
<article class="inspection_time_wrp">
  
<div class="inspection_loading" id="inspection_loading" style="width:80%;">
  
<div class="icon_chr">
  
</div>
  
<div class="icon_bar">
  
<div class="txt" id="progressbar">
  
0%
  
</div>
  
</div>
  
</div>
  
<div class="inspection_time_txt">
  
점검 시간 : <?php echo $startdate[0]?>:00 ~ <?php echo $enddate[0]?>:00
  
</div>
  
</article>
  
  
  
<div class="fliptimer">
  
<div class="hours"></div>
  
<div class="minutes"></div>
  
<div class="seconds"></div>
  
</div>
  
<aside class="footer">copyright &copy; <?php echo copyright_year('2021') ?> <strong><?php echo $config['cf_title']; ?></strong>. all rights reserved.</aside>
  
</section>
  
  
  
<script src="<?php echo inspect_plugin_url?>/jquery.fliptimer.js" type="text/javascript"><\/script>
  
<script>
  
$(document).ready(function() {
  
$('.fliptimer').fliptimer({
  
direction:'down',
  
date:"<?php echo $enddate[0]?>:00",
  
});
  
});
  
<\/script>
  
<?php
  
include_once(g5_theme_path."/tail.sub.php");
\`\`\`

  
 
  
 
jquery.fliptimer.js
 

\`\`\`js
(function($) {
  
  
  
/**
  
* @class fliptimer
  
* @constructor
  
*
  
* @param element {htmlelement} the element fliptimer is called on
  
*/
  
var fliptimer = function(element, options) {
  
this.element = element;
  
  
  
// ensures the htmlelement has a class of 'fliptimer'
  
if (!this.element.hasclass('fliptimer')) {
  
this.element.addclass('fliptimer');
  
}
  
  
  
// attach users options to instance
  
this.useroptions = options;
  
  
  
// attach default options to instance
  
this.defaultoptions = fliptimer.defaults;
  
  
  
// merge default options with user options and attach to instance
  
this.options = $.extend({}, this.defaultoptions, this.useroptions);
  
  
  
// detects if the seconds digits should be used
  
if (this.element.find('.seconds').length > 0) {
  
this.options.seconds = this.element.find('.seconds')[0];
  
}
  
  
  
// detects if the minutes digits should be used
  
if (this.element.find('.minutes').length > 0) {
  
this.options.minutes = this.element.find('.minutes')[0];
  
}
  
  
  
// detects if the hours digits should be used
  
if (this.element.find('.hours').length > 0) {
  
this.options.hours = this.element.find('.hours')[0];
  
}
  
  
  
// detects if the days digits should be used
  
if (this.element.find('.days').length > 0) {
  
this.options.days = this.element.find('.days')[0];
  
}
  
  
  
// store the date/time when initialised
  
this.initdate = new date();
  
  
  
// make the date into a javascript date
  
this.options.date = new date(this.options.date);
  
  
  
// untested
  
this.calculatedate();
  
};
  
  
  
fliptimer.defaults = {
  
seconds: false,
  
minutes: false,
  
hours: false,
  
days: false,
  
date: new date().todatestring(),
  
direction: 'up',
  
callback: null,
  
digittemplate: '' +
  
'<div class="digit">' +
  
' <div class="digit-top">' +
  
' <span class="digit-wrap"></span>' +
  
' </div>' +
  
' <div class="shadow-top"></div>' +
  
' <div class="digit-bottom">' +
  
' <span class="digit-wrap"></span>' +
  
' </div>' +
  
' <div class="shadow-bottom"></div>' +
  
'</div>'
  
};
  
  
  
fliptimer.prototype = {
  
/**
  
* calculates the difference in date for the timer
  
*
  
* @method calculatedate
  
*/
  
calculatedate: function() {
  
var datediff;
  
  
  
// calculates the difference in dates
  
if (this.options.direction == 'down') {
  
datediff = this.options.date - this.initdate;
  
} else if (this.options.direction == 'up') {
  
datediff = this.initdate - this.options.date;
  
}
  
  
  
// sets the date/time on the instance
  
this.seconds = math.floor(datediff/1000) % 60;
  
this.minutes = math.floor(datediff/1000/60) % 60;
  
this.hours = math.floor(datediff/1000/3600) % 24;
  
this.days = math.floor(datediff/1000/60/60/24);
  
  
  
// render the html for the plugin
  
this.render();
  
},
  
  
  
/**
  
* dictates what needs rendering for the plugin
  
*
  
* @method render
  
*/
  
render: function() {
  
// if using seconds, populate it
  
if (this.options.seconds) {
  
this.renderdigits(this.options.seconds, this.seconds);
  
}
  
// if using minutes, populate it
  
if (this.options.minutes) {
  
this.renderdigits(this.options.minutes, this.minutes);
  
}
  
// if using hours, populate it
  
if (this.options.hours) {
  
this.renderdigits(this.options.hours, this.hours);
  
}
  
// if using days, populate it
  
if (this.options.days) {
  
this.renderdigits(this.options.days, this.days);
  
}
  
  
  
this.starttimer();
  
},
  
  
  
/**
  
* renders the digits for a given subject
  
*
  
* @method renderdigits
  
* @param subject {htmlelement} the element to generate digits for
  
*/
  
renderdigits: function(subject, value) {
  
var i, x, max, maxdigit, currentdigit, _this = this, number_array;
  
// if digits are not already rendered...
  
if ($(subject).find('.digit').length == 0) {
  
// split the value into two individual digits
  
// unless time has ran out
  
if (_this.days < 0 && _this.hours < 0 && _this.minutes < 0 && _this.seconds < 0) {
  
number_array = [0,0];
  
}
  
else {
  
number_array = string(value).split(""); // split all digits
  
  
  
// ensure the set is at least 2 digits long
  
if (number_array.length < 2) {
  
number_array.unshift(0)
  
}
  
}
  
  
  
// set maximum digits for seconds/minutes/hours
  
if (subject == _this.options.seconds || subject == _this.options.minutes) {
  
// minutes and seconds max digit
  
maxdigit = 5;
  
} else if (subject == _this.options.hours) {
  
// hours max digit
  
maxdigit = 2;
  
} else {
  
// everything else digit max
  
maxdigit = 9;
  
}
  
  
  
// append a div for each digit
  
number_array.foreach(function() {
  
$(subject).append('<div class="digit-set"></div>');
  
});
  
  
  
// for each digit-set in the subject
  
$(subject).find('.digit-set').each(function(el) {
  
// if first digit, then use digit max
  
max = (el == 0) ? maxdigit : 9;
  
  
  
// generate the right number of digits
  
for(i=0; i<=max; i++) {
  
// append the digit template
  
$(this).append(_this.options.digittemplate);
  
  
  
// if direction is down then make numbers decline
  
x = (_this.options.direction == 'down') ? max - i : i;
  
  
  
// select the current digit and apply the number to it
  
currentdigit = $(this).find('.digit')[i];
  
$(currentdigit).find('.digit-wrap').append(x);
  
  
  
// if the current number matches the value then apply active class
  
if (x == number_array[el]) {
  
$(currentdigit).addclass('active');
  
} else if (number_array[el] != 0 && ((x + 1) == number_array[el])) {
  
// if the current number is one less than active but not zero
  
$(currentdigit).addclass('previous');
  
} else if (number_array[el] == 0 && x == max) {
  
// if the current number is zero then apply previous to max
  
$(currentdigit).addclass('previous');
  
}
  
}
  
});
  
}
  
},
  
  
  
/**
  
* start a timer with an interval of 1 second
  
*
  
* @method starttimer
  
*/
  
starttimer: function() {
  
var _this = this;
  
  
  
clearinterval(this.timer);
  
this.timer = setinterval(function() {
  
// if timer runs out stop the timer
  
if (_this.days <= 0 && _this.hours <= 0 && _this.minutes <= 0 && _this.seconds <= 0) {
  
// execute callback if one exists
  
if (_this.options.callback) {
  
_this.options.callback();
  
}
  
  
  
clearinterval(_this.timer);
  
return;
  
}
  
  
  
// if timer runs out stop the timer
  
if ((_this.days > 999) || (_this.days == 999 && _this.hours == 23 && _this.minutes == 59 && _this.seconds == 59)) {
  
clearinterval(_this.timer);
  
return;
  
}
  
  
  
// increase/decrease seconds
  
(_this.options.direction == 'down') ? _this.seconds-- : _this.seconds++;
  
if (_this.options.seconds) _this.increasedigit(_this.options.seconds);
  
  
  
// increase/decrease minutes
  
if (_this.seconds == 60 || _this.seconds == -1) {
  
if (_this.options.direction == 'down') {
  
_this.seconds = 59;
  
_this.minutes--;
  
} else {
  
_this.seconds = 0;
  
_this.minutes++;
  
}
  
if (_this.options.minutes) _this.increasedigit(_this.options.minutes);
  
}
  
  
  
// increase/decrease hours
  
if (_this.minutes == 60 || _this.minutes == -1) {
  
if (_this.options.direction == 'down') {
  
_this.minutes = 59;
  
_this.hours--;
  
} else {
  
_this.minutes = 0;
  
_this.hours++;
  
}
  
if (_this.options.hours) _this.increasedigit(_this.options.hours);
  
}
  
  
  
// increase/decrease days
  
if (_this.hours == 24 || _this.hours == -1) {
  
if (_this.options.direction == 'down') {
  
_this.hours = 23;
  
_this.days--;
  
} else {
  
_this.hours = 0;
  
_this.days++;
  
}
  
if (_this.options.days) _this.increasedigit(_this.options.days);
  
}
  
},1000);
  
},
  
  
  
/**
  
* changes classes on the digits to increase the number
  
*
  
* @method increasedigit
  
* @param target {htmlelement} the element to increase digit for
  
*/
  
increasedigit: function(target) {
  
var digitsets = new array(), _this = this;
  
  
  
// find all digit-sets related to digit type
  
$(target).find('.digit-set').each(function() {
  
digitsets.push(this);
  
});
  
  
  
// increase individual digit
  
increase(digitsets[digitsets.length - 1]);
  
  
  
/**
  
* increases individual digit in a digit-set
  
*
  
* @param el {htmlelement} the digit-set being increased
  
*/
  
function increase(el) {
  
var current = $(el).find('.active'),
  
previous = $(el).find('.previous'),
  
index = $.inarray(el, digitsets);
  
  
  
previous.removeclass('previous');
  
current.removeclass('active').addclass('previous');
  
  
  
if (current.next().length == 0) {
  
if (_this.options.direction == 'down'
  
&& target == _this.options.hours
  
&& (_this.hours == -1 || _this.hours == 23)
  
&& $(el).find('.digit').length == 10) {
  
// if the hours digit reaches 0 it should make 24 active
  
$($(el).find('.digit')[6]).addclass('active');
  
} else {
  
// increase to first digit in set
  
$(el).find('.digit:first-child').addclass('active');
  
}
  
if (index != 0) {
  
// increase digit of sibling digit-set
  
increase(digitsets[index - 1]);
  
}
  
} else {
  
if (_this.options.direction == "up"
  
&& target == _this.options.hours
  
&& _this.hours == 24) {
  
// if the hours digit reaches 24 it should make 0 active
  
$(el).find('.digit:first-child').addclass('active');
  
increase(digitsets[index - 1]);
  
} else {
  
// increase the next digit
  
current.next().addclass('active');
  
}
  
}
  
}
  
}
  
};
  
  
  
$.fn.fliptimer = function(options) {
  
return this.each(function() {
  
if (!$(this).data('fliptimer')) {
  
$(this).data('fliptimer', new fliptimer($(this), options));
  
}
  
});
  
};
  
})(jquery);
\`\`\`  



style.min.css 

\`\`\`css
@charset "utf-8";  
@import url('https://fonts.googleapis.com/css2?family=poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap'); @import url('https://fonts.googleapis.com/css2?family=noto+sans+kr:wght@100;300;400;500;700;900&family=poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap'); @import url('https://fonts.googleapis.com/css2?family=nanum+gothic:wght@400;700;800&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=nanum+gothic:wght@400;700;800&family=nanum+myeongjo:wght@400;700;800&display=swap'); @import url('https://fonts.googleapis.com/css2?family=nanum+brush+script&family=nanum+gothic:wght@400;700;800&family=nanum+myeongjo:wght@400;700;800&display=swap');  
 
body, html {font-size: 13px;line-height: 1.5;color: #333;letter-spacing: -.05em;background: #eee;font-family: "poppins", "noto sans kr", "nanum gothic", "맑은 고딕","malgun gothic","nanum myeongjo","nanum brush script", sans-serif;}  
 
blockquote, body, button, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, html, img, input, label, legend, li, ol, option, p, pre, select, textarea, ul {margin: 0;padding: 0}  </pre><pre class="brush: css">img {vertical-align: top}  button {cursor: pointer}  dl, li, ol, ul {list-style: none}  </pre><pre class="brush: css">fieldset, img {border: 0}  button, input, select {vertical-align: middle}  </pre><pre class="brush: css">a {text-decoration: none}  a:hover {text-decoration: underline}  </pre><pre class="brush: css">table {border-collapse: collapse}  </pre><pre class="brush: css">.none, table caption {position: absolute;left: -3000px;top: -3000px;width: 0;height: 0;font-size: 0;line-height: 0;overflow: hidden}  </pre><pre class="brush: css">article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {display: block;margin: 0;padding: 0}  </pre><pre class="brush: css">
\`\`\`


\`\`\`css
.space1 {clear: both;height: 1px;font-size: 0;line-height: 0} 
.space5 {clear: both;height: 5px;font-size: 0;line-height: 0}  
.space10 {clear: both;height: 10px;font-size: 0;line-height: 0} 
.space15 {clear: both;height: 15px;font-size: 0;line-height: 0}  
.space20 {clear: both;height: 20px;font-size: 0;line-height: 0}  
.space25 {clear: both;height: 25px;font-size: 0;line-height: 0}  
.space30 {clear: both;height: 30px;font-size: 0;line-height: 0}  
.space45 {clear: both;height: 45px;font-size: 0;line-height: 0}  
.space50 {clear: both;height: 50px;font-size: 0;line-height: 0}  

.txtover {overflow: hidden;text-overflow: ellipsis;-o-text-overflow: ellipsis;white-space: nowrap}  
.inspection_wrp {width: 820px;margin: 0 auto;padding: 20px 80px 30px}  
.inspection_wrp .logo {width: 53px;height: 46px}  
.inspection_wrp h1 {padding: 147px 0 0;font-size: 0;line-height: 0;text-align: center;background: url(../../plugin/inspect/img/ins_icon.gif) center 9px no-repeat} 
.inspection_wrp .info_txt {padding: 25px 0 20px;text-align: center}  
.inspection_wrp .info_txt strong {color: #d23433}  
.inspection_wrp .now_time {width: 275px;margin: 10px auto 0;padding: 4px 0 6px;font-weight: 700;text-align: center;border: 1px solid #aaa;background: #fcfcfc}  
.inspection_time_wrp {position: relative;height: 135px;background: url(../../plugin/inspect/img/ins_loading_bg.gif) left bottom repeat-x}  
.inspection_time_txt {position: absolute;left: 0;top: 90px;width: 820px;text-align: center;font-weight: 700;color: #fff}  
.inspection_loading {position: relative;float: left;padding-left: 0;background: url(../../plugin/inspect/img/ins_loading_line.gif) repeat-x}  
.inspection_loading .icon_chr {position: absolute;right: 0;top: 0;width: 51px;height: 80px;margin-right: -20px;background: url(../../plugin/inspect/img/ins_loading_chr.gif) right top no-repeat}  
.inspection_loading .icon_bar {position: absolute;right: 0;top: 86px;width: 100%;height: 30px;background: url(../../plugin/inspect/img/ins_loading_line.gif) no-repeat}  
.inspection_loading .txt {position: absolute;right: 0;top: 28px;height: 20px;text-align: center;margin-right: -17px;font-weight: 700;color: #d30000}  
.mobile_side_wrap, .mobile_side_wrap .discussion_slider li.item_content ul {position: relative}  
.inspection_wrp h2 {padding: 45px 0 5px;font-size: 13px}  
.inspection_wrp .footer {clear: both;padding-top: 70px;color: #888;font-size: 10px;font-family: tahoma, arial, helvetica;text-align: center}  
.mobile_side_wrap {clear: both;width: 735px;height: 130px;padding-left: 85px;background: url(../../plugin/inspect/img/ins_m_album_bg.jpg) no-repeat;z-index: 1}  
.mobile_side_wrap .discussion_slider {position: relative;margin: 0 auto;width: 650px;height: 130px;padding-top: 20px;left: 50px;overflow: hidden}  
.mobile_side_wrap .discussion_slider li.item_content {float: left;width: 220px;height: 130px}  
.mobile_side_wrap .discussion_slider li.item_content a {display: inline-block;cursor: pointer;text-decoration: none}  
.mobile_side_wrap .discussion_slider li.item_content .game_img {position: absolute;left: 0;top: 0;width: 100px;height: 78px;padding: 0} 
.mobile_side_wrap .discussion_slider li.item_content .game_img img {width: 78px;height: 78px} 
.mobile_side_wrap .discussion_slider li.item_content .game_tit {width: 110px;padding: 0 0 0 100px;font-weight: 700;font-size: 14px;color: #333} 
.mobile_side_wrap .discussion_slider li.item_content .game_div {width: 110px;padding: 0 0 10px 100px} 
.mobile_side_wrap .discussion_slider li.item_content .game_div span {display: inline-block;width: 15px;height: 17px;padding-right: 3px;font-size: 0;line-height: 0;vertical-align: middle;background: url(../../plugin/inspect/img/icon_m_os.gif) no-repeat} 
.mobile_side_wrap .discussion_slider li.item_content .game_div span.os_ios {background-position: 0 0} 
.mobile_side_wrap .discussion_slider li.item_content .game_div span.os_andr {background-position: 0 -34px} 
.mobile_side_wrap .discussion_slider li.item_content .game_int {width: 110px;padding: 0 0 0 100px;font-weight: 400;font-size: 11px;color: #666}
.mobile_side_wrap .bx-controls {position: absolute;width: 735px;z-index: 100;top: 45px}  
.mobile_side_wrap .bx-controls a {width: 18px;height: 29px;margin: 0;padding: 0;border: 0;font-size: 0;line-height: 0;cursor: pointer;z-index: 100}  
.mobile_side_wrap .bx-controls a.bx-prev {position: absolute;left: -64px;top: 0;background: url(../../plugin/inspect/img/ins_m_arrow_01.png) no-repeat}  
.mobile_side_wrap .bx-controls a.bx-next {position: absolute;right: 21px;top: 0;background: url(../../plugin/inspect/img/ins_m_arrow_02.png) no-repeat}  
.mobile_side_wrap .bx-controls a.bx-prev:hover {background: url(../../plugin/inspect/img/ins_m_arrow_01_on.png) no-repeat}  
.mobile_side_wrap .bx-controls a.bx-next:hover {background: url(../../plugin/inspect/img/ins_m_arrow_02_on.png) no-repeat}  
.preview {width: 100%;height: 50px;background: #d23433;line-height: 50px;text-align: center;font-size: 15pt;color: #fff;}  
.fliptimer {margin: 20px auto 0;width: 500px;}
\`\`\`

사용법은 꼭 접근가능 아이피에 내 아이피를 넣어준다.

나만 빼고 다른 사람은 접근할 수 없다.

어쨌든 모든 자료는 깃헙에 저장 됐다~ 데모 플러그인 자료를 보면 된다. 플러그인 따로 올려놨다.

여기까지 설명 마친다.`,link:"/그누&영카트/그누보드 사이트 점검 페이지 만들기"},{title:"그누보드 쉽게 엑셀 파일 만들기",content:`
# {{ $frontmatter.title }}


## 설명 :

쉽게 엑셀 파일을 만든 방법이 있다. 

보통 이런 방식으로 만들긴하는데 만약에 테이블 구조가 복잡하면 이런 방법 보다 라이브러리 써서 만든게 좋다.

우선 쉽게 만든 방법에 대해서 글 올린다.

 
\`\`\`php
<?php
$sub_menu = "500300";
  
include_once "./_common.php";
  
  
auth_check($auth[$sub_menu], "w");
  
// 상품이 많을 경우 대비 설정변경
set_time_limit ( 0 );
ini_set('memory_limit', '50m');
  
  
  
$filename = date('y-m-d h:i:s')."_상담신청목록";
  
$sql = "select * from {$g5['reser_content_table']} order by re_no desc";
$result = sql_query($sql);
  
$list = array();
for($i=0;$row = sql_fetch_array($result);$i++) {
    $list[$i] = $row;
}
  
  
  
header('content-type: application/vnd.ms-excel');
header('expires: ' . gmdate('d, d m y h:i:s') . ' gmt');
header("content-disposition: attachment; filename='{$filename}'.xls");
header('cache-control: must-revalidate, post-check=0, pre-check=0');
header('pragma: public');
header('content-transfer-encoding: binary');
  
?>
<!doctype html>
<html lang="ko">
<head>
    <meta charset="utf-8">
    <title><?=$filename?></title>
</head>
<body>
<table border="1">
    <thead>
    <tr>
        <th scope="col">번호</th>
        <th scope="col">진료과목</th>
        <th scope="col">진료구분</th>
        <th scope="col">휴대번호</th>
        <th scope="col">진료시간</th>
        <th scope="col">제목</th>
        <th scope="col">성함</th>
        <th scope="col">상태</th>
        <th scope="col">내용</th>
    </tr>
    </thead>
    <tbody>
    <?php foreach ($list as $value) : ?>
    <tr>
        <td><?=$value['re_no']?></td>
        <td><?=$value['category']?></td>
        <td><?=$value['division']?></td>
        <td><?=$value['phone']?></td>
        <td><?=$value['reservetime']?></td>
        <td><?=$value['title']?></td>
        <td><?=$value['mb_name']?></td>
        <td><?=$value['status']?></td>
        <td><?=$value['content']?></td>
    </tr>
    <?php endforeach; ?>
    </tbody>
</table>
</body>
</html>
\`\`\`
 

이렇게 바이너리를 엑셀로 변환해서 하면 페이지 접근했을때 엑셀 다운 받기가 된다.

간단하게 목록만 따로 출력되는거라서 쉽게 구현 된다. 

여기까지 설명하겠다.`,link:"/그누&영카트/그누보드 쉽게 엑셀 파일 만들기"},{title:"그누보드 이미지 썸네일 빈공간 없이 크기조절하기",content:`
# {{ $frontmatter.title }}


그누보드 이미지 썸네일

빈공간 없이 크기 조절 하는방법 

우선 썸네일 그전에 가지고 있던 함수를 복제하고 함수명을 new_thumbnail 등 임시적으로 만든다
/lib/thumbnail.lib.php - 292행 부분아래 내용 주석 처리 

\`\`\`php
// if($size[0] < $thumb_width || $size[1] < $thumb_height)
// $is_large = false;
\`\`\`


이부분 주석처리 해놓고 썸네일 사용하면된다.`,link:"/그누&영카트/그누보드 이미지 썸네일 빈공간 없이 크기조절하기"},{title:"그누보드 이미지 썸네일 사이즈 맞추기",content:`
# {{ $frontmatter.title }}


## 설명 :

썸네일로 리사이징해서 잘라지며는

css로는 width:100%; height:auto로 해야됨 

혹은 리사이징 안될경우에도 위에 스타일시트로 맞춰야함 

모바일에서 문제 없게 나온다.`,link:"/그누&영카트/그누보드 이미지 썸네일 사이즈 맞추기"},{title:"그누보드 카카오 맵 연동 (2)",content:`
# {{ $frontmatter.title }}

## 제작 방법 설명 : 

지난 시간에 이어서 플러그인 좀 더 구체화 하는 작업을 해볼까 한다. 

우선 지도를 확대 시키면 왼쪽에 메뉴가 아작스로 정보가 바뀌는건데 지도와 연동 되서 해야되서...

맛집 배달 게시판 플러그인에 보면 주소가 등록은 됐는데~ 위도와 경로는 빠져 있어서 수정 작업해야 한다.

여기서 부터 포스팅 글 남겨 본다.

구글링으로 찾아보니까 curl 로 지도 api 이용해서 조회하는 함수를 찾았다.

\`\`\`php
function kakao_request($path, $query, $content_type = 'json', $api_key)
{
  
    $api_server = 'https://dapi.kakao.com';
  
    $headers = array('authorization: kakaoak '.$api_key.'');
  
    $opts = array(
        curlopt_url => $api_server . $path . '.' . $content_type . '?' . $query,
        curlopt_returntransfer => true,
        curlopt_ssl_verifypeer => false,
        curlopt_sslversion => 1,
        curlopt_header => false,
        curlopt_httpheader => $headers
    );
  
    $curl_session = curl_init();
  
    curl_setopt_array($curl_session, $opts);
  
    $return_data = curl_exec($curl_session);
  
    if (curl_errno($curl_session)) {
        throw new exception(curl_error($curl_session));
    } else {
        curl_close($curl_session);
        return json_decode($return_data, true);
    }
}
\`\`\`

위에 함수를 이용해서 사용법을 풀이하자면 아래 소스 코드 참고하면 된다.

여기 매뉴얼을 참고하면 된다.

https://developers.kakao.com/docs/latest/ko/local/dev-guide#coord-to-address 



일단 query 짜는 부분을 수정 해야 한다.

wr_gps로 필드를 만들어 주고 여기다가 insert 할때는 point로 저장해야된다.

point로 쓸때 mysql 버전 마다 다르기 때문에 아래 주소 참고해서 한다.

https://dba.stackexchange.com/questions/33410/whats-the-difference-between-pointx-y-and-geomfromtextpointx-y
	
 

버전때가 mysql 5.1.35 이전이면 아래꺼로 쓰면된다.

\`\`\`sql
insert into t1 (pt_col) values (geomfromwkb(point(1,2)));
\`\`\`
 

이후 버전이면 아래꺼 쓰면된다.

\`\`\`sql
insert into t1 (pt_col) values(point(1,2));
\`\`\`

사실상 point로 쓰면 될것이다 mysql 버전때 5.5, 5.7 그리고 8이상 쓰는 경우가 있다. 

\`\`\`php
$path = '/v2/local/search/address';
  
$content_type = 'json'; // json or xml
  
$params = http_build_query(array(
    'page' => 1,
    'size' => 10,
    'query' => $wr_3
));
  
$res = kakao_request($path, $params, $content_type, $config['cf_kakao_rest_key']);
  
$gps = $res['documents'][0]['y'].",".$res['documents'][0]['x'];
  
$wr_gps = " (point(".$gps.")) ";
  
  
// 쿼리 짜는건 이렇게..
$sql = "wr_gps = $wr_gps";
\`\`\`

  

그 다음에는 조회를 할때는 이 방식으로 한다.

https://jichun.tistory.com/191
	
\`\`\`php
$cord = $_request['min_map_latitude']." ".$_request['min_map_longitude'].", ".$_request['max_map_latitude']." ".$_request['max_map_longitude'];
  
if($cord) {
    $sql_search .= " where mbrcontains(geomfromtext('linestring($cord)'), \`wr_gps\`)";
}
\`\`\`	

여기서 현재 위치가 안된다.

찾아보니까 현재 위치 소스는 정상적인데 시스템 환경이 제대로 주어지지 않아서 그렇다.

조건은 이렇다.

- https (기본)
- localhost (예외)

https://devtalk.kakao.com/t/getcurrentposition-geolocation/108794
	

\`\`\`php
<?php
  
if (!$sst) {
    $sst  = "wr_id";
    $sod = "asc";
}
  
$sql_search = " where wr_is_comment = 0 ";
  
$sql_order = " order by $sst $sod ";
  
$sql_common = " from {$g5['foodelivery_form_table']} ";
  
$sql = " select count(*) as cnt {$sql_common} {$sql_search} {$sql_order} ";
$row = sql_fetch($sql);
$total_count = $row['cnt'];
  
$rows = 10;
$total_page  = ceil($total_count / $rows);  // 전체 페이지 계산
if ($page < 1) { $page = 1; } // 페이지가 없으면 첫 페이지 (1 페이지)
$from_record = ($page - 1) * $rows; // 시작 열을 구함
  
$sql = " select * {$sql_common} {$sql_search} {$sql_order} limit {$from_record}, {$rows} ";
$result = sql_query($sql);
  
  
add_stylesheet('<link rel="stylesheet" href="'.bv_map_plugin_url.'/style.css">', 0);
?>
  
<div class="beaver_map_area">
    <div class="map_area">
        <div id="map"></div>
        <a id="currentpositionbtn" href="#" onclick="getcurrentpositionevent(); return false;">
            <span class="current"><i class="fa fa-crosshairs"></i>현위치</span>
        </a>
    </div>
    <div class="map_list">
        <div class="wrapper">
            <div class="head">
                <span class="total_count">조회 <?php echo $total_count ?>건</span>
            </div>
            <ul class="body">
                <?php
                for ($i=0;$row = sql_fetch_array($result);$i++) {
                    $img = get_fd_image_data($row['token_id'],'limit 1');
                ?>
                <li>
                    <a class="list_item" href="<?php echo get_pretty_url(fd,$row['wr_id'])?>" target="_blank">
                        <div class="thumb_area">
                            <?php foreach ($img as $item) { ?>
                            <img class="thumb" src="<?=$item['bf_thumburl']?>" width="<?=$item['bf_width']?>" height="<?=$item['bf_height']?>" />
                            <?php } ?>
                        </div>
  
                        <div class="content_area">
                            <div class="title">
                                <?php echo $row['wr_subject']?>
                            </div>
                            <div class="content">
                                <?php echo $row['wr_content']?>
                            </div>
                        </div>
                    </a>
                </li>
                <?php } ?>
                <?php if($i == 0) echo "<li id='empty_map'>조회 된 정보가 없습니다.</li>"; ?>
            </ul>
            <div id="page_navigation">
                <?php echo get_paging(g5_is_mobile ? $config['cf_mobile_pages'] : $config['cf_write_pages'], $page, $total_page, $qstr.'&amp;page='); ?>
            </div>
        </div>
    </div>
</div>
\`\`\`
여기서 스크립트 부분은 아래 처럼 하면된다. 

\`\`\`js
var plugin_url = "<?=bv_map_plugin_url?>";
  
var current_latitude = '';
var current_longitude = '';
var kakaomap = '';
var kakaomarkers = [];
var kakaomarkercluster = '';
var kakaocustomoverlays = [];
  
var latlng_bounds = '';
  
var latlng_north_east,
    latlng_south_west,
    max_map_latitude,
    max_map_longitude,
    min_map_latitude,
    min_map_longitude;
  
function ajaxmapload(){
    kakaomap = map;
  
    for(i=0; i<kakaomarkers.length; i++){
        kakaomarkers[i].setmap(null);
    }
    for(i=0; i<kakaocustomoverlays.length; i++){
        kakaocustomoverlays[i].setmap(null);
    }
  
    kakaomarkers = [];
    kakaocustomoverlays = [];
  
    if(kakaomap){
        latlng_bounds = kakaomap.getbounds();
        latlng_north_east = latlng_bounds.getnortheast();
        latlng_south_west = latlng_bounds.getsouthwest();
        max_map_latitude = latlng_north_east.getlat();
        max_map_longitude = latlng_north_east.getlng();
        min_map_latitude = latlng_south_west.getlat();
        min_map_longitude = latlng_south_west.getlng();
    }
  
    let ajax_data = {
        'min_map_latitude':min_map_latitude,
        'max_map_latitude':max_map_latitude,
        'min_map_longitude':min_map_longitude,
        'max_map_longitude':max_map_longitude,
    };
  
    $.ajax({
        type: 'post',
        url: plugin_url + '/get_map_data.php',
        data: ajax_data,
        datatype:'html',
        success: function (data) {
            let response = $(data);
            $('.map_list').html(response.find('.map_list .wrapper'));
  
            ajaxmenuload(ajax_data);
        }
    });
}
  
  
  
function ajaxmenuload(ajax_data) {
    $.ajax({
        type: 'post',
        url: plugin_url + '/get_list_data.php',
        data: ajax_data,
        datatype:'json',
        success: function (data) {
            $.each(data.result,function(i,item){
                let latitude = parsefloat(item.latitude);
                let longitude = parsefloat(item.longitude);
                kakaomarkers[i] = new kakao.maps.marker({
                    position: new kakao.maps.latlng(latitude, longitude)
                });
                kakaomarkers[i].setmap(kakaomap);
                kakao.maps.event.addlistener(kakaomarkers[i], 'click', function() {
                    kakaocustomoverlays[i].setmap(kakaomap);
                });
                kakaocustomoverlays[i] = new kakao.maps.customoverlay({
                    position: new kakao.maps.latlng(latitude, longitude),
                    content: \`
                        <div class="kakao_custom_overlay">
                            <div class="map_item_overlay_html">
                                <a class="list_item" href="\${item.href}" target="_blank">
                                    <div class="thumb_area">
                                        <img class="thumb" src="\${item.bf_thumburl}" width="\${item.bf_width}" height="\${item.bf_height}" />
                                    </div>
                                    <div class="content_area">
                                        <div class="title">
                                            \${item.shop_name}
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <span class="arrow"></span>
                        </div>\`
                });
            });
            if(kakaomarkercluster){
                kakaomarkercluster.clear();
            }
  
            kakaomarkercluster = new kakao.maps.markerclusterer({
                map: kakaomap,
                averagecenter: true,
                minlevel: 1,
                gridsize: 60,
                disableclickzoom: true,
                calculator: [9, 99, 999, 9999,99999],
                styles: [{
                    width : '50px',
                    height : '50px',
                    background: 'rgba(126, 142, 227, .7)',
                    borderradius: '28px',
                    color: '#fff',
                    textalign: 'center',
                    fontweight: 'bold',
                    fontsize: '20px',
                    lineheight: '50px',
                    border: '2px solid rgba(126, 142, 227, .9)'
                },
                    {
                        width : '56px',
                        height : '56px',
                        background: 'rgba(255, 134, 74, .7)',
                        borderradius: '31px',
                        color: '#fff',
                        textalign: 'center',
                        fontweight: 'bold',
                        fontsize: '20px',
                        lineheight: '56px',
                        border: '2px solid rgba(255, 134, 74, .9)'
                    },
                    {
                        width : '60px',
                        height : '60px',
                        background: 'rgba(255, 72, 50, .7)',
                        borderradius: '33px',
                        color: '#fff',
                        textalign: 'center',
                        fontweight: 'bold',
                        fontsize: '18px',
                        lineheight: '60px',
                        border: '2px solid rgba(255, 72, 50, .9)'
                    },
                    {
                        width : '60px',
                        height : '60px',
                        background: 'rgba(217, 84, 189, .7)',
                        borderradius: '33px',
                        color: '#fff',
                        textalign: 'center',
                        fontweight: 'bold',
                        fontsize: '18px',
                        lineheight: '60px',
                        border: '2px solid rgba(217, 84, 189, .9)'
                    },
                    {
                        width : '60px',
                        height : '60px',
                        background: 'rgba(147, 84, 217, .7)',
                        borderradius: '33px',
                        color: '#fff',
                        textalign: 'center',
                        fontweight: 'bold',
                        fontsize: '18px',
                        lineheight: '60px',
                        border: '2px solid rgba(147, 84, 217, .9)'
                    }
                ]
            });
            kakaomarkercluster.addmarkers(kakaomarkers);
            kakao.maps.event.addlistener(kakaomarkercluster, 'clusterclick', function(cluster) {
  
                var latlng_bounds = cluster.getbounds();
                latlng_north_east = latlng_bounds.getnortheast();
                latlng_south_west = latlng_bounds.getsouthwest();
                max_map_latitude = latlng_north_east.getlat();
                max_map_longitude = latlng_north_east.getlng();
                min_map_latitude = latlng_south_west.getlat();
                min_map_longitude = latlng_south_west.getlng();
  
                let ajax_data = {
                    'min_map_latitude':min_map_latitude,
                    'max_map_latitude':max_map_latitude,
                    'min_map_longitude':min_map_longitude,
                    'max_map_longitude':max_map_longitude,
                };
  
                $.ajax({
                    type: 'post',
                    url: plugin_url + '/get_map_data.php',
                    data: ajax_data,
                    datatype:'html',
                    success: function (data) {
                        let response = $(data);
                        $('.map_list').html(response.find('.map_list .wrapper'));
                    }
                });
            });
  
        },
        error: function (request, status, error) {
            console.log('code: '+request.status+"\\n"+'message: '+request.responsetext+"\\n"+'error: '+error);
            return false;
        }
    })
}
  
var marker = '';
var container = document.getelementbyid('map');
var position = new kakao.maps.latlng(37.493619044107106, 127.06653626780998);
var options = {
    center: position,
    level: 14,
    disabledoubleclick: false,
    disabledoubleclickzoom: false,
    draggable: true
};
var map = new kakao.maps.map(container, options);
var maptypecontrol = new kakao.maps.maptypecontrol();
map.addcontrol(maptypecontrol, kakao.maps.controlposition.topright);
var zoomcontrol = new kakao.maps.zoomcontrol();
map.addcontrol(zoomcontrol, kakao.maps.controlposition.right);
  
  
ajaxmapload();
  
kakao.maps.event.addlistener(map, 'idle', function() {
    if(marker) marker.setmap(null);
    ajaxmapload();
});
  
  
function getcurrentpositionevent() {
    //gps를 지원하면
    if (navigator.geolocation) {
        navigator.geolocation.getcurrentposition(function(position) {
            current_latitude = position.coords.latitude;
            console.log(current_latitude);
            current_longitude = position.coords.longitude;
            //카카오지도 현위치를 센터로
            if(map){
                var change_position = new daum.maps.latlng(current_latitude, current_longitude);
                map.setcenter(change_position);
            }
        }, function error(e) {
            if(e.code==1){
                alert('사용자가 위치정보 권한을 제공하지 않습니다.');
            } else if(e.code==2){
                alert('브라우저가 위치를 가져올 수 없습니다.');
            } else if(e==3){
                alert(e.code);
            } else {
                alert(e.message);
            }
        }, {
            enablehighaccuracy: true,
            maximumage: 0,
            timeout: 2000
        });
    }
    //gps를 지원하지 않으면
    else {
        alert('현위치 기능을 사용할 수 없습니다. 현위치 접근권한이 있는지 확인하시기 바랍니다.');
    }
}
$(document).ready(function(){
    $('body').attr('oncontextmenu','return false');
    $('body').attr('ondragstart','return false');
    $('body').attr('onselectstart','return false');
});
\`\`\`



/get_list_data.php 파일을 만든다. 

\`\`\`php
include_once "./_common.php";
  
  
$sql_search = " where wr_is_comment = 0 ";
  
$cord = $_request['min_map_latitude']." ".$_request['min_map_longitude'].", ".$_request['max_map_latitude']." ".$_request['max_map_longitude'];
  
if($cord) {
    $sql_search .= " and mbrcontains(geomfromtext('linestring($cord)'), \`wr_gps\`)";
}
  
$sql_order = " order by wr_id asc ";
  
$sql_common = " from {$g5['foodelivery_form_table']} ";
  
  
$sql = " select *, x(wr_gps)as latitude, y(wr_gps) as longitude {$sql_common} {$sql_search} {$sql_order} ";
  
$rr = sql_query($sql);
$data = [];
for ($i=0;$row = sql_fetch_array($rr);$i++) {
  
    $data['result'][$i]['shop_name'] = $row['wr_subject'];
    $data['result'][$i]['href'] = get_pretty_url(fd,$row['wr_id']);
  
    $data['result'][$i]['longitude'] = $row['longitude'];
    $data['result'][$i]['latitude'] = $row['latitude'];
  
    $img = get_fd_image_data($row['token_id'],'limit 1');
  
    foreach ($img as $value) {
        $data['result'][$i]['bf_thumburl'] = $value['bf_thumburl'];
        $data['result'][$i]['bf_width'] = $value['bf_width'];
        $data['result'][$i]['bf_height'] = $value['bf_height'];
    }
}
  
  
echo json_encode($data,json_unescaped_unicode);
\`\`\`

/get_map_data.php 파일을 만든다.

\`\`\`php
include_once "./_common.php";
  
$sql_search = " where wr_is_comment = 0 ";
  
$cord = $_request['min_map_latitude']." ".$_request['min_map_longitude'].", ".$_request['max_map_latitude']." ".$_request['max_map_longitude'];
  
if($cord) {
    $sql_search .= " and mbrcontains(geomfromtext('linestring($cord)'), \`wr_gps\`)";
}
  
$sql_order = " order by wr_id asc ";
  
$sql_common = " from {$g5['foodelivery_form_table']} ";
  
$sql = " select count(*) as cnt {$sql_common} {$sql_search} {$sql_order} ";
$row = sql_fetch($sql);
$total_count = $row['cnt'];
  
$rows = 10;
$total_page  = ceil($total_count / $rows);  // 전체 페이지 계산
if ($page < 1) { $page = 1; } // 페이지가 없으면 첫 페이지 (1 페이지)
$from_record = ($page - 1) * $rows; // 시작 열을 구함
  
  
$sql = " select *, x(wr_gps)as latitude, y(wr_gps) as longitude {$sql_common} {$sql_search} {$sql_order} limit {$from_record}, {$rows} ";
  
$result = sql_query($sql);
  
?>
<div class="beaver_map_area">
    <div class="map_area">
        <div id="map"></div>
        <a id="currentpositionbtn" href="#" onclick="getcurrentpositionevent(); return false;">
            <span class="current"><i class="fa fa-crosshairs"></i>현위치</span>
        </a>
    </div>
    <div class="map_list">
        <div class="wrapper">
            <div class="head">
                <span class="total_count">조회 <?php echo $total_count ?>건</span>
            </div>
            <ul class="body">
                <?php
                for ($i=0;$row = sql_fetch_array($result);$i++) {
                    $img = get_fd_image_data($row['token_id'],'limit 1');
                    ?>
                    <li>
                        <a class="list_item" href="<?php echo get_pretty_url(fd,$row['wr_id'])?>" target="_blank">
                            <div class="thumb_area">
                                <?php foreach ($img as $item) { ?>
                                    <img class="thumb" src="<?=$item['bf_thumburl']?>" width="<?=$item['bf_width']?>" height="<?=$item['bf_height']?>" />
                                <?php } ?>
                            </div>
                            <div class="content_area">
                                <div class="title">
                                    <?php echo $row['wr_subject']?>
                                </div>
                                <div class="content">
                                    <?php echo $row['wr_content']?>
                                </div>
                            </div>
                        </a>
                    </li>
                <?php } ?>
                <?php if($i == 0) echo "<li id='empty_map'>조회 된 정보가 없습니다.</li>"; ?>
            </ul>
            <div id="page_navigation">
                <?php echo get_paging(g5_is_mobile ? $config['cf_mobile_pages'] : $config['cf_write_pages'], $page, $total_page, $qstr.'&amp;page='); ?>
            </div>
        </div>
    </div>
</div>
\`\`\`



## 맺음말 :

마커 클러스터러를 이용해서 하려 했더니 어떻게 할줄 몰라서 삼일동안 쌩고생 했다.. 카카오 개발자 센터에서 질문 답변 해보니까 이해를 못한가 쓸때 없는 코드 주는데.. 

결국엔 냑에서 컨텐츠몰에 있던거 사이트 들어가서 분석 해서.. 어렵게 가져다 활용함.. 백단은 겨우야 만들었는데 힘들다. 

이렇게 아래 이미지 처럼 클러스터 마커 누르면 이 지역에 좌표를 이용해서 정보를 가져올 수 있게 만들었다~ 

깃헙에 저장 해야겠다.











`,link:"/그누&영카트/그누보드 카카오 맵 연동 (2)"},{title:"그누보드 카카오 맵 연동 (3)",content:`
# {{ $frontmatter.title }}

## 제작 방법 설명 : 

이전의 카카오맵 지도 관련해서 포스팅 한적이 있었다.



이전 자료를 참고하는데 쿼리부분에서 에러가 나서 한참 헤맸더니 몇가지 사실을 발견했다.



지금 필자의 디비 버전은 mysql8 이상으로 쓰고 있는데 버전 업글을 하고 나서부터 문제 발생 된 사실인데



첫번째 에러는 error code: 1305. function demoplugindb.geomfromtext does not exist 라고 나와서 찾아보니까 약간 문법적으로 달라졌다.




아래 코드로 수정하면 된다.

\`\`\`
st_geomfromtext
\`\`\`

그러고 나서 두번째 에러는 1305 : function demoplugindb.x does not exist 라고 나온다.



여기서부터 막히는데 한참동안 구글링한끝에~ 웨어절 문제가 아니라 셀렉트문에서 문제였다.


마리아 디비 와 비슷한것 같다.



st_x 와 st_y 문법으로 변경되었다.



https://mariadb.com/kb/en/st_x/
	


결국에는 아래 소스코드로 쿼리문 검색하니 아주 잘 나온다.


\`\`\`sql
select st_x(wr_gps) as latitude, st_y(wr_gps) as longitude from g5_write_foodelivery 
 
where wr_is_comment = 0 
 
and mbrcontains(geomfromtext('linestring(31.386686783474833 119.7940308372939, 43.04458642579598 135.5164956111702)'), wr_gps) 
 
order by wr_id asc limit 0, 10
\`\`\`

이렇게 바뀐건데.. 간만에 고생했다..



그리고 혹시 몰라서 딴 블로그 보면서 따라하는데 카카오맵 쓸때는 허용 아이피 제발 등록하지 않고 그냥 쓰면된다.



그거 내꺼 아이피 등록 했다가 데이터가 조회 안되서 문제 될수 있으니 참고하길..

`,link:"/그누&영카트/그누보드 카카오 맵 연동 (3)"},{title:"그누보드 홈피 검색 노출하기",content:`
# {{ $frontmatter.title }}


## 설명 :

그누보드 홈피 검색 노출 하는 방법에 대해서 포스팅 글 남겨봅니다.

 

1. 기본설정에 보면 추가 메타 라고 칸이 있습니다. 여기에 메타 태그를 추가하면 됩니다. ( 따로 추가 할 경우 head.sub.php 로 추가 해야됩니다.)

\`\`\`html
<meta name="author" content="비버테크">
<meta name="keywords" content="비버윤,윤비버,비버테크,php개발,솔루션,홈페이지,쇼핑몰,백오피스,웹개발">
<meta name="description" content="비버윤,윤비버,비버테크,php개발,솔루션,홈페이지,쇼핑몰,백오피스,웹개발">
<meta property="og:type" content="website">
<meta property="og:title" content="비버테크">
<meta property="og:description" content="비버윤,윤비버,비버테크,php개발,솔루션,홈페이지,쇼핑몰,백오피스,웹개발">
<meta property="og:image" content="http://도메인/img/og.jpg">
<meta property="og:image:width" content="200">
<meta property="og:image:height" content="200">
<meta property="og:url" content="http://도메인">
<link rel="canonical" href="http://도메인">
<link rel="icon" type="image/png" sizes="16x16" href="도메인/img/favicon.png">
<meta name="google-site-verification" content="....." />
\`\`\`



위에 소스에 보면 키워드와 데스크립션은 비슷하게 입력해야 됩니다. 연관된 단어로 하는게 좋습니다.

 

 

2. 로봇 텍스트 만들기 

로봇텍스트? 검색 로봇에게 사이트 및 웹 페이지를 수집할 수 있도록 허용하거나 제한하는 국제권고안입니다.

[참고자료](https://searchadvisor.naver.com/guide/seo-basic-robots) 
	
robots.txt 파일을 만들어서 루트 위치에 넣습니다. 아래 소스를 넣으면 됩니다. (응용해서 노출할것과 비노출할것을 구분해야됩니다.)

\`\`\`text
user-agent: *
  
disallow: /adm/
disallow: /bbs/register.php
disallow: /bbs/content.php?co_id=provision
disallow: /bbs/content.php?co_id=privacy
disallow: /bbs/login.php
  
allow:/
\`\`\`



3. 사이트 맵 만들기 

 

사이트맵은 사이트에 있는 페이지, 동영상 및 기타 파일과 그 관계에 관한 정보를 제공하는 파일입니다. google과 같은 검색엔진은 이 파일을 읽고 사이트를 더 효율적으로 크롤링합니다

사이트맵이 있어야지 페이지 노출을 좀 더 구체적으로 노출 할 수 있어서 만들어 놓은게 좋습니다.

sitemap.php 파일을 만들어서 루트 위치에 넣습니다.

\`\`\`php
<?php
include_once("./_common.php");
  
header("content-type: text/xml;charset=\\"utf-8\\"");
header("cache-control: no-cache, must-revalidate");
header("pragma: no-cache");
  
echo "<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?>\\n";
?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<?php
$query = sql_query("select bo_table from \`{$g5['board_table']}\` where bo_read_level=1");
while($temp = sql_fetch_array($query)) {
    $bo_arr[] = $temp['bo_table'];
}
  
foreach($bo_arr as $bo) {
    $bbs_url = get_pretty_url($bo);
    echo "<url>\\n";
    echo "<loc>$bbs_url</loc>\\n";
    $temp = sql_fetch("select wr_datetime from \`{$g5['write_prefix']}$bo\` order by wr_datetime desc");
    $lastmod = str_replace(" ", "t", substr($temp['wr_datetime'], 0, 30))."+00:00";
     
    echo "<lastmod>$lastmod</lastmod>\\n";
    echo "<changefreq>daily</changefreq>\\n";
    echo "<priority>0.9</priority>\\n";
    echo "</url>\\n";
  
    $query = sql_query("select wr_id, wr_datetime from \`{$g5['write_prefix']}$bo\` where wr_is_comment='0' and wr_option not like '%secret%'");
    while($row = sql_fetch_array($query)) {
        $bbs_url = get_pretty_url($bo,$row['wr_id']);
        echo "<url>";
        echo "<loc>$bbs_url</loc>";
        $temp = sql_fetch("select wr_datetime from \`{$g5['write_prefix']}$bo\` where wr_parent='{$row['wr_id']}' order by wr_id desc");
        $lastmod = str_replace(" ", "t", substr($temp['wr_datetime'], 0, 30))."+00:00";
        if(!$lastmod) {
            $temp = sql_fetch("select wr_datetime from \`{$g5['write_prefix']}$bo\` where wr_id='{$row['wr_id']}'");
            $lastmod = str_replace(" ", "t", substr($temp['wr_datetime'], 0, 30))."+00:00";
        }
        if(!$lastmod) $lastmod = g5_time_ymd;
        echo "<lastmod>$lastmod</lastmod>";
        echo "<changefreq>weekly</changefreq>";
        echo "<priority>0.8</priority>";
        echo "</url>\\n";
    }
}
?>
</urlset>
\`\`\`

위에 소스를 설명 하자면 bo_read_level이 1 조건문이 있는데 이건 글 읽기 1 레벨 일때만 게시판이 보여집니다. 아니면 게시판이 노출 되지 않습니다.

도메인/sitemap.php 로 접근 해서 확인 하면 됩니다.

 

 

자! 이제 재료 준비는 다 됐고 등록하는 방법에 대해서 설명합니다. 

구글 웹마스터 도구에 등록하면 됩니다.

구글 서치 콘솔 로 검색합니다.

https://search.google.com/search-console?hl=ko
 

접속을 하게되면 도메인 과 url 접두어 두개가 나옵니다

여기서 url 접두어에 주소를 넣습니다.  (제가 쓸때는 이게 편해서..)

주소를 누르면 이제는 방문자 분석 스크립트를 선택 할 수 있는게 주어지는데 저는 태그로 선택 했습니다.

스크립트로도 해도 상관 없습니다. 복붙해서 그누보드 기본설정에 방문자 분석 스크립트에 넣으시면 되고 메타 태그를 선택 했을때는 추가 메타에서 맨 아래 부분에 넣으면 됩니다.

완료 버튼을 누르고 상세보기로 접근합니다. 그러면  왼쪽 메뉴에서 개요가 있고 쭈루룩 내려가면 사이트 맵이 있습니다. 사이트 맵으로 접근합니다.

새 사이트 맵 추가가 있습니다. 여기서 /sitemap.php 로 입력합니다 제출 버튼 누르면 되는데 제출된 사이트 맵에 보면 상태에서 성공하면 성공이 뜨고 실패 하면 빨간색으로 글이 표시 됩니다.

여기까지 하면 끝!! 구글은 1~2주정도 지나야지 검색에 노출 됩니다. 

 

이제는 네이버 웹마스터 도구로 접속합니다.

https://searchadvisor.naver.com/console/board

로그인 후에 

사이트관리 페이지에서 사이트 주소를 입력합니다.

여기서 사이트 소유 확인 페이지가 나옵니다.

저는 태그로 선택 했습니다. 해당 태그를 바로 추가 메타 태그 칸에 추가 합니다. 

그러고 확인 누르면 사이트 목록에 홈페이지 주소가 보입니다.

주소를 클릭하면 상세 페이지로 접근됩니다.

왼쪽 메뉴에 보면 검증 메뉴를 접근해서 웹페이지 최적화로 접근합니다. 

여기서 url 입력 라고 보이는데 녹색 확인 버튼을 누릅니다. 

여기서 5개 이상 항목에서 상태가 성공이라고 뜨면 됩니다.

그러고나서 요청 페이지로 클릭합니다. 사이트 맵 제출로 접근합니다.

여기도 똑같이 sitemap.php 라고 입력 후에 확인 누릅니다. 그러면 밑에 제출된 사이트 맵이 고스란히 출력 됩니다.

그리고 위에 보면 요청에서 웹페이지 수집으로 접속 합니다. 수집 요청 url 입력 가 보이는데 여기서 확인 버튼을 누릅니다.

그러면 수집 요청 결과가 고스란히 출력 됩니다. 요청 완료가 나오면 됩니다.

그러고 혹시나 하는 생각이 들면 간단체크에 접근합니다. 여기서 사이트 주소를 입력 하고 조회를 합니다.

진단 결과가 나오는데 저는 7가지 성공이라 표시 됐습니다.

 

네이버는 3일정도 혹은 한달 정도 지나야지 노출이 잘 된다고 합니다. 기다리면 될것 같습니다.

 

줌 사이트 등록

https://help.zum.com/submit/register
	

 

빙 (마소) 사이트 등록

https://www.bing.com/webmasters
	
 

다음 사이트 등록

https://register.search.daum.net/index.daum


 

`,link:"/그누&영카트/그누보드 홈피 검색 노출하기"},{title:"다중검색 만들기",content:`
# {{ $frontmatter.title }}


다중검색에 대해서 포스팅 글 올려본다. 

그누보드에서 다중검색은 약간 까다로운 부분이 있다. 하지만 완전히 뜯어 고칠 필요는 없고 약간 수정 하면 된다. 

수정 방법에 대해서 설명 하겠습니다.


위에 사진 처럼 다중 검색을 하려면 get 파라메터에서 배열을 이용해서 검색을 하면 된다. 

(사진은 복구 못해서 뺸다.)

이 방법대로 개발하게되면 브라우저 주소가 좀 지저분하게 보이고 속도 또한 약간 저하될 수 있다.

하지만 제이쿼리 ajax로 써서 하면 깔끔하게 만들수 있다.
 

아래 소스 코드 참고해서 응용하자

\`\`\`php
<form name="fsearch" method="get" class="form_bbs_search">
    <input type="hidden" name="bo_table" value="<?php echo $bo_table ?>">
    <input type="hidden" name="sca" value="<?php echo $sca ?>">
    <input type="hidden" name="sop" value="and">
    <?php if ($is_category) { ?>
    <nav id="bo_cate">
        <h2><?php echo $board['bo_subject'] ?> 카테고리</h2>
        <ul id="bo_cate_ul">
            <?php echo $category_option ?>
        </ul>
    </nav>
    <?php } ?>
    <div class="search_bar">
        <input type="text" name="address" id="address" disabled>
        <button type="button" class="btn btn_b03" id="btn_addr">주소검색</button>
        <input type="text" name="stx" value="<?php echo stripslashes($stx) ?>" id="stx" class="sch_input" size="25" maxlength="20" placeholder="매장명을 입력해주세요">
        <button type="button" id="searchbtn" class="btn btn_submit">검색</button>
    </div>
</form>
\`\`\`



아래 소스코드는 list.skin.php 에서 맨 상위 부분에 넣으면 된다. 

(원래 분류 코드가 있긴 하지만 게시판에서 따로 사용해야되고 수정한 부분이 있어서 아래 소스를 사용하면 된다.)

\`\`\`php
// 분류 사용 여부
$is_category = false;
$category_option = '';
if ($board['bo_use_category']) {
    $is_category = true;
    $categories = explode('|', $board['bo_category_list']); // 구분자가 , 로 되어 있음
    for ($i=0; $i<count($categories); $i++) {
        $start = $i + 1;
        $category = trim($categories[$i]);
        if ($category=='') continue;
        $category_option .= '<li>'.php_eol;
        $category_option .= '<input type="checkbox" name="sca[]" id="sca_id_'.$start.'" value="'.$category.'"';
        $category_option .= ' '.($category == $_request['sca'] ? "checked" : "").'> <label for="sca_id_'.$start.'"><span>'.$category;
        $category_option .= '</span></label></li>';
    }
}
\`\`\`



여기서 sca를 배열로 만들고 검색을 누르면 바로 ajax 로 출력된다.

아래 소스는 sca 배열을 | 로 구분해서 ajax통신해서 값이 전달 된다.

\`\`\`js
function actions()
{
    let checked = []
    $("input[name='sca[]']:checked").each(function () {
        checked.push($(this).val());
    });
    let arr = checked.join("|");
    let address = $('#address').val();
    let stx = $('#stx').val();
  
    $.ajax({
        type:'post',
        url : g5_plugin_url + '/list.ajax.php',
        data:{bo_table:g5_bo_table,sca:arr,address:address,stx:stx},
        success:function (data) {
            $('#gall_div').html(data);
        }
    });
}

\`\`\`




ajax 내부에 보면 성공일때 #gall_div에서 출력 되는데  이렇게 gall_ul 위에다가 gall_div로 상위를 한번 감싸줬다.

한마디로 gall_div 내부에서 ajax 출력된다.

\`\`\`html
<div id="gall_div">
  <ul id="gall_ul">
\`\`\`


list.ajax.php 페이지 만든다. 플러그인에 넣는다.

원래 쓰던거라서 게시판 목록에 있던 소스를 바꿔치기 해도 괜찮다. (하지만 내가 소스를 다듬어서 만든거라서 아래 소스 코드가 도움된다.)

여기서 중요한게 get_sql_search2 함수이다.  이건 새로 만든 함수인데 바로 아래 소스 참고하면 된다.

\`\`\`php
include_once "./_common.php";
  
$board = get_board_db($bo_table, true);
  
$sop = strtolower($sop);
if ($sop != 'and' && $sop != 'or')
    $sop = 'and';
  
// 분류 선택 또는 검색어가 있다면
$stx = trim($stx);
//검색인지 아닌지 구분하는 변수 초기화
$is_search_bbs = false;
  
if ($sca || $stx || $stx === '0') {     //검색이면
    $is_search_bbs = true;      //검색구분변수 true 지정
    $sql_search = get_sql_search2($sca, $sfl, $stx, $sop);
  
    // 가장 작은 번호를 얻어서 변수에 저장 (하단의 페이징에서 사용)
    $sql = " select min(wr_num) as min_wr_num from {$write_table} ";
    $row = sql_fetch($sql);
    $min_spt = (int)$row['min_wr_num'];
  
    if (!$spt) $spt = $min_spt;
  
    $sql_search .= " and (wr_num between {$spt} and ({$spt} + {$config['cf_search_part']})) ";
  
    $sql = " select count(distinct \`wr_parent\`) as \`cnt\` from {$write_table} where {$sql_search} ";
    $row = sql_fetch($sql,true);
    $total_count = $row['cnt'];
} else {
    $sql_search = "";
  
    $total_count = $board['bo_count_write'];
}
  
if(g5_is_mobile) {
    $page_rows = $board['bo_mobile_page_rows'];
    $list_page_rows = $board['bo_mobile_page_rows'];
} else {
    $page_rows = $board['bo_page_rows'];
    $list_page_rows = $board['bo_page_rows'];
}
  
if ($page < 1) { $page = 1; } // 페이지가 없으면 첫 페이지 (1 페이지)
  
// 년도 2자리
$today2 = g5_time_ymd;
  
$list = array();
$i = 0;
$notice_count = 0;
$notice_array = array();
  
// 공지 처리
if (!$is_search_bbs) {
    $arr_notice = explode(',', trim($board['bo_notice']));
    $from_notice_idx = ($page - 1) * $page_rows;
    if($from_notice_idx < 0)
        $from_notice_idx = 0;
    $board_notice_count = count($arr_notice);
  
    for ($k=0; $k<$board_notice_count; $k++) {
        if (trim($arr_notice[$k]) == '') continue;
  
        $row = sql_fetch(" select * from {$write_table} where wr_id = '{$arr_notice[$k]}' ");
  
        if (!$row['wr_id']) continue;
  
        $notice_array[] = $row['wr_id'];
  
        if($k < $from_notice_idx) continue;
  
        $list[$i] = get_list($row, $board, $board_skin_url, g5_is_mobile ? $board['bo_mobile_subject_len'] : $board['bo_subject_len']);
        $list[$i]['is_notice'] = true;
        $list[$i]['num'] = 0;
        $i++;
        $notice_count++;
  
        if($notice_count >= $list_page_rows)
            break;
    }
}
  
$total_page  = ceil($total_count / $page_rows);  // 전체 페이지 계산
$from_record = ($page - 1) * $page_rows; // 시작 열을 구함
  
// 공지글이 있으면 변수에 반영
if(!empty($notice_array)) {
    $from_record -= count($notice_array);
  
    if($from_record < 0)
        $from_record = 0;
  
    if($notice_count > 0)
        $page_rows -= $notice_count;
  
    if($page_rows < 0)
        $page_rows = $list_page_rows;
}
  
// 관리자라면 checkbox 보임
$is_checkbox = false;
if ($is_member && ($is_admin == 'super' || $group['gr_admin'] == $member['mb_id'] || $board['bo_admin'] == $member['mb_id']))
    $is_checkbox = true;
  
// 정렬에 사용하는 query_string
$qstr2 = 'bo_table='.$bo_table.'&amp;sop='.$sop;
  
// 0 으로 나눌시 오류를 방지하기 위하여 값이 없으면 1 로 설정
$bo_gallery_cols = $board['bo_gallery_cols'] ? $board['bo_gallery_cols'] : 1;
$td_width = (int)(100 / $bo_gallery_cols);
  
// 정렬
// 인덱스 필드가 아니면 정렬에 사용하지 않음
if (!$sst) {
    if ($board['bo_sort_field']) {
        $sst = $board['bo_sort_field'];
    } else {
        $sst  = "wr_num, wr_reply";
        $sod = "";
    }
} else {
    $board_sort_fields = get_board_sort_fields($board, 1);
    if (!$sod && array_key_exists($sst, $board_sort_fields)) {
        $sst = $board_sort_fields[$sst];
    } else {
        // 게시물 리스트의 정렬 대상 필드가 아니라면 공백으로 (nasca 님 09.06.16)
        // 리스트에서 다른 필드로 정렬을 하려면 아래의 코드에 해당 필드를 추가하세요.
        // $sst = preg_match("/^(wr_subject|wr_datetime|wr_hit|wr_good|wr_nogood)$/i", $sst) ? $sst : "";
        $sst = preg_match("/^(wr_datetime|wr_hit|wr_good|wr_nogood)$/i", $sst) ? $sst : "";
    }
}
  
if(!$sst)
    $sst  = "wr_num, wr_reply";
  
if ($sst) {
    $sql_order = " order by {$sst} {$sod} ";
}
  
$sql_search_wr_3 = '';
if($_request['address']) {
    $sql_search_wr_3 = " and wr_3 = '{$_request['address']}'";
}
  
if ($is_search_bbs) {
    $sql = " select distinct wr_parent from {$write_table} where {$sql_search} {$sql_search_wr_3} {$sql_order} limit {$from_record}, $page_rows ";
} else {
    $sql = " select * from {$write_table} where wr_is_comment = 0 ";
    if(!empty($notice_array))
        $sql .= " and wr_id not in (".implode(', ', $notice_array).") ";
    $sql .= " {$sql_order} limit {$from_record}, $page_rows ";
}
  
if($page_rows > 0) {
    $result = sql_query($sql);
  
    $k = 0;
  
    while ($row = sql_fetch_array($result))
    {
        // 검색일 경우 wr_id만 얻었으므로 다시 한행을 얻는다
        if ($is_search_bbs)
            $row = sql_fetch(" select * from {$write_table} where wr_id = '{$row['wr_parent']}' ");
  
        $list[$i] = get_list($row, $board, $board_skin_url, g5_is_mobile ? $board['bo_mobile_subject_len'] : $board['bo_subject_len']);
        if (strstr($sfl, 'subject')) {
            $list[$i]['subject'] = search_font($stx, $list[$i]['subject']);
        }
        $list[$i]['is_notice'] = false;
        $list_num = $total_count - ($page - 1) * $list_page_rows - $notice_count;
        $list[$i]['num'] = $list_num - $k;
  
        $i++;
        $k++;
    }
}
  
  
g5_latest_cache_data($board['bo_table'], $list);
  
$write_pages = get_paging(g5_is_mobile ? $config['cf_mobile_pages'] : $config['cf_write_pages'], $page, $total_page, get_pretty_url($bo_table, '', $qstr.'&amp;page='));
?>
<ul id="gall_ul">
    <?php for ($i=0; $i<count($list); $i++) { ?>
        <li class="gall_li">
            <a href="<?php echo $list[$i]['href']?>">
                <div class="mark"><?php echo $list[$i]['ca_name']?></div>
                <div class="gall_img">
                    이미지
                </div>
                <div class="gall_info">
                    <dl class="gall_list">
                        <dt class="gall_tit"><?php echo get_text($list[$i]['wr_subject'])?></dt>
                        <dd class="gall_del_info">
                            <span class="line"><i class="fa fa-phone"></i> <?php echo $list[$i]['wr_1']?></span>
                            <span class="line"><i class="fa fa-bicycle"></i> <?php echo number_format($list[$i]['wr_7']) ?>원 이상 배달 가능</span>
                        </dd>
                    </dl>
                </div>
            </a>
        </li>
    <?php } ?>
    <?php if (count($list) == 0) { echo "<li class=\\"empty_list\\">찾는 정보가 없습니다.</li>"; } ?>
</ul>
  
<!-- 페이지 -->
<?php echo $write_pages; ?>
<!-- 페이지 -->
\`\`\`



아래 소스를 설명하자면 먼저 | 구분 되면 expload로 제거 후에 impload 함수로 in으로 바꿔준다.

in내부에서 가나라,마바사 이렇게 다시 콤마로 구분 되서 쿼리가 동작된다.

 
\`\`\`php
function get_sql_search2($search_ca_name, $search_field, $search_text, $search_operator='and')
{
    global $g5;
 
    if($search_ca_name) {
        $arr_sca = explode("|", $search_ca_name);
 
        $str= "(";
 
        $ingredients = [];
        foreach ($arr_sca as $item){
            $ingredients[] = $item;
        }
 
        $str .=  " ca_name in('";
        $str .= implode("','", $ingredients);
        $str .= "'";
 
        $str .= "))";
    }else {
        $str = " (1) ";
    }
 
 
    $search_text = strip_tags(($search_text));
    $search_text = trim(stripslashes($search_text));
 
    if (!$search_text && $search_text !== '0') {
        if ($search_ca_name) {
            return $str;
        } else {
            return '0';
        }
    }
 
    if ($str)
        $str .= " and ";
 
    // 쿼리의 속도를 높이기 위하여 ( ) 는 최소화 한다.
    $op1 = "";
 
    // 검색어를 구분자로 나눈다. 여기서는 공백
    $s = array();
    $s = explode(" ", $search_text);
 
    // 검색필드를 구분자로 나눈다. 여기서는 +
    $tmp = array();
    $tmp = explode(",", trim($search_field));
    $field = explode("||", $tmp[0]);
    $not_comment = "";
    if (!empty($tmp[1]))
        $not_comment = $tmp[1];
 
    $str .= "(";
    for ($i=0; $i<count($s); $i++) {
        // 검색어
        $search_str = trim($s[$i]);
        if ($search_str == "") continue;
 
        // 인기검색어
        insert_popular($field, $search_str);
 
        $str .= $op1;
        $str .= "(";
 
        $op2 = "";
        for ($k=0; $k<count($field); $k++) { // 필드의 수만큼 다중 필드 검색 가능 (필드1+필드2...)
 
            // sql injection 방지
            // 필드값에 a-z a-z 0-9 _ , | 이외의 값이 있다면 검색필드를 wr_subject 로 설정한다.
            $field[$k] = preg_match("/^[\\w\\,\\|]+$/", $field[$k]) ? strtolower($field[$k]) : "wr_subject";
 
            $str .= $op2;
            switch ($field[$k]) {
                case "mb_id" :
                case "wr_name" :
                    $str .= " $field[$k] = '$s[$i]' ";
                    break;
                case "wr_hit" :
                case "wr_good" :
                case "wr_nogood" :
                    $str .= " $field[$k] >= '$s[$i]' ";
                    break;
                // 번호는 해당 검색어에 -1 을 곱함
                case "wr_num" :
                    $str .= "$field[$k] = ".((-1)*$s[$i]);
                    break;
                case "wr_ip" :
                case "wr_password" :
                    $str .= "1=0"; // 항상 거짓
                    break;
                // like 보다 instr 속도가 빠름
                default :
                    if (preg_match("/[a-za-z]/", $search_str))
                        $str .= "instr(lower($field[$k]), lower('$search_str'))";
                    else
                        $str .= "instr($field[$k], '$search_str')";
                    break;
            }
            $op2 = " or ";
        }
        $str .= ")";
 
        $op1 = " $search_operator ";
    }
    $str .= " ) ";
    if ($not_comment)
        $str .= " and wr_is_comment = '0' ";
 
    return $str;
}
\`\`\`

여기까지 설명하겠다.

 

## 맺음말 :

데모 플러그인에 보면 맛집 배달 게시판이 있다. 이거 참고하면 된다.

깃헙에 따로 올려놨다.

 

`,link:"/그누&영카트/다중검색 만들기"},{title:"모바일에서 스마트에디터2 사용하기",content:`
# {{ $frontmatter.title }}

그누보드 기본 설정은 모바일에서 에디터 사용안함으로 되어 있습니다.

모바일에서도 에디터를 활성화하는 방법입니다. 

root/config.php 파일에서 모바일 에디터 사용 설정을 true 로 변경합니다. 

\`\`\`php
define('g5_is_mobile_dhtml_use', true);
\`\`\`


모바일에서 사용시 스마트에디터가 깨지기 때문에 아래 파일에 해당코드 추가

플러그인 위치 /plugin/editor/smarteditor2/css/ko_kr/smart_editor2.css

\`\`\`css
/* 모바일용 */
#smart_editor2{margin-right:1px !important;min-width:100px !important}
@media screen and (max-width: 640px){
 #smart_editor2 .se2_text_tool ul:nth-child(4n){clear:both;}
 #smart_editor2 .se2_text_tool ul{margin-bottom:4px}
 #smart_editor2 .se2_text_tool ul:nth-child(n+4){margin-bottom:0}
 #smart_editor2 .se2_text_tool .se2_multy,#smart_editor2 .se2_text_tool .se2_multy button, #smart_editor2 .se2_text_tool .se2_multy button span{height:54px}
}
@media screen and (max-width: 515px){
 #smart_editor2 .se2_text_tool ul:nth-child(3n){clear:both;margin-left:4px}
 #smart_editor2 .se2_text_tool ul:nth-child(6n),#smart_editor2 .se2_text_tool ul:nth-child(4n){clear:none;margin-left:0}
 #smart_editor2 .se2_text_tool ul:nth-child(n+3){margin-bottom:0}
}
@media screen and (max-width: 370px){
 #smart_editor2 .se2_text_tool ul:nth-child(2n){clear:both;margin-left:4px}
 #smart_editor2 .se2_text_tool ul:nth-child(3n){clear:both;margin-left:4px}
 #smart_editor2 .se2_text_tool ul:nth-child(6n),#smart_editor2 .se2_text_tool ul:nth-child(4n){clear:none;margin-left:0}
 #smart_editor2 .se2_text_tool ul:nth-child(n+3){margin-bottom:0}
 #smart_editor2 .se2_text_tool .se2_multy,#smart_editor2 .se2_text_tool .se2_multy button, #smart_editor2 .se2_text_tool .se2_multy button span{height:79px}
}
@media screen and (max-width: 325px){
 #smart_editor2 .se2_text_tool .se2_multy,#smart_editor2 .se2_text_tool .se2_multy button, #smart_editor2 .se2_text_tool .se2_multy button span{height:29px;}
 #smart_editor2 .se2_text_tool .se2_multy{border-bottom:1px solid #e0dedf}
}
\`\`\`


모바일은 위에 방법처럼 따로 커스텀 해야된다. 

그누 특정상 커스텀 할게 많아서 참고하시길...




 `,link:"/그누&영카트/모바일에서 스마트에디터2 사용하기"},{title:"배열을 12개씩 내부에 4개씩 묶어서 출력할경우",content:`
# {{ $frontmatter.title }}

배열이 1부터 12개까지 출력하는데 1배열에 4개씩 묶어서 출력하려면 어떻게 하는지 찾아보니까..

이렇게 하면된다.

\`\`\`php
$list = [];
// 리뷰글 가져오기
$sql = " select * from \`{$g5['g5_shop_item_use_table']}\` where is_confirm = '1' order by is_time desc limit 0,12";
$result = sql_query($sql);
for ($i=0; $rows = sql_fetch_array($result); $i++) {
$list[$i]['subject'] = conv_subject($rows['is_subject'],12,"…");
$list[$i]['content'] = conv_content($rows['is_content'],2);
$list[$i]['score'] = get_star($rows['is_score']);
$list[$i]['writer'] = mb_substr(get_text($rows['is_name']), 0, 1, 'utf-8') . "***" . mb_substr($rows['is_name'], -1, 0, 'utf-8');
$list[$i]['datetime'] = date('y-m-d',strtotime($rows['is_time']));
}

$output = array_chunk($list,4,true);
\`\`\`


여기서 중요한게 array_chunk 함수를 이용해서 4개씩 묶어서 출력한다. `,link:"/그누&영카트/배열을 12개씩 내부에 4개씩 묶어서 출력할경우"},{title:"사이트맵 만들기",content:`
# {{ $frontmatter.title }}


사이트맵 아래 소스 참고해서 넣어주면 된다.


\`\`\`php
<?php
include_once("./_common.php");
  
header("content-type: text/xml;charset=\\"utf-8\\"");
header("cache-control: no-cache, must-revalidate");
header("pragma: no-cache");
  
echo "<?xml version=\\"1.0\\" encoding=\\"utf-8\\"?>\\n";
?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<?php
$query = sql_query("select bo_table from \`{$g5['board_table']}\` where bo_read_level=1");
while($temp = sql_fetch_array($query)) {
    $bo_arr[] = $temp['bo_table'];
}
  
foreach($bo_arr as $bo) {
    $bbs_url = get_pretty_url($bo);
    echo "<url>\\n";
    echo "<loc>$bbs_url</loc>\\n";
    $temp = sql_fetch("select wr_datetime from \`{$g5['write_prefix']}$bo\` order by wr_datetime desc");
    $lastmod = str_replace(" ", "t", substr($temp['wr_datetime'], 0, 30))."+00:00";
     
    echo "<lastmod>$lastmod</lastmod>\\n";
    echo "<changefreq>daily</changefreq>\\n";
    echo "<priority>0.9</priority>\\n";
    echo "</url>\\n";
  
    $query = sql_query("select wr_id, wr_datetime from \`{$g5['write_prefix']}$bo\` where wr_is_comment='0' and wr_option not like '%secret%'");
    while($row = sql_fetch_array($query)) {
        $bbs_url = get_pretty_url($bo,$row['wr_id']);
        echo "<url>";
        echo "<loc>$bbs_url</loc>";
        $temp = sql_fetch("select wr_datetime from \`{$g5['write_prefix']}$bo\` where wr_parent='{$row['wr_id']}' order by wr_id desc");
        $lastmod = str_replace(" ", "t", substr($temp['wr_datetime'], 0, 30))."+00:00";
        if(!$lastmod) {
            $temp = sql_fetch("select wr_datetime from \`{$g5['write_prefix']}$bo\` where wr_id='{$row['wr_id']}'");
            $lastmod = str_replace(" ", "t", substr($temp['wr_datetime'], 0, 30))."+00:00";
        }
        if(!$lastmod) $lastmod = g5_time_ymd;
        echo "<lastmod>$lastmod</lastmod>";
        echo "<changefreq>weekly</changefreq>";
        echo "<priority>0.8</priority>";
        echo "</url>\\n";
    }
}
?>
</urlset>
\`\`\`


`,link:"/그누&영카트/사이트맵 만들기"},{title:"스크롤 내릴때 하단 바 고정 하는방법",content:`
# {{ $frontmatter.title }}


일단 그누보드 내부에서 css가 이상해서 내가 직접 필터해서 쓴걸로 변경 해야한다.

아래 소스 참고하면된다. 아래 소스코드 참고하면 html,body {height:100%} 으로 지정을 해야지 하단에 고정이 된다. 

html 이 포함된 부분에서 문제가 있는것 같은데.. 이유는 아무리 찾아봐도 잘 모르겠고 아래 소스코드 쓰면 된다. 그누 특정상 직접 커스텀을 해야된다. 

\`\`\`css
html, body{height:100%;}body{margin:0;padding:0;font-size:0.75em;min-height:320px;height:100%;background:#f5f5f5;font-family:나눔바른고딕,'nanumbarungothic',sans-serif;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}html, h1, h2, h3, h4, h5, h6, form, fieldset, img{margin:0;padding:0;border:0}h1, h2, h3, h4, h5, h6{font-size:1em;font-family:나눔바른고딕,'nanumbarungothic',sans-serif;}article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section{line-height:inherit;vertical-align:top;border:0 none;-webkit-font-smoothing:antialiased;scroll-behavior:auto;}legend{position:absolute;font-size:0;line-height:0;text-indent:-9999em;overflow:hidden}label, input, button, select, img{vertical-align:middle}input, button{margin:0;padding:0;font-size:1em;font-family:나눔바른고딕,'nanumbarungothic',sans-serif;}button{cursor:pointer}input[type=text], input[type=password], input[type=submit], input[type=image], button{font-size:1em;-webkit-appearance:none}textarea, select{font-size:1em;font-family:나눔바른고딕,'nanumbarungothic',sans-serif;}textarea{border-radius:0;-webkit-appearance:none;font-family:나눔바른고딕,'nanumbarungothic',sans-serif;}select{margin:0;background:none;font-family:나눔바른고딕,'nanumbarungothic',sans-serif;}p{margin:0;padding:0;word-break:break-all}hr{display:none}pre{overflow-x:scroll;font-size:1.1em}a{color:#000;text-decoration:none}ul,li,dl,dt,dd{padding:0;margin:0}ul{list-style:none}*,:after,:before{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}input[type=text],input[type=password], textarea{-webkit-transition:all 0.30s ease-in-out;-moz-transition:all 0.30s ease-in-out;-ms-transition:all 0.30s ease-in-out;-o-transition:all 0.30s ease-in-out;outline:none;}input[type=text]:focus,input[type=password]:focus, textarea:focus,select:focus{-webkit-box-shadow:0 0 5px #9ed4ff;-moz-box-shadow:0 0 5px #9ed4ff;box-shadow:0 0 5px #9ed4ff;border:1px solid #558ab7 !important;}a[href^="tel"]{color:inherit;text-decoration:none;}
\`\`\`


그리고 나서 포지션 픽시드로 하면 고정이 된다. 하단까지 아예 내려가면 푸터가 가려지는데 이걸 제이쿼리로 소스 추가하면 된다. 

\`\`\`css
position:fixed;bottom:0;left:0;right:0;z-index:10000;
\`\`\`
혹시 몰라서 전체적으로 소스코드를 넣었다. 참고하면 된다. 


\`\`\`html
<div id="bottomnav" class="fixed_sidebar">
    <ul class="fixed_sidebar_wrap">
        <li><a href="#" class="btn_hdcate"><span class="sound_only">분류</span></a></li>
        <li><a href="#" class="btn_kakao"><span class="kakao_icon"></span> <span class="fixed_name">카카오 상담하기</span></a></li>
        <li><a href="tel:<?php echo $default['de_admin_company_tel']; ?>" class="btn_tel"><span class="tel_icon"></span> <span class="fixed_name">전화 상담하기</span></a></li>
    </ul>
</div>
\`\`\`

\`\`\`css
/* 하단 고정바 */
#bottomnav {border-top:1px solid #eee;background: #fff;transition: top 0.3s;width: 100%;}
#bottomnav .fixed_sidebar_wrap {display: flex;}
#bottomnav .fixed_sidebar_wrap li {display: flex;flex-flow: column;flex: 1 1 auto;align-items: center;text-align: center;position: relative;}
#bottomnav .fixed_sidebar_wrap li a {display: inline-block;padding: 10px 15px;font-size: 13px;}
#bottomnav .fixed_sidebar_wrap li .btn_hdcate {display: inline-block;background: url("../img/mobile/hamburger_icon.png") center no-repeat;background-size: 20px;padding: 20px 10px;}
#bottomnav .fixed_sidebar_wrap li .btn_kakao .kakao_icon {display: inline-block;background: url("../img/mobile/kakao_icon.png") no-repeat;background-size: 20px 20px;background-position: 50%;padding: 10px;vertical-align: top;}
#bottomnav .fixed_sidebar_wrap li .btn_tel .tel_icon {display: inline-block;background: url("../img/mobile/tel_icon.png") no-repeat;background-size: 20px 20px;background-position: 50%;padding: 10px;vertical-align: top;}
#bottomnav .fixed_sidebar_wrap li a .fixed_name {display: inline-block;padding-top: 3px;padding-left: 5px;}
.fixed_sidebar {position: fixed;bottom: 0;left:0;right:0;z-index: 10000;}
\`\`\`


\`\`\`js
$(window).scroll(function() {
        if($(window).scrolltop() + $(window).height() > $(document).height() - 300) {
            $('#bottomnav').hide();
        } else {
            $('#bottomnav').show();
        }
    });
\`\`\`



`,link:"/그누&영카트/스크롤 내릴때 하단 바 고정 하는방법"},{title:"영카트 그누보드 설치 쉘 스크립트",content:`
# {{ $frontmatter.title }}


쉘스크립트

\`\`\`bash
#!/bin/bash 
wgethttps://github.com/gnuboard/gnuboard5/tarball/master mvmaster master.tar.gz tar-xvzpf master.tar.gz rmmaster.tar.gz mvgnuboard-gnuboard5-*/* ./ 
rm-r gnuboard-gnuboard5-*
\`\`\`



그누보드5 최신버전 설치 

\`\`\`bash
wgethttps://raw.githubusercontent.com/hanbitgaram/shell-script/master/gnuboard.sh &&shgnuboard.sh &&rmgnuboard.sh
\`\`\`

영카트5 최신버전 설치 

\`\`\`bash
wgethttps://raw.githubusercontent.com/hanbitgaram/shell-script/master/youngcart.sh &­oungcart.sh &&rmyoungcart.sh
\`\`\``,link:"/그누&영카트/영카트 그누보드 설치 쉘 스크립트"},{title:"영카트 모든 상품 보는 방법",content:`
# {{ $frontmatter.title }}


## 설명 :

shop/all_list.php 경로를 만들어준다. (파일생성)

 
\`\`\`php
<?php
include_once('./_common.php');
  
$g5['title'] = '전체 상품 목록';
include_once('./_head.php');
  
// 한페이지에 출력하는 이미지수 = $list_mod * $list_row
$list_mod   = 4;   // 1줄당 이미지 수
$list_row   = 3;   // 출력할 줄 수
$img_width  = 230;  // 이미지 폭
$img_height = 230; // 이미지 높이
?>
  
<?php
$list_file = g5_shop_skin_path.'/list.10.skin.php'; // 스킨
if (file_exists($list_file)) {
    // 총몇개 = 한줄에 몇개 * 몇줄
    $items = $list_mod * $list_row;
    // 페이지가 없으면 첫 페이지 (1 페이지)
    if ($page < 1) $page = 1;
    // 시작 레코드 구함
    $from_record = ($page - 1) * $items;
    $sql = " select * from {$g5['g5_shop_item_table']} where it_use = '1' order by it_order, it_id desc ";
    $list->set_query($sql);
    $list = new item_list();
    $list->set_list_skin($list_file);
    $list->set_list_mod($list_mod);
    $list->set_list_row($list_row);
    $list->set_img_size($img_width, $img_height);
    $list->set_is_page(true);
    $list->set_from_record($from_record);
    $list->set_view('it_img', true);
    $list->set_view('it_id', false);
    $list->set_view('it_name', true);
    $list->set_view('it_basic', true);
    $list->set_view('it_cust_price', false);
    $list->set_view('it_price', true);
    $list->set_view('it_icon', true);
    $list->set_view('sns', true);
    echo $list->run();
  
    // where 된 전체 상품수
    $total_count = $list->total_count;
    // 전체 페이지 계산
    $total_page  = ceil($total_count / $items);
}
?>
  
<?php
echo get_paging($config['cf_write_pages'], $page, $total_page, "{$_server['script_name']}?$qstr&amp;page=");
?>
  
<?php
include_once('./_tail.php');
?>
\`\`\`

여기서 스킨만 list.10.skin.php만 복제해서 새로 만든다.

list.all.skin.php 이라고 만든다.

그러고 위에 소스를 보면 스킨을 위치만 변경하면 된다.`,link:"/그누&영카트/영카트 모든 상품 보는 방법"},{title:"영카트4 장바구니키 세션을 쿠키방식으로 변경하기",content:`
# {{ $frontmatter.title }}


장바구니에 담은후 창을 닫고 다시 띄우면 담은 상품이 없어집니다. 

 

영카트는 세션을 사용하기 때문이죠. 

쿠키를 사용하면 창을 닫아도 새로 띄우면 담았던 장바구니가 그대로 나오게 할수있습니다. 

하지만 보안상 좋지는 않습니다. 

관련 의뢰가 들어와 작업을 해드리고 다른분에게 도움이 될듯하여 공유합니다. 

 

파일명 : /extend/shop.extend.php 

 : get_session('ss_on_uid') -> get_cookie('ss_on_uid') 

 : set_session('ss_on_uid', get_unique_id()); -> set_cookie("ss_on_uid", get_unique_id(), 86400 * 30); 

 

 

파일명 : /shop/boxcart.inc.php 

파일명 : /shop/cart.php 

파일명 : /shop/cartupdate.php 

파일명 : /shop/cartupdate2.php 

파일명 : /shop/list.skin.12.php 

파일명 : /shop/list.skin.12_test.php 

파일명 : /shop/orderform.php 

파일명 : /shop/orderreceipt.php 

 : get_session('ss_on_uid') -> get_cookie('ss_on_uid') 로 변경 

 

 

파일명 : /shop/orderupdate.php 

 : get_session('ss_on_uid') -> get_cookie('ss_on_uid') 로 변경 

 : set_session('ss_on_uid','') -> set_cookie('ss_on_uid', 0, 0); 로 변경 

 

 

파일명 : /lib/shop.lib.php  

 : session_check() 함수내 get_session('ss_on_uid') -> get_cookie('ss_on_uid') 로변경.`,link:"/그누&영카트/영카트4 장바구니키 세션을 쿠키방식으로 변경하기"},{title:"장바구니에 상품 중복 되는경우",content:`
# {{ $frontmatter.title }}


## 설명 :

장바구니에 있던 상품이 옵션 있는 상품 하고 없는 상품이 있는데 5개로 나온다 

이렇게 중복 불가를 해야될 경우 쿼리에 디스카운트로 처리 하면 될것 같다.


\`\`\`php
$qry = " select count(distinct it_id) as cnt from {$g5['g5_shop_cart_table']} where od_id = '{$row['od_id']}' "; 
$ct2 = sql_fetch($qry,false); 
 
if($ct2['cnt'] > 1) { 
     $item_name = $row['it_name'].' 외 '.($ct2['cnt']).'건'; 
}else { 
     $item_name = $row['it_name']; 
}
\`\`\`
`,link:"/그누&영카트/장바구니에 상품 중복 되는경우"},{title:"전체 검색 할때 결과가 나오지 않을경우",content:`
# {{ $frontmatter.title }}


## 설명 :


전체 검색 할적에 결과가 나오지 않는 경우가 있는데

커스텀 할필요 없이 그냥 게시판 설정에보면 검색 사용이 체크 됐는지 확인한다.`,link:"/그누&영카트/전체 검색 할때 결과가 나오지 않을경우"},{title:"카카오맵 api 연동하기",content:`
# {{ $frontmatter.title }}


## 제작 방법 :


최근에 데이터가 날라가서 다시 포스팅 글 남겨본다.

 
카카오 맵 연동 하기 위해서 준비물을 소개한다.

 

## 준비물 :
 
::: info
카카오 rest api 키,카카오 javascript 키
:::
 

 

카카오 개발자에서 발급 받아야한다.

https://developers.kakao.com/
	

 

발급 받고 그누보드에 연동 하는건 알아서 한다.

 

여기 아래 소스코드로 맵을 만들면된다.

 
주소는 따로 우편번호, 기본주소, 상세 주소 이렇게 분리해서 디비에 저장하면된다.

아니면 기본 주소만 따로 디비에 저장 하는 방식으로.. 우편번호랑 뒷자리 주소는 빼고..

주소를 분리해서 디비 저장 하는 이유는 내가 경험해 본게 있는데 만약에 주소1|주소2 이렇게 붙어서 여분필드에 저장 했더니 불러들 일때 문제가 생긴다.

따로 중간 주소 빼고 다시 저장 해야하고 이래야 되서.. 불편하다 그냥 분리시켜서 저장하면된다.

(중간에 기본주소 빼고 저장하고 이런 방법을 알고 있으면 해도 된다. 말리진 않는다 방식을 알면 바로 써먹자~)

 

 

여기서 풀어드레스 변수는 기본 주소만 넣어주면 된다.

 

단, 버그가 있다~ 지도 검색이 안되면 맵이 흰색으로만 변한다. 

우리 집 주소가 그렇다.. 서울 주소가 흰색으로만 나온다.

 
\`\`\`html
<div id="map_canvas"></div>
\`\`\`

\`\`\`php
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=<?=$config['cf_kakao_js_apikey']?>&libraries=services"><\/script>
  
var kakao_rest_api = "";
var full_addresss = "";
  
$.ajax({
    url: 'https://dapi.kakao.com/v2/local/search/address.json?query=' + encodeuricomponent(full_address),
    type: 'get',
    headers: {'authorization': "kakaoak " + kakao_rest_api},
    success: function (data) {
        var inputdata = [data.documents[0].address_name]
        var mapcontainer = document.getelementbyid('map_canvas'),
            mapoption = {center: new kakao.maps.latlng(data.documents[0].x, data.documents[0].y), level: 3};
        var map = new kakao.maps.map(mapcontainer, mapoption);
        var count = 0;
        var ps = new kakao.maps.services.places();
        var bounds = new kakao.maps.latlngbounds();
        if (inputdata != null) {
            kewwordsearch(inputdata[count]);
        }
  
        function kewwordsearch(keword) {
            ps.keywordsearch(keword, placessearchcb);
            count = count + 1;
        }
  
        function placessearchcb(data, status) {
            if (status === kakao.maps.services.status.ok) {
                displaymarker(data[0]);
                bounds.extend(new kakao.maps.latlng(data[0].y, data[0].x));
                setbounds();
            }
        }
  
        function displaymarker(place) {
            var marker = new kakao.maps.marker({map: map, position: new kakao.maps.latlng(place.y, place.x),});
            kakao.maps.event.addlistener(marker, 'click', function () {
                var position = this.getposition();
                var url = 'https://map.kakao.com/link/map/' + place.id;
                window.open(url, '_blank');
            });
        }
  
        function setbounds() {
            map.setbounds(bounds, 90, 30, 10, 30);
        }
    }, /*error : function(e){}*/
});
 
\`\`\`


 

## 느낀점 :

지도 연동할때 위 와 같이 하는 방법이 대부분이다~ 일단 지도 하나에서 마커가 생기는데 업체 소개 할때 쓰이면 좋다

이제는 다양하게 마커 만드는 방법을 포스팅 남겨볼것이다. 사용법을 연구해서 많이 올려봐야징..



`,link:"/그누&영카트/카카오맵 api 연동하기"},{title:"한글 자음의 초성으로 검색 하기",content:`
# {{ $frontmatter.title }}


## 설명 :


\`\`\`php
// 한글 자음의 초성으로 검색하기
  
if($find == 'ㄱ'){
 $where = "and (field_name rlike '^(ㄱ|ㄲ)' or ( field_name >= '가' and field_name < '나' )) order by field_name";
}else if($find == 'ㄴ'){
 $where = "and (field_name rlike '^ㄴ' or ( field_name >= '나' and field_name < '다' )) order by field_name";
}else if($find == 'ㄷ'){
 $where = "and (field_name rlike '^(ㄷ|ㄸ)' or ( field_name >= '다' and field_name < '라' )) order by field_name";
}else if($find == 'ㄹ'){
 $where = "and (field_name rlike '^ㄹ' or ( field_name >= '라' and field_name < '마' )) order by field_name";
}else if($find == 'ㅁ'){
 $where = "and (field_name rlike '^ㅁ' or ( field_name >= '마' and field_name < '바' )) order by field_name";
}else if($find == 'ㅂ'){
 $where = "and (field_name rlike '^ㅂ' or ( field_name >= '바' and field_name < '사' )) order by field_name";
}else if($find == 'ㅅ'){
 $where = "and (field_name rlike '^(ㅅ|ㅆ)' or ( field_name >= '사' and field_name < '아' )) order by field_name";
}else if($find == 'ㅇ'){
 $where = "and (field_name rlike '^ㅇ' or ( field_name >= '아' and field_name < '자' )) order by field_name";
}else if($find == 'ㅈ'){
 $where = "and (field_name rlike '^(ㅈ|ㅉ)' or ( field_name >= '자' and field_name < '차' )) order by field_name";
}else if($find == 'ㅊ'){
 $where = "and (field_name rlike '^ㅊ' or ( field_name >= '차' and field_name < '카' )) order by field_name";
}else if($find == 'ㅋ'){
 $where = "and (field_name rlike '^ㅋ' or ( field_name >= '카' and field_name < '타' )) order by field_name";
}else if($find == 'ㅌ'){
 $where = "and (field_name rlike '^ㅌ' or ( field_name >= '타' and field_name < '파' )) order by field_name";
}else if($find == 'ㅍ'){
 $where = "and (field_name rlike '^ㅍ' or ( field_name >= '파' and field_name < '하' )) order by field_name";
}else if($find == 'ㅎ'){
 $where = "and (field_name rlike '^ㅎ' or ( field_name >= '하')) order by field_name";
}else{
 $where = "order by field_name";
}
  
$qry     = "select * from table_name where $where";
$result  = mysql_query($qry);
\`\`\``,link:"/그누&영카트/한글 자음의 초성으로 검색 하기"}],t={data:e,regexForContentStripping:n};export{t as default};
