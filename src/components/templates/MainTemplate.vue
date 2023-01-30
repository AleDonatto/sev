<template>
    <div>
        <v-row>
            <v-col cols="4" :class="{'size-height': windowHeight > 900, 'size-height-mb': windowHeight < 700}" style="background: rgba(253, 190, 46, 1)"> 
                <v-img :src="LogoSev" containt></v-img>
            </v-col>
            <v-col cols="2" class="size-height margin-left" >
                <svg class="" v-if="windowHeight > 900">
                    <polygon points="0 0, 0 400, 400 500, 70 0" style="fill:#FDBE2E;stroke:#FDBE2E;stroke-width:5"></polygon>
                </svg>
                <svg class="" v-else>
                    <polygon points="0 0, 0 125, 140 125, 60 0" style="fill:#FDBE2E;stroke:#FDBE2E;stroke-width:5"></polygon>
                </svg>
                
            </v-col>
            <v-col cols="5" class=""></v-col>
        </v-row>
        <div>
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script setup>
import LogoSev from '@/assets/logosev.png';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '../../stores/counter';

const store = useCounterStore()
const {windowHeight, windowSize} = storeToRefs(store)
</script>

<style scoped>
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