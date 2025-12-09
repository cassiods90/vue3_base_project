<!-- app/pages/feedback-alerts.vue -->
<template>
    <div class="pages home-page">
        <div class="page-title">
            <h1 class="text text-maintitle text-center">System Messages & Notifications</h1>
            <p class="text text-color-secondary text-center">Modals, alerts and toast notifications built with the design tokens of this UI kit.</p>
        </div>

        <div class="page-content">
            <div class="container">
                <div class="ui-section">
                    <!-- Modal alerts examples -->
                    <section class="card-box">
                        <div class="card-box-content">
                            <h2 class="text text-title text-center">Modal Alerts</h2>
                            <p class="text text-color-secondary text-center">
                                Use these blocking messages when the user must read something or make a decision before continuing.
                            </p>

                            <div class="modal-buttons d-flex justify-content-center align-items-center flex-wrap">
                                <button v-for="modal in modalConfigs" :key="modal.type" class="btn-item" @click="openModal(modal.type)">
                                    <span class="text text-small">Open {{ modal.type }} modal</span>
                                </button>
                            </div>
                        </div>
                    </section>

                    <!-- Toast examples -->
                    <section class="card-box">
                        <div class="card-box-content">
                            <h2 class="text text-title text-center">Toast Notifications</h2>
                            <p class="text text-color-secondary text-center">
                                Lightweight, timed messages that appear in a corner of the screen and disappear automatically.
                            </p>

                            <div class="modal-buttons">
                                <button v-for="toast in toastSamples" :key="toast.type" class="btn-item" @click="triggerToast(toast)">
                                    <span class="text text-small">{{ toast.label }}</span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

        <AppModal v-if="activeModal" :visible="true" v-bind="modalConfigs[activeModal]" @close="closeModal" @confirm="handleConfirm" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import AppModal from '@/components/AppModal.vue'

const activeModal = ref(null)

const modalConfigs = {
    success: {
        type: 'success',
        title: 'Some success message here !!!',
        message: 'Ex => Your changes were saved successfully.',
    },
    warning: {
        type: 'warning',
        title: 'Some warning message here !!!',
        message: 'Ex => Some required fields are missing. Please review before continuing.',
    },
    error: {
        type: 'error',
        title: 'Some error message here !!!',
        message: 'Ex => We were unable to process your request. Please try again later.',
    },
    info: {
        type: 'info',
        title: 'Some info message here !!!',
        message: 'Ex => New version available. Refresh the page to update.',
    },
    confirm: {
        type: 'confirm',
        title: 'Some Confirm modal message here !!!',
        message: 'Ex => Are you sure you want to delete this item? This action cannot be undone.',
    },
}

const openModal = (type) => {
    activeModal.value = type
}

const closeModal = () => {
    console.log('/* ---------- Modal Closed ---------- */')
    activeModal.value = null
}

const handleConfirm = () => {
    // Here you can call one real action (API, stores, ...)
    console.log('/* ---------- Modal Confirmed ---------- */')
    activeModal.value = null
}

// Toasts de exemplo (mantidos como estavam)
const { $notify } = useNuxtApp()

const toastSamples = [
    {
        type: 'success',
        label: 'Show success toast',
        title: '',
        text: 'Some success message here !!!',
    },
    {
        type: 'warning',
        label: 'Show warning toast',
        title: '',
        text: 'Some warning message here !!!',
    },
    {
        type: 'error',
        label: 'Show error toast',
        title: '',
        text: 'Some error message here !!!',
    },
    {
        type: 'info',
        label: 'Show info toast',
        title: '',
        text: 'Some info message here !!!',
    },
]

const triggerToast = (toast) => {
    $notify({
        type: toast.type,
        title: toast.title,
        text: toast.text,
    })
}
</script>

<style scoped lang="scss">
.ui-section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}

.modal-buttons {
    margin-top: 1.5rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
}
</style>
