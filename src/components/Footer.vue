<script setup lang="ts"></script>

<template>
    <footer>

        <div class="footer-container">

            <div class="contato-sobre-container">
                <div class="contato">
                    <h3>
                        Contato
                    </h3>

                    <ul>
                        <li><a href="">contato@inspira.com</a></li>
                        <li><a href="">Central de ajuda</a></li>
                        <li><a href="">Rio de Janeiro - Brasil</a></li>
                    </ul>

                </div>
                <div class="sobre">
                    <h3>
                        Sobre
                    </h3>

                    <ul>
                        <li><a href="">Políticas</a></li>
                        <li><a href="">Políticas de privacidade</a></li>
                        <li><a href="">Blog</a></li>
                    </ul>

                </div>
            </div>

            <form class="newslatter-container">

                <h3>
                    Assine nosso newslatter
                </h3>

                <input type="email" name="" id="" required placeholder="Seu email">

                <button type="submit">Inscrever-se</button>

            </form>
        </div>

        <div class="redes-sociais">

            <span>
                <font-awesome-icon :icon="['fab', 'facebook']" />
            </span>

            <span>
                <font-awesome-icon :icon="['fab', 'twitter']" />
            </span>

            <span>
                <font-awesome-icon :icon="['fab', 'instagram']" />
            </span>

            <span>
                <font-awesome-icon :icon="['fab', 'linkedin']" />
            </span>

        </div>
    </footer>
</template>

<style scoped lang="scss">
footer {
    display: flex;
    flex-direction: column;
    gap: 3vh;
    width: 100%;
    background-color: white;
    margin-top: 5vh;
    padding: 5vh 0;

    div.footer-container {
        display: flex;
        width: 100%;
        justify-content: space-between;
        padding: 1vh 3vw;
        flex-wrap: wrap;

        div.contato-sobre-container {
            display: flex;
            justify-content: space-between;
            gap: 10vw;
            text-align: start;
            flex-wrap: wrap;

            div.contato,
            div.sobre {

                h3 {
                    font-size: 1.9vw;
                }

                ul {
                    li {
                        font-size: 1.2vw;

                        a {
                            color: #262626;
                            transition: .3s;

                            &:hover {
                                color: black;
                            }
                        }
                    }
                }
            }
        }

        form.newslatter-container {
            display: flex;
            flex-direction: column;
            gap: 3vh;
            align-items: start;
            justify-content: space-between;

            h3 {
                font-size: 1.9vw;
            }

            input[type="email"] {
                border: none;
                outline: none;
                width: 100%;
                font-size: 1vw;
            }

            button[type="submit"] {
                border: none;
                border-radius: 5px;
                background-color: #E1306C;
                color: white;
                font-size: 1.2vw;
                padding: 1vh 1.5vw;
                cursor: pointer;
                transition: .3s;

                &:hover {
                    background-color: #cf3367;
                }
            }
        }
    }

    div.redes-sociais {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3vw;

        span {
            display: flex;
            font-size: 3vw;
            color: #E1306C;
            cursor: pointer;
            transition: .3s;

            &:hover {
                color: #cf3367;
                transform: translateY(-5%);
            }
        }
    }
}
</style>