<template>
  <div class="page">
    <h1>Proyecto Unidad 3 - SPA con Vue</h1>

    <div class="card">
      <p>
        Esta aplicacion demuestra el uso de directivas como v-if, v-show, v-for y v-bind:key utilizando Vue Router.
      </p>
    </div>
    <div class="card">
      <h2>¿Qué es un SPA?</h2>
      <p>
        Es un sitio web que carga una sola vez un documento HTML inicial y actualiza el contenido de forma dinámica mediante JavaScript sin necesidad de recargar la página completa.
      </p>
    </div>

    <div class="card">
      <h2>Directivas implementadas</h2>
      <ul>
        <li>v-if</li>
        <li>v-else-if</li>
        <li>v-else</li>
        <li>v-show</li>
        <li>v-for</li>
        <li>v-blind:key</li>
      </ul>
    </div>

    <div class="card">
      <h2>Ejemplo interactivo</h2>
      <button @click="mostrar = !mostrar">
        {{ mostrar ? "Ocultar mensaje" : "Mostrar mensaje" }}
      </button>
      
      <p v-if="mostrar">
        Vue actualiza el DOM de forma reactiva.
      </p>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const mostrar = ref(false)
</script>

<style scoped>
.page {
  width: 90%;
  max-width: 1000px;
  margin: auto;
  padding: 40px;
  font-family: 'Segoe UI', sans-serif;
}

.card {
  background: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}
</style>
