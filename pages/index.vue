<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6" lg="4" v-for="post in posts" :key="post.id">
      <post-card :post="post" />
    </v-col>
  </v-row>
</template>
<script>
import { mapState } from 'vuex'
export default {
  head: {
    title: 'Home',
  },
  computed: {
    ...mapState(['posts']),
  },
  fetch({ $axios, store }) {
    return $axios('/posts').then((res) => {
      store.commit('add', res.data)
    })
  },
  async asyncData({ $axios }) {
    const items = await $axios(
      'https://api.themoviedb.org/3/trending/all/day?api_key=9ab45b4f4d577cd87a3f36c8f6ed2963'
    ).then((res) => res.data.results)

    return { items }
  },
  mounted() {
    console.log(this.items)
  },
}
</script>
