---
title: '컴포지션 api 를 사용하는이유'
---

# {{ $frontmatter.title }}

기존에 vuejs2에서는 옵션 에이피 아이를 사용하는데 코드 분석이 어렵고 논리적 관심사 로직이 분산되어 있어서 쉽게 찾을수 없다는 단점이 있다

그래서 컴포지션 에이피아이를 사용하면 코드 분석도 금방 찾을 수 있고 코드 재 사용도 가능해서 컴포지션 에이피아이를 쓰는것을 추천한다.




## 코드 재사용성 


Composition API의 가장 큰 장점은 Composable 함수의 형태로 로직의 재사용이 가능하다는 것입니다. Options API의 기본 로직 재사용 메커니즘인 Mixins의 모든 단점을 해결합니다. Composition API의 재사용 기능은 계속해서 증가하는 구성 가능한 유틸리티 모음인 VueUse와 같은 인상적인 커뮤니티 프로젝트를 탄생시켰습니다. 또한 immutable data, state machines, RxJS와 같은 상태 저장 타사 서비스 또는 라이브러리를 Vue의 반응성 시스템(Reactivity system)에 쉽게 통합하기 위한 깨끗한 메커니즘 역할을 합니다. 

Compositions API는 Options API가 가지고 있던 2가지 주요 제한 사항을 해결합니다.