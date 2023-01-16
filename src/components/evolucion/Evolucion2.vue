<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="mt-4">
                        <v-col cols="4">
                            <v-img :src="car1" max-height="240"></v-img>
                        </v-col>
                        <v-col cols="4" class="d-flex justify-space-between ">
                            <hr class="line-vertical">
                            <v-img :src="car2" max-height="240"></v-img>
                            <hr class="line-vertical">
                        </v-col>
                        <v-col cols="4">
                            <v-img :src="car3" max-height="240"></v-img>
                        </v-col>

                        <v-col cols="4">
                            <v-img :src="division" max-width="850"></v-img>
                            <div class="text-center bg-gray-1 size-box mx-1">
                                <span class="font-avenir font-size-34 font-weight-thin text-white">1885</span>
                                <p class="font-avenir font-size-22 font-weight-thin text-white mx-2">Benz motorwagen. Primer automóvil a gasolina.</p>
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <v-img :src="division" max-width="850"></v-img>
                            <div class="text-center bg-gray-2 size-box mx-1">
                                <span class="font-avenir font-size-34 font-weight-thin text-white">1895</span>
                                <p class="font-avenir font-size-22 font-weight-thin text-white">Thomas Parker. Auto eléctrico.</p>
                            </div>
                        </v-col>
                        <v-col cols="4">
                            <v-img :src="division" max-width="850"></v-img>
                            <div class="text-center bg-gray-3 size-box mx-1">
                                <span class="font-avenir font-size-34 font-weight-thin text-white">1898</span>
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
import car1 from '@/assets/evolucion/car1.png'
import car2 from '@/assets/evolucion/car2.png'
import car3 from '@/assets/evolucion/car3.png'
import division from '@/assets/evolucion/division.png'
</script>

<style scoped>
.bg-gray-1{
    background-color: #929292;
    opacity: 0.6;
}
.bg-gray-2{
    background-color: #929292;
    opacity: 0.8;
}
.bg-gray-3{
    background-color: #929292;
}

.size-box{
    height: 85px !important;
    width: 99% !important;
}
.line-vertical{
    border: 1px 1px;
    border-left: 1px solid;
    height: 100%;
    width: 1px;    
    border-color: #FDBD31;   
    z-index: 1;
}
</style>