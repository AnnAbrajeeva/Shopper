import axios from "axios"
import Cookies from "js-cookie"
import * as firebase from "firebase/app";
import "firebase/auth";

export const state = () => ({
  user: null,
  token: null,
});

export const mutations = {
  setToken(state, token) {
    state.token = token;
  },
  getUser(state, user) {
    state.user = user;
  },
  destroyToken(state) {
    state.token = null;
  },
 
  setUser(state, user) {
    state.user = user;
  }
};

export const actions = {
  async addNewUser({
    commit
  }, user) {
    const firebaseKey = 'AIzaSyAoNYrTio0PFuV1N_Q9A2NoIJRIk57wQB8';
    return await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseKey}`, {
        displayName: user.login,
        email: user.email,
        password: user.password,
        returnSecureToken: true
      })
      .then((res) => {
        let token = res.data.idToken;
        commit('setUser');
        commit('setToken', token);
        localStorage.setItem('token', JSON.stringify(token));
        Cookies.set('jwt', token);
      })
      .catch(e => {
        throw e;
      });
  },

  async authUser({
    commit
  }, authData) {
    const adminKey = 'NW7A5HDQZ4WsRwQn5SEK5eeXaiD3';
    const firebaseKey = 'AIzaSyAoNYrTio0PFuV1N_Q9A2NoIJRIk57wQB8';
    return await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseKey}`, {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
      .then((res) => {
        this.$router.push('/')
        if(res.data.localId == adminKey) {
          Cookies.set('user', 'admin');
          localStorage.setItem('user', 'admin')
        } else {
          Cookies.set('user', 'user');
          localStorage.setItem('user', 'user')
        }

        let token = res.data.idToken;
        commit('setToken', token);
        localStorage.setItem('token', JSON.stringify(token));
        Cookies.set('jwt', token);
        this.$router.push('/')
      })
      .catch(error => {
      throw error.response;
      });
  },

  initAuth({
    commit
  }, req) {
    let token;

    let user;

    if (req) {
      
      if (!req.headers.cookie) return false;
      const jwtCookie = req.headers.cookie
        .split(';')
        .find(t => t.trim().startsWith('jwt='));
      if (!jwtCookie) return false;
      token = jwtCookie.split('=')[1];
      commit('setToken', token);
      if(token) {
        this.$router.push('/')
      }
      const userCookie = req.headers.cookie
        .split(';')
        .find(t => t.trim().startsWith('user'));
      if (!userCookie) return false;
      user = userCookie.split('=')[1];
      commit('setUser', user);
      // this.$router.push('/')
    } else {
      token = localStorage.getItem('token');
      commit('setToken', token);
      if (!token) return false;
    }
  },

  logoutUser({
    commit
  }) {
    commit('destroyToken');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    Cookies.remove('jwt');
    Cookies.remove('user');
  }
}

export const getters = {
  user(state) {
    return state.user;
  },
  checkAuthUser(state) {
    return state.token != null;
  },
  checkAdmin(state) {
    return state.user;
  },
}
