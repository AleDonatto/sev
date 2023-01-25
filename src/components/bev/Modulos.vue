<template>
    <div>
        <content-template subtitle="<p class='font-avenir'>Cargando un BEV</p>">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="h-100 mx-10 px-5 py-5 rounded-xl bg-boxstep-content">
                        <v-col cols="3">
                            <v-card class="rounded-lg" height="580">
                                <template v-slot:title>
                                    <div class="bg-yellow-p rounded-lg">
                                        <p class="px-5 py-2 font-weight-bold font-avenir font-size-28 text-center">Modo 1</p>
                                    </div>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col cols="3">
                            <v-card class="rounded-lg" height="580">
                                <template v-slot:title>
                                    <div class="bg-yellow-p rounded-lg">
                                        <p class="px-5 py-2 font-weight-bold font-avenir font-size-28 text-center">Modo 2</p>
                                    </div>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col cols="3">
                            <v-card class="rounded-lg" height="580">
                                <template v-slot:title>
                                    <div class="bg-yellow-p rounded-lg">
                                        <p class="px-5 py-2 font-weight-bold font-avenir font-size-28 text-center">Modo 3</p>
                                    </div>
                                </template>
                            </v-card>
                        </v-col>
                        <v-col cols="3">
                            <v-card class="rounded-lg" height="580">
                                <template v-slot:title>
                                    <div class="bg-yellow-p rounded-lg">
                                        <p class="px-5 py-2 font-weight-bold font-avenir font-size-28 text-center">Modo 4</p>
                                    </div>
                                </template>
                            </v-card>
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
</script>

<style scoped>

</style>