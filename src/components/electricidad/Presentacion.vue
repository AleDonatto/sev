<template>
    <div>
        <main-template>
            <template v-slot:content>
                <v-row class="mt-3">
                    <v-col cols="12">
                        <v-row>
                            <v-col cols="5">
                                <v-btn @click="continueStep">Continuar</v-btn>
                            </v-col>
                            <v-col cols="7"></v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </template>
        </main-template>
    </div>
</template>

<script setup>
import MainTemplate from '../templates/MainTemplate.vue';
import { useCounterStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';

const store = useCounterStore()
const {step} =  storeToRefs(store)
const {NextStep} = store 
const router = useRoute()

function continueStep(){
    let route = router.path
    NextStep(route)
}
</script>

<style scoped>
</style>