import axios from "axios"

export const state = () => ({
    loading: false,
    orders: [],
    order: {
      id: null,
      products: [],
      user: {},
      date: new Date()
    },
    cart: [
      {
        "url": "https://fashionup.ua/fashion-up/4500-tolstovka-quottessiequot-kf-1678a.html",
        "id": "4500",
        "quantity": "1",
        "title": "Толстовка \"Tessie\"",
        "articul": "KF-1678A",
        "descr": {
            "br": [
                "",
                "",
                "",
                ""
            ],
            "__text": "Шикарная теплая толстовка на флисе с капюшоном и карманом кенгуру.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 60 см\n\nДлина рукава - 63 см\n\nЗамеры по 42 размеру"
        },
        "cost": "814",
        "cost-opt": "407",
        "poster": [
            "https://fashionup.ua/uploads/tov/dc00f0fe458cc98.jpg",
            "https://fashionup.ua/uploads/tov/818841d806668f1.jpg"
        ],
        "sizes": "42",
        "category-id": "14",
        "category-name": "FashionUp",
        "color": "красный",
        "cloth": "трехнитка: 70%хлопок, 30%полиэстер, флис"
    },
    {
        "url": "https://fashionup.ua/fashion-up/4499-golf-quotagataquot-kf-1813l.html",
        "id": "4499",
        "quantity": "1",
        "title": "Гольф \"Agata\"",
        "articul": "KF-1813L",
        "descr": {
            "br": [
                "",
                "",
                "",
                ""
            ],
            "__text": "Теплый гольф из ангоры должен быть в гардеробе каждого.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 63 см\n\nДлина рукава - 59 см\n\nЗамеры по 42 размеру"
        },
        "cost": "468",
        "cost-opt": "234",
        "poster": [
            "https://fashionup.ua/uploads/tov/767e64bdc763660.jpg",
            "https://fashionup.ua/uploads/tov/a15883ee4d7e479.jpg"
        ],
        "sizes": "44",
        "category-id": "14",
        "category-name": "FashionUp",
        "color": "белый",
        "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
    },
    {
        "url": "https://fashionup.ua/fashion-up/4498-golf-quotagataquot-kf-1813k.html",
        "id": "4498",
        "quantity": "5",
        "title": "Гольф \"Agata\"",
        "articul": "KF-1813K",
        "descr": {
            "br": [
                "",
                "",
                "",
                ""
            ],
            "__text": "Теплый гольф из ангоры должен быть в гардеробе каждого.\n\nРост модели на фото - 170 см\n\nДлина по спинке - 63 см\n\nДлина рукава - 59 см\n\nЗамеры по 42 размеру"
        },
        "cost": "468",
        "cost-opt": "234",
        "poster": [
            "https://fashionup.ua/uploads/tov/875a25aaf1d8194.jpg",
            "https://fashionup.ua/uploads/tov/9156fe72a0bd8f2.jpg"
        ],
        "sizes": "42,44,46,48,50",
        "category-id": "14",
        "category-name": "FashionUp",
        "color": "светло-серый",
        "cloth": "трикотаж ангора: 55%полиэстер, 36%акрил, 9% нейлон"
    },
    ],
    cartModal: false,
    loading: false,
  })
  
  export const mutations = {
    setLoadingTrue(state) {
      state.loading = true
    },
    setLoadingFalse(state) {
      state.loading = false
    },
    addProductsInCart(state, product) {
      state.cart.push({...product})
      // const arr = JSON.parse(localStorage.getItem("cart")) || [];
      // arr.push(product)
      // localStorage.setItem('cart', JSON.stringify(arr))
    },
    openModal(state) {
      state.cartModal = true
    },
    closeModal(state) {
      state.cartModal = false
    },
    deleteProductFromCart(state, id) {
      let index = state.cart.find(product => product.id === id)
      state.cart.splice(index, 1)
    }, 
    getProductsInCart(state, cart) {
      state.cart = cart
    },
    changeQuantityInCart(state, {value: value, id: id}) {
      let product = state.cart.find(product => product.id == id)
     
      product.quantity = value
    },
    addNewOrder(state, user) {
    
      console.log(state.order)
      state.order = {
        id: null,
        products: [],
        user: [],
        date: null
      }
      state.cart = []
      localStorage.clear()
    },
    addOrder(state, user) {
      state.order.products = [...state.cart]
      state.order.user = user
      state.order.id = state.orders.length+1
      state.orders.push(state.order)
    },
    setLoadingTrue(state) {
      state.loading = true
    },
    setLoadingFalse(state) {
      state.loading = false
    }
  }

  export const actions = {
    // async getProductsInCart({commit}, context) {
    //   commit('setLoadingTrue')
    //    return await axios.get('/api/cart/')
    //    .then(res => {
    //     let cart = res.data.cart
    //     commit('getProductsInCart', cart)
    //     commit('setLoadingFalse')
    //     return cart
    //    })
    //   .catch (e => {
    //     commit('setLoadingFalse')
    //     return console.log(e)
    //   })
    // },
    async addProductsInCart({commit}, product) {
        commit('addProductsInCart', product)
    },
    openModal({commit}) {
      commit('openModal')
    },
    closeModal({commit}) {
      commit('closeModal')
    },
    deleteProductFromCart({commit}, id) {
        commit('deleteProductFromCart', id)
      },
    changeQuantityInCart({commit}, {value: value, id: id}) {
      console.log(id)
      commit('changeQuantityInCart', {value: value, id: id})
    },
    addNewOrder({commit, state}, user) {
      commit('setLoadingTrue')
      commit('addOrder', user)
      axios.post('https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', state.order)
      .then(res => {
        commit('addNewOrder', user)
        commit('setLoadingFalse')
      })
      .catch(e => {
        commit('setLoadingFalse')
        console.log(e)
      })
    }
  }

  export const getters = {
    getCart(state) {
      return state.cart
    },
    getCartModal(state) {
      return state.cartModal
    },
    getOrders(state) {
      return state.orders
    },
    getLoading(state) {
      return state.loading
    }
  }