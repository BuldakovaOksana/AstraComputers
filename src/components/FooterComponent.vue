<template>
    <footer class="footer center">
        <!-- <a href="#" class="footer__logo">
            <img class="footer__logo__img" src="@/assets/img/logo.png" alt="logo">
        </a> -->
        <nav>
            <ul class="footer__nav">
                <li class="footer__nav__li">
                    <router-link to="/Products">Продукция</router-link>
                </li>
                <li class="footer__nav__li">
                    <router-link to="/Services">Услуги</router-link>
                </li>
                <li class="footer__nav__li">
                    <router-link to="/Company">О Компании</router-link>
                </li>
                <li class="footer__nav__li">
                    <router-link to="/Contacts">Контакты</router-link>
                </li>
            </ul>
        </nav>

        <div class="footer__contact">
            <div class="footer__contact__data">
                <h3 class="footer__contact__title">Телефон</h3>
                <p class="footer__contact__text">
                    +7 964
                    535-65-30
                </p>
            </div>
            <div class="footer__contact__data">

                <h3 class="footer__contact__title">Адрес</h3>
                <p class="footer__contact__text">
                    117208, г. Москва,
                    Варшавское шоссе, 118к1, оф.45
                </p>
            </div>
            <div class="footer__contact__data">
                <h3 class="footer__contact__title">Email</h3>
                <p class="footer__contact__text">zakaz@astrocomputers.ru
                </p>
            </div>
        </div>
    </footer>
</template>
<script>
export default {

}
</script>
<style lang="scss">
@import "@/style/vars.scss";

.footer {
    padding: 10px;
    border-top: 1px solid $colorTitles;
    border-bottom: 1px solid $colorTitles;
    margin-top: 50px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    &__logo__img {
        max-width: 200px;
    }

    &__nav {
        display: flex;
        justify-content: space-evenly;
        list-style-type: none;
        

        &__li a {
            font-style: normal;
            line-height: 1.5;
            font-size: 22px;
            font-weight: 400;
            color: $colorText;

            &:hover {
                color: $colorTitles;
                text-shadow: 0.1px 0.1px $colorTitles;
            }
        }
    }

    &__contact {
        display: flex;
        justify-content: center;
        gap: 80px;
        margin-top: 20px;
        &__data {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        &__title {
            font-style: normal;
            line-height: 1.5;
            font-size: 18px;
            font-weight: 600;
            color: $colorText;
        }

        &__text {
            font-style: normal;
            line-height: 1.5;
            font-size: 18px;
            font-weight: 400;
            color: $colorText;
        }

    }
}
</style>
