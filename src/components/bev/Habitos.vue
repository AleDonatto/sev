<template>
    <div>
        <content-template subtitle="Habitos de Carga de un BEV">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-boxstep-content rounded-xl mx-10 px-5 py-5">
                        <v-col cols="12" class="animate__animated animate__backInDown">
                            <p class="font-avenir font-size-22">
                                <span class="font-weight-bold">El comportamiento o hábitos de recarga de un</span> <span class="text-yellow-p font-weight-bold">BEV</span> por parte de un cliente son 
                                muy distintos a los <span class="fonbt-weight-bold">hábitos de recarga de un tanque de combustible.</span>
                            </p>
                        </v-col>
                        <v-col cols="4" class="animate__animated animate__backInLeft">
                            <ul class="font-avenir font-size-22 px-7">
                                <li>
                                    La recarga de un vehículo eléctrico se puede integrar de manera fácil al día a día del usuario 
                                    aprovechando los periodos en los que el vehículo está estacionado.
                                </li>
                                <li>
                                    Los requerimientos de carga oscilan entre el 20% y 80%, y difícilmente se realizara una carga de 0% a 100%.
                                </li>
                            </ul>
                        </v-col>
                        <v-col cols="8" align="center" align-self="center" class="animate__animated animate__backInRight">
                            <v-img :src="habitoscar" max-height="310"></v-img>
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
import habitoscar from '@/assets/cargando/habitoscar.png'
</script>

<style>

</style>