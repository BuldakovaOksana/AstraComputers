<template>
    <section class="banner center">
        <h1 class="banner__title"> <span>ASTRO</span>Computers</h1>
        <p class="banner__text">ТЕХНОЛОГИИ ЦИФРОВЫХ ВЫЧИСЛИТЕЛЬНЫХ СИСТЕМ</p>
        <div class="banner__line"></div>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "@/style/vars.scss";

.banner {
    margin-top: 20px;
    background-image: url(@/assets/img/banner1.jpg);
    // max-width: 1200px;
    padding-top: 100px;
    padding-bottom: 100px;
    height: 500px;
    background-size: cover;
    background-position: left bottom;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    &__title {
        & span {
            color: $colorTitles;
            font-size: 50px;
            font-weight: 600;
            letter-spacing: 2px;
        }
        color: $colorTitles;
        text-align: left;
        line-height: 1.5;
        font-size: 45px;
        font-weight: 400;
        max-width: 600px;
    }

    &__text {
        color: $colorTitles;
        text-align: left;
        font-size: 20px;
        font-weight: 400;
        max-width: 600px;
        margin-top: 10px;
    }
    &__line {
        margin-top: 20px;
        background-color:  $colorTitlesWhite;
        width: 200px;
        height: 5px;
    }
}
</style>