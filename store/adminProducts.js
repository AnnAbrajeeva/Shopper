import axios from "axios"

export const state = () => ({
   recomendedProducts: [],
   newProduct: {
     title: '',
     articul: '',
     available: '',
     gender: '',
     'category-name': '',
     cost: '',
     oldCost: '',
     status: '',
     poster: [],
     descr: '',
     sizes: [],
     color: "",
     cloth: "",
     id: ''
   },
   loading: false
  })
  
  export const mutations = {
    setRecomendedProducts(state, product) {
      state.recomendedProducts.push(product)
    },
    setTitle(state, title) {
      state.newProduct.title = title
    },
    setArticul(state, articul) {
      state.newProduct.articul = articul
    },
    setAvailable(state, available) {
      state.newProduct.available = available
    },
    setGender(state, gender) {
      state.newProduct.gender = gender
    },
    setCategory(state, category) {
      state.newProduct['category-name'] = category
    },
    setCost(state, cost) {
      state.newProduct.cost = cost
    },
    setOldCost(state, oldCost) {
      state.newProduct.oldCost = oldCost
    },
    setStatus(state, status) {
      state.newProduct.status = status
    },
    setImage(state, image) {
      state.newProduct.poster.push(image)
    },
    setDescr(state, descr) {
      state.newProduct.descr = descr
    },
    setSizes(state, sizes) {
      state.newProduct.sizes = sizes
    },
    setColor(state, color) {
      state.newProduct.color = color
    },
    setMaterial(state, material) {
      state.newProduct.cloth = material
    },
    addProduct(state) {
        state.newProduct.title = ''
        state.newProduct.articul = '',
        state.newProduct.available = '',
        state.newProduct.gender = '',
        state.newProduct['category-name'] = '',
        state.newProduct.cost = '',
        state.newProduct.oldCost = '',
        state.newProduct.status = '',
        state.newProduct.poster = [],
        state.newProduct.descr = ''
        state.newProduct.color = ''
        state.newProduct.cloth = ''
        state.newProduct.sizes = []
    },
    editProduct(state) {
      console.log(state.newProduct)
    },
    setProduct(state, product) {
      state.newProduct = product
    }
  }

  export const actions = {
    setRecomendedProducts({commit}, product) {
        commit('setRecomendedProducts', product)
    },
    setTitle({commit}, title) {
      commit('setTitle', title)
    },
    setArticul({commit}, articul) {
      commit('setArticul', articul)
    },
    setAvailable({commit}, available) {
      commit('setAvailable', available)
    },
    setGender({commit}, gender) {
      commit('setGender', gender)
    },
    setCategory({commit}, category) {
      commit('setCategory', category)
    },
    setCost({commit}, cost) {
      commit('setCost', cost)
    },
    setOldCost({commit}, oldCost) {
      commit('setOldCost', oldCost)
    },
    setStatus({commit}, status) {
      commit('setStatus', status)
    },
    setImage({commit}, image) {
      commit('setImage', image)
    },
    setDescr({commit}, descr) {
      commit('setDescr', descr)
    },
    setColor({commit}, color) {
      commit('setColor', color)
    },
    setSizes({commit}, sizes) {
      commit('setSizes', sizes)
    },
    setMaterial({commit}, material) {
      commit('setMaterial', material)
    },
    setProduct({commit}, product) {
      commit('setProduct', product)
    },
    async addProduct({commit, state}) {
      state.loading = true
      await axios.post('https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/products.json', state.newProduct)
      .then(res => {
        commit('addProduct')
        state.loading = false
      })    
    },
    async editProduct({commit, state}, id) {
      state.loading = true
      await axios.patch(`https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/products/${id}.json`, state.newProduct)
      .then(res => {
        state.loading = false
        commit('editProduct')
      })
    }
  }

  export const getters = {
    getRecomendedProducts(state) {
        return state.recomendedProducts
    },
    getNewProduct(state) {
      return state.newProduct
    },
    getLoading(state) {
      return state.loading
    }
  }