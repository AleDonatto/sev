<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Aplicaciones prácticas">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="space-between">
                        <v-col cols="2" align="start">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                        <v-col cols="2" align="end">
                            <v-img :src="bateriasev" max-height="310" class="position-image"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl mx-10 bg-color position-box">
                        <v-col cols="12" align="center" class="mt-8">
                            <p class="font-avenir font-size-30">Las <span class="font-weight-bold">características</span> de un bateria del <span class="font-weight-bold text-yellow-p">para un vehículo eléctrico:</span></p>
                        </v-col>
                        <v-col cols="9" class="my-10">
                            <div class="my-2">
                                <div class="d-inline">
                                    <p class="font-size-30"><span class="font-weight-bold pr-3">1</span> Tecnología: Litio fosfato-ferroso LiFePO4</p>
                                </div>
                            </div>
                            <div class="d-flex justify-space-between my-2">
                                <p class="font-size-30"><span class="font-weight-bold text-yellow-p pr-3">2</span> Voltaje (V): 115.2 (Lite);</p>
                                <p class="font-size-30 text-left"><span class="pl-15">294.4 (Bold)</span></p>
                            </div>
                            <div class="d-flex justify-space-between my-2">
                                <p class="font-size-30"><span class="font-weight-bold pr-3">3</span> Amper-hora (Ah): 150 (Lite);</p>
                                <p class="font-size-30 text-left"> 100 (Bold)</p>
                            </div>
                            <div class="d-flex justify-space-between my-2">
                                <p class="font-size-30"><span class="font-weight-bold text-yellow-p pr-3">4</span> Capacidad: 17.2 (Lite);</p>
                                <p class="font-size-30 text-left"> 24.9 (Bold)</p>
                            </div>
                            <div class="d-flex justify-space-between my-2">
                                <p class="font-size-30"><span class="font-weight-bold pr-3">5</span> Enfriamiento: aire (Lite);</p>
                                <p class="font-size-30 text-left">Líquido (Bold)</p>
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
import bateriasev from '@/assets/electricidad/bateria-sev.png'
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}

.position-image{
    margin-top: 80px;
}
.position-box{
    margin-top: -150px;
}
</style>