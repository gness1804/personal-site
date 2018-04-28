<template lang="pug">
  .header
    h1 Graham Nessler
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
}
</script>


<style scoped>
  h1 {
    color: blue;
  }
</style>


