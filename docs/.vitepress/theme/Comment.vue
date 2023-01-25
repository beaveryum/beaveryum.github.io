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