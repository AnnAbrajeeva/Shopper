import axios from "axios"

export const state = () => ({
  products: [],
  categories: [],
  sameProducts: [],
  product: {},
  loading: false,
  category: [],
  value: [0, 2000],
  colors: [],
  size: ''
})

export const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  setProducts(state, products) {
    state.products = products
  },
  setLoadingTrue(state) {
    state.loading = true
  },
  setLoadingFalse(state) {
    state.loading = false
  },
  setSameProducts(state, sameProducts) {
    state.sameProducts = sameProducts
  },
  setProduct(state, product) {
    state.product = product
  },
  getProductsInCategory(state, categoryProducts) {
    state.category = categoryProducts
  },
  setPriceValue(state, value) {
    state.value = value
  },
  setColors(state, colors) {
    state.colors = colors
  },
  setSize(state, size) {
    state.size = size 
  },
  resetColorsFilter(state) {
    state.colors = []
  },
  resetSizeFilters(state) {
    state.size = ''
  },
  resetPriceFilters(state) {
    state.value = [0, 2000]
  }
}

export const actions = {
  async getProducts({commit}, context) {
    commit('setLoadingTrue')
     return await axios.get('/api/products/')
     .then(res => {
      let products = res.data[0].data.content
      commit('setProducts', products)
      commit('setLoadingFalse')
      return products
     })
    .catch (e => {
      commit('setLoadingFalse')
      return console.log(e)
    })
  },

  async getProduct({commit}, id) {
    commit('setLoadingTrue')
    return await axios.get('/api/products/')
    .then(res => {
    
      let products = res.data[0].data.content
      this.products = products
      const product = products.find(product => product.id == id)
      console.log(product)
      commit('setProduct', product)
      commit('setLoadingFalse')
      return product
    })
    .catch(e => {
      commit('setLoadingFalse')
      return console.log(e)
    })
  },

  async getSameProducts({commit, state}) {
    commit('setLoadingTrue')
    return await axios.get('/api/products/')
    .then(res => {
      let products = res.data[0].data.content
      this.products = products
      const sameProducts = products.filter(same => state.product.title === same.title)
      commit('setSameProducts', sameProducts)
      commit('setLoadingFalse')
      return sameProducts
    })
    .catch (e => {
      commit('setLoadingFalse')
      return console.log(e)
    })
  },

  async getProductsInCategory({commit, state}, id) {
    commit('setLoadingTrue')
    return await axios.get('/api/products/')
    .then(res => {
      let products = res.data[0].data.content
      this.products = products
      const categoryProducts = products.filter(product => product['category-id'] === id)
      commit('getProductsInCategory', categoryProducts)
      commit('setLoadingFalse')
      return categoryProducts
    })
    .catch (e => {
      commit('setLoadingFalse')
      return console.log(e)
    })
  },
  setPriceValue({commit}, value) {
    commit('setPriceValue', value)
  },
  setColors({commit}, colors) {
    commit('setColors', colors)
  },
  setSize({commit}, size) {
    commit('setSize', size)
  },
  resetColorsFilter({commit}) {
    commit('resetColorsFilter')
  },
  resetSizeFilters({commit}) {
    commit('resetSizeFilters')
  },
  resetPriceFilters({commit}) {
    commit('resetPriceFilters')
  },
  setLoadingTrue({commit}) {
    commit('setLoadingTrue')
  },
  setLoadingFalse({commit}) {
    commit('setLoadingFalse')
  }
}

export const getters = {
  loading(state) {
    return state.loading
  },
  getPriceValue(state) {
    return state.value
  },
  getColors(state) {
    return state.colors
  },
  getSize(state) {
    return state.size
  }
}
