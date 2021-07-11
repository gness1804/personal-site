<template lang="pug">
  #header
    .top-part
      router-link(to="/")
        h1 {{name}}
      .social-icons-container
        img(src="https://drive.google.com/uc?id=1WOexIas8I2UlsN27lhQLJ1qCWpceQDh0" alt="Email me." v-on:click="openEmail" class="social-icon clickable-img" title="Email")
        img(src="https://drive.google.com/uc?id=1N4_NO7oif8EOxh5XOZ0_JUDkd7a-Q46A" alt="Github logo." v-on:click="openGithub" class="social-icon clickable-img" title="Github")
        img(src="https://drive.google.com/uc?id=11Y9mK8QcD7mYeHAOI7a3xBGKMR11D4-J" alt="Twitter logo." v-on:click="openTwitter" class="social-icon clickable-img" title="Twitter")
        img(src="https://drive.google.com/uc?id=1QjZ_0ZUIu_AP_qxWEYkL4p-UWoESGSGF" alt="LinkedIn logo." v-on:click="openLinkedIn" class="social-icon clickable-img" title="LinkedIn")
        img(src="https://drive.google.com/uc?id=1LReDJqCCptYC8UWJL0FTtD-w5rLR0uWC" alt="Medium logo." v-on:click="openMedium" class="social-icon clickable-img" title="Medium")
    nav
      HeaderLinks
</template>

<script>
import HeaderLinks from './HeaderLinks.vue';

export default {
  name: 'Header',
  components: {
    HeaderLinks,
  },
  data() {
    return {
      name: 'Graham Nessler',
    };
  },
  methods: {
    openEmail: function() {
      window.open('mailto:gness1804@gmail.com');
    },
    openGithub: function() {
      window.open('https://github.com/gness1804/');
    },
    openLinkedIn: function() {
      window.open('https://www.linkedin.com/in/gness1804');
    },
    openMedium: function() {
      window.open('https://medium.com/@gness1804/');
    },
    openTwitter: function() {
      window.open('https://twitter.com/gness1804/');
    },
  },
};
</script>
