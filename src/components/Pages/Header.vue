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
  </header>
</template>

<script setup>
</script>

<style scoped>
.header {
  background-color: #5a189a;
  color: white;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  z-index: 1000;
}

.nav {
  display: flex;
  justify-content: center;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease, border-bottom 0.3s ease;
  padding-bottom: 0.2rem;
}

.nav-links a:hover {
  color: #d0bfff;
}

/* Active link */
.active,
.router-link-exact-active {
  font-weight: bold;
  border-bottom: 2px solid #FFD700;
  color: #FFD700;
}
</style>
