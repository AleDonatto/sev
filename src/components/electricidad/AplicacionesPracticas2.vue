<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Aplicaciones prácticas">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-color mx-10 rounded-xl">
                        <v-col cols="12">
                            <p class="text-center font-avenir font-size-24">El tiempo de carga de una batería dependerá principalmente de:</p>
                        </v-col>
                        <v-col cols="12" align="start" class="px-10">
                            <p class="">1 La Capacidad de batería (kWh)</p>
                            <p class="">2 Estado de carga (% de bateria)</p>
                            <p class="">3 La potencia del cargador utilizado (Voltaje X Amperaje/1,000) kW.</p>
                        </v-col>
                        <v-col cols="12">
                            <p class="font-avenir font-size-24">
                                Ejemplo: ¿Cuanto tiempo tardará en cargarse de 20% hasta 100% la bateria de un SEV E-WAN Bold
                                (29.4 kWh)?
                            </p>
                        </v-col>
                        <v-col cols="12" align="start" class="px-14">
                            <p class="">
                                Potencia del cargador: 220 V X 10 A/100 = 2.2 kW.
                            </p>
                            <p>29.4 kWh X 0.8 = 23.5 kWh.</p>
                            <p>23.5 kWh / 2.2 kW = 10.6 h.</p>
                            <p></p>
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
.bg-color{
    background-color: #EDE6E6;
}
</style>