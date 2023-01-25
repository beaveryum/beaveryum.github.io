---
title: '깃헙 페이지에 등록하기'
---

# {{ $frontmatter.title }}



## 1. 깃헙 주소를 하나 만든다.

예를들어서 "아이디.github.io" 라고 만든다.

커밋을 공개로 설정한다.

그리고 저장소를 생성한다.
 
여기 보고 참고한다.

https://phodobit.kr/49

참고는 대신에 저장소만 만들어 놓은다. 다른거 말고.. 



## 2. 아래 명령어로 main 에 등록해 놓은다.

``` base
git init
git add -A
git commit -m "feature: github action 자동배포"
git branch -M main
git remote add origin https://github.com/[:userid]/[:userid].github.io.git
git push -f origin main
```


## 3. 빌드 해서 배포물 만든다.

``` base
# build
yarn docs:build
```


## 4. 배포 후에 깃헙 등록하기 

배포 폴더 접근 후 
``` base
cd docs/.vitepress/dist
```

깃헙에 등록한다. 아래 명령어 그대로 따라하면된다.

``` base
git init
git remote add origin https://github.com/[:userid]/[:userid].github.io.git
git pull origin gh-pages
git checkout -b gh-pages
git add -A
git commit -m 'deploy with vitepress'
git push -f origin gh-pages
cd -
```


























