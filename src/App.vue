<script setup>
import { onMounted, ref } from "vue";
// imports components!
import Loading from "./components/loading/Loading.vue";
// imports components!

const loading = ref(true)


onMounted(() => {
    setTimeout(() => {
        loading.value = false
    }, 2000);
})

</script>
<template>
    <!-- my loadinng -->
    <Loading v-if="loading" />
    <!-- my loadinng -->
    <div class="wrapper" v-else>
        <RouterView />
    </div>
</template>