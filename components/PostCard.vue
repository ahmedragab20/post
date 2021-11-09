<template>
  <div>
    <div v-if="post">
      <v-card class="mx-auto" elevation="5" min-height="280">
        <v-card-text>
          <div>Word of the Day</div>
          <p class="text-h6 text--primary text-capitalize">
            {{ post.title.substring(0, 25) }}
          </p>
          <p>adjective</p>
          <div class="text--primary">{{ post.body.substring(0, 150) }}...</div>
        </v-card-text>
        <div v-if="isAdmin">
          <v-card-actions>
            <v-btn
              text
              color="orange accent-1"
              :to="`/admin/post/${post.id}/edit`"
            >
              Edit
            </v-btn>
            <AppModelComponent
              button-text="Delete"
              :button-style="true"
              button-color="red accent-1"
            >
              <template slot-scope="{ close }">
                <v-card>
                  <v-card-title class="text-h6"> Delete Post! </v-card-title>
                  <v-card-text class="caption text-capitalize">
                    Hope You Are sure to delete this post.
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="blue accent-1"
                      text
                      @click="close"
                      :disabled="deletePostLoading"
                    >
                      Close
                    </v-btn>
                    <v-btn
                      color="red accent-1"
                      text
                      @click="deletePost(post.id, close)"
                      :loading="deletePostLoading"
                    >
                      Delete
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </AppModelComponent>
          </v-card-actions>
        </div>
        <div v-else>
          <v-card-actions>
            <v-btn text color="teal accent-4" :to="`/post/${post.id}`">
              Learn More
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </div>
    <div v-else>Seems we have a data error</div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      require: true,
    },
    isAdmin: {
      type: Boolean,
      require: false,
    },
  },
  data() {
    return {
      deletePostLoading: false,
    }
  },
  methods: {
    deletePost(postId, callback) {
      this.deletePostLoading = true
      this.$store
        .dispatch('deletePost', postId)
        .then(callback)
        .finally(() => {
          this.deletePostLoading = false
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
