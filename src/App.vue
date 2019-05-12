<template lang="pug">
  #app
    v-app
      v-content
        router-view
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    TheHeader: () => import(/* webpackChunkName: 'TheHeader' */ 'Components/TheHeader/TheHeader'),
    TheFooter: () => import(/* webpackChunkName: 'TheFooter' */ 'Components/TheFooter/TheFooter'),
    ThePosts: () => import(/* webpackChunkName: 'ThePosts' */ 'Components/ThePosts/ThePosts'),
    TheArticleFilter: () => import(/*webpackChunkName: 'TheArticleFilter'*/ 'Components/TheArticleFilter/TheArticleFilter'),
  },
  computed: {
    ...mapGetters('router', [
      'routeLoading',
    ]),
  },
  mounted() {
    this.setRouter(this.$router);
  },
  methods: {
    ...mapActions('router', [
      'setRouter',
    ]),
  },
};
</script>

<style lang="styl">
@import 'styles/app';
</style>
