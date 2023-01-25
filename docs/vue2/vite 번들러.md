---
title: 'vite 번들러 설명'
---

# {{ $frontmatter.title }}


vite.config.js

Vite 명령어로 dev 서버를 실행할 때 프로젝트 루트의 vite.config.js 파일 확인을 시도합니다. 

그리고 내부에 설정된 값을 참고합니다.

```js
import { fileURLToPath, URL } from 'url'
 
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
```

alias : 파일 시스템의 경로에 별칭을 만들 때 사용합니다. 미리 설정된 '@' 기호를 통하여 './src' 디렉토리에 절대경로로 쉽게 접근할 수 있습니다.

package.json

npm 으로 관리하기 위한 프로젝트 정보를 갖고 있는 파일






