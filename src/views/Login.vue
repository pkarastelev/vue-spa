<template>
    <auth-layout>
        <div class="bg-white rounded-lg shadow-lg w-full max-w-lg p-8">
            <page-title class="text-center">Login</page-title>

            <div class="mt-4">
                <label>username
                    <input type="text" class="mt-2 bg-gray-300 rounded-lg p-3 w-full">
                </label>
            </div>

            <div class="mt-4">
                <label>password
                    <input type="password" class="mt-2 bg-gray-300 rounded-lg p-3 w-full">
                </label>
            </div>

            <div class="mt-8">
                <button @click="$router.push('/')" class="transition-colors duration-150 w-full font-bold bg-blue-500 hover:bg-blue-600 rounded-lg py-3 text-white">Anmelden</button>
            </div>
        </div>
    </auth-layout>
</template>

<script>

  import AuthLayout from '@/layouts/AuthLayout'
  import PageTitle from '../components/PageTitle'

  export default {
    name: 'Login',
    components: {
      PageTitle,
      AuthLayout,
    },
  }
</script>

<style scoped>

</style>