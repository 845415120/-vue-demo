import { createStore } from "vuex"

const store = createStore({
  state () {
    return {
      userName: "",
      userPassword: "",
    }
  },
  getters: {
    isLogin: (state) => {
      return state.userName.length > 0
    }
  },
  //注销和登录
  mutations: {
    clearUserInfo (state) {
      state.userName = ""
      state.userPassword = ""
    },
    registUserInfo (state, { name, password }) {
      state.userName = name
      state.password = password
    }
  }
})
export default store