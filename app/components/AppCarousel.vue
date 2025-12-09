<template>
    <ClientOnly>
        <swiper
            class="home-carousel"
            :slides-per-view="5"
            :loop="true"
            :space-between="50"
            :breakpoints="breakpoints"
            :autoplay="autoplay"
            :navigation="navigation"
            :pagination="pagination"
            :modules="modules"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <!-- Left Arrow Carousel Navigation -->
            <button class="btn-item carousel-navigation arrow-left">
                <span class="text">left</span>
            </button>

            <!-- Carousel Items  -->
            <swiper-slide v-for="(item, index) in 10" :key="index">
                <a class="d-flex flex-column justify-content-center align-items-center">
                    <img src="http://placehold.co/250x400" alt="" />
                    <span class="text text-title d-flex flex-column justify-content-center align-items-center">Slide {{ item }}</span>
                </a>
            </swiper-slide>

            <!-- Dots Central Carousel Pagination -->
            <div class="carousel-pagination carousel-dots"></div>

            <!-- Right Arrow Carousel Navigation -->
            <button class="btn-item carousel-navigation arrow-right">
                <span class="text">right</span>
            </button>
        </swiper>
    </ClientOnly>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination, Autoplay]

const breakpoints = {
    1: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    744: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 5,
        spaceBetween: 30,
    },
}

const autoplay = {
    delay: 50000000,
}

const navigation = {
    nextEl: '.carousel-navigation.arrow-left',
    prevEl: '.carousel-navigation.arrow-right',
}

const pagination = {
    el: '.carousel-pagination',
    type: 'bullets',
    clickable: true,
}

const onSwiper = (swiper) => {
    // console.log(swiper)
}

const onSlideChange = () => {
    // console.log('slide change')
}
</script>

<style>
.swiper {
    padding: 0 20px;
}
.swiper-slide span {
    width: 250px;
    padding: 10px 0;
    color: black;
    background: #dddddd;
}
.swiper-slide img {
    max-width: 250px;
    /* max-height: 150px; */
}
.carousel-navigation {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    left: 5px;
    z-index: 1;
}
.carousel-navigation.arrow-right {
    left: auto;
    right: 5px;
}
.carousel-pagination {
    display: flex;
    justify-content: center;
    padding-top: 20px;
}
</style>
