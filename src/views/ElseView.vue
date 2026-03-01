<template>
  <div class="container">
    <h1>Directiva v-else</h1>

    <section class="explicacion">
      <h2>¿Qué es v-else?</h2>
      <p>
        La directiva <strong>v-else</strong> se utiliza junto con
        <strong>v-if</strong> para mostrar un bloque alternativo
        cuando la condición del v-if es falsa.
      </p>

      <p>
        Es útil cuando queremos mostrar dos posibles resultados
        dependiendo de una condición.
      </p>
    </section>

    <section class="estructura">
      <h2>Estructura básica:</h2>
      <pre>
&lt;p v-if="condicion"&gt;Contenido verdadero&lt;/p&gt;
&lt;p v-else&gt;Contenido alternativo&lt;/p&gt;
      </pre>
    </section>

    <section class="ejemplo">
      <h2>Ejemplo interactivo:</h2>

      <button @click="toggleEstado">
        Cambiar estado del usuario
      </button>

      <p v-if="activo" class="activo">
         El usuario está ACTIVO
      </p>

      <p v-else class="inactivo">
         El usuario está INACTIVO
      </p>
    </section>
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
.container {
  max-width: 700px;
  margin: auto;
  padding: 30px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
}

section {
  margin-top: 30px;
}

pre {
  background: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  overflow-x: auto;
}

button {
  padding: 10px 15px;
  margin: 15px 0;
  cursor: pointer;
}

.activo {
  color: green;
  font-weight: bold;
}

.inactivo {
  color: red;
  font-weight: bold;
}
</style>