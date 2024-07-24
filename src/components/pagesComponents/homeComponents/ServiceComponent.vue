<template>
    <section class="services center">
        <!-- <h1 class="services__title">ЧТО МЫ ПРЕДЛАГАЕМ?</h1> -->

        <div class="services__item services__item1">
            <img src="@/assets/img/server.jpg" alt="server" class="services__item1__img">
            <h3 class="services__item__title">Серверы</h3>
            <p class="services__item__text">Серверы от ведущих мировых и
                отечественных производителей:
                Sitronics, Elko, Гравитон,
                Булат, Бифорком, Kraftway,
                Qtech, HP, Supermicro, Dell</p>
        </div>
        <div class="services__item services__item2">
            <img src="@/assets/img/save.jpg" alt="save" class="services__item2__img">
            <h3 class="services__item__title">Системы хранения</h3>
            <p class="services__item__text">Системы хранения различного
                исполнения и различного объема,
                под задачи клиента.
                Huawei, HP, Dell, Supermicro</p>
        </div>
        <div class="services__item services__item3">
            <img src="@/assets/img/usl.jpg" alt="Services" class="services__item3__img">
            <h3 class="services__item__title">Услуги</h3>
            <p class="services__item__text">Выполнение всего комплекса
                работ по проекту "под ключ", в том числе техническая
                поддержка, сервисные услуги (SLA).</p>


        </div>
        <div class="services__item services__item4">
            <img src="@/assets/img/complect.jpg" alt="accessories" class="services__item4__img">
            <h3 class="services__item__title">Комплектующие</h3>
            <p class="services__item__text">Коммутаторы и
                маршрутизаторы,
                дисковые полки расширения
                и другое телекоммуникационное оборудование</p>
        </div>

    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "@/style/vars.scss";

.services {
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;

    margin-top: 50px;
    // display: flex;
    // justify-content: center;
    // flex-wrap: wrap;
    // gap: 10px;

    &__item {
        // background-color: #1b1d25;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid $colorTitles;
        padding: 10px;
        background-color: $colorfone;
        border-radius: 20px;

        &__img {
            // width: 1100px;
            // height: 300px;
        }

        &__title {
            font-style: normal;
            line-height: 1.5;
            font-size: 24px;
            font-weight: 600;
            color: $colorTitles;
            text-align: center;
        }

        &__text {
            // max-width: 500px;
            font-style: normal;
            line-height: 1.5;
            font-size: 20px;
            font-weight: 400;
            color: $colorTitles;
            text-align: center;
        }
    }

    &__item1 {
        grid-area: 1 / 1 / 2 / 4;

        &__img {
            max-width: 1155px;
            border-radius: 20px;
        }
    }

    &__item2 {
        grid-area: 2 / 1 / 3 / 2;

        &__img {
            max-width: 350px;
            margin-bottom: 20px;
            border-radius: 20px;
        }
    }

    &__item3 {
        &__img {
            max-width: 350px;
            border-radius: 20px;
        }

        grid-area: 2 / 2 / 3 / 3;
    }

    &__item4 {
        &__img {
            max-width: 350px;
            margin-bottom: 20px;
            border-radius: 20px;
        }

        grid-area: 2 / 3 / 3 / 4;
    }
}
</style>