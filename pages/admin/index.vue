<template>
  <div>
    <v-btn
      class="mb-10"
      text
      elevation="10"
      color="teal accent-3"
      to="/admin/post/add"
    >
      <v-icon small left>mdi-lead-pencil</v-icon> Add Post
    </v-btn>
    <v-row justify="center" align="center">
      <v-col
        cols="12"
        sm="8"
        md="6"
        lg="4"
        v-for="post in posts"
        :key="post.id"
      >
        <post-card :post="post" :isAdmin="true" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  head: {
    title: 'Admin',
  },
  computed: {
    ...mapState(['posts']),
  },
  fetch({ $axios, store }) {
    return $axios('/posts').then((res) => {
      store.commit('add', res.data)
    })
  },
}
</script>
