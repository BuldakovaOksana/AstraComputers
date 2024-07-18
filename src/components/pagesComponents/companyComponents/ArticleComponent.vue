<template>
    <section class="article center">
        <div class="article__box">
            <div class="article__titledate">
                <h1 class="article__titledate__title">ООО «АСТРО КОМПЬЮТЕРС»</h1>
                <p class="article__titledate__content">
                    Активно развивающаяся компания в сфере
                    цифровых вычислительных технологий,
                    нацеленная на качественное выполнение
                    договорных обязательств перед ключевыми
                    предприятиями-заказчиками,
                    ведущая разработку современных решений и
                    создающая новые возможности для бизнеса .
                </p>
            </div>
            <img class="article__titledate__img" src="@/assets/img/article.jpg" alt="computers">
        </div>
        <div class="article__subtitledate">
            <h2 class="article__subtitledate__subtitle">ПОЧЕМУ НАМ ДОВЕРЯЮТ?</h2>
            <p class="article__subtitledate__content">
                Благодаря высоким компетенциям наших сотрудников и
                выстроенной работе с ведущими мировыми производителями
                цифрового вычислительного оборудования наша компания
                разработает оптимальное решение ваших самых сложных IT задач.
            </p>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "@/style/vars.scss";

.article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 50px;

    &__box {
        display: flex;
        align-items: center;
        gap: 80px;
    }

    &__titledate {
        &__title {
            color: $colorTitlesblue;
            text-align: left;
            line-height: 1.5;
            font-size: 40px;
            font-weight: 400;

        }

        &__content {
            color: $colorTitles;
            text-align: left;
            font-size: 22px;
            line-height: 1.5;
            font-weight: 400;
            max-width: 600px;
            margin-top: 10px;
            border-bottom: 3px solid $colorTitlesblue;
            padding-bottom: 23px;
        }

        &__img {
            max-width: 400px;
        }

    }

    &__subtitledate {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding-left: 270px;

        &__subtitle {
            color: $colorTitlesblue;
            text-align: right;
            line-height: 1.5;
            font-size: 30px;
            font-weight: 400;
            margin-top: 30px;

        }

        &__content {
            color: $colorTitles;
            text-align: right;
            font-size: 22px;
            line-height: 1.5;
            font-weight: 400;
            max-width: 800px;
            margin-top: 10px;
            border-bottom: 3px solid $colorTitlesblue;
            padding-bottom: 23px;
        }

    }
}
</style>