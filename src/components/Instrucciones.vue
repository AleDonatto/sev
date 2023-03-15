<template>
    <div>
        <main-template>
            <template v-slot:content>
                <v-row class="mt-3">
                    <v-col cols="12" class="p-0 m-0" :class="{
                        'bg-instructions': windowHeight>900, 
                        'bg-instructions-md': windowHeight< 700 && windowHeight> 660, 
                        'bg-instructions-sm': windowHeight<660}">
                        <v-row class="">
                            <v-col cols="5">
                                <div class="ml-5">
                                    <h1 class="white--text font-weight-light text-center" :class="{'font-size-96': windowHeight > 900, 'font-size-50':windowHeight < 700}">Instrucciones</h1>
                                    <div v-if="countInstructions === 0">
                                        <p class="white--text  font-weight-regular ml-5" :class="{'font-size-22': windowHeight > 900, 'font-size-20': windowHeight < 700}">
                                            En las siguientes páginas del curso, encontrarás a la izquierda de la pantalla una barra, la cual funcionará como nuestro menú de 
                                            navegación, con el cual podrás ir avanzando página a página y regresar a páginas ya repasadas previamente.
                                        </p>

                                        <p class="white--text font-weight-regular ml-5" :class="{'font-size-22': windowHeight > 900, 'font-size-20': windowHeight < 700}">
                                            Dentro de este menú tendremos una en la parte inferior 4 botones.
                                            Con las flechas podremos ir saltando entre la página siguiente o la anterior.
                                        </p>
                                    </div>
                                    <div v-if="countInstructions >= 1">
                                        <p class="white--text  font-weight-regular ml-5" :class="{'font-size-22': windowHeight > 900, 'font-size-20': windowHeight < 700}">
                                            Con el botón del icono del parlante, podrás silenciar la narración de los textos.
                                        </p>
                                        <p class="white--text  font-weight-regular ml-5" :class="{'font-size-22': windowHeight > 900, 'font-size-20': windowHeight < 700}">
                                            Con el botón con el icono del cuadro de texto, podrás ocultar en la pantalla, el cuadro de texto que está siendo narrado.
                                        </p>
                                        <p class="white--text  font-weight-regular ml-5" :class="{'font-size-22': windowHeight > 900, 'font-size-20': windowHeight < 700}">
                                            *Nota: No podrás avanzar a una sección que aún no ha sido repasada.
                                        </p>
                                    </div>
                                    
                                    <div class="d-flex justify-center mt-4">
                                        <v-btn class="" rounded color="#FDBE2E" @click="gotoModuloDirectivo" :disabled="canNext === false" :dark="canNext === false">
                                            <span class=" font-size-30 font-weight-semibold" :class="{'font-size-30': windowHeight > 900, 'font-size-24': windowHeight < 700}">Continuar</span>
                                        </v-btn>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="4"></v-col>
                            <v-col cols="3">
                                <v-img src="@/assets/instrucciones/user.png" max-height="410" class="position-image"></v-img>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row justify="center" no-gutters>
                    <v-col cols="8" align="center" >
                        <v-dialog v-model="dialog" persistent width="880" class="bg-overlay" overlay-color="rgba(0,0,0,0.9)" overlay-opacity="1">
                        <v-img src="@/assets/evolucion/user.png" contain max-height="170" class="index-3"></v-img>
                        <v-card class="position-card overflow-hidden rounded-xl" color="#D9D9D9">
                            <v-card-title></v-card-title>
                            <div class="mt-7">
                            <p class="font-weight-bold text-center mt-7 font-size-30">Recordatorio amistoso</p>
                            </div>
                            <v-card-text>
                            <p class="text-center font-size-24">
                                Para poder tener una mejor experiencia en este curso, te recomendamos el uso de dispositivos de pantallas 
                                grandes, ya sea desde una laptop o una PC de escritorio, así como un par de auriculares para que puedas disfrutar el contenido narrado.
                            </p>
                            </v-card-text>
                            <v-card-actions>
                            <v-row justify="center">
                                <v-col cols="12" align="center">
                                <v-btn class="bg-color-yellow px-10 py-2 mb-10" color="#FDBE2E" variant="text" rounded @click="closeDialog" :disabled="canNext === false" >
                                    <span class="font-weight-bold">Continuar</span>
                                </v-btn>
                                </v-col>
                            </v-row>
                            </v-card-actions>
                        </v-card>
                        </v-dialog>
                    </v-col>
                </v-row>
            </template>
        </main-template>
    </div>
</template>

<script>
import MainTemplate from './templates/MainTemplate.vue';
import { mapState } from 'vuex';

export default {
    data(){
        return {
            dialog: true,
            countInstructions: 0
        }
    }, 
    components: {
        MainTemplate,
    },
    computed: {
        ...mapState(['section', 'windowSize', 'windowHeight', 'count', 'canNext'])
    },
    mounted(){
        this.$store.commit('StateAssign', {canNext: false})
        this.playAudio()
    },
    methods: {
        gotoModuloDirectivo(){
            if(this.countInstructions >= 1){
                this.$store.commit('StateAssign', {section:2})
                this.$router.push('/modulo-directivo')
            }
            //this.section = 2
            //this.countInstructions = this.countInstructions + 1
        },
        playAudio(){
            window.audio.src = require('@/assets/audios/SEV-instrucciones-modal.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },14500)
        },
        playAudioInstrucciones(){
            window.audio.src = require('@/assets/audios/SEV-instrucciones.mp3')
            window.audio.play()
            setTimeout(() => {
                this.countInstructions = this.countInstructions + 1
            }, 25000);
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },46500)
        },
        closeDialog(){
            this.dialog = false
            this.$store.commit('StateAssign', {canNext: false})
            this.playAudioInstrucciones()
        }
    }
}
</script>

<style scoped>

.position-card{
  margin-top: -5vh;
  z-index: 1;
}

.index-3{
  z-index: 3;
}

.bg-instructions{
  background-image: url('../assets/instrucciones/instrucciones2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 810px;
}

.bg-instructions-md{
  background-image: url('../assets/instrucciones/instrucciones2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 540px;
  margin-top: -22px;
}

.bg-instructions-sm{
  background-image: url('../assets/instrucciones/instrucciones2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 510px;
  margin-top: -22px;
}

@media(max-height: 700px) {
    .size-instruction{
        height: 450px;
    }
    .position-image{
        margin-top: -6vh;
    }
}

@media(min-height: 900px){
    .size-instruction{
        height: 580px;
    }
    .position-image{
        margin-top: -6vh;
    }
}
</style>