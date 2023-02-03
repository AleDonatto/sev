<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-10 bg-color rounded-xl">
                        <v-col cols="12" class="animate__animated animate__backInDown">
                            <p class="font-avenir" :class="{'font-size-24': windowHeight>900, 'font-size-20': windowHeight<700}">
                                <span class="font-weight-bold">kWh:</span> El kilowatt hora es la undad de medida
                                de medida que se usa para medir el consumom energético.
                            </p>
                            <p class="text-center px-10" :class="{'my-5 font-size-24': windowHeight>900, 'my-1 font-size-20': windowHeight<700}">
                                Si tengo una lampara con 10 focos de 100w cada uno y lo dejo encendido durante un hora,
                                el consumo sera de un kWh.
                            </p>
                        </v-col>

                        <v-col cols="12" align="center" class="animate__animated animate__backInRight" v-if="count === 0">
                            <v-img :src="table" :max-height="windowHeight>900 ? '350': '180'"></v-img>
                        </v-col>
                        <v-col cols="12" align="center" class="animate__animated animate__backInRight" v-if="count === 1">
                            <v-img :src="table1" :max-height="windowHeight>900 ? '350': '180'"></v-img>
                        </v-col>
                        <v-col cols="12" align="center" class="animate__animated animate__backInRight" v-if="count === 2">
                            <v-img :src="table2" :max-height="windowHeight>900 ? '350': '180'"></v-img>
                        </v-col>
                        <v-col cols="12" align="center" class="animate__animated animate__backInRight" v-if="count === 3">
                            <v-img :src="table3" :max-height="windowHeight>900 ? '350': '180'"></v-img>
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
import table from '@/assets/electricidad/table.png'
import table1 from '@/assets/electricidad/table1.png'
import table2 from '@/assets/electricidad/table2.png'
import table3 from '@/assets/electricidad/table3.png'
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { onMounted } from '@vue/runtime-core';

const store = useCounterStore()
const {windowHeight, windowSize, count} = storeToRefs(store)

onMounted(() => {
    count.value = 0
})

</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}
</style>