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
                        <v-col cols="12">
                            <p class="font-avenir font-size-30">¿Y qué pasa si tengo panales fotovoltaícos?</p>
                        </v-col>
                        <v-col cols="1" align-self="center" align="center">
                            <p class="vertical-text font-avenir font-weight-bold font-size-30">Consumo Historico</p>
                        </v-col>
                        <v-col cols="11">
                            <v-img :src="consumo" max-height="450"></v-img>
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
import consumo from '@/assets/electricidad/consumo.png'
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}

.vertical-text{
    writing-mode: vertical-rl;
    text-orientation: sideways;
    rotate: calc(180deg);
}
</style>