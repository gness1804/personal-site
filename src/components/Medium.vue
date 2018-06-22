<template lang="pug">
  include mixins/article
  .medium-articles
    p(class="medium-articles-headline") Medium Articles
    .articles-container
      +article('hello', 'world')
      +article('hello', 'world')
      +article('hello', 'world')
</template>

<script>
export default {
  name: 'Medium',
};
</script>


