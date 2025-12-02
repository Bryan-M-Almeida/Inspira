<script setup lang="ts">

import logo from '../assets/logo.png'


</script>

<template>
    <header>
        <nav>
            <img :src="logo" alt="Logo">

            <div class="links">
                <span>
                    <font-awesome-icon :icon="['fas', 'search']" />
                </span>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Galeria</a></li>
                    <li><a href="#">Favoritos</a></li>
                </ul>
                <span>
                    <font-awesome-icon :icon="['far', 'user']" />
                </span>
            </div>
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
    background-color: #ffffff94;
    z-index: 10000;
    box-shadow: 1px 3px 3px #00000046;

    nav {
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
}
</style>