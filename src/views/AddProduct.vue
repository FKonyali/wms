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
            <Button
                buttonText="Gönder"
                @click.native="buttonClicked"
            />
        </div>
    </div>
</template>

<script>
import Input from '@/components/Input.vue'
import Button from '@/components/Button.vue'

export default {
    name: 'AddProduct',
    components: {
        Input,
        Button
    },
    methods: {
        buttonClicked () {
            console.log('...')
        }
    }
}
</script>

<style lang="sass" scoped>
    .add-product
        margin: 30px 0 0
</style>
