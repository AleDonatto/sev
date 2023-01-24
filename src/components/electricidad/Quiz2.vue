<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="mt-6 border-yellow">
                                <p class="font-avenir font-size-24 mx-5 py-5 px-5">
                                    Los principales factores que determinan el tiempo de carga de una batería son:
                                </p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="11">
                            <v-radio-group color="#FDBD31">
                                <v-radio value="1" @input="answers.a1 = $event.target.value">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">
                                            El tamaño de la batería, el nivel de carga deseado y la potencia del cargador
                                        </p>
                                    </template>
                                </v-radio>

                                <v-radio value="2" @input="answers.a2 = $event.target.value">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">
                                            El peso de la batería, el contacto utilizado y la potencia del motor
                                        </p>
                                    </template>
                                </v-radio>

                                <v-radio value="3" @input="answers.a3 = $event.target.value">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">
                                            El tamaño de la batería, la potencia del motor y el OBD
                                        </p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" align="center">
                            <v-btn class="text-none" color="#FDBD31" rounded @click="checkQuiz" :disabled="answers.a2 === null">
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
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { onMounted } from '@vue/runtime-core';

const answers = reactive({
    a1: null, 
    a2: null, 
    a3: null
})

const store = useCounterStore()
const {NextStep} = store 
const {canNext} = storeToRefs(store)
const router = useRoute()

onMounted( () => {
    canNext.value = false
} )

function checkQuiz(){
    if(answers.a2 === '2'){
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