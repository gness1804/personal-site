<template lang="pug">
  .code
    h2(class="code-heading") Stuff I built
    img(src="../assets/github.png"
    alt="Github logo" class="big-github-img clickable-img" title="Github" v-on:click="openGithub")
    .projects-container(v-if="projects.length > 0")
      ProjectTile(v-for="project of projects" v-bind:key="project.id" v-bind:project="project")
</template>

<script>
// @flow
import ProjectTile from './ProjectTile.vue';
import projects from '../helpers/projects';
import { CodeI } from '../types/interfaces/';

export default {
  name: 'Code',
  components: {
    ProjectTile,
  },
  data(): CodeI {
    return {
      projects,
    };
  },
  methods: {
    openGithub: function (): void {
      window.open('https://github.com/gness1804/');
    },
  },
};
</script>

