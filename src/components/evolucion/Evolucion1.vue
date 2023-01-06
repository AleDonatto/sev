<template>
    <div>
        <content-template>
            <template v-slot:content>
                <div>paso 1</div>
            </template>
        </content-template>
        
        <v-footer color="black"></v-footer>
    </div>
</template>
<script setup>
import ContentTemplate from "../templates/ContentTemplate.vue";

</script>

<style>

</style>