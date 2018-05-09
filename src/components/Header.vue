<template lang="pug">
  .header
    .top-part
      a(href="/")
        h1 {{name}}
      .social-icons-container
        img(src="../assets/at.png" alt="Email me." v-on:click="openEmail" class="social-icon clickable-img")
        img(src="../assets/github.png" alt="Github logo." v-on:click="openGithub" class="social-icon clickable-img")
        img(src="../assets/twitter.png" alt="Twitter logo." v-on:click="openTwitter" class="social-icon clickable-img")
        img(src="../assets/linkedin.png" alt="LinkedIn logo." v-on:click="openLinkedIn" class="social-icon clickable-img")
        img(src="../assets/medium.png" alt="Medium logo." v-on:click="openMedium" class="social-icon clickable-img")
    nav
      ul(class="header-links")
        li
          a(href="") Foo
        li
          a(href="") Bar
        li
          a(href="") Baz
        li
          a(href="") Boo
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      name: 'Graham Nessler',
    };
  },
  methods: {
    openEmail: function () {
      window.open('mailto:gness1804@gmail.com');
    },
    openGithub: function () {
      window.open('https://github.com/gness1804/');
    },
    openLinkedIn: function () {
      window.open('https://www.linkedin.com/in/gness1804');
    },
    openMedium: function () {
      window.open('https://medium.com/@gness1804/');
    },
    openTwitter: function () {
       window.open('https://twitter.com/gness1804/');
    }
  },
}
</script>


<style scoped>
  .header {
    margin: 0 20vw;
  }

  .header h1 {
    color: #8B8D90;
    text-transform: uppercase;
  }

  .header h1:hover {
    color: rgba(0,163,224,1);
  }

  .header-links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    padding-left: 0;
    width: 70%;
  }

  .header-links li {
    display: inline;
  }

  .header-links li a {
    color: #8B8D90;
    text-transform: uppercase;
  }

  .header-links li a:hover {
    color: rgba(0,163,224,1);
  }

  .top-part {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .social-icons-container {
    display: flex;
    margin: 10px 10px 0 0;
  }

  .social-icon {
    height: 20px;
    margin-right: 5px;
    width: 20px;
  }
</style>


