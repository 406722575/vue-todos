<template>
    <div id="app">
        <router-view/>
        <layouts/>
    </div>
</template>

<script>
    import Layouts from 'views/layouts/Layouts'

    export default {
        name: 'App',
        components: {
            Layouts
        }
    }
</script>

<style>

</style>
