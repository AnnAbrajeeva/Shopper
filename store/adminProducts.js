import axios from "axios"

export const state = () => ({
   recomendedProducts: [],
   newProduct: {
     title: '',
     articul: '',
     available: '',
     gender: '',
     'category-name': '',
     'category-id': '',
     cost: '',
     oldCost: '',
     status: '',
     poster: [],
     descr: '',
     sizes: [],
     color: "",
     cloth: "",
     id: '',
     recomendedProducts: []
   },
   loading: false
  })
  
  export const mutations = {
    resetStore(state) {
      state.newProduct.title = ''
      state.newProduct.articul = '',
      state.newProduct.available = '',
      state.newProduct.gender = '',
      state.newProduct['category-name'] = '',
      state.newProduct['category-id'] = '',
      state.newProduct.cost = '',
      state.newProduct.oldCost = '',
      state.newProduct['category-id'] = '',
      state.newProduct['cost-opt'] = '',
      state.newProduct.status = '',
      state.newProduct.id = '',
      state.newProduct.url = '',
      state.newProduct.poster = [],
      state.newProduct.descr = ''
      state.newProduct.color = ''
      state.newProduct.cloth = ''
      state.newProduct.sizes = []
      state.newProduct.recomendedProducts = []
      state.recomendedProducts = []
    },
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
    setCategory(state, categoryId) {
      state.newProduct['category-id'] = categoryId
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
    setProduct(state, product) {
      state.newProduct = product
      if(product.recomendedProducts) {
        state.recomendedProducts = product.recomendedProducts
      }     
    },
    putRecommendedInProduct(state) {
      state.newProduct.recomendedProducts = state.recomendedProducts
    },
    setLoadingTrue(state) {
      state.loading = true
    },
    setLoadingFalse(state) {
      state.loading = false
    },
    delRecomendedProducts(state, product) {
      let index = state.recomendedProducts.findIndex(prod => prod.id == product.id)
      state.recomendedProducts.splice(index, 1)
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
    setCategoryId({commit}, categoryId) {
      commit('setCategoryId', categoryId)
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
      // state.newProduct.recomended = state.recomendedProducts
      commit('setLoadingTrue')
      commit('putRecommendedInProduct')
      // newProduct.push(state.recomendedProducts)
      await axios.post('https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/products.json', state.newProduct)
      .then(res => {
        // commit('addProduct')
        commit('setLoadingFalse')
        commit('resetStore')
      })    
    },
    editProduct({commit, state}, id) {
      // state.newProduct.recomended = state.recomendedProducts
      commit('setLoadingTrue')
      commit('putRecommendedInProduct')
      axios.patch(`https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/products/${id}.json`, state.newProduct)
      .then(res => {
        commit('setLoadingFalse')
        // commit('editProduct')
        commit('resetStore')
      })
    },
    delRecomendedProducts({commit}, product) {
      commit('delRecomendedProducts', product)
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
    },
    getRecommended(state) {
      return state.newProduct.recomendedProducts
    }
  }