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