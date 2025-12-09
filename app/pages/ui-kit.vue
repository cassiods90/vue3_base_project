<template>
    <div class="pages ui-kit-page">
        <div class="page-title">
            <h1 class="text text-maintitle text-center">UI Kit</h1>
            <p class="text text-color-secondary text-center">Visual guide for typography, buttons, and color tokens of this project.</p>
        </div>

        <div class="page-content">
            <div class="container">
                <div class="ui-section">
                    <!-- Typography -->
                    <section class="card-box">
                        <div class="card-box-content">
                            <h2 class="text text-title text-center">Typography</h2>
                            <p class="text text-color-secondary text-center">Examples of text hierarchy and sizes.</p>

                            <div class="ui-typography-examples">
                                <p class="text text-maintitle">Main Title</p>

                                <p class="text text-title">Page Title / Section Title</p>
                                <p class="text text-subtitle">Subtitle example with more emphasis</p>
                                <p class="text">
                                    Body text: this is an example of regular paragraph content used across the application for descriptions and
                                    general information.
                                </p>
                                <p class="text text-small">Small text: helper messages, captions, labels, and microcopy.</p>

                                <div class="ui-typography-weights">
                                    <p class="text text-weightLight">Light weight example</p>
                                    <p class="text text-weightSemiBold">Semi-bold weight example</p>
                                    <p class="text text-weightBold">Bold weight example</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Buttons And Inputs-->
                    <section class="card-box">
                        <div class="card-box-content d-flex justify-content-around align-items-start">
                            <div class="card-box-item card-box-left">
                                <h2 class="text text-title text-center">Buttons</h2>
                                <p class="text text-color-secondary text-center">Button styles</p>

                                <div class="ui-buttons-row">
                                    <button class="btn-item">
                                        <span class="text text-small">Primary Actions Button</span>
                                    </button>

                                    <button class="btn-item btn-secondary">
                                        <span class="text text-small">Secondary Actions Button</span>
                                    </button>

                                    <button class="btn-item" disabled>
                                        <span class="text text-small">Disabled Button</span>
                                    </button>
                                </div>
                            </div>
                            <div class="card-box-item card-box-right">
                                <h2 class="text text-title text-center">Inputs</h2>
                                <p class="text text-color-secondary text-center">input field tyles</p>

                                <div class="ui-input-row">
                                    <div class="input-item d-flex flex-column justify-content-start align-items-start">
                                        <!-- <label class="text" for="inputExample">Password Input Example:</label> -->
                                        <div class="input-wrapper">
                                            <SvgsIconKey />
                                            <input
                                                id="inputExample"
                                                :type="showPassword ? 'text' : 'password'"
                                                name="password"
                                                placeholder="Input example ..."
                                                required
                                            />
                                            <SvgsIconEye v-if="showPassword" @click="showPassword = !showPassword" />
                                            <SvgsIconEyeClose v-else @click="showPassword = !showPassword" />
                                        </div>
                                    </div>

                                    <div class="input-item d-flex flex-column justify-content-start align-items-start">
                                        <!-- <label class="text" for="inputExample">Input Disabled Example:</label> -->
                                        <div class="input-wrapper disabled">
                                            <SvgsIconKey />
                                            <input
                                                id="inputExample"
                                                :type="showPassword ? 'text' : 'password'"
                                                name="password"
                                                placeholder="Input Disabled example ..."
                                                disabled
                                            />
                                            <SvgsIconEye v-if="showPassword" @click="showPassword = !showPassword" />
                                            <SvgsIconEyeClose v-else @click="showPassword = !showPassword" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <!-- Colors -->
                    <section class="card-box">
                        <div class="card-box-content">
                            <h2 class="text text-title">Colors</h2>
                            <p class="text text-subtitle">Main color tokens of this theme.</p>

                            <div class="ui-colors-grid">
                                <div v-for="color in colorTokens" :key="color.name" class="color-swatch">
                                    <div class="color-swatch__preview" :style="{ backgroundColor: `var(--color-${color.name})` }"></div>

                                    <div class="color-swatch__info">
                                        <span class="text text-small text-base">
                                            {{ color.name }}
                                        </span>
                                        <span class="text text-small text-color-secondary">
                                            {{ color.value }}
                                        </span>
                                        <span class="text text-small">
                                            {{ color.role }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useColorMode } from '#imports'

const showPassword = ref(false)

const colorTokens = ref([
    { name: 'theme_primary', role: 'Primary brand color (actions, highlights)' },
    { name: 'theme_secondary', role: 'Secondary brand color (background accents, tags)' },
    { name: 'theme_tertiary', role: 'Soft background / subtle surfaces' },
    { name: 'theme_accent', role: 'Strong accent (texts, borders, icons)' },
])

const colorMode = useColorMode()

function syncColorsFromCss() {
    const styles = getComputedStyle(document.documentElement)

    colorTokens.value = colorTokens.value.map((token) => {
        const cssVarName = `--color-${token.name}`
        const rawValue = styles.getPropertyValue(cssVarName).trim()

        return {
            ...token,
            value: rawValue !== '' ? rawValue : '(not set)',
        }
    })
}

onMounted(() => {
    syncColorsFromCss()
})

watch(
    () => colorMode.value,
    () => {
        syncColorsFromCss() // atualiza quando troca o tema
    }
)
</script>

<style scoped>
.ui-kit-page {
    .page-title {
        margin-bottom: 2rem;
    }
}

.ui-section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.ui-block {
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
}

.ui-typography-examples {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 1rem;
}

.ui-typography-weights {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    margin-top: 0.75rem;
}

.ui-buttons-row,
.ui-input-row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 3rem;
}

.ui-colors-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 3rem;
    margin-top: 1rem;
}

.color-swatch {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.75rem;
    border-radius: 0.75rem;
}

html.base .color-swatch {
    /* color: rgb(0, 180, 255) */
    background-color: rgba(128, 206, 215, 0.3);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

html.sec .color-swatch {
    background-color: rgba(0, 180, 255, 0.3);
    box-shadow: 0 4px 12px rgba(0, 180, 255, 0.3);
}

.color-swatch__preview {
    width: 100%;
    height: 48px;
    border-radius: 0.5rem;
}

.color-swatch__info {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
}
</style>
