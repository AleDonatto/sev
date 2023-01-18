<template>
    <div>
        <content-template title="ELECTRICIDAD" subtitle="Aplicaciones prácticas">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                        <v-col cols="10" align="end">
                            <v-img :src="bateriasev" max-height="220"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="rounded-xl mx-10 bg-color">
                        <v-col cols="12" align="center">
                            <p class="font-avenir font-size-30">Las <span class="font-weight-bold">características</span> de un bateria del <span class="font-weight-bold text-yellow">SEV E-WAN:</span></p>
                        </v-col>
                        <v-col cols="10">
                            <p class="">1 Tecnología: Litio fosfato-ferroso LiFePO4</p>
                            <p class="">2 Voltaje (V): 115.2 (Lite);  294.4 (Bold)</p>
                            <p class="">3 Amper-hora (Ah): 150 (Lite);  100 (Bold)</p>
                            <p class="">4 Capacidad: 17.2 (Lite);  24.9 (Bold)</p>
                            <p class="">5 Enfriamiento: aire (Lite);  Líquido (Bold)</p>
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
import bateriasev from '@/assets/electricidad/bateriasev.png'
</script>

<style scoped>
.bg-color{
    background-color: #EDE6E6;
}

.text-yellow{
    color: rgb(209, 146, 11);
}
</style>