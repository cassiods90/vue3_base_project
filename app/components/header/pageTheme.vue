<template>
    <div class="header-pageTheme btn-items d-flex justify-content-center align-items-center">
        <button class="btn-item" @click="setTheme('base')">
            <span class="text">Base theme</span>
        </button>
        <button class="btn-item" @click="setTheme('sec')">
            <span class="text">Secondary theme</span>
        </button>
    </div>
</template>

<script setup>
const colorMode = useColorMode()

function setTheme(name) {
    // muda a preferência; o módulo aplica em <html data-theme="..."> e persiste
    colorMode.preference = name
}
</script>
