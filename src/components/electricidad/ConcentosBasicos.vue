<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div class="mt-10 w-auto h-auto bg-conceptos">
                    <v-row justify="start">
                        <v-col cols="12" align-self="center" class="h-100">
                            <v-row>
                                <v-col cols="6">
                                    <h1 class="text-white">Hablemos de electricidad de manera sencilla y fácil de comprender.</h1>
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
</script>

<style scoped>
.bg-conceptos{
    background-image: url('../../assets/electricidad/bg-conceptos.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
}

.size-screen {
    height: 100% !important;
}
</style>