<template>
    <div>
        <content-template subtitle="REPASO">
            <template v-slot:content>
                <div class="" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" :max-height="windowHeight>900 ? '170': windowHeight<660 ? '140': '170'"></v-img>
                        </v-col>
                        <v-col cols="9" align="start">
                            <div class="box-color-instructions py-6 px-4" :class="{'mt-10': windowHeight>900, 'mt-3': windowHeight<700}">
                                <p class="font-avenir font-size-26">
                                    Las siglas <span class="text-yellow front-weight-bold">BEV</span> (por su acrónimo en inglés), corresponden a:
                                </p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row class="mx-16" justify="center" :class="{'mt-10': windowHeight>900, 'mt-0': windowHeight<700}">
                        <v-col cols="12" lg="5" md="6">
                            <v-radio-group v-if="answeredQuiz3 === false">
                                <v-radio value="battery-efficient" class="my-4" color="#FDBD31" @input="answers.a1 = $event.target.value" >
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">Battery Efficient Vehicle</p>
                                    </template>
                                </v-radio>
                                <v-radio value="beatifull-efficent" class="my-4" color="#FDBD31" @input="answers.a1 = $event.target.value">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">Beautiful Efficient Vehicle</p>
                                    </template>
                                </v-radio>
                                <v-radio value="battery-electric" class="my-4" color="#FDBD31" @input="answers.a1 = $event.target.value">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">Battery Electric Vehicle</p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                            <v-radio-group v-else v-model="response">
                                <v-radio value="battery-efficient" class="my-4" color="#FDBD31" disabled>
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">Battery Efficient Vehicle</p>
                                    </template>
                                </v-radio>
                                <v-radio value="beatifull-efficent" class="my-4" color="#FDBD31" disabled>
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">Beautiful Efficient Vehicle</p>
                                    </template>
                                </v-radio>
                                <v-radio value="battery-electric" class="my-4" color="#FDBD31" disabled>
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">Battery Electric Vehicle</p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>

                    <v-row justify="center" :class="{'mt-15': windowHeight>900, 'mt-0': windowHeight<700}">
                        <v-col cols="2">
                            <v-btn class="" rounded color="#FDBD31" :disabled="answers.a1 !== 'battery-efficient'"
                            @click="checkQuiz">
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
import { useCounterStore } from '../../stores/counter'
import { storeToRefs } from 'pinia';
import { onMounted, reactive, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const store = useCounterStore()
const {NextStep} = store
const {answeredQuiz3,canNext, windowHeight, windowSize} = storeToRefs(store)
const router = useRoute()

onMounted(() => {
    if(answeredQuiz3.value === false){
        canNext.value = false
    }
})

const answers = reactive({
    a1: null,
    a2: null, 
    a3: null
})

const response = ref('battery-efficient')

function checkQuiz(){
    if(answers.a1 === 'battery-efficient'){
        answeredQuiz3.value = true
        let route = router.path
        NextStep(route)
    }
}
</script>

<style scoped>
.box-color-instructions{
    border: 1px 1px;
    border-style: solid;
    border-color: #FDBD31;
    border-width: 4px;
    border-radius: 10px;
}

.text-yellow{
    color: #FDBD31;
}

.v-slider--horizontal .v-slider__track-container{
    height: 16px;
    top: 10%
}
.v-slider__thumb-label{
    background-color: transparent !important;
}
.v-slider__thumb{
    display: none;
}
.v-slider__track-fill{
    border-radius: 20px;
}
.v-slider__track-background{
    border-radius: 20px;
}
</style>