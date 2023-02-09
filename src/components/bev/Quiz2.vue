<template>
    <div>
        <content-template title="REPASO DE SECCION" subtitle="Cargando un BEV">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-box-quiz">
                                <p class="py-5 px-4 font-avenir font-size-24">
                                    Todos los vehículos eléctricos pueden cargar utilizando supercargadores de CD
                                </p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="12" lg="4" md="6">
                            <v-radio-group>
                                <v-radio class="my-4" color="#FDBD31" @input="answers.a1 = $event.target.value" value="cierto">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">Cierto</p>
                                    </template>
                                </v-radio>
                                <v-radio value="falso" class="my-4" color="#FDBD31" @input="answers.a1 = $event.target.value" >
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">Falso</p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="2" align="center">
                            <v-btn rounded color="#FDBD31" :disabled="answers.a1 !== 'falso'" @click="checkQuiz">
                                <span class="text-black text-none font-lato font-size-20">Continuar</span>
                            </v-btn>
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
import { reactive } from '@vue/reactivity';
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { onMounted } from '@vue/runtime-core';

const answers = reactive({
    a1: null, 
    a2: null,
})
const store = useCounterStore()
const {canNext, windowHeight, windowSize} = storeToRefs(store)
const {NextStep} = store

onMounted(() => {
    canNext.value = false
})

const router = useRoute()

function checkQuiz(){
    if(answers.a1 === 'falso'){
        const path = router.path 
        NextStep(path)
    }
}

</script>

<style scoped>

</style>