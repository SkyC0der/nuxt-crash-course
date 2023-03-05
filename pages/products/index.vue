<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="item in products" :key="item.id">
                <ProductCard :product = "item" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    // Fetch products
    const {data:products} = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Pilot Nuxt App | Merch',
        meta: [
            {name: 'description', content: 'Pilot App Merch'}
        ]
    })
</script>

<style scoped>
    h2 {
        margin-bottom: 1.25rem;
        font-size: 2rem;
    }

    p{
        margin: 1.25rem 0;
    }
</style>