<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const createNewForm = () => {
  router.push({ name: 'create-form' })
}
</script>

<template>
  <div>
    <h1>Forms</h1>
    <button @click="createNewForm">Create Form</button>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
button {
  margin: 0 auto;
  display: block;
  font-size: 14px;
  padding: 8px 20px;
  font-weight: 600;
  color: #fff;
  background: black;
  border-radius: 20px;
  cursor: pointer;
}
</style>
