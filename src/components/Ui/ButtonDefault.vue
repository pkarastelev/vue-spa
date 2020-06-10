<template>
    <button class="rounded text-sm px-2 py-2 leading-4 bg-blue-500 text-white font-black hover:bg-blue-600">
        <slot></slot>
    </button>
</template>

<script>
  export default {
    name: 'button-default',
  }
</script>