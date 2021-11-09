<template>
  <v-form @submit.prevent="submit" v-model="valid">
    <v-col cols="12">
      <v-text-field
        v-model="form.title"
        :rules="titleRules"
        counter="80"
        hint="This field uses counter prop"
        label="Post Title"
        color="teal accent-4"
        required
      ></v-text-field>
    </v-col>
    <v-col cols="12">
      <v-textarea
        v-model="form.body"
        color="teal"
        :rules="bodyRules"
        hint="This field uses counter prop"
        counter="400"
        required
      >
        <template v-slot:label>
          <div>Post Body</div>
        </template>
      </v-textarea>
    </v-col>
    <v-btn
      class="mt-5"
      text
      elevation="10"
      color="teal accent-3"
      type="submit"
      :disabled="!valid"
      :loading="addingPost"
    >
      <v-icon small left>mdi-lead-pencil</v-icon> {{ formButton }}
    </v-btn>
  </v-form>
</template>

<script>
export default {
  mounted() {
    this.postId && this.getPost()
  },
  computed: {
    postId() {
      return +this.$route.params.id
    },
    formButton() {
      return this.postId ? 'Save' : 'Add Post'
    },
  },
  data() {
    return {
      addingPost: false,
      valid: false,
      form: {
        title: '',
        body: '',
      },
      titleRules: [
        (v) =>
          (v.length >= 25 && v.length <= 80) ||
          'At least 25 characters and Max 80 characters',
      ],
      bodyRules: [
        (v) =>
          (v.length >= 100 && v.length <= 400) ||
          'At least 100 characters and Max 400 characters',
      ],
    }
  },
  methods: {
    submit() {
      this.addingPost = true
      const action = this.postId
        ? { name: 'editPost', payload: { ...this.form, id: this.postId } }
        : { name: 'addPost', payload: this.form }
      this.$store
        .dispatch(action.name, action.payload)
        .then(() => {
          this.$router.push('/admin')
        })
        .finally(() => {
          this.addingPost = false
        })
    },
    getPost() {
      this.$store.dispatch('getPost', this.postId).then((post) => {
        this.form.title = post.title
        this.form.body = post.body
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
