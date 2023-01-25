---
title: 'vue-quill-editor 사용법'
---

# {{ $frontmatter.title }}


일단 블로그 보면서 참고했는데 여기 자료애서 좀 수정을 거쳐야된다.

커스텀 컴포넌트로 만들려고 했더니 약간의 난이도가 있다.

여기 소스코드 그대로 사용하면된다.



Editor.vue
```vue
<template>
  <div>
    <quill-editor
            class="editor"
            ref="myTextEditor"
            :disabled="false"
            :content="editorValue"
            v-model="editorValue"
            :options="editorOption"
            @change="onEditorChange"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
    />
  </div>
</template>

<script>
export default {
  name: "Editors",
  props: {content:{ type:String }},
  data() {
      return {
          editorOption: {
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
      onEditorChange({ quill, html, text }) {
         // console.log('editor change!', quill, html, text)
          //this.content = html
      },
      onEditorBlur(editor) {
          //console.log("editor blur!", editor);
      },
      onEditorFocus(editor) {
          //console.log("editor focus!", editor);
      },
      onEditorReady(editor) {
         // console.log("editor ready!", editor);
      },
  },
  computed: {
    editor() {
        return this.$refs.myQuillEditor.quill
    },
    editorValue: {
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
</script>
 
<style>
  .ql-container, .ql-editor {
    min-height: inherit!important;
  }
  .ql-container {
    height: 300px!important;
  }
</style>
```

 







## 사용법 :

```vue
<Editors v-model="form.mp_content" v-bind:content="form.mp_content" />
```

적절한 곳에 아래 크롬 이슈 방지 소스를 넣어준다.

```js
created(){
    // 20230103 크롬 80 이슈 문제
    document.cookie = "safeCookie1=foo; SameSite=Lax";
    document.cookie = "safeCookie2=foo";
    document.cookie = "crossCookie=bar; SameSite=None; Secure";
},
```


## 참고 자료 :

https://hjh0827.tistory.com/76


https://laracasts.com/discuss/channels/general-discussion/using-v-model-with-nested-compoennts-in-vue