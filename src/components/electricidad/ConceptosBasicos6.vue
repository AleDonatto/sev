<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Conceptos básicos">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row class="" justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row class="rounded-xl bg-color mx-10">
                        <v-col cols="12" align="center">
                            <p class="font-avenir font-size-34"><span class="font-weight-bold">Watt:</span> unidad de medición de la potencia eléctrica</p>
                            <p class="font-weight-bold font-avenir font-size-34">Watt = Volt X Amper</p>
                        </v-col>


                        <v-col cols="5" align="center">
                            <v-img :src="foco" max-height="230"></v-img>
                            <p class="font-weight-bold font-avenir font-size-24">60 W</p>
                        </v-col>
                        <v-col cols="1" align="center">
                            <hr class="vertical-line">
                        </v-col>
                        <v-col cols="5" align="center">
                            <v-img :src="foco" max-height="230"></v-img>
                            <p class="font-weight-bold font-avenir text-center font-size-24">100 W</p>
                        </v-col>
                    </v-row>

                    <v-snackbar v-model="snackbar" location="bottom right" color="#FDBD31" timeout="10000" class="mx-16" height="200" width="320" rounded="xl" multi-line vertical>
                        <p class="font-weight-bold text-black font-avenir font-size-20 px-5 py-4">
                            A mayor potencia eléctrica, mayor consumo de energía.
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
import foco from '@/assets/electricidad/foco.png'
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