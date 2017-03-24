<template>
    <div class="company">
        588888889
    </div>
</template>


<script>
import '../../vuex/actions.js'

export default {
    data() {
        return {}
    },
    method: {

    },
    created() {
        console.log(88888);
        var title = this.$route.params.companyname;
        console.log(title);
        document.title = title;
    }
}

</script>

<style lang="less"></style>