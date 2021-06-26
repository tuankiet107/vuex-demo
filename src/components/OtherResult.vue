<template>
    <div class="result">
        <h2>This is other result: {{ doubleNumber }} </h2>
        <h2>Count click: {{ countNumber }} </h2>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters([
            'doubleNumber',
            'countNumber'
        ]),
    }
}
</script>

<style>

</style>