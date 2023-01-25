---
title: 'vuex axios todo list'
---

# {{ $frontmatter.title }}


일단 어제 했던 공부를 포스팅으로 남겨본다. 이전에도 이런 실수 있어서 포스팅 올렸는데

자료가 섞이고 섞이다보니 어디론가 사라져서 다시 올려본다. 반복 실수 하지 않기 위해서..


일단 스토어에서는 이렇게 짜야된다.

```js
const state = () => ({
    menu_data: [],
});
 
const mutations = {
    setMenu(state, payload) {
        state.menu_data = payload;
    },
    addMenu (state, customer) {
        state.menu_data.push(customer)
    }
};
 
const actions = {
    list({commit}) {
        return getApi(`/admin/design/menu/list`)
        .then((res) => {
            commit('setMenu', res.result);
            return res;
        }).catch((res) => {
            throw res;
        })
    },
    save({commit}, {id,form}) {
        if(typeof id == "undefined") {
            return getPost(`/admin/design/menu/write`, form)
                .then((res) => {
                    commit('addMenu', res.result);
                    return res;
                }).catch((res) => {
                    throw res;
                });
        }else {
            return getPost(`/admin/design/menu/update/${id}`, form)
        }
    },
}
 
 
const getters = {
    getMenu: state => state.menu_data
}
 
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
```


자! 이걸 설명하자면 여기서 중요한게 커밋하는부분이랄까?

리스트에서 setmenu는 바로 세터로 적용하면 목록에 보이는데

여기서 글쓰기는 커밋을 배열 푸시를 써서 올려주면 된다.

그러면 알림과 동시에 바로 쌓이는걸 볼수있다.

그리고 사용법은 아래 처럼 하면된다.

```js
computed: {
            ...mapGetters('menu',['getMenu']),
            draggableList: {
                get() {
                    return this.$store.state.menu.menu_data;
                },
                set(value) {
                    this.$store.commit("menu/setMenu", value);
                },
            },
        },

methods : {
           ...mapMutations('menu',['setMenu']),
```


드래그리스트는 드래그드롭 패키지 때문에 한거고

맵겟터랑 맵뮤테이션으로 추가 하면 된다.



그리고 삭제 기능을 추가한다면 이렇게 하면된다.

```js
const mutations = {
    setMenu(state, payload) {
        state.menu_data = payload;
    },
    addMenu (state, payload) {
        state.menu_data.push(payload)
    },
    removeMenu(state, payload){
        let todos = state.menu_data;
        todos.splice(todos.indexOf(payload), 1)
    }
};
```


뮤테이션은 이렇게 쓰면된다.

```js
const actions = {
delete({commit},id) {
        return getPost(`/admin/design/menu/delete/${id}`)
            .then((res) => {
                commit('removeMenu', res.result);
                return res;
            }).catch((res) => {
                throw res;
            });
    },
}
```

액션스에 삭제 고유번호만 넣으면된다. 그럼 커밋이 작동되어서 알아서 삭제처리됨.


이거 한 라인에서 수정 버튼 누르면 나머지 부분 숨기고 

해당 라인만 보임 처리 하는 방법을 올려본다.

이거는 그냥 상황에 맞게 구현하면된다.


```js
data() {
            return {
              selectedListItem: [],
           }
}
```

이렇게 오브젝트 변수를 추가한다. 


```js
editHandler(param) {
    this.selectedListItem = param.mn_id;

    this.isEditInputShow = !this.isEditInputShow;
    this.isEditShow = !this.isEditShow;
    this.isEditBtnShow = !this.isEditBtnShow;
    this.isDraggble = !this.isDraggble;

    this.edit.title = param.mn_title;
    this.edit.url = param.mn_url;
},
```

여기서 새로 추가된 부분이 this.$set 이건데 세터로 방금 생성한 오브젝트 변수에다가 고유번호를 추가한 부분이다.

이 부분이 제일 중요하다.



그대로 save펑션에도 스토어 디스패치 이후에 then((res) => ..... 성공일때 

```js
this.selectedListItem = id
```


위에 한줄만 코드 넣으면 된다.

그리고 숨김 보임 변수를 밑에 있으면된다. (아래 코드 넣어준다.)

```js
this.isEditInputShow = !this.isEditInputShow;
this.isEditShow = !this.isEditShow;
this.isEditBtnShow = !this.isEditBtnShow;
this.isDraggble = !this.isDraggble;
```



