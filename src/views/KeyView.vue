<template>
  <div class="page">
    <h1>Directiva v-for con v-bind:key</h1>

    <div class="card">
      <h2>¿Qué es v-bind:key?</h2>
      <p>
        <strong>v-bind:key</strong> es una propiedad que ayuda a Vue
        a identificar de manera única cada elemento generado con v-for.
      </p>
      <p>
        Permite que Vue optimice la actualización del DOM cuando la lista cambia.
      </p>
    </div>

    <div class="card">
      <h2>Funcionamiento</h2>
      <ul>
        <li>Recorre cada elemento del arreglo.</li>
        <li>Asigna una clave única a cada elemento.</li>
        <li>Mejora el rendimiento y evita errores visuales.</li>
      </ul>

      <h2>Estructura básica:</h2>
      <pre>
&lt;li v-for="(item, index) in lista" :key="index"&gt;
  {{ item }}
&lt;/li&gt;
      </pre>
    </div>

    <div class="card ejemplo">
      <h2>Ejemplo interactivo</h2>

      <ul>
        <li 
          v-for="(producto, index) in productos" 
          :key="index"
        >
          {{ producto }}
        </li>
      </ul>
    </div>

    <div class="card info">
      <h2>¿Qué ocurre internamente?</h2>
      <p>
        Vue usa la propiedad <strong>key</strong> para diferenciar
        cada nodo virtual. Cuando el arreglo cambia, Vue solo
        actualiza los elementos necesarios en lugar de volver
        a renderizar toda la lista.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const productos = ref(['Laptop', 'Mouse', 'Teclado', 'Monitor'])
</script>

<style scoped>
.page {
  max-width: 800px;
  margin: auto;
  padding: 40px;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

.card {
  background: white;
  padding: 25px;
  margin-bottom: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

pre {
  background: #f4f6f8;
  padding: 15px;
  border-radius: 8px;
}

.info {
  background: #f0f7ff;
}
</style>