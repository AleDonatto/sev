<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Aplicaciones Prácticas">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="space-between">
                        <v-col cols="2" align="start">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="2" align="end" class="animate__animated animate__backInDown">
                            <v-img :src="bateriasev" max-height="310" class="" :class="{'position-image': windowHeight>900, 'position-image-md': windowHeight<700}"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl mx-10 bg-color" :class="{'position-box': windowHeight>900, 'position-box-md': windowHeight<700}">
                        <v-col cols="12" align="center" class="mt-8 animate__animated animate__backInLeft" >
                            <p class="font-avenir" :class="{'font-size-30':windowHeight>900, 'font-size-24': windowHeight<700}">Las <span class="font-weight-bold">características</span> de un bateria del <span class="font-weight-bold text-yellow-p">para un vehículo eléctrico:</span></p>
                        </v-col>
                        <v-col cols="9" class="animate__animated animate__backInRight" :class="{'my-10 ': windowHeight>900, 'my-5': windowHeight<700}">
                            <div class="my-2">
                                <div class="d-inline">
                                    <p class="" :class="{'font-size-30':windowHeight>900, 'font-size-22': windowHeight<700}">
                                        <span class="font-weight-bold pr-3">1</span> Tecnología: Litio fosfato-ferroso LiFePO4
                                    </p>
                                </div>
                            </div>
                            <div class="d-flex justify-space-between my-2">
                                <p class="" :class="{'font-size-30':windowHeight>900, 'font-size-22': windowHeight<700}"><span class="font-weight-bold text-yellow-p pr-3">2</span> Voltaje (V): 115.2 (Lite);</p>
                                <p class="text-left" :class="{'font-size-30':windowHeight>900, 'font-size-22': windowHeight<700}"><span class="pl-15">294.4 (Bold)</span></p>
                            </div>
                            <div class="d-flex justify-space-between my-2">
                                <p class="" :class="{'font-size-30':windowHeight>900, 'font-size-24': windowHeight<700}"><span class="font-weight-bold pr-3">3</span> Amper-hora (Ah): 150 (Lite);</p>
                                <p class="text-left" :class="{'font-size-30':windowHeight>900, 'font-size-22': windowHeight<700}"> 100 (Bold)</p>
                            </div>
                            <div class="d-flex justify-space-between my-2">
                                <p class="" :class="{'font-size-30':windowHeight>900, 'font-size-24': windowHeight<700}"><span class="font-weight-bold text-yellow-p pr-3">4</span> Capacidad: 17.2 (Lite);</p>
                                <p class="text-left" :class="{'font-size-30':windowHeight>900, 'font-size-22': windowHeight<700}"> 24.9 (Bold)</p>
                            </div>
                            <div class="d-flex justify-space-between my-2">
                                <p class="" :class="{'font-size-30':windowHeight>900, 'font-size-22': windowHeight<700}"><span class="font-weight-bold pr-3">5</span> Enfriamiento: aire (Lite);</p>
                                <p class="text-left" :class="{'font-size-30':windowHeight>900, 'font-size-22': windowHeight<700}">Líquido (Bold)</p>
                            </div>
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
import bateriasev from '@/assets/electricidad/bateria-sev.png'
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { onMounted } from '@vue/runtime-core';

const store = useCounterStore()
const {canNext, windowHeight, windowSize} = storeToRefs(store)

onMounted(() => {
    canNext.value = true
})
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}

.position-image{
    margin-top: 80px;
}

.position-image-md{
    margin-top: 10px;
}
.position-box{
    margin-top: -150px;
}

.position-box-md{
    margin-top: -80px;
}
</style>