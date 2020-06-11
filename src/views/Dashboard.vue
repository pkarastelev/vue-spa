<template>
    <app-layout>
        <page-title class="mb-10">Dashboard</page-title>
        <div v-for="movie in movies" class="bg-white shadow p-2 border-b">
            {{ movie.name }}, {{ movie.year }}
        </div>
    </app-layout>
</template>

<script>
  import AppLayout from '@/layouts/AppLayout'
  import PageTitle from '@/components/PageTitle'
  import MovieService from '@/services/MovieService'

  export default {
    name: 'Dashboard',
    components: { PageTitle, AppLayout },
    data() {
      return {
        movies: [],
      }
    },
    mounted () {
      MovieService.getMovies().then(movies => this.movies = movies)
    },
  }
</script>
