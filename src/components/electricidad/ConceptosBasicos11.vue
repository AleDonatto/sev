<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Conceptos básicos">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-10 bg-color rounded-xl">
                        <v-col cols="12" class="animate__animated animate__backInLeft">
                            <p class="font-avenir font-size-30">¿Y qué pasa si tengo panales fotovoltaícos?</p>
                        </v-col>
                        <v-col cols="1" align-self="center" align="center" class="animate__animated animate__backInLeft">
                            <p class="vertical-text font-avenir font-weight-bold font-size-30">Consumo Historico</p>
                        </v-col>
                        <v-col cols="11" class="animate__animated animate__backInRight">
                            <v-img :src="consumo" max-height="450" @click="images.visible = !images.visible"></v-img>
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
import { reactive, ref } from '@vue/reactivity';

import VueEasyLightbox from 'vue-easy-lightbox'
//import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

const images = reactive({
    imgs: consumo,
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