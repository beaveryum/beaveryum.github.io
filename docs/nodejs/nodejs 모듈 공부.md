---
title: 'nodejs 모듈 공부'
---

# {{ $frontmatter.title }}



글로벌 모듈  global

 

전역객체이다.

 

어느곳에서도 쓸수있어서 사용된다.

 

콘솔 모듈

 

console.dir >> 오브젝트 에서만 출력됨

console.time >> 시간 출력만됨 

console.trace >> 에러 위치 알려줌 

 

타이머 모듈

타이머는 기본 자바스크립트에서 제공되는게 있어서 딱히 메모하지 않음

기본적인거 사용하면됨

 

 

__filename, __dirname

 

파일 이름 혹은 디렉토리명 

 

process 는 스레드 최상이라서 전체적으로 볼수있다고함

 

process.version 이렇게 명령어 치면

노드버전을 볼수있다 

 

확인하려면 

우선적으로

node 치고나서

process.version이라 치면됨 

 

 

 

내장 모듈

os 모듈

이것도 프로세스와 비슷함

프로세스는 노드가 시작되서 설정 정보를 볼수있는데

os 는 os 모듈이 시작되면서 볼수있다.

운영체제와 관련된 모듈을 볼수있다.

 

 

path 모듈

 

path.sep : 디렉토리 경로 단위? \\로 윈도에서나오고 맥에서는 // 로나옴

 

Path.dirname(__filename) >> 디렉토리명

Path.extname(__filename) >> 확장자

Path.basename(__filename) >> 파일명 

 

Path.parse(__filename) >> 이건 전체적으로 나온다. 디렉토리 부터 파일명까지 정보가

나옴

 

path.normalize >> 이건 풀 경로를 칠때 올바른 경로로 잡아준다

경로를 제대로 잡아줌 

 

경로 

./ 현재경로 ../부모경로  /루트 절대 경로

 

path.relative  경로가 올바르면 참이 나옴

 

중요함

path.join(__dirname,'..','파일이름') 

경로를 조각내서 원하는 경로랑 합해서 출력됨 

- 절대 경로 무시하고 합침

 

path.resolve

- 절대 경로 고려하고 합침

 

 

url 모듈 

기본 내장 함수라서 검색해서 찾아보면 됨

 

쿼리 스트링 모듈 

패스

암호화 모듈

