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

                    <v-row justify="center" class="mx-10 bg-color rounded-xl">
                        <v-col cols="12" class="animate__animated animate__backInDown">
                            <p class="font-avenir font-size-24">
                                <span class="font-weight-bold">kWh:</span> El kilowatt hora es la undad de medida
                                de medida que se usa para medir el consumom energético.
                            </p>
                            <p class="text-center font-size-24 my-5 px-10">
                                Si tengo una lampara con 10 focos de 100w cada uno y lo dejo encendido durante un hora,
                                el consumo sera de un kWh.
                            </p>
                        </v-col>

                        <v-col cols="12" align="center" class="animate__animated animate__backInRight">
                            <v-img :src="table" max-height="350"></v-img>
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
import table from '@/assets/electricidad/table.png'
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}
</style>