<template>
    <div class="corousel center">
        
        <Carousel  :autoplay="2000" :itemsToShow="3.95" :wrapAround="true" :transition="500">
        <Slide v-for="slide in slides" :key="slide.id">
            <div class="carousel__item">
            <a href="#" class="Manufacturers">
            <img class="corousel__img" :src="require('../../../assets/img/' + slide.img)" alt="Manufacturer">
            </a>
            </div>
        </Slide>

        ...
    </Carousel>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
    name: 'Autoplay',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data() {
        return {
            slides: [
                { id: 1, img: 'Dell.png' },
                { id: 2, img: 'Elko.png' },
                { id: 3, img: 'HP.png' },
                { id: 4, img: 'Huawei.png' },
                { id: 5, img: 'kraftway.png' },
                { id: 6, img: 'Qtech.png' },
                { id: 7, img: 'sitronics.png' },
                { id: 8, img: 'Supermicro.png' },
                { id: 9, img: 'Бифорком.png' },
                { id: 10, img: 'Булат.png' },
                { id: 11, img: 'Гравитон.png' },
                // { id: 13, img: 'image13.jpg' },
                // { id: 14, img: 'image14.jpg' },
                // { id: 15, img: 'image15.jpg' },
            ],
        }
    }
})

</script>

<style lang="scss" scoped>
@import "@/style/vars.scss";
.corousel {
    background-color: #193062;
    margin-top: 50px;
    &__img {
        max-width: 150px;
    }
}
.carousel__slide {
    padding: 5px;
    width: 200px !important;
    
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.9;
    transform: rotateY(-20deg) scale(0.9);
    
}

.carousel__slide--active~.carousel__slide {
    transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
    opacity: 1;
    transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
    opacity: 1;
    transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
    opacity: 1;
    transform: rotateY(0) scale(1.1);
}

</style>