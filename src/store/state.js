import { LoadFromLocalStorage } from '../helpers/LocalStorage'

export default {
    product: {
        products: LoadFromLocalStorage() || []
    }
}
