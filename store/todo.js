import Cookies from "js-cookie"


export const state = () => ({
    todos: [],
    dialog: false
  })
  
  export const mutations = {
      openModal(state) {
          state.dialog = true
      },
      closeModal(state) {
          state.dialog = false
      },
      addTask(state, task) {
        state.todos.push(task)
      },
      changeStatus(state, id) {
          let index = state.todos.findIndex(todo => todo.id == id)
          state.todos[index].status = true
      },
      deleteTodo(state, id) {
        state.todos = state.todos.filter(todo => todo.id !== id)
      },
      editTodo(state, editValue) {
        let index = state.todos.findIndex(todo => todo.id == editValue.id)
        state.todos[index].name = editValue.value
      }
  }

  export const actions = {
    openModal({commit}) {
        commit('openModal')
    },
    closeModal({commit}) {
        commit('closeModal')
    },
    addTask({commit}, task) {
        commit('addTask', task)
    },
    changeStatus({commit}, id) {
        commit("changeStatus", id)
    },
    deleteTodo({commit}, id) {
        commit("deleteTodo", id)
    },
    editTodo({commit}, editValue) {
        commit("editTodo", editValue)
    }
  }

  export const getters = {
    getTaskModal(state) {
        return state.dialog
    },
    getTodos(state) {
        return state.todos
    }
  }