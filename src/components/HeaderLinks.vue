<template lang="pug">
  ul(class="header-links")
        li
          a(href="") Foo
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
}
</script>

<style>
  .header-links {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    padding-left: 0;
    width: 70%;
  }

  .header-links li {
    display: inline;
  }

  .header-links li a {
    color: #8B8D90;
    text-transform: uppercase;
  }

  .header-links li a:hover {
    color: rgba(0,163,224,1);
  }

  #stickyHeader .header-links {
    padding: 0 5vw;
    width: 100%;
  }
</style>


