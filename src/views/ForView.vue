<template>
  <div class="page">
    <h1>Directiva v-for</h1>

    <div class="card">
      <h2>¿Qué es v-for?</h2>
      <p>
        <strong>v-for</strong> Es una directiva que permite recorrer listas
        y mostrar elementos dinámicamente en la interfaz.
      </p>
      <p>
        Se usa para iterar arreglos u objetos y generar múltiples elementos HTML.
      </p>
    </div>

    <div class="card">
      <h2>Funcionamiento</h2>
      <ul>
        <li>Recorre cada elemento del arreglo.</li>
        <li>Genera un elemento HTML por cada dato.</li>
      </ul>

      <h2>Estructura básica:</h2>
      <pre>
&lt;li v-for="item in lista"&gt;
  {{ item }}
&lt;/li&gt;
      </pre>
    </div>

    <div class="card ejemplo">
      <h2>Ejemplo interactivo</h2>

      <ul>
        <li v-for="producto in productos">
          {{ producto }}
        </li>
      </ul>
    </div>

    <div class="card info">
      <h2>¿Qué ocurre internamente?</h2>
      <p>
        Vue recorre el arreglo y crea un nodo virtual por cada elemento,
        actualizando solo los que cambian cuando el arreglo se modifica.
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
pre{
  background: #f4f6f8;
  padding: 15px;
  border-radius: 8px;
}
.info {
  background: #f0f7ff;
}
</style>