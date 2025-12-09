<template>
    <div class="pages pinia-states-page">
        <div class="page-title">
            <h1 class="text text-maintitle text-center">Pinia for states</h1>
        </div>
        <div class="page-content">
            <div class="d-flex justify-content-center align-items-center gap-2">
                <button class="btn-item" @click="counter.decrement">
                    <span class="text">--</span>
                </button>

                <span class="text">Pinia Counter: {{ counter.count }}</span>

                <button class="btn-item" @click="counter.increment">
                    <span class="text">++</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCounter } from '@/stores/counter'

const counter = useCounter()
</script>
