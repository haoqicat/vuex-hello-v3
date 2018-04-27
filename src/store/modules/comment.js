import axios from 'axios'

const state = {
  all: []
}

const actions = {
  addComment({ commit }, { comment }) {
    console.log('in action', comment)
    commit('addComment', comment)
  },
  loadComments({ commit }) {
    const uri = 'http://localhost:3008/comments'
    axios.get(uri).then(
      res => {
        const comments = res.data
        console.log(comments)
        commit('loadComments', comments)
      }
    )
  }
}

const mutations = {
  addComment(state, comment) {
    console.log('in mutation', comment)
    state.all.push(comment)
  },
  loadComments(state, comments) {
    state.all = comments
  }
}

export default {
  state,
  mutations,
  actions
}
