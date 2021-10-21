export const state = () => ({
   recomendedProducts: []
  })
  
  export const mutations = {
    setRecomendedProducts(state, product) {
      let length = state.recomendedProducts.length
        state.recomendedProducts[length] = {...product}
    }
  }

  export const actions = {
    setRecomendedProducts({commit}, product) {
        commit('setRecomendedProducts', product)
    }
  }

  export const getters = {
    getRecomendedProducts(state) {
        return state.recomendedProducts
    }
  }