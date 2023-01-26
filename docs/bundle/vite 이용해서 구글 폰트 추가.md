---
title: 'vite 이용해서 구글 폰트 추가'
---

# {{ $frontmatter.title }}



구글 폰트 추가 하는 방법을 올려본다.


vite.config.js

맨위에 임포트 폰트 를 넣어준다.

import { VitePluginFonts } from 'vite-plugin-fonts'


플러그인 구문에 추가한다.

```js
return {
    plugins: [
     .........
       VitePluginFonts({
            google: {
                families: ['Varela Round'],
            },
        }),
```



이렇게 하고 #app 에다가 추가하면됨

```css
#app {
font-family: 'Varela Round', sans-serif;
}
```



## 참고 자료 :


https://github.com/stafyniaksacha/vite-plugin-fonts