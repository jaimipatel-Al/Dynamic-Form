<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const backToList = () => {
  router.push({ name: 'form-list' })
}
</script>

<template>
  <div>
    <span class="back" @click="backToList">< Back</span>
    <h1>Create Form</h1>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
.back {
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  user-select: none;
  font-weight: 500;
}
.back:hover {
  color: blue;
}
</style>
