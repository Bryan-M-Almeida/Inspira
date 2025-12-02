<script setup lang="ts">
import fotografo from '../assets/fotografo.png'
</script>

<template>
    <section id="inicio">
        <div class="cta-container">
            <h1>
                Onde a paisagem
                <br>
                vira <span class="insp">inspiração</span>.
            </h1>
            <p>Explore paisagens, cores e luzes que inspiram novas histórias <br> através da fotografia.</p>
        </div>

        <div class="fotografo-container">
            <img :src="fotografo" alt="Foógrafa tirando foto" title="Fotógrafa" class="fotografa">
        </div>
    </section>
</template>

<style scoped lang="scss">
section#inicio {
    background-color: white;
    position: relative;
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-between;
    padding: 5rem 2rem;
    align-items: center;

    div.cta-container {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        h1 {
            font-size: 2.5rem;
            font-family: 'Poppins';
            color: #262626;
        }

        span.insp {
            color: #E1306C;
            font-size: 2.9rem;
            font-weight: bolder;
        }

        p {
            font-size: 1.2rem;
        }
    }

    div.fotografo-container {
        display: flex;
        width: 35%;
        height: auto;
        align-items: center;

        img.fotografa {
            width: 100%;
            height: auto;
        }
    }
}

@media screen and (max-width: 768px) {
    section#inicio {
        flex-direction: column;
        gap: 3rem;

        div.cta-container{
            text-align: center;
        }

        div.fotografo-container {
            width: 90%;
        }
    }
}
</style>