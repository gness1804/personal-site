<template lang="pug">
  ul(class="header-links")
        li
          router-link(to="/") Home
        li
          router-link(to="/code") Code
        li
          router-link(to="/writing") Writing
        li
          router-link(to="/introversion") Introversion
</template>

<script>
export default {
  name: 'HeaderLinks',
};
</script>
