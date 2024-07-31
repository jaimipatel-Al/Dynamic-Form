<script setup>
import { ref } from 'vue'

const question = ref()
const type = ref()
const validation = ref([])

const books = [
  { title: "Old Man's War" },
  { title: 'The Lock Artist' },
  { title: 'HTML5' },
  { title: 'Right Ho Jeeves' },
  { title: 'The Code of the Wooster' },
  { title: 'Thank You Jeeves' }
]
</script>

<template>
  <div>
    <h2>Add Question</h2>
    <form>
      <div>
        <label for="question">Question*</label>
        <input type="text" id="question" name="question" v-model="question" />
      </div>
      <div>
        <label>Type*</label>
        <v-select v-model="type" :options="books" label="title"></v-select>
      </div>
      <div>
        <label>Validations*</label>
        <v-select v-model="validation" :options="books" label="title"></v-select>
      </div>
    </form>
    <button>Add</button>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}
form {
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px;
  box-shadow: 1px 1px 4px #ddd;
  margin: 20px 0;
}
label {
  display: block;
}
input {
  width: 100%;
  padding: 5px;
  font-size: 16px;
  font-weight: 400;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 4px;
}
button {
  display: block;
  margin: 12px auto;
  font-size: 16px;
  color: #fff;
  background: #000;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 8px 20px;
  border-radius: 20px;
}
</style>
