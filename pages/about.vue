<template>
    <div>
        <h2>About Page</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat laboriosam, deserunt quaerat similique
            totam praesentium fuga illo iusto nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi placeat laboriosam, deserunt quaerat similique
            totam praesentium fuga illo iusto nulla.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
const { data } = await useFetch('/api/currency/GBP') 
</script>

<style scoped>
h2 {
    margin-bottom: 1.25rem;
    font-size: 2rem;
}

p {
    margin: 1.25rem 0;
}
</style>