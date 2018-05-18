<template lang="pug">
  ul(class="header-links")
        li
          router-link(to="/code") Code
        li
          router-link(to="/writing") Writing
        li
          router-link(to="/people") People
        li
          router-link(to="/") Home
</template>

<script>
export default {
  name: 'HeaderLinks',
};
</script>


