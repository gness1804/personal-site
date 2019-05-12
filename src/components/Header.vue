<template lang="pug">
  #header
    .top-part
      router-link(to="/")
        h1 {{name}}
      .social-icons-container
        img(src="../assets/at.png" alt="Email me." v-on:click="openEmail" class="social-icon clickable-img" title="Email")
        img(src="../assets/github.png" alt="Github logo." v-on:click="openGithub" class="social-icon clickable-img" title="Github")
        img(src="../assets/twitter.png" alt="Twitter logo." v-on:click="openTwitter" class="social-icon clickable-img" title="Twitter")
        img(src="../assets/linkedin.png" alt="LinkedIn logo." v-on:click="openLinkedIn" class="social-icon clickable-img" title="LinkedIn")
        img(src="../assets/medium.png" alt="Medium logo." v-on:click="openMedium" class="social-icon clickable-img" title="Medium")
    nav
      HeaderLinks
</template>

<script>
import HeaderLinks from './HeaderLinks.vue';
import { HeaderI } from '../types/interfaces';

export default {
  name: 'Header',
  components: {
    HeaderLinks,
  },
  data(): HeaderI {
    return {
      name: 'Graham Nessler',
    };
  },
  methods: {
    openEmail: function(): void {
      window.open('mailto:gness1804@gmail.com');
    },
    openGithub: function(): void {
      window.open('https://github.com/gness1804/');
    },
    openLinkedIn: function(): void {
      window.open('https://www.linkedin.com/in/gness1804');
    },
    openMedium: function(): void {
      window.open('https://medium.com/@gness1804/');
    },
    openTwitter: function(): void {
      window.open('https://twitter.com/gness1804/');
    },
  },
};
</script>
