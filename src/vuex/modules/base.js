
import {
  login
} from '../api/base.js'

export default {
  state: {
    token: '',
    openId: '',
    expire: Date.now(),

    PAGE_TRANSITION_DURATION: 350
  },
  mutations: {
    SET_CATCH_DATA_FOR_APP: (state, { token, openId }) => {
      if (openId !== undefined) {
        state.openId = openId
      }
      if (token !== undefined) {
        state.token = token
      }
      state.expire = Number(Date.now()) + 7 * 24 * 60 * 60 * 1000
      window.localStorage.setItem("catchDataForApp", JSON.stringify({
        data: {
          token: state.token,
          openId: state.openId
        },
        expire: state.expire
      }))
    }
  },
  actions: {
    Init ({ commit }) {
      var storage = window.localStorage.getItem("catchDataForApp")
      if (storage) {
        var tokenStorage = JSON.parse(storage) || { data: {} }
        if (tokenStorage.data && tokenStorage.expire > Date.now()) {
          commit('SET_CATCH_DATA_FOR_APP', {
            token: tokenStorage.data.token,
            openId: tokenStorage.data.openId
          })
          // window.localStorage.setItem("catchDataForApp", JSON.stringify({
          //     data: {
          //         token: tokenStorage.data.token,
          //         openId: tokenStorage.data.openId
          //     },
          //     expire: Number(Date.now()) + 7 * 24 * 60 * 60 * 1000
          // }))
        } else {
          commit('SET_CATCH_DATA_FOR_APP', {
            token: null,
            openId: null
          });
        }
      }
    },
    VerifyToken ({ commit, state }) {
      if (state.token && state.expire > Date.now()) {
        return;
      }
      commit('SET_CATCH_DATA_FOR_APP', {
        token: null,
        openId: null
      })
    },
    Login ({ commit }, userInfo) {
      const username = userInfo.username
      const password = userInfo.password
      var storage = window.localStorage.getItem("catchDataForApp");
      var openId = ''
      if (storage) {
        var tokenStorage = JSON.parse(storage) || { data: {} }
        if (tokenStorage && tokenStorage.data) {
          openId = tokenStorage.data.openId
        }
      }
      var nowDate=new Date();
      return new Promise((resolve, reject) => {
        login(username, password)
          .then(data => {
            commit('SET_CATCH_DATA_FOR_APP', {
              token: data.token,
              openId: openId
            })
            resolve(data)
          })
          .catch(reject)
      })
    },
    Logout ({ commit }) {
      commit('SET_CATCH_DATA_FOR_APP', {
        token: null,
        openId: null
      });
      window.localStorage.removeItem("catchDataForApp")
      sessionStorage.setItem('attendToLogin', 'alreadyTry')
    }
  }
}
