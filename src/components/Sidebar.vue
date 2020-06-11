<template>
    <aside class="w-64 flex-shrink-0 py-12 bg-gray-300 h-full">
        <div class="pl-8 uppercase tracking-widest text-gray-600 text-xs">allgemein</div>
        <ul class="mt-2">
            <li><router-link to="/" class="transition-colors duration-150 pl-8 py-2 block text-gray-700 hover:bg-blue-800 hover:text-white">Dashboard</router-link></li>
        </ul>
    </aside>
</template>

<script>
  export default {
    name: 'Sidebar',
  }
</script>

<style scoped>

</style>