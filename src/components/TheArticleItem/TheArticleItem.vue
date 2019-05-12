<template lang="pug">
    v-container(grid-list-lg).pa-0
        v-layout(row)
            v-flex(lg8 offset-lg2 xs12)
                v-card
                    .all-posts

                       a(href="javascript:void(0);").post_item
                         .post_item__pulish-date
                            .day 13
                            .date Jul, 2018
                         .post_item__details
                            h4.post_name Login via browser's cookies (Selenium WebDriver) or Local Storage (JavaScript)
                            p.post_excerpt How to avoid repeating login action before running each test? It depends on how this was implemented in your Web application (via cookies or Local Storage)
                         .post_item__image
                            img(src="/src/img/article_thumb.png" alt="Article Thumb")

                       a(href="javascript:void(0);").post_item
                        .post_item__pulish-date
                            .day 27
                            .date feb, 2018
                        .post_item__details
                            h4.post_name Vue.js and TypeScript problems collection
                            p.post_excerpt How to avoid repeating login action before running each test? It depends on how this was implemented in your Web application (via cookies or Local Storage).
                        .post_item__image
                            img(src="/src/img/article_thumb.png" alt="Article Thumb")

                       a(href="javascript:void(0);").post_item
                        .post_item__pulish-date
                            .day 5
                            .date july, 2018
                        .post_item__details
                            h4.post_name Login via browser's cookies (Selenium WebDriver) or Local Storage (JavaScript)
                            p.post_excerpt How to avoid repeating login action before running each test? It depends on how this was implemented in your Web application (via cookies or Local Storage).
                        .post_item__image
                            img(src="/src/img/article_thumb.png" alt="Article Thumb")

                       a(href="javascript:void(0);").post_item
                        .post_item__pulish-date
                            .day 27
                            .date feb, 2018
                        .post_item__details
                            h4.post_name Vue.js and TypeScript problems collection
                            p.post_excerpt How to avoid repeating login action before running each test? It depends on how this was implemented in your Web application (via cookies or Local Storage).
                        .post_item__image
                            img(src="/src/img/article_thumb.png" alt="Article Thumb")

                       a(href="javascript:void(0);").post_item
                        .post_item__pulish-date
                            .day 5
                            .date july, 2018
                        .post_item__details
                            h4.post_name Login via browser's cookies (Selenium WebDriver) or Local Storage (JavaScript)
                            p.post_excerpt How to avoid repeating login action before running each test? It depends on how this was implemented in your Web application (via cookies or Local Storage).
                        .post_item__image
                            img(src="/src/img/article_thumb.png" alt="Article Thumb")
                    .more-articles
                         a(href="javascript:void(0);") load more articles
</template>

<script>
  export default {
    name: 'TheArticleItem',
  };
</script>
<style lang="stylus" scoped >
    @import '../../styles/_variables'
</style>
