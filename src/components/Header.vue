<template lang="pug">
  .header
    h1 {{name}}
    nav
      ul(class="header-links")
        li
          a(href="") Foo
        li
          a(href="") Bar
        li
          a(href="https://medium.com/@gness1804/" target="_blank") Medium
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      name: 'Graham Nessler',
    };
  },
}
</script>


<style scoped>
  .header {
    margin: 0 10vw;
  }
</style>


