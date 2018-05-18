<template lang="pug">
  .code
    h2(class="code-heading") Stuff I built
    img(src="../assets/github.png" alt="Github logo" class="big-github-img clickable-img" title="Github" v-on:click="openGithub")
</template>

<script>
export default {
  name: 'Code',
  methods: {
    openGithub: function (): void {
      window.open('https://github.com/gness1804/');
    },
  },
};
</script>

