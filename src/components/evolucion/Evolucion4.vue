<template>
    <div>
        <content-template title="PRÓXIMAMENTE" subtitle='<p>Evolución <br/> <span class="font-weight-bold">de la movilidad</span></p>'>
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row no-gutters class="mt-2">
                        <v-col cols="6">
                            <v-img :src="camioneta" max-height="220"></v-img>
                        </v-col>
                        <v-col cols="6">
                            <v-img :src="trailer" max-width="550"></v-img>
                        </v-col>

                        <v-col cols="6">
                            <v-img :src="sedan" max-height="220"></v-img>
                        </v-col>
                        <v-col cols="6">
                            <v-img :src="cars" max-heigth="220"></v-img>
                        </v-col>
                    </v-row>

                    <v-row no-gutters>
                        <v-col cols="12" align-self="center">
                            <div class="text-center bg-gray">
                                <span class="font-avenir font-size-48 text-white">Autos eléctricos (BEV) y otras tecnologías 0 emisiones</span>
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
import camioneta from '@/assets/evolucion/camioneta.png'
import trailer from '@/assets/evolucion/trailer.png'
import sedan from '@/assets/evolucion/sedan.png'
import cars from '@/assets/evolucion/cars.png' 
</script>

<style scoped>
.bg-gray{
    background-color: #B3B3B3;
}
</style>