import axios from "axios"
import Cookies from "js-cookie"
import * as firebase from "firebase/app";
import "firebase/auth";

export const state = () => ({
    user: null,
    token: null
  })
  
  export const mutations = {
    setToken(state, token) {
      state.token = token
    },
    destroyToken(state) {
      state.token = null
    }  
  }

  export const actions = {
    // async login({dispatch, commit}, {email, password}) {
    //   try {
    //     console.log('789')
    //     await firebase.auth().signInWithEmailAndPassword(email, password)
    //   } catch(e) {
    //     throw e
    //   }
    // },
    addNewUser({commit}, user) {
      const key = 'AIzaSyAoNYrTio0PFuV1N_Q9A2NoIJRIk57wQB8'
      return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`, {
        displayName: user.login,
        email: user.email,
        password: user.password,
        returnSecureToken: true
      })
      .then((res) => {
        let token = res.data.idToken
        console.log(res)
          commit('setToken', token)
          localStorage.setItem('token', token)
          Cookies.set('jwt', token)
      })
      .catch(e => {
        if (e.response) {
          console.log(e.response.data);
        } else if (e.request) {
          console.log(e.request);
        } else {
          console.log("Error", e.message);
        }
      })
    },

    async authUser({commit}, authData) {
        const key = 'AIzaSyAoNYrTio0PFuV1N_Q9A2NoIJRIk57wQB8'
        return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        })
        .then((res) => {
          let token = res.data.idToken
          commit('setToken', token)
          console.log(res)
          localStorage.setItem('token', token)
          Cookies.set('jwt', token)
        })
       .catch(e =>   {
        if (error.response) {
        console.log(error.response.data);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }}
      )
      },

      initAuth({commit}, req) {
        let token

        if(req) {
          if(!req.headers.cookie) return false
          const jwtCookie = req.headers.cookie
          .split(';')
          .find(t => t.trim().startsWith('jwt='))
          if(!jwtCookie) return false
          token = jwtCookie.split('=')[1]
        } else {
          token = localStorage.getItem('token')
          if(!token) return false
        }     
        commit('setToken', token)
      },
    
    logoutUser({commit}) {
      commit('destroyToken')
      localStorage.removeItem('token')
      Cookies.remove('jwt')
    }
  }

  export const getters = {
    user(state) {
        return state.user
    },
    checkAuthUser(state) {
      return state.token != null
    },
  }