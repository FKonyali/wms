<template>
    <div class="container">
        <div class="home">
            <ProductItem
                v-for="obj in getProducts.products"
                :key="obj.id"
                :productObj="obj"
            />
        </div>
    </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";

export default {
    name: "Home",
    components: {
        ProductItem
    },
    computed: {
        getProducts () {
            return this.$store.getters.getProduct
        }
    }
};
</script>
