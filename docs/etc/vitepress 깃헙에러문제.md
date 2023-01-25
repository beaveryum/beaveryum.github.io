---
title: '깃헙에 등록 할때 에러문제'
---

# {{ $frontmatter.title }}



만약에 깃헙을 새로 가입해서 만들었다고 치자 

그러면 깃헙 올릴때 에러 하나쯤 생긴다.


Support for password authentication was removed on January 24, 2023. Please use a personal access token instead. ... The requested URL returned error: 403


아래 링크 참고한다.

https://leveloper.tistory.com/211 


여기서 한가지 덧붙여서 설명하자면 

::: danger
5. Personal access token 생성 할때 

repo 는 최상위 체크 하고

workflow 도 같이 추가 한다.

user 도 추가한다.
:::

비밀번호는 토큰이라서 꼭 복붙해서 메모 해둔다. (중요해서..) 




깃헙 토큰 인증후 로그인 할때는 아래 처럼 한다.

::: info
$ git clone https://github.com/USERNAME/REPO.git

Username: YOUR_USERNAME

Password: YOUR_TOKEN
::: 



만약에 맥os 일때 키체인이 등록 됐다면 

키체인 들어가서 github 검색 후 종류가 인터넷 암호인 항목을 수정 하던지

삭제 한다.


키 체인이 중복 될 수 없어서 원래 기록이 있었으면 삭제 후에 새로 만들던지 아니면 항목만 수정한다.


## 참고 자료 :


https://velog.io/@shin6949/Github-Token-%EB%B0%A9%EC%8B%9D%EC%9C%BC%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8%ED%95%98%EA%B8%B0-ch3ra7vc


[[Github] refusing to allow a Personal Access Token to create or update workflow 에러 해결](https://coding-nyan.tistory.com/61)






















