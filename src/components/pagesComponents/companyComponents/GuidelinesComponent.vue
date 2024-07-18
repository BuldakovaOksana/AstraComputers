<template>
    <section class="guidelines center">
        <h1 class="guidelines__title">
            ОСНОВНЫЕ НАПРАВЛЕНИЯ
            ДЕЯТЕЛЬНОСТИ
        </h1>
        <div class="guidelines__content">
            <div class="guidelines__item">
                <img src="@/assets/img/guidelines3.png" alt="icon" class="guidelines__item__img">
                <h3 class="guidelines__item__title">Серверы <br>
                    Системы хранения</h3>
                <ul class="guidelines__item__list">
                    <li>
                        Серверы от ведущих мировых и
                        отечественных производителей;
                    </li>
                    <li>
                        Системы хранения различного
                        исполнения под задачи клиента;
                    </li>
                    <li>
                        Коммутаторы и маршрутизаторы;
                    </li>
                    <li>
                        Дисковые полки расширения;
                    </li>
                    <li>
                        Любое телекоммуникационное
                        оборудование
                    </li>
                </ul>
            </div>
            <div class="guidelines__item">
                <img src="@/assets/img/guidelines1.png" alt="icon" class="guidelines__item__img">
                <h3 class="guidelines__item__title">
                    Строительство ЦОД
                    и микроЦОД ASTRO
                </h3>
                <ul class="guidelines__item__list">
                    <li>Управление проектами
                        строительства ЦОД под ключ;
                    </li>
                    <li>Функции генподрядчик;</li>
                    <li>
                        Поставка, монтаж, пуско-наладка
                        и сдача в эксплуатацию
                        инженерных систем дата -центра.
                    </li>
                </ul>
            </div>
            <div class="guidelines__item">
                <img src="@/assets/img/guidelines2.png" alt="icon" class="guidelines__item__img">
                <h3 class="guidelines__item__title">
                    Интернет Вещей
                    IoT (IIoT)
                </h3>
                <ul class="guidelines__item__list">
                    <li>IOT- Интеллектуальный учёт
                        ресурсов (водоснабжение,
                        электроэнергия) для
                        Застройщиков и Управляющих
                        компаний;
                    </li>
                    <li>
                        IIoT – диспетчеризация ВКХ,
                        теплосетей, электросбытовых
                        компаний.
                    </li>
                </ul>
            </div>
            <div class="guidelines__item">
                <img src="@/assets/img/guidelines4.png" alt="icon" class="guidelines__item__img">
                <h3 class="guidelines__item__title">Медиа Системы</h3>
                <ul class="guidelines__item__list">
                    <li>
                        Мультимедийное оборудование
                        для переговорных комнат под
                        ключ;
                    </li>
                    <li>
                        Камеры с искусственным
                        интеллектом;
                    </li>
                    <li>
                        Установка и обслуживание
                        видеонаблюдения для бизнеса.
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "@/style/vars.scss";

.guidelines {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: $colorTitlesblue;
    margin-top: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &__title {
        color: $colorTitles;
        text-align: center;
        line-height: 1.5;
        font-size: 40px;
        font-weight: 400;
    }

    &__content {
        margin-top: 30px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 10px;
    }

    &__item {
        
        display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 270px;
    
        &__img {
            max-width: 120px;
        }
        &__title {
            color: $colorTitles;
            text-align: center;
            font-size: 24px;
            font-weight: 500;
            margin-top: 20px;
        }
        &__list {
            color: $colorTitles;
            list-style-position: inside;
            padding-left: 20px;
            text-align: left;
            list-style-type:square;
            margin-top: 20px;
            line-height: 1.5;

        }
    }
}
</style>