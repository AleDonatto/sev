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

                    <v-row justify="center" class="mx-10 rounded-xl bg-color">
                        <v-col cols="12" align="start">
                            <p class="front-avenir font-size-30"><span class="font-weight-bold">Watt:</span> unidad de medicion de la potencía eláctrica.</p>
                            <p class="font-avenit font-size-30"><span class="font-weight-bold">Watt:</span>Volt X Amper.</p>
                        </v-col>

                        <v-col cols="5" align="center">
                            <v-img :src="cubito" max-height="230"></v-img>
                            <p class="font-weight-bold font-size-22 mt-2">5 Volts, <br> 1 Amper <br> 5W</p>
                        </v-col>
                        <v-col cols="1" align="center">
                            <hr class="vertical-line">
                        </v-col>
                        <v-col cols="5" align="center">
                            <v-img :src="cubo" max-height="230"></v-img>
                            <p class="font-weight-bold font-size-22 mt-2">5 Volts, <br> 2.1 Amper <br> 10.2W</p>
                        </v-col>
                    </v-row>

                    <v-snackbar v-model="snackbar" location="bottom right" color="#FDBD31" timeout="10000" class="mx-16" height="200" width="320" rounded="xl" multi-line vertical>
                        <p class="font-weight-bold text-black font-avenir font-size-20 px-5 py-4">
                            <span class="text-white">A</span> mayor potencia eléctrica <span class="text-white">en un cargador</span> más rápido <span class="text-white">se puede cargar una batería.</span>
                        </p>
                    </v-snackbar>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from '../templates/ContentTemplate.vue';
import user from '@/assets/evolucion/user.png'
import cubito from '@/assets/electricidad/cubito.png'
import cubo from '@/assets/electricidad/cubo.png'
import { ref } from '@vue/reactivity';

const snackbar = ref(true)
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}

.vertical-line{
    border: 1px 1px;
    border-left: 1px solid;
    height: 100%;
    width: 1px;    
    border-color: white;   
    z-index: 1;
}
</style>