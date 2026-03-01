<template>
  <div class="page">
    <h1>Directiva v-show</h1>

    <div class="card">
      <h2> ¿Qué hace v-show?</h2>
      <p>
        <strong>v-show</strong> controla la visibilidad de un elemento,
        pero sin eliminarlo del DOM.
      </p>

      <p>
        Solo cambia su propiedad CSS <code>display</code>.
      </p>
    </div>

    <div class="card">
      <h2>Estructura básica</h2>
      <pre>
&lt;elemento v-show="condicion"&gt;
  Contenido visible u oculto
&lt;/elemento&gt;
      </pre>
    </div>

    <div class="card ejemplo">
      <h2>Ejemplo interactivo</h2>

      <button @click="mostrar = !mostrar">
        Mostrar / Ocultar mensaje
      </button>

      <div class="mensaje-box">
        <p v-show="mostrar" class="mensaje">
          Este mensaje usa v-show
        </p>
      </div>
    </div>

    <div class="card comparacion">
      <h2>⚖ Diferencia con v-if</h2>
      <ul>
        <li>v-if elimina el elemento del DOM</li>
        <li>v-show solo lo oculta con CSS</li>
        <li>v-show es mejor para cambios frecuentes</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const mostrar = ref(true)
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
  box-shadow: 0 4px 10px rgba(0,0,0,0.08);
}

pre {
  background: #f4f6f8;
  padding: 15px;
  border-radius: 8px;
}

button {
  padding: 10px 18px;
  border: none;
  background: #35495e;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #2c3e50;
}

.mensaje-box {
  margin-top: 20px;
  min-height: 30px;
}

.mensaje {
  font-weight: bold;
  color: #1976d2;
}

.comparacion {
  background: #f9f9ff;
}
</style>