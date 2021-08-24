import { LoadFromLocalStorage } from '../helpers/LocalStorage'

export default {
    product: {
        ...LoadFromLocalStorage() || [],
    },
    editProduct: {},
    addProduct: {}
}
