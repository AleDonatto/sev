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
                            <v-img src="@/assets/cargando/objeciones.png" contain :max-height="windowHeight> 900 ? '870': '560'"></v-img>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script >
import ContentTemplate from '../templates/ContentTemplate.vue';
import { mapState } from 'vuex';

export default {
    data() {
        return{}
    },
    computed: {
        ...mapState(['windowHeight', 'windowSize'])
    },
    components: {
        ContentTemplate
    },
    mounted(){
        this.$store.commit('StateAssign', {canNext:false})
        this.playAudio()
    },
    methods: {
        playAudio(){
            window.audio.src = require('@/assets/audios/bev/SEV-bev-1.mp3')
            window.audio.play()
            setTimeout(()=> {
                this.$store.commit('StateAssign', {canNext:true})
            },22500)
        }
    }
}
</script>

<style scoped>

</style>