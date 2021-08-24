<template>
    <div class="container">
        <div class="add-product">
            <!-- {{ addProduct }} -->
            <Input
                inputName="name"
                inputType="text"
                inputLabel="Ürün Adı:"
                :inputMaxLength="250"
                v-model="addProduct.title"
                :inputValue="addProduct.title"
            />
            <Input
                inputName="amount"
                inputType="number"
                inputLabel="Stok Miktarı:"
                v-model="addProduct.amountofstock"
                :inputValue="addProduct.amountofstock"
            />
            <Input
                inputName="brand"
                inputType="text"
                inputLabel="Marka:"
                v-model="addProduct.brand"
                :inputValue="addProduct.brand"
            />
            <Input
                inputName="category"
                inputType="text"
                inputLabel="Kategori:"
                v-model="addProduct.category"
                :inputValue="addProduct.category"
            />
            <Input
                inputName="createdate"
                inputType="text"
                inputLabel="Oluşturulma Tarihi:"
                v-model="addProduct.createDate"
                :inputValue="addProduct.createDate"
                :inputDisabled="addProduct.createDate ? true : false"
            />
            <Input
                inputName="lastupdatedate"
                inputType="text"
                inputLabel="Güncelleme Tarihi:"
                v-model="addProduct.lastUpdateDate"
                :inputValue="addProduct.lastUpdateDate"
                :inputDisabled="addProduct.lastUpdateDate ? true : false"
            />
            <Button
                @click.native="buttonClicked"
                :buttonDisabled="(addProduct.title && addProduct.amountofstock && addProduct.brand && addProduct.category) ? false : true"
            >
                Gönder
            </Button>
        </div>
    </div>
</template>

<script>
// import { SaveToLocalStorage } from '@/helpers/LocalStorage'
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
                title: '',
                brand: '',
                category: '',
                createDate: '',
                amountofstock: '',
                lastUpdateDate: ''
            }
        }
    },
    methods: {
        buttonClicked () {
            console.log('...')
            const foundIndex = this.getProducts.products.findIndex(x => x.id == this.getEditProduct.id)
            console.log(foundIndex)
            // this.$store.commit('updateProduct', this.getProduct.produts[foundIndex])
        }
    },
    computed: {
        getEditProduct () {
            return this.$store.getters.getEditProduct
        },
        addProduct () {
            return this.$store.getters.getAddProduct
        },
        getProducts () {
            return this.$store.getters.getProduct
        }
    },
    mounted () {
        this.$store.commit('updateAddProduct', {
            title: this.getEditProduct.title,
            brand: this.getEditProduct.brand,
            category: this.getEditProduct.category ? this.getEditProduct.category.map(function (e) { return e.name }).join(', ') : this.getEditProduct.category,
            createDate: this.getEditProduct.createDate,
            amountofstock: this.getEditProduct.amountofstock,
            lastUpdateDate: this.getEditProduct.lastUpdateDate
        })
    },
    // watch: {
    //     addProduct: {
    //         handler (val) {
    //             const foundIndex = this.getProducts.products.findIndex(x => x.id == this.getEditProduct.id)
    //             const newArr = []
    //             console.log(foundIndex)
    //             this.$store.commit('updateAddProduct', {
    //                 ...this.addProduct,

    //             })

    //             items.splice(foundIndex, 1, newArr)
    //         },
    //         deep: true
    //     }
    // }
}
</script>

<style lang="sass" scoped>
    .add-product
        margin: 30px 0 0
</style>
