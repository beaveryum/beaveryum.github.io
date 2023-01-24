import { SimpleSearch } from "vitepress-plugin-simple-search";
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
    base: "/guide/",
    markdown: {
        defaultHighlightLang: 'php'
    },
    plugins: [SimpleSearch({ baseURL: 'https://github.com/beaveryum/beaver_it_guide.git', regexForContentStripping: undefined })],
    lastUpdated: true,
    titleTemplate: ':title - 비버팩토리 기술 블로그',
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