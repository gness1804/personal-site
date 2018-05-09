<template lang="pug">
  .header
    .top-part
      h1 {{name}}
      .social-icons-container
        img(src="../assets/at.png" alt="Email me." v-on:click="openEmail" class="social-icon clickable-img")
        img(src="../assets/github.png" alt="Github logo." v-on:click="openGithub" class="social-icon clickable-img")
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
  methods: {
    openEmail: function () {
      window.open('mailto:gness1804@gmail.com');
    },
    openGithub: function () {
      window.open('https://github.com/gness1804/');
    }
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

  .social-icons-container {

  }

  .social-icon {
    height: 20px;
    width: 20px;
  }
</style>


