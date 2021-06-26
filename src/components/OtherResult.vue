<template>
    <div class="result">
        <h2>This is other result: {{ result }} </h2>
    </div>
</template>

<script>
export default {
    computed: {
        result() {
            return this.$store.getters.doubleNumber;
        }
    }
}
</script>

<style>

</style>