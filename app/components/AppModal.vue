<template>
    <div class="app-modal d-flex justify-content-center align-items-center" :class="`modal-${type}`" v-if="visible">
        <div class="app-modal-inner">
            <div class="app-modal-content d-flex flex-column justify-content-start align-items-start">
                <div class="modal-content-title d-flex justify-content-start align-items-center">
                    <span class="modal-icon">
                        <component :is="iconComponent" />
                    </span>
                    <span class="text text-title">{{ title }}</span>
                </div>

                <div class="modal-content-body">
                    <p class="text">{{ message }}</p>
                </div>

                <div class="modal-content-footer">
                    <div class="btn-items d-flex justify-content-center align-items-center">
                        <button class="btn-item" @click="closeModal">
                            <span class="text text-small">Close</span>
                        </button>

                        <button v-if="type === 'confirm'" class="btn-item btn-confirm" @click="confirmAction">
                            <span class="text text-small">Confirm</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { IconCheck, IconAlert, IconError, IconInfo } from '@/components/svgs'

// Props
const props = defineProps({
    visible: Boolean,
    type: { type: String, default: 'info' }, // success, warning, error, info, confirm
    title: String,
    message: String,
})

// Emits
const emit = defineEmits(['close', 'confirm'])

// Close button
const closeModal = () => emit('close')

// Confirm button
const confirmAction = () => emit('confirm')

// Icon selection
const iconComponent = computed(() => {
    const map = {
        success: IconCheck,
        warning: IconAlert,
        error: IconError,
        info: IconInfo,
        confirm: IconAlert,
    }
    return map[props.type] || IconInfo
})
</script>
