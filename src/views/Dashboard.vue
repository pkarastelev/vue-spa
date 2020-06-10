<template>
    <app-layout>
        <page-title>Dashboard</page-title>
    </app-layout>
</template>

<script>
  import AppLayout from '@/layouts/AppLayout'
  import PageTitle from '@/components/PageTitle'

  export default {
    name: 'Dashboard',
    components: { PageTitle, AppLayout },
  }
</script>
