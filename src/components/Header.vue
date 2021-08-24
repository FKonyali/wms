<template>
    <header class="header">
        <ul class="header__links">
            <li>
                <router-link to="/" title="Ana Sayfa" class="header__link">
                    Ana Sayfa
                </router-link>
            </li>
            <li>
                <router-link to="/add-product" title="Ürün Ekle" class="header__link">
                    Ürün Ekle
                </router-link>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="sass" scoped>
    .header
        font-size: 16px
        padding: 30px 0

        &__links
            display: flex
            align-items: center
            justify-content: center

        &__link
            display: block
            padding: 10px 15px
            color: #333
</style>
