<template lang="pug">
  #app
    v-app
      TheHeader
      v-content
        router-view
      TheFooter
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    TheHeader: () => import(/* webpackChunkName: 'TheHeader' */ 'Components/TheHeader/TheHeader'),
    TheFooter: () => import(/* webpackChunkName: 'TheFooter' */ 'Components/TheFooter/TheFooter'),
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
