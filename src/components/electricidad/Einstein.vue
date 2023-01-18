<template>
    <div>
        <content-template title="ELECTRICIDAD">
            <template v-slot:content>
                <div class="bg-black ma-0 pa-0">
                    <v-row justify="center" class="">
                        <v-col>
                            <v-img :src="albert" max-height="650"></v-img>
                        </v-col>
                    </v-row>
                </div>
            </template>
            
        </content-template>
    </div>
</template>

<script setup>
import ContentTemplate from '../templates/ContentTemplate.vue';
import albert from '@/assets/electricidad/albert.png'
</script>

<style scoped>
.bg-black{
    background-color: black;
}
</style>