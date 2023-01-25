---
title: 'ci4 vuejs2 json 적용할때'
---

# {{ $frontmatter.title }}


## 경험담 :

json 을 적용할때는 

json.strongify 로 변환해서 백단(서버)으로 넘기고

받아올때는 json.parse로 하면되고

그리고 백단에서는 따로 json 변환해서 넣지 말기..

왜냐면 변환해서 넣으면 다시 받아올때 다시 형변환해야되는데

여기서 빡세다.. 그냥 배열로 넣어버리면 된다.

