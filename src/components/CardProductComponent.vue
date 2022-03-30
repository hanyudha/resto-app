<template>
    <div class="card">
    <img :src="'/assets/images/'+product.gambar" class="card-img-top" />
        <div class="card-body">
            <h5 class="card-title">{{product.nama}}</h5>
            <p class="card-text">
                Some quick Example
            </p>
            <a href="#" class="btn btn-primary">Go Somewhere</a>
        </div>
    </div>
</template>

<script>
export default{
    name: 'CardProductComponent',
    props: ['product']
}
</script>

<style>
</style>