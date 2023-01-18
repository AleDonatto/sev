<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                        <v-col cols="9" class="">
                            <div class="border-yellow mt-6">
                                <p class="font-avenir font-size-24 mx-5 py-5 px-5">El voltaje y el amperaje determinan la potencia (watt):</p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="3">
                            <v-radio-group color="#FDBD31">
                                <v-radio value="cierto">
                                    <template v-slot:label>
                                        <p class="font-avenir- font-size-24">Cierto</p>
                                    </template>
                                </v-radio>

                                <v-radio value="falso">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">Falso</p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" align="center">
                            <v-btn class="" rounded color="#FDBD31">Continuar</v-btn>
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
.border-yellow{
    border: 5px solid #FDBD31;
    border-radius: 15px;
}
</style>