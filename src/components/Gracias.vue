<template>
    <div>
        <main-template>
            <template v-slot:content>
                <v-row justify="start" class="bg-gracias mt-2">
                    <v-row justify="start" class="mt-10">
                        <v-col cols="4">
                            <v-img :src="userLG" max-height="350"></v-img>
                        </v-col>
                    </v-row>
                    <v-row justify="start" class="mt-0 mb-16">
                        <v-col cols="5">
                            <p class="font-avenir font-size-26 text-white px-10">
                                Haz acabado el primer módulo de nuestra series de cursos que tenemos preparados para ti.
                                <span class="font-weight-bold">Estamos muy contentos de que hayas formado una parte activa de este curso</span>
                                y de parte del equipo de SEV agradecemos el tiempo que le dedicaste al curso. <br>
                                <span class="text-yellow-p font-weight-bold">¡Muchas Gracias!</span>
                            </p>
                        </v-col>
                    </v-row>
                </v-row>
            </template>
        </main-template>
    </div>
</template>

<script setup>
import MainTemplate from './templates/MainTemplate.vue';
import userLG from '@/assets/user-lg.png'
</script>

<style scoped>
.bg-gracias {
  background-image: url('../assets/gracias.png');
  background-size: cover;
  height: 86vh;
}
</style>