---
title: 'ref vs reactive'
---

# {{ $frontmatter.title }}



강의에서 처럼 ref vs reactive는 둘다 반응형상태를 만드는데 사용합니다.

차이점은 ref 는.value 가 붙고, reactive는 .value가 붙지 않습니다. 

그렇기 때문에 reactive로 Primitive Type(number, string, boolean ...)반응형 상태를 선언시 반응성이 유지되지 않습니다. 

반면 ref는 .value로 접근하기에 Primitive Type은 물론이고 Object Type도 선언할 수 있습니다.