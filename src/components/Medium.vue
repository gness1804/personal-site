<template lang="pug">
  include mixins/article
  .medium-articles
    p(class="medium-articles-headline") Medium Articles
    .articles-container
      +article('http://localhost:8080/assets/turing.jpeg', 'https://medium.com/@gness1804/a-retrospective-on-turing-school-b6009908249', 'A Retrospective on Turing School')
      +article('hello', 'world')
      +article('hello', 'world')
</template>

<script>
export default {
  name: 'Medium',
};
</script>


