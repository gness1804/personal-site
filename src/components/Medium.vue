<template lang="pug">
  include mixins/article
  .medium-articles
    p(class="medium-articles-headline") Medium Articles
    .articles-container
      +article('http://localhost:8080/assets/turing.jpeg', 'https://medium.com/@gness1804/a-retrospective-on-turing-school-b6009908249', 'A Retrospective on Turing School')
      +article('http://localhost:8080/assets/we-the-people.png', 'https://medium.com/@gness1804/the-im-just-a-bill-app-political-awareness-in-your-pocket-e166b846f099', 'MyGov: Political Awareness in Your Pocket')
      +article('http://localhost:8080/assets/electron.png', 'https://medium.com/@gness1804/debugging-electron-a-journey-e4e01ea481fb', 'Debugging Electron: A Journey')
</template>

<script>
export default {
  name: 'Medium',
};
</script>


