<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                        <v-col cols="9" class="">
                            <div class="border-yellow mt-6">
                                <p class="font-avenir font-size-24 mx-5 py-5 px-5">El voltaje y el amperaje determinan la potencia <span class="text-yellow-p">(watt):</span></p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="3">
                            <v-radio-group color="#FDBD31">
                                <v-radio value="cierto" @input="answers.a1 = $event.target.value">
                                    <template v-slot:label>
                                        <p class="font-avenir- font-size-24">Cierto</p>
                                    </template>
                                </v-radio>

                                <v-radio value="falso" @input="answers.a1 = $event.target.value">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">Falso</p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" align="center">
                            <v-btn class="text-none" rounded color="#FDBD31" @click="checkQuiz" :disabled="answers.a1 !== 'falso'">
                                <span class="font-weight-bold">Continuar</span>
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
import { onMounted } from '@vue/runtime-core';
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const answers = reactive({
    a1: null,
    a2: null, 
})

const store = useCounterStore()
const {NextStep} = store
const {canNext, windowHeight, windowSize} = storeToRefs(store)
const router = useRoute()

onMounted(() => {
    canNext.value = false
})

function checkQuiz(){
    if(answers.a1 === 'falso'){
        let route = router.path
        NextStep(route)
    }
}
</script>

<style scoped>
.border-yellow{
    border: 5px solid #FDBD31;
    border-radius: 15px;
}
</style>