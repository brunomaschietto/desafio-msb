import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const app = createApp(App)

const store = createStore({
  state() {
    return {
      searchTerm: ''
    }
  },
  mutations: {
    updateSearchTerm(state, searchTerm) {
      state.searchTerm = searchTerm
    }
  },
  getters: {
    searchTerm: (state) => state.searchTerm
  }
})

app.use(router)
app.use(store)
app.mount('#app')
