<template>
  <div>
    <h2>Questions</h2>
    <ul>
      <li v-for="i in 20" :key="i">
        <span>Full name</span>
        <div>
          <button class="edit">Edit</button>
          <button class="remove">Remove</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
  border-bottom: 1px solid #000;
  padding-bottom: 12px;
}
ul {
  padding: 0 8px 0 0;
  height: 90%;
  overflow: auto;
}
li {
  list-style: none;
  padding: 8px 16px;
  margin: 12px 0;
  border: 1px solid #ccc;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
button {
  margin: 0 4px;
  outline: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
}
.edit {
  border: 1px solid #2ad000;
  color: #2ad000;
}
.remove {
  border: 1px solid #d03b00;
  color: #d03b00;
}

/* width */
::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #ccc;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
