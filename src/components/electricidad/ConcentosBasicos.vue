<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div class="mt-5">
                    <v-row justify="start" class="bg-conceptos">
                        <v-col cols="12" align-self="center" class="h-100">
                            <v-img :src="conceptos" max-height="910" cover></v-img>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from '../templates/ContentTemplate.vue';
import conceptos from '@/assets/electricidad/conceptos.png'
</script>

<style scoped>
.bg-conceptos{
    background: linear-gradient(90deg, #9A9A9A 0%, rgba(217, 217, 217, 0) 40.7%, #9A9A9A 83.8%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
}

.size-screen {
    height: 100% !important;
}
</style>