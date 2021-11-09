<template>
  <v-row justify="center">
    <v-col cols="8">
      <v-card class="mx-auto px-3 py-5" elevation="5">
        <v-card-text>
          <div>Word of the Day</div>
          <p class="text-h6 text--primary text-capitalize">
            {{ post.title }}
          </p>
          <p>adjective</p>
          <div class="text--primary">{{ post.body }}</div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" :to="`/post/${post.id}`">
            Learn More
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    post() {
      return this.$store.getters.getPostById(this.$route.params.id)
    },
  },
}
</script>

<style lang="scss" scoped></style>
