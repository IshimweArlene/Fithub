import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Blog from '@/pages/Blog.vue'
import Category from '@/pages/Category.vue'
import Gift from '@/pages/Gift.vue'
import Recipe from '@/pages/Recipe.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/blog', name: 'Blog', component: Blog },
  { path: '/category', name: 'Category', component: Category },
  { path: '/gift', name: 'Gift', component: Gift },
  { path: '/recipe', name: 'Recipe', component: Recipe },
  { path: '/contact', name: 'Contact', component: Contact },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 } 
  },
})

export default router
