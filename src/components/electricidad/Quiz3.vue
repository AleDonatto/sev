<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div class="mt-10">
                    <v-row justify="start">
                        <v-col cols="2">
                            <v-img :src="user" max-height="170"></v-img>
                        </v-col>
                        <v-col cols="9">
                            <div class="border-yellow mt-6">
                                <p class="font-avenir font-size-24 px-5 py-5 mx-5">La baterías utilizadas en los vehículos SEV-E-wan son:</p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="8">
                            <v-radio-group color="#FDBD31">
                                <v-radio value="1">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">
                                            De Litio fosfato-ferros LiFePO4.
                                        </p>
                                    </template>
                                </v-radio>
                                <v-radio value="2">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">
                                            De iones de Litio de larga durabilidad.
                                        </p>
                                    </template>
                                </v-radio>
                                <v-radio value="3">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">
                                            De polímero de Litio.
                                        </p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="12" align="center">
                            <v-btn color="#FDBD31" class="rounded-xl">
                                Continuar
                            </v-btn>
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