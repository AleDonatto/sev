<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="<p>Conceptos Básicos</p>">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl mt-10 bg-color mx-10">
                        <v-col cols="12">
                            <p class="text-center font-size-36 font-avenir">
                                <span class="font-weight-bold">Volt:</span> unidad de medicion de fuerza eléctrica.
                            </p>
                        </v-col>
                        <v-col cols="5" align="center">
                            <p class="font-weight-bold font-avenir font-size-34">Corriente Directa</p>
                            <v-row justify="center">
                                <v-col cols="6">
                                    <v-img :src="pila" max-height="220"></v-img>
                                    <p class="font-weight-bold font-avenir font-size-24">9 V</p>
                                </v-col>
                                <v-col cols="6">
                                    <v-img :src="bateria" max-height="219"></v-img>
                                    <p class="font-weight-bold font-avenir font-size-24">12 V</p>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="1">
                            <hr class="line-vertical">
                        </v-col>
                        <v-col cols="5">
                            <p class="font-weight-bold font-avenir text-center font-size-34">Corriente Alterna</p>
                            <v-row justify="center">
                                <v-col cols="12">
                                    <v-img :src="contacto" max-height="220"></v-img>
                                    <v-row justify="center" class="mx-10">
                                        <v-col cols="6" align="center">
                                            <p class="font-avenir">El voltaje hace referencia a la “cantidad” de corriente</p>
                                        </v-col>
                                        <v-col cols="6" align="center">
                                            <p class="font-weight-bold font-avenir font-size-24">110 V</p>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>    
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
import pila from '@/assets/electricidad/pila.png'
import bateria from '@/assets/electricidad/bateria.png'
import contacto from '@/assets/electricidad/contacto.png'
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}
.line-vertical{
    border: 1px 1px;
    border-left: 1px solid;
    height: 100%;
    width: 1px;    
    border-color: white;   
    z-index: 1;
}
</style>