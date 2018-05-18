<template lang="pug">
  ul(class="header-links")
        li
          router-link(to="/code") Code
        li
          a(href="") Bar
        li
          a(href="") Baz
        li
          a(href="") Boo
</template>

<script>
export default {
  name: 'HeaderLinks',
};
</script>


