<template lang="pug">
  .header
    .top-part
      h1 {{name}}
      .social-icons
        img(src="../assets/at.png" alt="Email me.")
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
      name: 'GRAHAM NESSLER',
    };
  },
}
</script>


<style scoped>
  .header {
    border: 1px solid black;
    margin: 0 10vw;
  }

  .header h1 {
    font-family: 'Helvetica', sans-serif;
  }

  .top-part {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .social-icons {
  }
</style>


