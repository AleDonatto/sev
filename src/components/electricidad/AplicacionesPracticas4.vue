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

                    <v-row justify="center" class="rounded-xl bg-color mx-10">
                        <v-col cols="12">
                            <p>
                                La autonomía hace referencia a la distancia que puede recorrer un vehículo eléctrico con una carga completa de su batería. Para SEV E-WAN la autonomía es de 200 km (versión Lite) y 335 km (versión Bold) de acuerdo a la homologación NEDC.
                            </p>
                            <p>Existen diferentes homologaciones.</p>
                            <ul>
                                <li>
                                    NEDC (New European Driving Cycle):
                                    <ul>
                                        <li>Prueba realizada en un ciclo de 20 minutos.</li>
                                        <li>Distancia recorrida de 11 km.</li>
                                        <li>2 fases: conducción urbana 66% y conducción no urbana 34%.</li>
                                        <li>Velocidad promedio 34 km/h,</li>
                                        <li>Velocidad máxima 120 km/h.</li>
                                        <li>Temperatura 20 – 30 °C.</li>
                                    </ul>
                                </li>
                                <li>WLPT (Worldwide Harmonized Light Vehicle Test Procedure).</li>
                            </ul>
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