<template>
  <HeaderComponent />
  <BannerComponent />
  <ServiceComponent />
  <ManufacturersComponent />
  <FooterComponent />
</template>

<script>

import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import BannerComponent from '@/components/pagesComponents/homeComponents/BannerComponent.vue';
import ServiceComponent from '@/components/pagesComponents/homeComponents/ServiceComponent.vue';
import ManufacturersComponent from '@/components/pagesComponents/homeComponents/ManufacturersComponent.vue';

export default {
  // name: 'Home',
  components: {
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    ServiceComponent,
    ManufacturersComponent,
  }
}
</script>
