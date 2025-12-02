<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getPhotos } from '../api/unsplash';
import type { UnsplashPhoto } from '../types/unsplash';

const fotos = ref<UnsplashPhoto[]>([]);
let page = 1;
const perPage = 8;

onMounted(async () => {
    const res = await getPhotos(page, perPage);
    fotos.value = res.data;
});

const carregar = async () => {
    page++;
    const res = await getPhotos(page, perPage);
    fotos.value.push(...res.data);
};
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

        <div class="carregar-container">
            <span class="icon-carregar" @click="carregar" title="Mais fotos">
                <font-awesome-icon :icon="['fas', 'plus']" />
            </span>
        </div>


    </section>
</template>


<style scoped lang="scss">
section#galeria {
    margin-top: 5rem;
    width: 100%;
    padding: 0 5rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    text-align: start;
    gap: 2rem;

    h2 {
        color: #262626;
        font-size: 2em;
        font-weight: 600;
    }

    .galeria-container {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 3rem;

        .foto-card {
            position: relative;

            img {
                width: 100%;
                height: 240px;
                object-fit: cover;
                border-radius: 12px;
                transition: transform 0.2s ease, filter 0.2s ease;
                filter: brightness(0.5);
                cursor: pointer;

                &:hover {
                    filter: brightness(0.95);
                }



            }


            .icon-heart {
                position: absolute;
                top: 10px;
                right: 10px;
                z-index: 1;
                font-size: 2rem;
                color: #666666;
                opacity: 0.8;
                cursor: pointer;
                transition: transform .2s ease, opacity .2s ease;

                &:hover {
                    transform: scale(1.2);
                    color: red;
                    opacity: 1;
                }
            }
        }
    }

    div.carregar-container {
        display: flex;
        justify-content: center;
        align-items: center;

        span.icon-carregar {
            cursor: pointer;
            font-size: 2.9em;
            transition: .3s ease-in-out;

            &:hover {
                transform: scale(1.05);
            }

        }

    }
}
</style>