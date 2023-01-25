import { SimpleSearch } from "vitepress-plugin-simple-search";
import { defineConfig } from "vite";

export default defineConfig({
    plugins: [SimpleSearch({partialsToIgnore:['about'],regexForContentStripping:'/[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]/'})],
});