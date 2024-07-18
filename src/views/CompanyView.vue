<template>
    <HeaderComponent />
    <BannerComponent />
    <ArticleComponent />
    <GuidelinesComponent />
    <FooterComponent />
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import BannerComponent from '@/components/pagesComponents/companyComponents/BannerComponent.vue'
import ArticleComponent from '@/components/pagesComponents/companyComponents/ArticleComponent.vue'
import GuidelinesComponent from '@/components/pagesComponents/companyComponents/GuidelinesComponent.vue'
export default {
    components: {
    HeaderComponent,
    BannerComponent,
    ArticleComponent,
    GuidelinesComponent,
    FooterComponent,
  }
}
</script>
<style lang="">
    
</style>