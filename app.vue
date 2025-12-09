<!-- <template>
    <header>
        <AppHeader />
    </header>

    <main>
        <NuxtPage />
    </main>

    <footer>
        <AppFooter />
    </footer>
</template> -->

<template>
    <Html :data-theme="colorMode.value">
        <Body>
            <NuxtLayout>
                <NuxtPage />
            </NuxtLayout>
        </Body>
    </Html>
</template>

<script setup>
const colorMode = useColorMode()
</script>
