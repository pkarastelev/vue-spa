<template>
    <app-layout>
        <page-title>Home</page-title>
    </app-layout>
</template>

<script>
  import AppLayout from '@/layouts/AppLayout'
  import PageTitle from '../components/PageTitle'

  export default {
    name: 'Home',
    components: { PageTitle, AppLayout },
  }
</script>
