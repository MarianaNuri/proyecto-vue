<template>
  <div>
    <nav>
      <router-link to="/">Inicio</router-link> 
      <router-link to="/if">v-if</router-link> 
      <router-link to="/else-if">v-else-if</router-link>
      <router-link to="/else">v-else</router-link> 
      <router-link to="/show">v-show</router-link> 
      <router-link to="/for">v-for</router-link> 
      <router-link to="/key">v-bind:key</router-link>
    </nav>

    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  flex-wrap: wrap;       
  justify-content: center;
  gap: 15px;
  padding: 15px;
  background: #f4f6f8;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

nav a{
  text-decoration: none;
  color: #42b883;
  font-weight: bold;
  font-size: 16px;
  transition: 0.3s;
  text-align: center;
}

nav a:hover {
  color: #2e7d32;
}

nav a.router-link-active {
  border-bottom: 3px solid #42b883;
}
</style>