<template>
  <div class="container">
    <h1>Directiva v-show</h1>

    <section class="explicacion">
      <h2>¿Qué es v-show?</h2>
      <p>
        La directiva <strong>v-show</strong> se utiliza para
        mostrar u ocultar un elemento en el DOM.
      </p>

      <p>
        A diferencia de v-if, el elemento siempre permanece en el DOM,
        pero se oculta usando CSS (display: none).
      </p>
    </section>

    <section class="estructura">
      <h2>Estructura básica:</h2>
      <pre>
&lt;p v-show="condicion"&gt;Contenido visible u oculto&lt;/p&gt;
      </pre>
    </section>

    <section class="ejemplo">
      <h2>Ejemplo interactivo:</h2>

      <button @click="mostrar = !mostrar">
        Mostrar / Ocultar mensaje
      </button>

      <p v-show="mostrar" class="mensaje">
         Este mensaje se controla con v-show
      </p>
    </section>

    <section class="comparacion">
      <h2>Diferencia con v-if</h2>
      <p>
        v-if elimina el elemento del DOM cuando la condición es falsa.
        v-show solo lo oculta visualmente.
      </p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mostrar = ref(true)
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

.mensaje {
  color: blue;
  font-weight: bold;
}
</style>