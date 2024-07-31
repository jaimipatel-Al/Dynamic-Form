<script setup>
import AddQuestion from '../components/AddQuestion.vue'
import QuestionsList from '../components/QuestionsList.vue'
</script>

<template>
  <h1>Add Fields</h1>
  <div class="add-fields">
    <AddQuestion class="add-question" />
    <QuestionsList class="questions-list" />
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
}
.add-fields {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  gap: 40px;
  align-items: start;
}
.add-question,
.questions-list {
  box-shadow: 1px 1px 4px #ddd;
  padding: 20px;
}
.add-question {
  width: 65%;
}
.questions-list {
  width: 35%;
  height: 88vh;
}
</style>
