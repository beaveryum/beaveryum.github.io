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
            contentDirs: ['php', 'macos','laravel','ios', 'flutter','ci4','reactjs','html&css', 'nodejs','bundle', 'mysql', 'etc', 'js', 'server', 'vue2','vue3', '그누&영카트'],
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
