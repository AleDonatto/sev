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
                                    <v-card-text class="font-avenir font-size-22">
                                        En la actualidad, la mayor parte de los usuarios han reemplazado las bombillas 
                                        tradicionales (incandescentes) como la de la izquierda por focos de bajo consumo 
                                        (casi siempre LEDs) como el de la derecha. En este ejemplo, se tiene un ahorro 
                                        impresionante ya que el foco de LED consume 8 Watts y emite la luz equivalente a una 
                                        bombilla de 60 Watts.
                                        <br><br>
                                        El ahorro que genera el foco de LED se debe principalmente a que no se calienta como 
                                        lo hace una bombilla incandescente.
                                    </v-card-text>
                                </v-card>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl bg-color mx-10">
                        <v-col cols="12" align="center" class="animate__animated animate__backInDown">
                            <p class="font-avenir" :class="{'font-size-34': windowHeight>900, 'font-size-24': windowHeight<700}">
                                <span class="font-weight-bold">Watt:</span> unidad de medición de la potencia eléctrica
                            </p>
                            <p class="font-avenir font-weight-bold" :class="{'font-size-34': windowHeight>900, 'font-size-24': windowHeight<700}">Watt = Volt X Amper</p>
                        </v-col>

                        <v-col cols="5" class="center animate__animated animate__backInLeft" >
                            <v-img :src="foco" :max-height="windowHeight>900 ? '230': '180'"></v-img>
                            <p class="font-weight-bold text-center font-size-24">60W</p>
                        </v-col>
                        <v-col cols="1">
                            <hr class="vertical-line">
                        </v-col>
                        <v-col cols="5" align="center" class="animate__animated animate__backInRight">
                            <v-img class="" :src="focoled" :max-height="windowHeight>900 ? '230': '180'"></v-img>
                            <p class="font-weight-bold font-size-24">Consume 8W Reemplaza 60W</p>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from '../templates/ContentTemplate.vue';
import user from '@/assets/evolucion/user.png'
import foco from '@/assets/electricidad/foco.png'
import focoled from '@/assets/electricidad/focoled.png'
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';

const store = useCounterStore()
const {windowHeight, windowSize} = storeToRefs(store)
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