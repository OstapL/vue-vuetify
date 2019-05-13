<template lang="pug">
        v-container(grid-list-lg)
          v-layout(row)
            v-flex(xs12 md10 offset-md1 lg8 offset-lg2)
              v-card
                .posts-main
                    slick(ref="slick" :options="slickOptions"  @reInit="handleDestroy").posts-slider
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
    import Slick from 'vue-slick';



    export default {
        name: 'ThePosts',
        components: { Slick },
        data: function(){
            return {
                slickOptions: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    margin: 20,
                    autoHeight: true,
                    arrows: false,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: 'unslick'
                        }
                    ]
                },
            };
        },

    };


</script>
<style lang="stylus" scoped >
  @import '../../styles/_variables'
  @import '../../../node_modules/slick-carousel/slick/slick.css'
</style>
