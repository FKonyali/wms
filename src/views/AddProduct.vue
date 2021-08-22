<template>
    <div class="container">
        <div class="add-product">
            <Input
                inputName="name"
                inputType="text"
                inputLabel="Ürün Adı:"
                :inputMaxLength="250"
            />
            <Input
                inputName="amount"
                inputType="number"
                inputLabel="Stok Miktarı:"
            />
            <Input
                inputName="brand"
                inputType="text"
                inputLabel="Marka:"
            />
            <Input
                inputName="category"
                inputType="text"
                inputLabel="Kategori:"
            />
            <div class="form-group">
                <button class="add-product__btn">
                    Gönder
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Input from '@/components/Input.vue'

export default {
    name: 'AddProduct',
    components: {
        Input
    }
}
</script>

<style lang="sass" scoped>
    
</style>
