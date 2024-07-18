<template>
    <section class="banner center">
        <h1 class="banner__title">Сервера российского производства
            Поставка, монтаж серверного и телекоммуникационного оборудования
        </h1>
        <img class="banner__img" src="@/assets/img/bannerImg.png" alt="banner">
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
    // height: 600px;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &__title {
        color: $colorfone;
        text-align: left;
         line-height: 1.5;
         font-size:45px;
         font-weight: 600;
         
         max-width: 600px;
    }
    &__img {
        max-width: 600px;
    }
}
</style>
