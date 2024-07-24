<template>
    <section class="banner center">
        <!-- <div class="banner__box"> -->
            <h1 class="banner__title">Сервера российского производства <br>
                Поставка, монтаж серверного и телекоммуникационного <br> оборудования
            </h1>
            <!-- <img class="banner__img" src="@/assets/img/bannerImg.png" alt="banner"> -->
        <!-- </div> -->
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "@/style/vars.scss";

.banner {
    // &__box {
        margin-top: 20px;
        background-image: url(@/assets/img/temnii-sovremennii.jpg);
        padding-top: 15px;
        height: 500px;
        background-size: cover;
        display: flex;
        justify-content: flex-end;
        background-position: center;
    // }

    

    &__title {
        color: $colorTitles;
        text-align: right;
        line-height: 2.5;
        font-size: 32px;
        font-weight: 600;

        max-width: 600px;
    }

    &__img {
        max-width: 600px;

    }
}
</style>
