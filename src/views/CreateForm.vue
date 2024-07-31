<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const name = ref()

const backToList = () => {
  router.push({ name: 'form-list' })
}

const createNewForm = () => {
  router.push({ name: 'add-fields' })
}
</script>

<template>
  <div>
    <span class="back" @click="backToList">< Back</span>
    <h1>Create Form</h1>
    <form @submit.prevent="createNewForm">
      <div>
        <label for="name">Name* </label>
        <input type="text" id="name" name="name" v-model="name" />
      </div>
      <button :disabled="!name">Add Form</button>
    </form>
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
form {
  box-shadow: 1px 1px 8px #efefef;
  padding: 20px;
  width: fit-content;
  margin: 8px auto;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}
label {
  margin-right: 8px;
}
input {
  padding: 8px 16px;
  font-size: 14px;
}
button {
  padding: 8px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background: #000;
  border-radius: 20px;
  cursor: pointer;
  border: none;
  outline: none;
}
button:disabled {
  background: #757575;
  cursor: not-allowed;
}
</style>
