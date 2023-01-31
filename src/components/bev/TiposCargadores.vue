<template>
    <div>
        <content-template subtitle="Tipos de cargadores">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mx-10 px-5 py-5 rounded-xl bg-boxstep-content animate__animated animate__backInLeft">
                        <v-col cols="3">
                            <v-img :src="conector1" max-height="240"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="conector2" max-height="240"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="conector3" max-height="240"></v-img>
                        </v-col>
                        <v-col cols="3">
                            <v-img :src="conector4" max-height="240"></v-img>
                        </v-col>

                        <v-col cols="4">
                            <v-img :src="conector5" max-height="210"></v-img>
                        </v-col>
                        <v-col cols="4">
                            <v-img :src="conector6" max-height="210"></v-img>
                        </v-col>
                        <v-col cols="4">
                            <v-img :src="conector7" max-height="210"></v-img>
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
import conector1 from '@/assets/cargando/enchufe1.png'
import conector2 from '@/assets/cargando/Enchufe2.png'
import conector3 from '@/assets/cargando/Enchufe3.png'
import conector4 from '@/assets/cargando/Enchufe4.png'
import conector5 from '@/assets/cargando/Enchufe5.png'
import conector6 from '@/assets/cargando/Enchufe6.png'
import conector7 from '@/assets/cargando/Enchufe7.png'
</script>

<style scoped>

</style>