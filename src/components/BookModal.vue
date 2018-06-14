<template lang="pug">
  .book-modal(class="centered-modal")
    p(class="close-button" title="Close" v-on:click="closeModal") X
    p(class="book-modal-header") From the publisher:
    p(class="book-modal-description") "Reinterpreting the Haitian Revolution as both an islandwide and a circum-Caribbean phenomenon, Graham Nessler examines the intertwined histories of Saint-Domingue, the French colony that became Haiti, and Santo Domingo, the Spanish colony that became the Dominican Republic. Tracing conflicts over the terms and boundaries of territory, liberty, and citizenship that transpired in the two colonies that shared one island, Nessler argues that the territories' borders and governance were often unclear and mutually influential during a tumultuous period that witnessed emancipation in Saint-Domingue and reenslavement in Santo Domingo."
    a(href="https://www.amazon.com/Islandwide-Struggle-Freedom-Emancipation-Reenslavement-ebook/dp/B015ZTG2UM/ref=sr_1_1?ie=UTF8&qid=1446851797&sr=8-1&keywords=graham+nessler" target="_blank")
      img(src="../assets/amazon-logo.jpg" alt="Amazon logo" class="book-modal-amazon-icon")
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
