const state = {
  all: [
    {
      id: '1',
      body: '评论1'
    },
    {
      id: '2',
      body: 'comment 2'
    }
  ]
}

const mutations = {
  addComment(state, comment) {
    console.log('in mutation', comment)
    state.all.push(comment)
  }
}

export default {
  state,
  mutations
}
