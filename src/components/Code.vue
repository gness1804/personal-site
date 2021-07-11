<template lang="pug">
  .code
    h2(class="code-heading") Stuff I Built
    img(src="https://drive.google.com/uc?id=1N4_NO7oif8EOxh5XOZ0_JUDkd7a-Q46A"
    alt="Github logo" class="big-github-img clickable-img" title="Github" v-on:click="openGithub")
    .projects-container(v-if="projects.length > 0")
      ProjectTile(v-for="project of projects" v-bind:key="project.id" v-bind:project="project")
</template>

<script>
// @flow
import ProjectTile from './ProjectTile.vue';
import projects from '../helpers/projects';

export default {
  name: 'Code',
  components: {
    ProjectTile,
  },
  data() {
    return {
      projects,
    };
  },
  methods: {
    openGithub: function() {
      window.open('https://github.com/gness1804/');
    },
  },
};
</script>
