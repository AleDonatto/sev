<template>
  <div>
    <content-template title="ELECTRICIDAD">
      <template v-slot:content>
        <div class="bg-black m-0 p-0">
          <v-row justify="center" class="m-0 p-0 bg-black">
            <v-col cols="12" class="mb-5">
              <v-img src="@/assets/electricidad/albert.png" contain :max-height="windowHeight>900 ? '840': '560'"></v-img>
            </v-col>
          </v-row>
        </div>
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
                    La información brindada en este curso es para tu bienestar y el de toda nuestra comunidad. La mejor manera de aprender es enseñándolo a 
                    los demás así que es responsabilidad de cada persona reflexionar y entender la información de este curso.
                  </p>
                </v-card-text>
                <v-card-actions>
                  <v-row justify="center">
                    <v-col cols="12" align="center">
                      <v-btn class="bg-color-yellow px-10 py-2 mb-10" color="#FDBE2E" variant="text" rounded @click="dialog = false">
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
    </content-template>
  </div>
</template>

<script>
import ContentTemplate from '../templates/ContentTemplate.vue';
import { mapState } from 'vuex';

export default {
  data(){
    return {
      dialog: true
    }
  },
  components: {
    ContentTemplate,
  },
  computed: {
    ...mapState(['windowHeight', 'windowSize'])
  },
  mounted(){
    this.$store.commit('StateAssign', {canNext:false})

    this.playAudio()
  },
  methods: {
    playAudio(){
      window.audio.src = require('@/assets/audios/electricidad/SEV-electricidad-15.mp3')
      window.audio.play()
      setTimeout(()=> {
        this.$store.commit('StateAssign', {canNext:true})
      },14500)
    }
  }
}
</script>

<style scoped>
.bg-black{
    background-color: black;
}

.bg-color-yellow{
  background-color:#FDBE2E; 
}

.position-card{
  margin-top: -5vh;
  z-index: 1;
}

.index-3{
  z-index: 3;
}

.bg-overlay{
  background-color: rgba(0,0,0,0.9);
}
</style>