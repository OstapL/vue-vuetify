<template lang="pug">
  .blog-page
    section.posts
      ThePosts
</template>

<script>

export default {
  name: 'PageMain',
};
</script>

<script>

  import ThePosts from '../../components/ThePosts/ThePosts'

  export default {
    name: 'App',
    components: {
      ThePosts
    }
  }
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables'
</style>
