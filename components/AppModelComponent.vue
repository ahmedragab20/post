<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-if="buttonText"
        dark
        v-bind="{ ...attrs, ...computedProps }"
        v-on="on"
        >{{ buttonText }}</v-btn
      >
      <slot name="modalButton" :on="on" v-else></slot>
    </template>
    <slot :close="close"></slot>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
  props: {
    modelVisibility: {
      type: Boolean,
      require: false,
    },
    buttonText: {
      type: String,
      require: false,
    },
    buttonColor: {
      type: String,
      default: 'primary',
    },
    buttonStyle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedProps() {
      let returnValue = {
        color: this.buttonColor,
        text: this.buttonStyle,
      }

      return returnValue
    },
  },
  methods: {
    close() {
      this.dialog = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
