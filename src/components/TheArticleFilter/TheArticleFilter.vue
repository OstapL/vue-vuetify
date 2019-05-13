<template lang="pug">
    v-container(grid-list-lg)
        v-layout(row)
            v-flex(xs12 md10 offset-md1 lg8 offset-lg2)
                v-card
                    .filter-articles
                        h5.filter-title
                            | article filter:
                        ul.filter-list.clearfix
                            li
                                a(href="javascript:void(0);") Golang
                            li
                                a(href="javascript:void(0);") Javascript
                            li
                                a(href="javascript:void(0);") Tests
                            li
                                a(href="javascript:void(0);") Ethreum
                            li
                                a(href="javascript:void(0);") Vuejs
                            li
                                a(href="javascript:void(0);") Python
                            li
                                a(href="javascript:void(0);") Performance
                            li
                                a(href="javascript:void(0);") Selenium
                            li
                                a(href="javascript:void(0);") Traveling
</template>

<script>
  export default {
    name: 'TheArticleFilter',
  };
</script>
<style lang="stylus" scoped >
    @import '../../styles/_variables'
</style>
