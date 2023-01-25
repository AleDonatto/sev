<template>
    <div>
        <content-template subtitle="Habitos de Ca4rga de un BEV">
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                    </v-row>

                    <v-row justify="center" class="bg-boxstep-content rounded-xl mx-10 px-5 py-5">
                        <v-col cols="12"></v-col>
                        <v-col cols="12">
                            <p>pruebas</p>
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

<style>

</style>