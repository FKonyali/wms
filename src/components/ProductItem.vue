<template>
    <div class="product-item" v-if="productObj">
        <div class="product-item__title">
            {{ productObj.title }}
        </div>
        <div class="product-item__amount">
            <span class="product-item__label">Stok Adeti:</span> {{ productObj.amountofstock }}
        </div>
        <div class="product-item__cats">
            <span class="product-item__label">Kategoriler:</span> 
            <ul class="product-item__cats-list">
                <li v-for="cat in productObj.category" :key="cat.id">
                    {{ cat.name }}
                </li>
            </ul>
        </div>
        <div class="product-item__buttons">
            <Button class="product-item__button">
                Düzenle
            </Button>
            <Button class="product-item__button">
                Sil
            </Button>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
    name: 'ProductItem',
    props: {
        productObj: {
            type: Object
        }
    },
    components: {
        Button
    }
}
</script>

<style lang="sass" scoped>
    .product
        &-item
            margin-bottom: 30px
            position: relative
            padding: 5px
            border: 2px solid transparent
            transition: all .3s
            color: #333

            &__title
                display: -webkit-box
                -webkit-line-clamp: 2
                -webkit-box-orient: vertical
                overflow: hidden
                font-size: 22px
                font-weight: 600
                line-height: 22px
                margin-bottom: 10px

            &__label
                color: #000
                font-weight: 600

            &__cats-list
                font-size: 14px

            &__cats
                margin-bottom: 5px

            &__buttons
                display: flex

            &__button
                margin-right: 10px
</style>
