<script setup lang="ts">
import logo from '../assets/logo.png';

import { ref } from 'vue';


const menuIcon = ref<'bars' | 'xmark'>('bars');


const menu = ref<HTMLElement | null>(null);

const abrirFechar = () => {
    if (menu.value?.classList.contains('fechado')) {
        menuIcon.value = 'xmark';
        menu.value.classList.remove('fechado');
        menu.value.classList.add('aberto');
    } else if (menu.value?.classList.contains('aberto')) {
        menuIcon.value = 'bars';
        menu.value.classList.remove('aberto');
        menu.value.classList.add('fechado');
    }
};



</script>

<template>
    <header>
        <nav id="desktop">
            <img :src="logo" alt="Logo">

            <div class="links">
                <span>
                    <font-awesome-icon :icon="['fas', 'search']" />
                </span>
                <ul>
                    <li><a href="#inicio">Início</a></li>
                    <li><a href="#galeria">Galeria</a></li>
                    <li><a href="#">Favoritos</a></li>
                </ul>
                <span>
                    <font-awesome-icon :icon="['far', 'user']" />
                </span>
            </div>
        </nav>

        <nav id="mobile">
            <div class="icones-container">
                <img :src="logo" alt="" class="logo-icon">

                <span class="menu-icon" @click="abrirFechar">
                    <font-awesome-icon :icon="['fa', menuIcon]" />
                </span>
            </div>

            <ul class="menu fechado" ref="menu">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="galeria">Galeria</a></li>
                <li><a href="favoritos">Favoritos</a></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped lang="scss">
header {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    font-family: 'Poppins';
    backdrop-filter: blur(2.5px);
    background-color: #ffffffce;
    z-index: 10000;
    box-shadow: 1px 3px 3px #00000046;

    nav#desktop {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        padding: 1% 5%;

        img {
            width: 3%;
            height: 1%;
        }


        div.links {
            display: flex;
            justify-content: space-between;
            gap: 1vw;

            span {
                color: #E1306C;
                cursor: pointer;
                transition: .3s;
                font-size: 1.5vw;

                &:hover {
                    color: #c5144f;
                }
            }

            ul {
                display: flex;
                justify-content: space-evenly;
                gap: 1vw;

                li {
                    font-size: 1.3vw;
                    transition: .3s ease-in-out;

                    &:hover {
                        transform: translateY(-5%);
                    }

                    a {
                        color: #262626;
                        transition: color .3s;

                        &:hover {
                            color: #000000;
                        }
                    }
                }
            }
        }
    }

    nav#mobile {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 2rem;
        flex-direction: column;

        div.icones-container {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;

            img.logo-icon {
                width: 8%;
                height: auto;
            }

            span.menu-icon {
                color: black;
                cursor: pointer;
                font-size: 1.8rem;
            }
        }

        ul.fechado {
            display: none;
        }

        ul.aberto {
            display: flex;
        }

        ul.menu {
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            gap: 1.5rem;
            padding: 2rem 0;

            li {
                font-size: 1.6em;

                a {
                    color: #262626;

                    &:hover {
                        color: black;
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 768px) {
    header {
        nav#desktop {
            display: none;
        }
    }
}

@media screen and (min-width: 769px) {
    header {
        nav#mobile {
            display: none;
        }
    }

}
</style>