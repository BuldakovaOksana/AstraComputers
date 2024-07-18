<template>
    <section class="services center">
        <!-- <h1 class="services__title">ЧТО МЫ ПРЕДЛАГАЕМ?</h1> -->

        <div class="services__item">
            <img src="@/assets/img/server.jpg" alt="server" class="services__item__img">
            <h3 class="services__item__title">Серверы</h3>
            <p class="services__item__text">Серверы от ведущих мировых и
                отечественных производителей:
                Sitronics, Elko, Гравитон,
                Булат, Бифорком, Kraftway,
                Qtech, HP, Supermicro, Dell</p>
        </div>
        <div class="services__item">
            <img src="@/assets/img/save.jpg" alt="save" class="services__item__img">
            <h3 class="services__item__title">Системы хранения</h3>
            <p class="services__item__text">Системы хранения различного
                исполнения и различного объема,
                под задачи клиента.
                Huawei, HP, Dell, Supermicro</p>
        </div>
        <div class="services__item">
            <img src="@/assets/img/complect.jpg" alt="accessories" class="services__item__img">
            <h3 class="services__item__title">Комплектующие</h3>
            <p class="services__item__text">Коммутаторы и
                маршрутизаторы,
                дисковые полки расширения
                и другое телекоммуникационное оборудование</p>
        </div>
        <div class="services__item">
            <img src="@/assets/img/usl.jpg" alt="Services" class="services__item__img">
            <h3 class="services__item__title">Услуги</h3>
            <p class="services__item__text">Выполнение всего комплекса
                работ по проекту "под ключ", в том числе техническая
                поддержка, сервисные услуги (SLA).</p>
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
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid $colorTitles;
        padding: 10px;
        background-color: $colorfone;

        &__img {
            width: 500px;
            height: 300px;
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
            max-width: 500px;
            font-style: normal;
            line-height: 1.5;
            font-size: 20px;
            font-weight: 400;
            color: $colorText;
            text-align: center;
        }
    }
}
</style>