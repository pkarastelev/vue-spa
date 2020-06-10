<template>
    <div class="max-w-lg rounded rounded-lg shadow-md p-4 border-l-4" :class="css">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: 'NotificationMessage',
    props: {
      level: {
        type: String,
        default: 'info',
      }
    },
    data() {
      return {
        css: {
          'bg-blue-100 border-blue-500': this.level === 'info',
          'bg-green-100 border-green-500': this.level === 'success',
          'bg-yellow-100 border-yellow-500': this.level === 'warning',
          'bg-red-100 border-red-500': this.level === 'danger',
        }
      }
    }
  }
</script>