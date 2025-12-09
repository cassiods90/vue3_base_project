// plugins/notify.client.js
import { defineNuxtPlugin } from '#app'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
    const notify = ({ type = 'info', title, text }) => {
        const baseOptions = {
            position: 'bottom-right',
            autoClose: 3000,
            pauseOnHover: true,
            closeOnClick: true,
            draggable: true,
            hideProgressBar: false,
        }

        const message = title ? `${title} — ${text}` : text

        switch (type) {
            case 'success':
                toast.success(message, baseOptions)
                break
            case 'error':
                toast.error(message, baseOptions)
                break
            case 'warning':
                toast.warning(message, baseOptions)
                break
            case 'info':
            default:
                toast.info(message, baseOptions)
                break
        }
    }

    nuxtApp.provide('notify', notify)
})
