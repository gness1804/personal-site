<template lang="pug">
  include mixins/article
  .medium-articles
    p(class="medium-articles-headline") Medium Articles
    .articles-container
      +article('https://drive.google.com/uc?id=1FGaTeid7Pzh1GHHl-jimaFDpBde9X0y5', 'https://medium.com/@gness1804/a-retrospective-on-turing-school-b6009908249', 'A Retrospective on Turing School')
      +article('https://drive.google.com/uc?id=1YdUU28r5OVVDGO-3SCzpnSHoORf0L2oi', 'https://medium.com/@gness1804/the-im-just-a-bill-app-political-awareness-in-your-pocket-e166b846f099', 'MyGov: Political Awareness in Your Pocket')
      +article('https://drive.google.com/uc?id=1A9sf99SLsnmvkv4AVGm1MMVUhi8Fpwl8', 'https://medium.com/@gness1804/debugging-electron-a-journey-e4e01ea481fb', 'Debugging Electron: A Journey')
</template>

<script>
export default {
  name: 'Medium',
};
</script>
