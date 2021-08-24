<template>
    <div class="container">
        <div class="add-product">
            <Input
                inputName="name"
                inputType="text"
                inputLabel="Ürün Adı:"
                :inputMaxLength="250"
                v-model="form.name"
            />
            <Input
                inputName="amount"
                inputType="number"
                inputLabel="Stok Miktarı:"
                v-model="form.amount"
            />
            <Input
                inputName="brand"
                inputType="text"
                inputLabel="Marka:"
                v-model="form.brand"
            />
            <Input
                inputName="category"
                inputType="text"
                inputLabel="Kategori:"
                v-model="form.category"
            />
            <Button
                @click.native="buttonClicked"
                :buttonDisabled="(form.name && form.amount && form.brand && form.category) ? false : true"
            >
                Gönder
            </Button>
        </div>
    </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Input from '@/components/Input.vue'

export default {
    name: 'AddProduct',
    components: {
        Input,
        Button
    },
    data () {
        return {
            form: {
                name: '',
                amount: '',
                brand: '',
                category: ''
            }
        }
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
