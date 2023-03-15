<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Conceptos Básicos">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img src="@/assets/evolucion/user.png" contain :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card :height="windowHeight > 900 ? 130 : 110" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text :class="{'font-size-22': windowHeight>900, 'font-size-20': windowHeight<700}">
                                        En este ejemplo podemos notar como los consumos históricos 
                                        para un mismo domicilio pasaron de ser muy altos (hasta $3,500 bimestrales) a realmente bajos 
                                        (menos de $50 pesos al bimestre). Esto es posible gracias a la instalación de páneles 
                                        fotovoltaícos para la generación de corriente eléctrica a partir de la luz solar.
                                        <br><br>
                                        De hecho, en este caso particular, los páneles de generación de electricidad por medio de la luz 
                                        del Sol están generando más energía eléctrica que la que consume el dueño de esa residencia. 
                                        Por eso se menciona en el recibo que se cuenta con un saldo a favor por 812 kilowatt hora.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-10 bg-color rounded-xl">
                        <v-col cols="12" class="animate__animated animate__backInLeft">
                            <p class="" :class="{'font-size-30': windowHeight>900, 'font-size-20': windowHeight<700}">¿Y qué pasa si tengo panales fotovoltaícos?</p>
                        </v-col>
                        <v-col cols="1" align="center" class="animate__animated animate__backInLeft">
                            <p class="vertical-text  font-weight-bold"  :class="{'font-size-30': windowHeight>900, 'font-size-20': windowHeight<700}">Consumo Historico</p>
                        </v-col>
                        <v-col cols="11" class="animate__animated animate__backInRight" v-if="count === 0">
                            <v-img src="@/assets/electricidad/consumo.png" contain :max-height="windowHeight>900 ? '450': '260'"  @click="index = 0"></v-img>
                        </v-col>
                        <v-col cols="11" class="animate__animated animate__backInRight" v-if="count === 1" align-self="center">
                            <v-img src="@/assets/electricidad/importante.png" contain :max-height="windowHeight>900 ? '450': '260'"  @click="index = 1"></v-img>
                        </v-col>
                        <v-col cols="11" class="animate__animated animate__backInRight" v-if="count === 2" align-self="center">
                            <v-img src="@/assets/electricidad/consumo.png" contain :max-height="windowHeight>900 ? '310': '160'"  @click="index = 0"></v-img>
                            <v-img src="@/assets/electricidad/importante.png" contain :max-height="windowHeight>900 ? '210': '110'"  @click="index = 1"></v-img>
                        </v-col>
                    </v-row>

                    <CoolLightBox 
                        :items="items" 
                        :index="index"
                        @close="index = null">
                    </CoolLightBox>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script>
import ContentTemplate from '../templates/ContentTemplate.vue';
import consumo from '@/assets/electricidad/consumo.png'
import importante from '@/assets/electricidad/importante.png'
//import VueEasyLightbox from 'vue-easy-lightbox'
import { mapState } from 'vuex';
//import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

export default{
    data(){
        return {
            images: {
                imgs: [consumo, importante],
                visible: false,
                index: 0
            },
            toggle: null,
            items: [
                {
                    title: 'Consumo',
                    description: "Consumi Historico domiciliado",
                    src: require('@/assets/electricidad/consumo.png'),
                },
                {
                    title: 'Importante',
                    description: "Cuida tu consumo de energia electrica",
                    src: require('@/assets/electricidad/importante.png'),
                },
            ],
            index: null
        }
    },
    components: {
        ContentTemplate,
    },
    computed: {
        ...mapState(['windowHeight', 'windowSize', 'count'])
    },
    mounted(){
        //this.count = 0
        this.$store.commit('StateAssign', {count: 0})
        this.$store.commit('StateAssign', {canNext: false})
        this.playAudio()
    },
    methods: {
        handleHide() {
            images.visible = false
        },
        playAudio(){
            window.audio.src = require('@/assets/audios/intro.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },4000)
        }
    }
}
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}

.vertical-text{
    writing-mode: vertical-rl;
    text-orientation: sideways;
    rotate: calc(180deg);
}

.position-options{
    position: absolute;
    margin-bottom: 5vh;
    bottom: 0;
    left: calc(50% - 20);
}
</style>