<template>
    <app-layout>
        <page-title>About</page-title>
    </app-layout>
</template>

<script>
  import AppLayout from '@/layouts/AppLayout'
  import PageTitle from '../components/PageTitle'

  export default {
    name: 'About',
    components: { PageTitle, AppLayout },
  }
</script>
