<template lang="pug">
  .book-modal(class="centered-modal")
    p(class="close-button" title="Close" v-on:click="closeModal") X
    p I am the book modal component.
</template>

<script>

export default {
  name: 'BookModal',
  methods: {
    closeModal: function (): void {
      this.$emit('closeModal');
    },
  },
};
</script>
