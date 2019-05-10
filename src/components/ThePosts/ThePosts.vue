<template lang="pug">
    .centered
        v-container.pa-0
          v-layout(row)
            v-flex(xs12)
              v-card
                .posts-main
                  a.post_item.post-large(href="#1")
                      .post_item__inner
                        .post_bg(style='background-image: url(/src/img/post_img_1.jpg);')
                        .post_details
                          .post_details__title
                            | Unit tests in a Golang way
                          .post_details__info
                            .excerpt
                              | For a first time, Golang might shock you, but you just need to understand ideas behind go... 
                            .date
                              | feb 13, 2018
                  a.post_item.post-small(href="#2")
                      .post_item__inner
                        .post_bg(style='background-image: url(/src/img/post_img_2.jpg);')
                        .post_details
                          .post_details__title
                            h3 Unit tests in a Golang way
                          .post_details__info
                            .excerpt
                              | For a first time, Golang might shock you, but you just need to understand ideas behind go... 
                            .date
                              | feb 13, 2018
                  a.post_item.post-small(href="#3")
                      .post_item__inner
                        .post_bg(style='background-image: url(/src/img/post_img_3.jpg);')
                        .post_details
                          .post_details__title
                            h3 Unit tests in a Golang way
                          .post_details__info
                            .excerpt
                              | For a first time, Golang might shock you, but you just need to understand ideas behind go... 
                            .date
                              | feb 13, 2018
                   

                      
                    
</template>

<script>
  export default {
    name: 'ThePosts',
  };
</script>
<style lang="stylus" scoped >
  @import '../../styles/_variables'
</style>
