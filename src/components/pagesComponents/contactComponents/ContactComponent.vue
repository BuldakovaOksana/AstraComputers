<template>
    <section class="center contactbox">
        <div class="contact">
            <div class="contact__data">
                <img class="contact__img" src="@/assets/img/phon.png" alt="phone">
                <div class="contact__box">
                    <h3 class="contact__title">Телефон</h3>
                    <p class="contact__text">
                        +7 964 535-65-30
                    </p>
                </div>
            </div>
            <div class="contact__data">
                <img class="contact__img" src="@/assets/img/adress.png" alt="adress">
                <div class="contact__box">
                    <h3 class="contact__title">Адрес</h3>
                    <p class="contact__text">
                        117208, г. Москва, Варшавское шоссе, 118к1, оф.45
                    </p>
                </div>
            </div>
            <div class="contact__data">
                <img class="contact__img" src="@/assets/img/mail.png" alt="mail">
                <div class="contact__box">
                    <h3 class="contact__title">Email</h3>
                    <p class="contact__text">
                        zakaz@astrocomputers.ru
                    </p>
                </div>
            </div>
            <div class="contact__data">
                <img class="contact__img" src="@/assets/img/clock.png" alt="clock">
                <div class="contact__box">
                    <h3 class="contact__title">Время работы</h3>
                    <p class="contact__text">
                        9:00 - 18:00
                    </p>
                </div>
            </div>
        </div>
        <div class="box__google-map">
            <iframe class="google-map" frameborder="0" style="border:0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2252.305673666305!2d37.61520727701475!3d55.631496273039566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab2fc81ed58cd%3A0xe55efece93f5c040!2z0JLQsNGA0YjQsNCy0YHQutC-0LUg0YguLCAxMTjQujEsINCc0L7RgdC60LLQsCwgMTE3NTg3!5e0!3m2!1sru!2sru!4v1709289053919!5m2!1sru!2sru"
                allowfullscreen>
            </iframe>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "@/style/vars.scss";
.contactbox {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e8f2f9;
}

.contact {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 450px;

    &__data {
        display: flex;
        align-items: center;
        gap: 20px;
    }

    &__img {
        max-width: 50px;
    }

    &__title {
        font-style: normal;
        line-height: 1.5;
        font-size: 20px;
        font-weight: 600;
        color: $colorTitles;
    }

    &__text {
        font-style: normal;
        line-height: 1.5;
        font-size: 18px;
        font-weight: 400;
        color: $colorTitles;
    }
}

.box__google-map {
    border: 2px solid $colorTitles;
}

.google-map {
    width: 700px;
    height: 450px;

}
</style>