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
        // const parsed = JSON.stringify(this.todos);
        // window.localStorage.setItem('todos', parsed);
      },
      editTodo(state, editValue) {
        let index = state.todos.findIndex(todo => todo.id == editValue.id)
        state.todos[index].name = editValue.value
        state.todos[index].edit = false
      },
      changeEdit(state, task) {
        // console.log(task)
        let index = state.todos.findIndex(todo => todo.id == task.id)
         console.log(index)
        state.todos[index].edit = !state.todos[index].edit
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
    },
    getTodosFromLocalStorage({commit}) {
        commit("getTodosFromLocalStorage")
    },
    changeEdit({commit}, task) {
        // console.log(task)
        commit("changeEdit", task)
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