<template>
    <div id="app">
        <router-view/>
        <layouts/>
    </div>
</template>

<script>
    import Layouts from 'components/content/layouts/Layouts'

    export default {
        name: 'App',
        components: {
            Layouts
        }
    }
</script>

<style>

</style>
