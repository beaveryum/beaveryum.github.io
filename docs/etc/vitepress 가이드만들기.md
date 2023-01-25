---
title: 'vitepress 로 가이드 만든 방법'
---

# {{ $frontmatter.title }}


## 1. node 설치 하기 (원래 설치 됐으면 넘긴다.)

## 2. mydoc 폴더를 하나 만들기 (응용해서 폴더명 짓는다.)

## 3. 터미널 열고 명령어 입력한다.

```bash
cd mydoc
```
## 4. 패키지 생성(초기화)

```bash
npm init

yarn init
```

## 5. 아래 명령어 입력한다. 둘중에 하나 선택

```bash
npm install -D vitepress vue

yarn add -D vitepress vue
```

## 6. 아래 명령어 입력한다. 폴더 docs 만들어서 index.md 파일 만든다.
```bash
mkdir docs && echo '# Hello VitePress' > docs/index.md
```

## 7. vitepress 테스트 실행한다.
```bash
npx vitepress dev docs
```



## 8. 패키지 초기화 내용에 아래 소스코드 추가한다.

```json
"docs:dev": "vitepress dev docs",
"docs:build": "vitepress build docs",
"docs:preview": "vitepress preview docs"
```

테스트 실행할때 아래 명령어로 한다.

yarn docs:dev


## 9. vitepress 설정 에 추가한다.

아래 패키지를 선택에 따라서 설치한다.

```json
"devDependencies": {
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
```



만약에 없을경우 디렉토리 새로 만든다.


docs/.vitepress/config.js

위 경로 대로 파일을 만든다.

```js
import { getSidebar } from 'vitepress-plugin-auto-sidebar';
import getTags from 'vitepress-tags';
import { defineConfig } from 'vitepress';

const pages = getTags({
    dir: "./docs",
    pattern: "/**/*.md",
    publicMedia: ["icon", "cover"],
    ignore: ["**/public/", "**/node_modules/**/*.md"],
    mediaFolder: "_media",
})

export default defineConfig({
    head: [],
    lang: 'ko_KR',
    base: "/",
    markdown: {defaultHighlightLang: 'php'},
    lastUpdated: true,
    titleTemplate: ':title',
    title: "비버팩토리 기술 블로그",
    themeConfig: {
        siteTitle: '비버팩토리 기술 블로그',
        nav: [
            {
                text: "Info",
                items: [
                    {text: "about", link: "/about/"},
                ]
            }
        ],
        sidebar: getSidebar({
            contentRoot: '/docs/',
            contentDirs: ['php', 'macos', 'ci4', 'nodejs', 'mysql', 'etc', 'js', 'server', 'vue', '그누&영카트'],
            collapsible: true,
            collapsed: true
        }),
        customData: {
            pages: pages
        },
        docFooter: {
            prev: '이전',
            next: '다음'
        },
        footer: {
            copyright: "Copyright © 2022-2023 비버팩토리 IT 블로그 All Rights Reserved",
        }
    },
});

```

위 설정에서 중요한것을 설명한다면?

base: "/", 이부분은 뒷주소가 /docs 로 했을경우 base: "/docs/" 로 추가 해준다.
그리고 일부 애드센스를 넣으려면 
head 배열에다가 추가해야된다.
애드센스 는 구글링으로 직접 찾아본다.

그리고 여기 사이드바 소스 코드를 보면 
contentDirs 가 보일 것이다. 이건 사이드바에 노출할 것들을 수동으로 추가 해준다.
안그럼 노출 안되어서..



docs/.vitepress/theme 

custom.css 새로 만든다.

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

