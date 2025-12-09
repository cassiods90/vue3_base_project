<template>
    <div class="pages icons-library-page">
        <div class="page-title">
            <h1 class="text text-maintitle text-center">Icon Library</h1>
            <p class="text text-color-secondary text-center">All SVG icons available in this project.</p>
        </div>

        <div class="page-content">
            <div class="container">
                <section class="card-box">
                    <div class="card-box-content">
                        <div class="icons-grid">
                            <div v-for="icon in iconList" :key="icon.name" class="icons-item">
                                <div class="icons-item__preview">
                                    <div class="icon">
                                        <component :is="icon.component" />
                                    </div>
                                </div>
                                <p class="icons-item__name text text-small">
                                    {{ icon.name }}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import * as SvgIcons from '@/components/svgs' // use the index.js file to import all SVGs

const iconList = computed(() =>
    Object.entries(SvgIcons).map(([name, component]) => ({
        name,
        component,
    }))
)
</script>

<style scoped lang="scss">
.icons-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 2rem;
    margin-top: 1.5rem;
}

.icons-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    border-radius: 0.75rem;
    // background-color: var(--color-theme_tertiary);
    // box-shadow: box_shadows(cards);
}

html.base .icons-item {
    background-color: rgba(128, 206, 215, 0.3);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

html.sec .icons-item {
    background-color: rgba(0, 180, 255, 0.3);
    box-shadow: 0 4px 12px rgba(0, 180, 255, 0.3);
}

.icons-item__preview {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
}

.icons-item__preview :deep(svg) {
    width: 24px;
    height: 24px;
}

.icons-item__name {
    text-align: center;
    word-break: break-all;
}
</style>
