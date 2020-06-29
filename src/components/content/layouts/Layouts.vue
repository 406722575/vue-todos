<template>
    <section class="container"> <!--最外层容器-->
        <section class="menu"> <!--左边的容器-->
            <menus></menus>
        </section>
        <section class="content-container"><!--右边的容器-->
        </section>
    </section>
</template>

<script>
    import menus from 'views/Menus/menus'
    export default {
        name: "layouts",
        components:{
            menus
        }
    }
</script>

<style lang="less" scoped>
    @import 'common/style/layouts.less';
</style>