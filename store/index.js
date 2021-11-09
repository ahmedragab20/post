export const state = () => ({
  posts: [],
  post: []
})

export const getters = {
  getPostById: state => id => {
    return state.posts.find(i => i.id == id)
  },
}

export const mutations = {
  add(state, deploy) {
    state.posts = deploy
  },
}

export const actions = {
  addPost({state, commit}, payload) {
    return this.$axios.$post('/posts', payload)
    .then(() => {
      commit('add', [...state.posts, payload])
    })
  },
  editPost({state, commit}, payload) {
    return this.$axios.$put(`/posts/${payload.id}`, payload)
    .then((post) => {
      commit('add', state.posts.map(post => post.id == payload.id ? payload : post))
    })
  },
  deletePost({state, commit}, postId) {
    return this.$axios.$delete(`/posts/${postId}`)
    .then(() => {
      commit('add', state.posts.filter(i => i.id != postId))
    })
  },
  getPost({state}, postId) {
    const post = state.posts.find(i => i.id == postId)
    return post ? Promise.resolve(post) : this.$axios(`/posts/${postId}`)
  }
}
