<template>
    <div id="auth-layout" class="flex justify-center items-center h-full">
        <slot></slot>
    </div>
</template>

<style scoped>
    #auth-layout {
        background-image: url("/img/pattern.svg");
        background-size: cover;
        background-position: center;
    }
</style>