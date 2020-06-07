<template>
    <div class="h-full">
        <navigation-bar></navigation-bar>
        <div class="wrapper flex flex-row h-full">
            <sidebar></sidebar>
            <main class="mt-10 px-10">
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script>
    import NavigationBar from '../components/NavigationBar'
    import Sidebar from '../components/Sidebar'

    export default {
      components: {
        NavigationBar,
        Sidebar,
      },
    }
</script>

<style>
    .wrapper {
        height: calc(100% - 64px);
    }
</style>