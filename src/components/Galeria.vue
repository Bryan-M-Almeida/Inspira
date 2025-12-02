<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getPhotos } from '../api/unsplash';
import type { UnsplashPhoto } from '../types/unsplash';
import { icon } from '@fortawesome/fontawesome-svg-core';

const fotos = ref<UnsplashPhoto[]>([]);

onMounted(async () => {
    fotos.value = await getPhotos();
});
</script>

<template>
    <section id="galeria">
        <h2>Inspire-se</h2>

        <div class="galeria-container">
            <div class="foto-card" v-for="foto in fotos" :key="foto.id">
                <font-awesome-icon :icon="['fas', 'heart']" class="icon-heart" />
                <img :src="foto.urls.small" alt="" />
            </div>
        </div>


    </section>
</template>


<style scoped lang="scss">
section#galeria {
    margin-top: 5vh;
    width: 100%;
    padding: 0 10vw 5vh;
    background-color: white;

    display: flex;
    flex-direction: column;
    gap: 2rem;



    h2 {
        color: #262626;
        font-size: 2vw;
        font-weight: 600;
    }

    .galeria-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 16px;

        .foto-card {
            position: relative;

            img {
                width: 100%;
                height: 240px;
                object-fit: cover;
                border-radius: 12px;
            }

            .icon-heart {
                position: absolute;
                top: 10px;
                right: 10px;

                z-index: 1;

                font-size: 22px;
                color: #666666;
                opacity: 0.8;
                cursor: pointer;

                transition: transform .2s ease, opacity .2s ease;
            }

            .icon-heart:hover {
                transform: scale(1.2);
                color: red;
                opacity: 1;
            }
        }


    }

    .galeria-container img {
        width: 100%;
        height: 240px;
        object-fit: cover;
        border-radius: 12px;
        transition: transform 0.2s ease, filter 0.2s ease;
        filter: brightness(0.9);
        cursor: pointer;
    }

    .galeria-container img:hover {
        filter: brightness(1);
    }
}
</style>