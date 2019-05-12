<template lang="pug">
        v-container(grid-list-lg).pa-0
          v-layout(row)
            v-flex(lg8 offset-lg2 xs12)
              v-card
                .posts-main
                  a.post_item.post-large(href="javascript:void(0);")
                      .post_item__inner
                        .post_bg(style='background-image: url(/src/img/post_img_1.jpg);')
                        .post_details
                          .post_details__title
                            h2 Unit tests in a Golang way
                          .post_details__info
                            .excerpt
                              | For a first time, Golang might shock you, but you just need to understand ideas behind go...
                            .date
                              | feb 13, 2018
                  a.post_item.post-small(href="javascript:void(0);")
                      .post_item__inner
                        .post_bg(style='background-image: url(/src/img/post_img_2.jpg);')
                        .post_details
                          .post_details__title
                            h3 Login via browser's cookies (Selenium WebDriver) or Local Storage (JavaScript)
                          .post_details__info
                            .date
                              | may 25, 2018
                  a.post_item.post-small(href="javascript:void(0);")
                      .post_item__inner
                        .post_bg(style='background-image: url(/src/img/post_img_3.jpg);')
                        .post_details
                          .post_details__title
                            h3 How to set up Ethereum private network
                          .post_details__info
                            .date
                              | july 23, 2018
</template>

<script>
  export default {
    name: 'ThePosts',
  };
</script>
<style lang="stylus" scoped >
  @import '../../styles/_variables'
</style>
