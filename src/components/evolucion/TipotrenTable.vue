<template>
    <div>
        <content-template subtitle="Tipos de tren <br/> motriz mas comunes">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" style="height: 80px;" >
                        <v-col class="mx-5"></v-col>
                        <v-col class="bg-black mx-5">
                            <div>
                                <p class="text-center">Motor a combustión interna (ICE)</p>
                            </div>
                        </v-col>
                        <v-col class="bg-black mx-5">
                            <div>
                                <p class="text-center">Semi-hibrido (MHEV)</p>
                            </div>
                        </v-col>
                        <v-col class="bg-black mx-5">
                            <div>
                                <p class="text-center">Hibrido fuerte (Full HEV)</p>
                            </div>
                        </v-col>
                        <v-col class="bg-black mx-5">
                            <div>
                                <p class="text-center">Hibrido enchufable (PHEV)</p>
                            </div>
                        </v-col>
                        <v-col class="bg-black mx-5">
                            <div>
                                <p class="text-center">Eléctrico a baterias (BEV)</p>
                            </div>
                        </v-col>
                        <v-col class="bg-black mx-5">
                            <div>
                                <p class="text-center">Electricidad de celdas de combustible (FCEV)</p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="mt-10">
                        <v-col class="bg-black mx-5">
                            <p class="text-center">Motor a gasolina</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono1">
                            <p class="text-center">Fundamental</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono1">
                            <p class="text-center">Fundamental</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono1">
                            <p class="text-center">Fundamental</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono1">
                            <p class="text-center">Importante</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono1">
                            <p class="text-center">No Exixte</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono1">
                            <p class="text-center">No Existe</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center" style="height: 80px;">
                        <v-col class="bg-black mx-5">
                            <p class="text-center">Motor (es) eléctricos</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">No existe</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">Muy pequeño</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">Robusto, puede mover al auto (1-3 motores eléctricos)</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">Robusto, puede mover al auto (1-3 motores eléctricos)</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">Robusto (1-4 motores eléctricos)</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">Robusto (1-2 motores eléctricos)</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center" style="height: 80px;">
                        <v-col class="bg-black mx-5">
                            <p class="text-center">Batería (V)</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono2" align-self="center">
                            <p class="text-center">Accesorios 12 V</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono2" align-self="center">
                            <p class="text-center">Bajo voltaje (12-48 V)</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono2">
                            <p class="text-center">Alto voltaje (150 + V)</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono2" align-self="center">
                            <p class="t4xt-center">Alto voltaje (200 + V)</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono2" align-self="center">
                            <p class="text-center">Alto voltaje (250 + V)</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono2" align-self="center">
                            <p class="text-center">Alto voltaje (300 + V)</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center" style="height: 80px;">
                        <v-col class="bg-black mx-5">
                            <p class="text-center">Batería (kWh)</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">N.A</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">N.A</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">0.9 - 2.5 kWh</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">0.9 - 24 kWh</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">30 - 110 kWh</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">1.2 - 13 kWh</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center" style="height: 80px;">
                        <v-col class="bg-black mx-5">
                            <p class="text-center">Autonomía eléctrica (km)</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono3">
                            <p class="text-center">N.A.</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono3">
                            <p class="text-center">N.A.</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono3">
                            <p class="text-center">3 - 5 km</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono3">
                            <p class="text-center">25 - 80 km</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono3">
                            <p class="text-center">150 - 500 km</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono3">
                            <p class="text-center px-1">450+ km (según carga H2)</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center" style="height: 80px;">
                        <v-col class="bg-black mx-5">
                            <p class="text-center">Emisiones contaminantes</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">Altas</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">Altas</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">Medias</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">Medias/bajas</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">Cero</p>
                        </v-col>
                        <v-col class="mx-5">
                            <p class="text-center">Cero</p>
                        </v-col>
                    </v-row>
                    <v-row justify="center" style="height: 80px;">
                        <v-col class="bg-black mx-5">
                            <p class="text-center">Tiempo de recarga</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono4" align-self="center">
                            <p class="text-center">Muy corto</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono4" align-self="center">
                            <p class="text-center">Muy corto</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono4" align-self="center">
                            <p class="text-center">Muy corto</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono4" align-self="center">
                            <p class="text-center">Muy corto (gasolina) medio (eléctrico)</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono4" align-self="center">
                            <p class="text-center">Medio a largo</p>
                        </v-col>
                        <v-col class="mx-5 bg-poligono4" align-self="center">
                            <p class="text-center px-1">Muy corto (hidrógeno)</p>
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
.bg-black{
    background: black;
}
.width-box{
    width: 8px !important;
}

.bg-poligono1{
    background-image: url('../../assets/evolucion/poli1.png');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
    width: 110px;
}

.bg-poligono2{
    background-image: url('../../assets/evolucion/poli2.png');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
    width: 110px;
}

.bg-poligono3{
    background-image: url('../../assets/evolucion/poli3.png');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
    width: 90px;
} 
.bg-poligono4{
    background-image: url('../../assets/evolucion/poli4.png');
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
    width: 110px;
}
</style>