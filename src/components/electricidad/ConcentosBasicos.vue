<template>
    <div class="">
        <content-template>
            <template v-slot:content>
                <div class="mt-6">
                    <v-row justify="center" class="">
                        <v-col cols="12" align-self="center" class="h-100">
                            <v-img src="@/assets/electricidad/conceptos.png" max-height="815" cover></v-img>
                        </v-col>
                    </v-row>
                </div>
            </template>
        </content-template>
    </div>
</template>

<script>
import ContentTemplate from '../templates/ContentTemplate.vue';
import { mapState } from 'vuex';

export default{
    data(){
        return {}
    },
    components: {
        ContentTemplate,
    },
    mounted(){
        this.$store.commit('StateAssign', {canNext: true})
    },
    computed: {
        ...mapState(['canNext'])
    }
}
</script>

<style scoped>
.bg-conceptos{
    background: linear-gradient(90deg, #9A9A9A 0%, rgba(217, 217, 217, 0) 40.7%, #9A9A9A 83.8%);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 100%;
}

.size-screen {
    height: 100% !important;
}
</style>