<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Conceptos básicos">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-color rounded-xl mx-10">
                        <v-col cols="12" align="center" class="animate__animated animate__backInDown">
                            <h1 class="">Inversior de corriente o convertidor de corriente</h1>
                        </v-col>
                        <v-col cols="5" class="animate__animated animate__backInLeft">
                            <v-img :src="convertidor" max-height="220"></v-img>
                            <p class="font-avenir font-size-20 mx-7 mt-5">Convertidor de corriente: cambia de corriente alterna a corriente directa.</p>
                            <p class="font-avenir font-size-20 mx-7 mt-3 mb-5">
                                Ejemplo: el “cuadrito” para conectar un celular cambia de 110 V de CA (la toma de pared) a 5 V de CD (la salida a USB)
                            </p>
                        </v-col>
                        <v-col cols="1">
                            <hr class="vertical-line">
                        </v-col>
                        <v-col cols="5" class="animate__animated animate__backInRight">
                            <v-img :src="inversor" max-height="207"></v-img>
                            <p class="font-avenir font-size-20 mx-7 mt-5">Inversor de corriente: cambia de corriente directa a corriente alterna.</p>
                            <p class="font-avenir font-size-20 mx-7 mt-3 mb-5">
                                Ejemplo: un inversor de corriente para uso automotriz puede conectarse a la toma de accesorios de un auto 12 V de CD y transformarlo a 110 V de CA para conectar otros aparatos.
                            </p>
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
import inversor from '@/assets/electricidad/inversor.png'
import convertidor from '@/assets/electricidad/convertidor.png'

</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}

.vertical-line{
    border: 1px 1px;
    border-left: 1px solid;
    height: 100%;
    width: 1px;    
    border-color: white;   
    z-index: 1;
}
</style>