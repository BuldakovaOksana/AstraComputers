<template>
    <HeaderComponent />
    <div class="text center">Здесь будет ваша продукция, когда у меня будет понимание как вы это видите, данные и исходники</div>
    <FooterComponent />
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
    components: {
        HeaderComponent,
        FooterComponent,
    }
}
</script>
<style lang="scss">
@import "@/style/vars.scss";
.text {
    margin-top: 100px;
    margin-bottom: 100px;
    color: $colorTitles;
    text-align: center;
    line-height: 1.5;
    font-size: 60px;
    font-weight: 800;
}
</style>