<template>
    <div class="about">
        <h1>About my self</h1>
        <IconFont class="icon">&#xe61c;</IconFont>
        <p>{{age}}</p>
    </div>
</template>
<script>
    export default {
        name:"About",
        data() {
            return {
                age:this.$route.query.age

            }
        },
        methods: {

        },
        mounted() {
            console.log(this.age)
        }
    }
</script>
<style scoped lang="scss">
    .about{
        width:100%;
        height:100%;
    }
</style>
