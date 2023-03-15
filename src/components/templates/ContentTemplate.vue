<template>
    <div>
        <v-navigation-drawer class="" app permanent color="#FDBD31" :width="windowHeight<700 ? '210': '280'">
            <template v-slot:prepend>
                <v-list-item :class="{'my-4': windowHeight > 900, 'my-2':windowHeight < 700}">
                    <v-img src="@/assets/solo-logo.png" contain heigh max-height="40"></v-img>
                </v-list-item>
                <v-list-item class="text-center" :class="{'my-2': windowHeight > 900, 'my-1': windowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <v-icon color="black" large>mdi-home</v-icon>
                        </v-col>
                    </v-row>
                </v-list-item>
            </template>
            
            <v-divider></v-divider>

            <v-list dense nav class="pa-0 text-center" v-if="this.$route.path === '/evolucion-de-movilidad'" :width="windowHeight<700 ? '210': '280'">
                
                <v-list-item class=" bg-nav-yellow my-0 py-0" 
                :class="{'h-nav width-lg': windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}" 
                @click="() => {this.$store.commit('StateAssign', {step: 0})}" >
                    <v-row justify="center">
                        <v-col cols="10" align="center">
                            <span class="" :class="{'font-weight-bold': step >= 0 && step <2, 'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">
                                Inicio
                            </span>
                        </v-col>
                    </v-row>
                   
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" 
                :class="{'h-nav width-lg' : windowHeight > 900, 'h-nav-md width-md' : windowHeight < 700}" 
                :disabled="step < 2"
                @click="() => {this.$store.commit('StateAssign', {step: 2})}">
                    <v-row justify="center">
                        <v-col cols="">
                            <span class="" :class="{'font-weight-bold': step === 2, 'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">
                                Actualidad
                            </span>
                        </v-col>
                    </v-row>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" 
                :class="{'h-nav width-lg': windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}"
                :disabled="step < 3"
                @click="() => {this.$store.commit('StateAssign', {step: 3})}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="" :class="{'font-weight-bold': step === 3, 'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">
                                Próximamente
                            </span>
                        </v-col>
                    </v-row>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" 
                :class="{'h-nav width-lg': windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}"
                :disabled="step<4"
                @click="() => {this.$store.commit('StateAssign', {step: 4})}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="" :class="{'font-weight-bold': step >= 4 && step <6, 'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">
                                Tipos de tren motriz
                            </span>
                        </v-col>
                    </v-row>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" 
                :class="{'h-nav width-lg':windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}"
                :disabled="step <6"
                @click="() => {this.$store.commit('StateAssign', {step: 6})}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="" :class="{'font-weight-bold': step >= 6, 'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">
                                Repaso de Sección
                            </span>
                        </v-col>
                    </v-row>
                </v-list-item>
                <v-list-item class="text-center bg-nav-black my-0 py-0 not-cursor" :class="{'h-nav width-lg': windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="white--text " :class="{'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">
                                Electricidad
                            </span>
                        </v-col>
                    </v-row>
                </v-list-item>
                <v-list-item class="text-center bg-nav-black my-0 py-0 not-cursor" :class="{'h-nav width-lg': windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="white--text " :class="{'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">
                                Cargando un BEV
                            </span>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list>

            <v-list density="compact" nav class="pa-0 " v-if="this.$route.path === '/fundamentos-de-electricidad'">
                <v-list-item class="text-center bg-nav-black my-0 py-0" @click="moduloEvolucion"
                :class="{'h-nav width-lg': windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class=" white--text" :class="{'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">Inicio</span>
                        </v-col>
                    </v-row>
                </v-list-item>

                <v-list-item class="text-center bg-nav-yellow my-0 py-0" :class="{'h-nav width-lg' : windowHeight > 900, 'h-nav-md width-md' : windowHeight < 700}"
                :disabled="step <1" @click="() => {this.$store.commit('StateAssign', {step: 1})}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="" :class="{'font-weight-bold': step === 1, 'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">Fundamentos de Electricidad</span>
                        </v-col>
                    </v-row>
                </v-list-item>

                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="() => {this.$store.commit('StateAssign', {step: 2})}" :disabled="step<2"
                :class="{'h-nav width-lg': windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="" :class="{'font-weight-bold': step>=2 && step <12, 'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700 }">Conceptos Basicos</span>
                        </v-col>
                    </v-row>
                </v-list-item>

                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="() => {this.$store.commit('StateAssign', {step: 12})}" :disabled="step<12"
                :class="{'h-nav width-lg': windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="" :class="{'font-weight-bold': step>=12 && step <17, 'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700 }">Aplicaciones Practicas</span>
                        </v-col>
                    </v-row>
                </v-list-item>

                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="() => {this.$store.commit('StateAssign', {step: 17})}" :disabled="step<16"
                :class="{'h-nav width-lg':windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="" :class="{'font-weight-bold': step >=17, 'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">Repaso de Sección</span>
                        </v-col>
                    </v-row>
                </v-list-item>

                <v-list-item class="text-center bg-nav-black my-0 py-0 not-cursor" :class="{'h-nav width-lg': windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="white--text " :class="{'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">Cargando un BEV</span>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list>

            <v-list density="compact" nav class="pa-0" v-if="this.$route.path === '/cargando-un-bev'">
                <v-list-item class="text-center bg-nav-black my-0 py-0" @click="moduloEvolucion"
                :class="{'h-nav width-lg': windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="white--text " :class="{'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">Inicio</span>
                        </v-col>
                    </v-row>
                </v-list-item>
                <v-list-item class="text-center bg-nav-black my-0 py-0" value="actualidad"  @click="moduloElectricidad"
                :class="{'h-nav width-lg' : windowHeight > 900, 'h-nav-md width-md' : windowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="white--text " :class="{'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">Electricidad</span>
                        </v-col>
                    </v-row>
                </v-list-item>

                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="() => {this.$store.commit('StateAssign', {step: 1})}"
                :class="{'h-nav width-lg': windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="" :class="{'font-weight-bold': step === 1, 'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">Cargando un BEV</span>
                        </v-col>
                    </v-row>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="() => {this.$store.commit('StateAssign', {step: 2})}"
                :class="{'h-nav width-lg': windowHeight > 900, 'h-nav-md width-md': wdindowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="" :class="{'font-weight-bold': step === 2, 'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">Modos de Carga</span>
                        </v-col>
                    </v-row>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="() => {this.$store.commit('StateAssign', {step: 3})}"
                :class="{'h-nav width-lg':windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="" :class="{'font-weight-bold': step === 3, 'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">Hábitos de carga</span>
                        </v-col>
                    </v-row>
                </v-list-item>
                <v-list-item class="text-center bg-nav-yellow my-0 py-0" @click="() => {this.$store.commit('StateAssign', {step: 4})}"
                :class="{'h-nav width-lg': windowHeight > 900, 'h-nav-md width-md': windowHeight < 700}">
                    <v-row justify="center">
                        <v-col cols="10">
                            <span class="" :class="{'font-weight-bold': step >= 4, 'font-size-20': windowHeight>900, 'font-size-19': windowHeight<700}">Tipos de Cargadores</span>
                        </v-col>
                    </v-row>
                </v-list-item>
            </v-list>

            <v-row justify="center" :class="{'mt-16':windowHeight > 900, 'mt-2': windowHeight < 700}">
                <v-col cols="6" align="center">
                    <v-btn color="white" :disabled="step < 1" @click="retrocederPaso" fab>
                        <v-icon>mdi-arrow-left</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="6" align="center">
                    <v-btn color="white" fab @click="SiguientePaso" :disabled="canNext!==true">
                        <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="6" align="center">
                    <v-btn color="black" fab>
                        <v-icon color="white">mdi-volume-high</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="6" align="center">
                    <v-btn color="black" fab>
                        <v-icon color="white">mdi-comment-processing-outline</v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-navigation-drawer>
        <div>
            <v-app-bar app class="bg-appbar" :class="{'h-appbar': windowHeight>900, 'h-appbar-md':windowHeight<700}" >
                <v-row>
                    <v-col cols="6" align="start" align-self="center">
                        <h1 class="ml-7 mt-5" :class="{'font-size-20': windowHeight<700}">{{this.title}}</h1>
                    </v-col>
                    <v-col cols="6" align="start" align-self="center">
                        <h1 class="white--text font-weight-thin m-left" :class="{'font-size-20 mt-0': windowHeight<700, 'mt-11': windowHeight>900}" v-html="this.subtitle"></h1> 
                    </v-col>
                </v-row> 
            </v-app-bar>
            <v-container fluid class="mt-0">
                <slot name="content" ></slot>
            </v-container>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    props: ['title', 'subtitle'],
    data(){
        return{

        }
    },
    computed: {
        ...mapState(['step', 'canNext', 'windowHeight', 'windowSize', 'count', 'countShowImage'])
    },
    methods: {
        ...mapActions(['NextStep', 'PreviousStep',]),
        SiguientePaso(){
            //console.log(router.path)
            let route = this.$route.path 
            if(route === '/evolucion-de-movilidad' && this.step === 4 && this.count < 6){
                if(this.count === 0){
                    this.playAudioStepICE()
                }
                if(this.count === 1){
                    this.playAudioStepMHEV()
                }
                if(this.count === 2){
                    this.playAudioStepHEV()
                }
                if(this.count=== 3){
                    this.playAudioStepPHEV()
                }
                if(this.count === 4){
                    this.playAudioStepBEV()
                }
                this.$store.commit('Increment')
                //increment()
            }else if(route === '/fundamentos-de-electricidad' && this.step === 10 && this.count<3){
                //this.$store.dispatch('increment')
                this.$store.commit('Increment')
                //increment()
            }else if(route === '/fundamentos-de-electricidad' && this.step === 11 && this.count<2){
                //this.$store.dispatch('increment')
                this.$store.commit('Increment')
                //increment()
            }else if(route === '/fundamentos-de-electricidad' && this.step === 13 && this.count<1){
                //this.$store.dispatch('increment')
                this.$store.commit('Increment')
                //increment()
            }else if(route === '/fundamentos-de-electricidad' && this.step === 14 && this.count<1){
                //this.$store.dispatch('increment')
                this.$store.commit('Increment')
                //increment()
            }else if(route === '/cargando-un-bev' && this.step === 2 && this.count<1){
                //this.$store.dispatch('increment')
                this.$store.commit('Increment')
                //increment()
            }
            else{
                this.$store.dispatch('NextStep', route)
                //NextStep(route)
            }
        },
        
        retrocederPaso(){
            let route = this.$route.path
            this.$store.dispatch('PreviousStep', route)
            //PreviousStep(route)
        },

        moduloEvolucion(){
            this.$router.push('/evolucion-de-movilidad')
        },

        moduloElectricidad(){
            this.$router.push('/fundamentos-de-electricidad')
        },
        playAudioStepICE(){
            this.$store.commit('StateAssign', {canNext: false})
            this.$store.commit('StateAssign', {countShowImage:1})
            window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-6.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },62500)

            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:2})},21000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:3})},24000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:4})},30000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:5})},37000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:6})},44000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:7})},53000)
        }, 
        playAudioStepMHEV(){
            this.$store.commit('StateAssign', {canNext: false})
            this.$store.commit('StateAssign', {countShowImage:1})
            window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-7.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },68500)

            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:2})},8000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:3})},37000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:4})},43000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:5})},48000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:6})},54000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:7})},61000)
        },
        playAudioStepHEV(){
            this.$store.commit('StateAssign', {canNext: false})
            this.$store.commit('StateAssign', {countShowImage:1})
            window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-8.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },75500)

            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:2})},11000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:3})},17000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:4})},22000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:5})},31000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:6})},39000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:7})},56000)
        },
        playAudioStepPHEV(){
            this.$store.commit('StateAssign', {canNext: false})
            this.$store.commit('StateAssign', {countShowImage:1})
            window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-9.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },95500)

            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:2})},10000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:3})},22000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:4})},27000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:5})},32000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:6})},62000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:7})},72000)
        },
        playAudioStepBEV(){
            this.$store.commit('StateAssign', {canNext: false})
            this.$store.commit('StateAssign', {countShowImage:1})
            window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-10.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },84500)

            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:2})},7000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:3})},16000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:4})},20000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:5})},24000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:6})},33000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:7})},52000)
        },
        playAudioStepFCEV(){
            this.$store.commit('StateAssign', {canNext: false})
            this.$store.commit('StateAssign', {countShowImage:1})
            window.audio.src = require('@/assets/audios/evolucion/SEV-evolucion-11.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },84500)

            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:2})},7000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:3})},16000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:4})},20000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:5})},24000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:6})},33000)
            setTimeout(()=> {this.$store.commit('StateAssign', {countShowImage:7})},52000)
        }
    },

}
</script>

<style scoped>
.h-nav {
    height: 59px !important;
    width: 450px !important;
    margin-top: 1px !important;
}

.h-nav-md {
    height: 49px !important;
}

.h-appbar{
    height: 95px !important;
}

.h-appbar-md{
    height: 80px !important;
}
.m-left{
    margin-top: 25px;
    margin-left: 17vh !important;
}

.bg-nav-yellow {
    background-color: #f0ce86 !important;
    /*background-color: #FDBD31 !important;
    opacity: 0.5;*/
}

.bg-nav-black {
    background-color: #000000 !important;
}

.bg-appbar{
    background-image: url('../../assets/appbar.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
}

.index-1{
    z-index: 1 !important;
}
.index-2{
    z-index:3 !important;
}

.width-lg{
    max-width: 280px;
}

.width-sm{
    max-width: 210px;
}
</style>