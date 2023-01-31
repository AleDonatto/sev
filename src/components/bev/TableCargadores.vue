<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div class="mt-4">
                    <v-row justify="start" class="mb-0">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="start" class="mx-10 px-5 py-5 rounded-xl bg-boxstep-content mt-0">
                        <v-col cols="3" align-self="center" align="end" class="animate__animated animate__backInLeft">
                            <p class="font-weight-bold font-avenir font-size-22 text-right">No todos los</p>
                            <p class="font-weight-bold font-avenir font-size-22 text-right">conectores son</p>
                            <p class="font-avenir font-size-22 text-right"><span class="font-weight-bold">Iguales,</span> hay que</p>
                            <p class="font-weight-bold font-avenir font-size-22 text-right text-yellow-p">escoger el adecuado</p>
                            <p class="font-avenir font-size-22 text-right">ára cada vehiculo</p>
                        </v-col>
                        <v-col cols="9" class="animate__animated animate__backInRight">
                            <v-img :src="tableCargadore" cover></v-img>
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
import tableCargadore from '@/assets/cargando/tableCargadores.png'
</script>

<style scoped>

</style>