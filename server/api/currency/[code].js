export default defineEventHandler( async (event) => {
    const {currencyKey} = useRuntimeConfig()
    const {code} = event.context.params
    const uri =     `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}`
    const {data} = await $fetch(uri)
    console.log(data)
    return data
})