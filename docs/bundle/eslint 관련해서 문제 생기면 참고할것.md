---
title: 'eslint 관련해서 문제 생기면 참고할것'
---

# {{ $frontmatter.title }}


일단 길게 쓰는것보다 그냥 아래꺼 참고하면된다.


```json
"no-unused-vars": "error", // 사용하지않는 변수 error처리 하겠다.
"no-console": "off", // 콘솔로그를 사용하수 있게 꺼놓겠다.
"no-else-return": "warn",
"semi":"off",
space-unary-ops": 2

```






완벽히 수정하면 이렇게 됨

```js
module.exports = {
    root: true,
    env: {
      "browser": true,
      "es6": true,
      "node": true
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
      "prettier"
    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parserOptions: {
        "ecmaVersion": 2018
    },
    rules: {
        // 'no-console': process.env.CI_ENVIRONMENT === 'production' ? 'warn' : 'off',
        // 'no-debugger': process.env.CI_ENVIRONMENT === 'production' ? 'warn' : 'off',
      "no-unused-vars": "error", // 사용하지않는 변수 error처리 하겠다.
      "no-console": "off", // 콘솔로그를 사용하수 있게 꺼놓겠다.
      "no-else-return": "warn",
      "semi": "off",
      "space-unary-ops": 2
    },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
```




## 참고 사이트 :


https://triplexlab.tistory.com/40