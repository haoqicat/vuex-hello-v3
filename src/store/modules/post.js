import axios from 'axios'

const state = {
  all: []
}

const actions = {
  loadPosts({ commit }) {
    axios.get('http://localhost:3008/posts').then(
      res => {
        console.log('res....', res.data)
        const posts = res.data
        commit('loadPosts', posts)
      }
    )
  }
}

const mutations = {
  loadPosts(state, posts) {
    console.log('mutations', posts)
    state.all = posts
  }
}

export default {
  state,
  actions,
  mutations
}
