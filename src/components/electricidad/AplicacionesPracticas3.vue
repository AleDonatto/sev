<template>
    <div>
        <content-template title="Electricidad" subtitle="Aplicaciones prácticas">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl bg-color mx-10">
                        <v-col cols="12" align="start">
                            <p class="">El costo de carga de una bateria dependerá de: </p>
                            <p class="">1 La capacidad de la bateria (kWh) y su estado de carga.</p>
                            <p class="">2 El precio por kWh sumistrado.</p>
                        </v-col>

                        <v-col cols="12">
                            <p class="">Ejercicio: ¿Cuanto cuesta cargar 20% hasta 100% de la bateria de un SEV E-WAN Bold (29.4 kWh)?</p>
                            <p class="">Consumo básico: $0.859/kWh 🡪 23.5 X 0.859 = $20.18.</p>
                            <p class="">Consumo excedente: $3.042/kWh 🡪 23.5 X 3.042 = $71.48.</p>
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