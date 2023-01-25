---
title: 'vue2 폰트 추가'
---

# {{ $frontmatter.title }}


```bash
npm i google-fonts-webpack-plugin -D
```



webpack.config.js 내부에 아래 소스코드를 넣어준다. (응용) 

```js
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
    "entry": "index.js",
    /* ... */
    plugins: [
        new GoogleFontsPlugin({
            fonts: [
                { family: "Source Sans Pro" },
                { family: "Roboto", variants: [ "400", "700italic" ] }
            ]
        })
    ]
}
```


###############################


근데 웹팩 5 이상에서만 되는것같다 지금 3정도 쓴데 작동 안되서 일단 보류 한다.




## 참고 자료 :
 
https://stackoverflow.com/questions/51516084/how-do-i-add-a-google-font-to-a-vuejs-component
