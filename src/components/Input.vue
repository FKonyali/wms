<template>
    <div class="form-group" v-if="inputType || inputName">
        <label
            :for="inputName"
            class="form-group__label"
            v-if="inputLabel"
        >
            {{ inputLabel }}
        </label>
        <input
            :type="inputType"
            :id="inputName"
            :maxlength="inputMaxLength"
            class="form-group__input"
            @input="eventInput"
        >
    </div>
</template>

<script>
export default {
    name: 'Input',
    props: {
        inputPlaceholder: {
            type: String,
            default: '',
        },
        inputType: {
            type: String,
            default: '',
            required: true
        },
        inputName: {
            type: String,
            default: '',
            required: true
        },
        inputLabel: {
            type: String,
            default: ''
        },
        inputMaxLength: {
            type: Number
        }
    },
    methods: {
        eventInput (e) {
            this.$emit('input', e.target.value)
        }
    }
}
</script>

<style lang="sass" scoped>
    .form-group
        margin-bottom: 20px

        &:last-child
            margin-bottom: 0

        &__label
            display: block
            margin-bottom: 5px

        &__input
            width: 100%
            display: block
            border-radius: 5px
            padding: 10px
</style>
