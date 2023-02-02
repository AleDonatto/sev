<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-yellow mt-6">
                                <p class="font-avenir font-size-24 px-5 py-5 mx-5">La baterías utilizadas en los vehículos SEV-E-wan son:</p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="8">
                            <v-radio-group color="#FDBD31">
                                <v-radio value="1" @input="answers.a1 = $event.target.value">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">
                                            De Litio fosfato-ferros LiFePO4.
                                        </p>
                                    </template>
                                </v-radio>
                                <v-radio value="2" @input="answers.a1 = $event.target.value">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">
                                            De iones de Litio de larga durabilidad.
                                        </p>
                                    </template>
                                </v-radio>
                                <v-radio value="3" @input="answers.a1 = $event.target.value">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">
                                            De polímero de Litio.
                                        </p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="12" align="center">
                            <v-btn color="#FDBD31" class="rounded-xl text-none" @click="checkQuiz" :disabled="answers.a1 !== '2'">
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
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { onMounted, reactive } from '@vue/runtime-core';
import { useRoute } from 'vue-router';

const store = useCounterStore()
const {NextStep} = store
const {canNext, windowHeight, windowSize} = storeToRefs(store) 
const router = useRoute()

const answers = reactive({
    a1: null, 
    a2: null, 
    a3: null
})

onMounted(() => {
    canNext.value = false
})

function checkQuiz(){
    if(answers.a1 === '2'){
        const path = router.path 
        NextStep(path)
    }
}
</script>

<style scoped>
.border-yellow{
    border: 5px solid #FDBD31;
    border-radius: 15px;
}
</style>