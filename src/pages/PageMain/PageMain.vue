<template lang="pug">
  .blog-page
    section.posts
      ThePosts
    section.all-articles
      TheArticleFilter
      TheArticleItem
</template>

<script>
    import ThePosts from '../../components/ThePosts/ThePosts'
    import TheArticleFilter from '../../components/TheArticleFilter/TheArticleFilter'
    import TheArticleItem from '../../components/TheArticleItem/TheArticleItem'
    export default {
      name: 'PageMain',
      components: {
        ThePosts,
        TheArticleFilter,
        TheArticleItem
      }
    };
</script>

<style lang="stylus" scoped>
@import '../../styles/_variables'

</style>
