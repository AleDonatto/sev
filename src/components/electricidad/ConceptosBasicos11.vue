<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Conceptos Básicos">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz nimate__animated animate__backInLeft pa-1" :class="{'mt-5': windowHeight > 900, 'mt-3': windowHeight < 700 }">
                                <v-card height="130" class="overflow-auto rounded-lg ma-1">
                                    <v-card-text class="font-size-22 font-avenir">
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
                            <p class="font-avenir" :class="{'font-size-30': windowHeight>900, 'font-size-22': windowHeight<700}">¿Y qué pasa si tengo panales fotovoltaícos?</p>
                        </v-col>
                        <v-col cols="1" align-self="center" align="center" class="animate__animated animate__backInLeft">
                            <p class="vertical-text font-avenir font-weight-bold"  :class="{'font-size-30': windowHeight>900, 'font-size-22': windowHeight<700}">Consumo Historico</p>
                        </v-col>
                        <v-col cols="11" class="animate__animated animate__backInRight" v-if="count === 0">
                            <v-img :src="consumo" :max-height="windowHeight>900 ? '450': '260'"  @click="images.visible = !images.visible"></v-img>
                        </v-col>
                        <v-col cols="11" class="animate__animated animate__backInRight" v-if="count === 1" align-self="xcenter">
                            <v-img :src="importante" :max-height="windowHeight>900 ? '450': '260'"  @click="images.visible = !images.visible"></v-img>
                        </v-col>
                        <v-col cols="11" class="animate__animated animate__backInRight" v-if="count === 2" align-self="xcenter">
                            <v-img :src="consumo" :max-height="windowHeight>900 ? '310': '160'"  @click="images.visible = !images.visible"></v-img>
                            <v-img :src="importante" :max-height="windowHeight>900 ? '210': '110'"  @click="images.visible = !images.visible"></v-img>
                        </v-col>
                    </v-row>

                    <vue-easy-lightbox escDisabled :visible="images.visible" :imgs="images.imgs" :index="images.index" @hide="handleHide">
                       
                        <template v-slot:toolbar="{ toolbarMethods }">
                            <v-row justify="center"  >
                                <v-col cols="4" align="center" class="position-options">
                                    <v-btn-toggle v-model="toggle" color="white">
                                        <v-btn icon="mdi-magnify-plus-outline" @click="toolbarMethods.zoomIn"></v-btn>
                                        <v-btn icon="mdi-magnify-minus-outline" @click="toolbarMethods.zoomOut"></v-btn>
                                        <v-btn icon="mdi-rotate-left" @click="toolbarMethods.rotateLeft"></v-btn>
                                        <v-btn icon="mdi-rotate-right" @click="toolbarMethods.rotateRight"></v-btn>
                                    </v-btn-toggle>
                                </v-col>
                            </v-row>
                        </template>
                                
                    </vue-easy-lightbox>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from '../templates/ContentTemplate.vue';
import user from '@/assets/evolucion/user.png'
import consumo from '@/assets/electricidad/consumo.png'
import importante from '@/assets/electricidad/importante.png'
import { reactive, ref } from '@vue/reactivity';
import { useCounterStore } from '../../stores/counter';
import VueEasyLightbox from 'vue-easy-lightbox'
import { storeToRefs } from 'pinia';
import { onMounted } from '@vue/runtime-core';
//import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

const store = useCounterStore()
const {windowHeight, windowSize, count} = storeToRefs(store)

onMounted(() => {
    count.value = 0
})

const images = reactive({
    imgs: [consumo, importante],
    visible: false,
    index: 0
})

const toggle = ref(null)

function handleHide() {
    images.visible = false
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