<template>
    <div class="mt-7 max-w-sm mx-auto text-center card">
        <div class="mt-7 text-7xl font-bold">{{ error.statusCode }}</div>
        <div class="mt-7 text-6xl">Oooops</div>
        <div class="mt-7">{{ error.message }}</div>
        <button class="btn my-7" @click="handleClearError">Go Home..</button>
    </div>
</template>

<script setup>
    defineProps(['error']);
    const handleClearError = () => clearError({redirect: '/'})
</script>

<style  scoped>

</style>