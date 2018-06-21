<template lang="pug">
  .writing
    h2(class="writing-heading") Stuff I Wrote
    .book-container
      a(href="https://www.amazon.com/Islandwide-Struggle-Freedom-Emancipation-Reenslavement-ebook/dp/B015ZTG2UM/ref=sr_1_1?ie=UTF8&qid=1446851797&sr=8-1&keywords=graham+nessler" target="_blank" title="Buy my book!")
        img(src="../assets/book-cover_.jpg" alt="The cover of my book." class="writing-book-cover-image")
      p(class="writing-book-title") An Islandwide Struggle for Freedom: Revolution, Emancipation, and Reenslavement in Hispaniola, 1789-1809
    .icons-container
      a(href="https://www.uncpress.org/book/9781469626864/an-islandwide-struggle-for-freedom/" target="_blank")
        img(src="../assets/unc-press.png" alt="UNC Press logo." class="icons-container-icon")
      a(href="https://www.amazon.com/Islandwide-Struggle-Freedom-Emancipation-Reenslavement-ebook/dp/B015ZTG2UM/ref=sr_1_1?ie=UTF8&qid=1446851797&sr=8-1&keywords=graham+nessler" target="_blank")
        img(src="../assets/amazon-logo.jpg" alt="Amazon logo." class="icons-container-icon")
</template>

<script>
// @flow

export default {
  name: 'Writing',
};
</script>

