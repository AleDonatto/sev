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
                            <div class="mt-6 border-yellow">
                                <p class="font-avenir font-size-24 mx-5 py-5 px-5">
                                    Los principales factores que determinan el tiempo de carga de una batería son:
                                </p>
                            </div>
                        </v-col>
                    </v-row>

                    <v-row justify="center">
                        <v-col cols="11">
                            <v-radio-group color="#FDBD31">
                                <v-radio value="1">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">
                                            El tamaño de la batería, el nivel de carga deseado y la potencia del cargador
                                        </p>
                                    </template>
                                </v-radio>

                                <v-radio value="2">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">
                                            El peso de la batería, el contacto utilizado y la potencia del motor
                                        </p>
                                    </template>
                                </v-radio>

                                <v-radio value="3">
                                    <template v-slot:label>
                                        <p class="font-avenir font-size-24">
                                            El tamaño de la batería, la potencia del motor y el OBD
                                        </p>
                                    </template>
                                </v-radio>
                            </v-radio-group>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="12" align="center">
                            <v-btn class="" color="#FDBD31" rounded>Continuar</v-btn>
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