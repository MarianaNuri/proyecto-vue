<template>
  <div class="page">
    <h1>Directiva v-else</h1>

    <div class="card">
      <h2>¿Qué hace v-else?</h2>
      <p>
        <strong>v-else</strong> permite mostrar un bloque alternativo
        cuando la condición de <strong>v-if</strong> es falsa.
      </p>

      <p>
        Se utiliza cuando necesitamos manejar dos posibles estados
        opuestos en una interfaz.
      </p>
    </div>

    <div class="card">
      <h2>Estructura básica</h2>
      <pre>
&lt;elemento v-if="condicion"&gt;
  Contenido si es verdadero
&lt;/elemento&gt;

&lt;elemento v-else&gt;
  Contenido alternativo
&lt;/elemento&gt;
      </pre>
    </div>

    <div class="card ejemplo">
      <h2> Ejemplo interactivo</h2>

      <button @click="toggleEstado">
        Cambiar estado
      </button>

      <div class="estado">
        <p v-if="activo" class="activo">
          Usuario ACTIVO
        </p>

        <p v-else class="inactivo">
          Usuario INACTIVO
        </p>
      </div>
    </div>

    <div class="card info">
      <h2>¿Qué ocurre internamente?</h2>
      <p>
        Cuando la condición cambia, Vue elimina completamente
        el elemento del DOM y renderiza el otro bloque.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const activo = ref(true)

function toggleEstado() {
  activo.value = !activo.value
}
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
  background: #42b883;
  color: white;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  background: #369870;
}

.estado {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}

.activo {
  color: #2e7d32;
}

.inactivo {
  color: #c62828;
}

.info {
  background: #f0f7ff;
}
</style>