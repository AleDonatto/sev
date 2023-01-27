<template>
    <div>
        <content-template title="" subtitle="<p class='font-avenir'>Cargando un BEV</p>">
            <template v-slot:content>
                <div class="">
                    <!--<v-row>
                        <v-col cols="12">
                            <v-img :src="objeciones" max-height="872"></v-img>
                        </v-col>
                    </v-row>-->
                    <v-row justify="end">
                        <v-col cols="12" align="end">
                            <v-img :src="objeciones" max-height="870" cover></v-img>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from '../templates/ContentTemplate.vue';
import objeciones from '@/assets/cargando/objeciones.png'
</script>

<style scoped>

</style>