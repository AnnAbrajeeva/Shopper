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
    cart: [],
    cartModal: false,
  })
  
  export const mutations = {
    setLoadingTrue(state) {
      state.loading = true;
    },
    setLoadingFalse(state) {
      state.loading = false;
    },
    addProductsInCart(state, product) {
      console.log(typeof state.cart);
      state.cart.push(product);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    openModal(state) {
      state.cartModal = true;
    },
    closeModal(state) {
      state.cartModal = false;
    },
    deleteProductFromCart(state, id) {
      let index = state.cart.find(product => product.id === id);
      state.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(state.cart));
    }, 
    updateCart(state, cart) {
      state.cart = cart;
    },
    changeQuantityInCart(state, {value: value, id: id}) {
      let product = state.cart.find(product => product.id == id) ;
      product.quantity = value;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    addNewOrder(state, user) {
      console.log(state.order);
      state.order = {
        id: null,
        products: [],
        user: [],
        date: new Date()
      };
      state.cart = [];
      localStorage.removeItem('cart');
    },
    addOrder(state, user) {
      state.order.products = state.cart;
      state.order.user = user;
      state.order.id = state.orders.length+1;
      state.orders.push(state.order);

    },
  };

  export const actions = {
    async fetchProductsInCart({ commit, state }) {
      let cart = JSON.parse(localStorage.getItem('cart'));
      if (cart) {
        commit('updateCart', cart);
      } else {
          cart = [];
          commit('updateCart', cart);
      }},
  
    async addProductsInCart({commit}, product) {
        commit('addProductsInCart', product);
    },
    openModal({commit}) {
      commit('openModal');
    },
    closeModal({commit}) {
      commit('closeModal');
    },
    deleteProductFromCart({commit}, id) {
        commit('deleteProductFromCart', id);
      },
    changeQuantityInCart({commit}, {value: value, id: id}) {
      commit('changeQuantityInCart', {value: value, id: id});
    },
    addNewOrder({commit, state}, user) {
      commit('setLoadingTrue');
      commit('addOrder', user);
      axios.post('https://shopper-4eb43-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json', state.order)
      .then(res => {
        commit('addNewOrder');
        commit('setLoadingFalse');
      })
      .catch(e => {
        commit('setLoadingFalse');
        console.log(e);
      });
    }
  };

  export const getters = {
    getCart(state) {
      return state.cart;
    },
    getCartModal(state) {
      return state.cartModal;
    },
    getOrders(state) {
      return state.orders;
    },
    getLoading(state) {
      return state.loading;
  },
}