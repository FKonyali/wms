<template>
    <button class="button" v-if="buttonText">
        {{ buttonText }}
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        buttonText: {
            props: String
        }
    }
}
</script>

<style lang="sass" scoped>
    .button
        padding: 10px 15px
        min-width: 100px
        cursor: pointer
</style>
