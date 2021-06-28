<template>
    <div class="result">
        <h2>This is result: {{ result }} </h2>
    </div>
</template>

<script>
export default {
    computed: {
        result() {
            return this.$store.state.result;
        }
    }
}
</script>

<style>

</style>