:root {
    --vp-c-brand: #ff7340;
    --vp-c-brand-light: #ff5719;
    --vp-c-brand-lighter: #ff7340;
    --vp-c-brand-lighter: rgba(255, 135, 23, 0.25);
    --vp-c-brand-dark: #ff622d;
    --vp-c-brand-darker: #e23c00;

    --vp-c-sponsor: #fd1d7c;

    /* Typography */
    --vp-font-family-base: "Noto Sans KR", "Roboto" sans-serif;

    /* Code Snippet font */
    --vp-font-family-mono: "Noto Sans KR", "Roboto", sans-serif;
}
``` 

index.js 파일 만든다.


```js
import { h, watch } from 'vue';
import DefaultTheme from 'vitepress/theme';
import { useData, useRoute, useRouter } from 'vitepress';
import Comment from './Comment.vue';
import "./custom.css";

export default {
    ...DefaultTheme,
    Layout() {
        const { isDark } = useData();
        const route = useRoute();
        const router = useRouter();

        if (process.env.NODE_ENV === 'production') {
            watch(route, (path) => {
                const el = document.querySelector('giscus-widget');
                if (el) {
                    el.update();
                }

                if (window.gtag) {
                    gtag('send', 'pageview', path);
                }
            }, { immediate: true });

            watch(isDark, (dark) => {
                const el = document.querySelector('giscus-widget');
                if (el) {
                    el.theme = dark ? 'transparent_dark' : 'light';
                }
            });

            return h(DefaultTheme.Layout, null, {
                'doc-footer-before': () => h(Comment, { theme: isDark.value ? 'transparent_dark' : 'light' })
            })
        }

        return h(DefaultTheme.Layout, null, {
            'doc-footer-before': () => h('p', {style: 'text-align: center; font-size: 0.625rem;'}, ['댓글 출력 위치. (docs:dev 환경에서는 댓글을 출력하지 않음)'])
        });
    }
}
```

Comment.vue 파일 만든다.
```js
<template>
    <ClientOnly>
        <div style="margin-top: 3rem;">
            <Giscus
                    id="comments"
                    repo="beaveryum/beaveryum.github.io"
                    repoId="R_kgDOI1LxMw"
                    category="문서 댓글"
                    categoryId="DIC_kwDOI1LxM84CTxZI"
                    mapping="pathname"
                    term=""
                    strict="0"
                    reactionsEnabled="1"
                    emitMetadata="0"
                    inputPosition="bottom"
                    :theme="theme"
                    lang="ko"
                    loading="lazy"
            />
        </div>
    </ClientOnly>
</template>

<script setup>
    import Giscus from '@giscus/vue';
    defineProps({
        theme: String
    })
</script>
```

여기서 필요한게 giscus 이 설치 됐는지 확인후에 없으면 아래 링크 보고 설치한다.

https://giscus.app/ko

사용법은 아래꺼 참고. 

https://dev-ujin.github.io/jekyll-blog/add-comments-and-likes-with-giscus

혹은 따로 구글링 할때 Giscus 사용법 찾는다.


.gitignore 파일 만든다.
 
```bash
docs/.vitepress/cache
docs/.vitepress/dist
node_modules
.idea
deploy.sh
```


마지막 으로 검색창을 만들려면 

vitepress-plugin-simple-search 패키지를 설치한다.

그리고나서 ./docs/vite.config.js 파일을 만든다.

```js
import { SimpleSearch } from "vitepress-plugin-simple-search";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [SimpleSearch({partialsToIgnore:['about'],regexForContentStripping:'/[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]/'})],
});
```

이렇게 소스코드를 넣어준다.

여기서 플러그인을 설명하자면 
partialsToIgnore 제외대상을 배열로 추가해준다.

regexForContentStripping 정규식을 추가해준다.

한글,숫자,영문(대소문자) 로 추가해준다.

여기서 정규식을 추가 안하면 한글이 검색이 안된다. 

아래 링크 참고 하자..

https://github.com/Stuyk/vitepress-plugin-simple-search


## 참고 자료 :

[매뉴얼](https://vitepress.vuejs.org/guide/getting-started) 

https://dev-ujin.github.io/jekyll-blog/add-comments-and-likes-with-giscus

https://giscus.app/ko


https://github.com/Stuyk/vitepress-plugin-simple-search


