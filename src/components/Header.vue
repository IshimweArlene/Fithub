<template>
  <header class="header">
    <nav class="nav">
      <ul class="nav-links">
        <li><router-link to="/" exact-active-class="active">Home</router-link></li>
        <li><router-link to="/about" exact-active-class="active">About Us</router-link></li>
        <li><router-link to="/category" exact-active-class="active">Category</router-link></li>
        <li><router-link to="/blog" exact-active-class="active">Blogs</router-link></li>
        <li><router-link to="/recipe" exact-active-class="active">Recipes</router-link></li>
        <li><router-link to="/gift" exact-active-class="active">Gift A Plan</router-link></li>
        <li><router-link to="/contact" exact-active-class="active">Contact</router-link></li>
      </ul>
    </nav>
    <div class="cart">
      <shopping-cart class="cart-icon"/>
    </div>
  </header>
</template>

<script setup>
import { ShoppingCart } from 'lucide-vue-next';
</script>

<style scoped>

.header {
  display: flex;
  background-color: #ffffff;
  padding: 12px 16px;
  height: 60px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  margin-bottom: 20px;
}

.nav {
  display: flex;
  justify-content: center;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 3.1rem;
  margin: 0;
  align-items: center;
}

.nav-links  {
  color: rgb(43, 39, 39);
  font-size: larger;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  padding-bottom: 0.2rem;
  padding-left: 132px;
}

.nav-links :hover {
  color: #f3bb05;
}

.active,
.router-link-exact-active {
  font-weight: semi-bold;
  font-size: 19px;
  color: #FED233;
}
.cart{
  padding-right:22px;
}
.cart-icon {
  width: 28px;
  height: 28px;
  color: #2b2727;
  cursor: pointer;
  transition: color 0.3s ease;
}

.cart-icon:hover {
  color: #f3bb05;
}
</style>
