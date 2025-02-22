import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form-list',
      component: () => import('../views/FormList.vue')
    },
    {
      path: '/create-form',
      name: 'create-form',
      component: () => import('../views/CreateForm.vue')
    },
    {
      path: '/add-fields',
      name: 'add-fields',
      component: () => import('../views/AddFields.vue')
    }
  ]
})

export default router
