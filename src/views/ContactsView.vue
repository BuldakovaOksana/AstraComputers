<template>
  <HeaderComponent />
  <ContactComponent />
  <FooterComponent />
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import ContactComponent from '@/components/pagesComponents/contactComponents/ContactComponent.vue'

export default {
  components: {
    HeaderComponent,
    ContactComponent,
    FooterComponent,

  }
}
</script>

<style lang="scss">

</style>
