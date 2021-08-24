<template>
    <button
        class="button"
        :disabled="buttonDisabled"
        v-if="$slots"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        buttonDisabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="sass" scoped>
    .button
        padding: 10px 15px
        min-width: 100px
        cursor: pointer

        &:disabled
            cursor: not-allowed
</style>
