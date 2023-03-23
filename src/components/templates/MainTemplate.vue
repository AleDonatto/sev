<template>
    <div>
        <v-row>
            <v-col cols="4" :class="{'size-height': windowHeight > 800, 'size-height-mb': windowHeight < 780}" style="background: rgba(253, 190, 46, 1)"> 
                <v-img src="../../assets/logosev.png" contain max-height="140"></v-img>
            </v-col>
            <v-col cols="2" class="size-height margin-left" >
                <svg class="" v-if="windowHeight > 800">
                    <polygon points="0 0, 0 400, 400 500, 70 0" style="fill:#FDBE2E;stroke:#FDBE2E;stroke-width:5"></polygon>
                </svg>
                <svg class="" v-else-if="windowHeight<780 && windowHeight>650">
                    <polygon points="0 0, 0 125, 140 125, 60 0" style="fill:#FDBE2E;stroke:#FDBE2E;stroke-width:5"></polygon>
                </svg>
                <svg class="" v-else>
                    <polygon points="0 0, 0 125, 157 125, 75 0" style="fill:#FDBE2E;stroke:#FDBE2E;stroke-width:5"></polygon>
                </svg>
                
            </v-col>
            <v-col cols="5" class=""></v-col>
        </v-row>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
import fondo from '@/assets/welcome/fondo-left.png'

import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    data() {
        return{

        }
    },
    computed: {
        ...mapState(['windowHeight','windowSize']),
    },
    
}
</script>

<style scoped>
.bg-fondo{
    background-image: url('../../assets/welcome/pruebasEvolucion.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    max-width: 100%;
    min-height: 880px;
}
.size-height{
    height: 162px !important;
}

.size-height-mb{
    height: 140px !important;
}
.margin-left {
    margin-left: -12px;
}

</style>