<template lang="pug">
    .not-found
        h2(class="not-found-heading") Oops! Page Not Found.
        .not-found-intro
            p(class="not-found-main-text")
                | You landed here because the route in the URL does not match any existing page routes.
                | This could be due to an error with the site or because you may have miskeyed a route.
                | Please check the URL and try again.

        router-link(to="/") Go Home
</template>

<script>
export default {
  name: 'NotFound',
};
</script>
