<template>
    <div>
        <v-row>
            <v-col cols="4" class="size-height" style="background: rgba(253, 190, 46, 1)"> 
                <v-img :src="LogoSev" containt></v-img>
            </v-col>
            <v-col cols="2" class="size-height margin-left" >
                <svg class="">
                    <polygon points="0 0, 0 400, 300 700 , 420 400" style="fill:#FDBE2E;stroke:#FDBE2E;stroke-width:5"></polygon>
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
</script>

<style scoped>
.size-height{
    height: 162px !important;
}
.margin-left {
    margin-left: -12px;
}
</style>