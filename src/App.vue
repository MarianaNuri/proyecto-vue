<template>
  <div>
    <nav>
      <router-link to="/">Inicio</router-link> |
      <router-link to="/if">v-if</router-link> |
      <router-link to="/else-if">v-else-if</router-link>|
      <router-link to="/else">v-else</router-link> |
      <router-link to="/show">v-show</router-link> |
      <router-link to="/for">v-for</router-link> |
      <router-link to="/key">v-bind:key</router-link>
    </nav>

    <router-view />
  </div>
</template>