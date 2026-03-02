<template>
  <div class="page">
    <h1>Directiva v-if</h1>

    <div class="card">
      <h2>¿Qué es v-if?</h2>
      <p>
        <strong>v-if</strong> es una directiva condicional que permite renderizar
        un elemento del DOM únicamente cuando una condición es verdadera.
        Si la condición cambia y deja de cumplirse, Vue elimina completamente
        el elemento del DOM. Esto significa que el elemento no solo se oculta,
        sino que deja de existir en la estructura HTML mientras la condición
        sea falsa.
      </p>
    </div>
    <div class="card">
      <h2>Funcionamiento</h2>
      <p>Cuando usamos v-if, Vue evalúa la expresión que le pasamos:</p>
      <ul>
        <li><strong>Si es verdadera (true):</strong> El elemento se crea y se inserta en el documento.</li>
        <li><strong>Si es falsa (false):</strong> El elemento se elimina completamente del DOM.</li>
      </ul>
      <h2>Ejemplo basico:</h2>
      <pre>
&lt;p v-if="activo"&gt;El usuario está activo&lt;/p&gt;
      </pre>
    </div>

    <div class="card ejemplo">
      <h2>Ejemplo interactivo</h2>
      <button @click="toggleLogin">
        {{ logueado ? 'Cerrar sesion' : 'Iniciar sesion' }}
      </button>
      <div class="estado">
        <p v-if="logueado" class="bienvenida">
          Bienvenido
        </p>
      </div>
    </div>

    <div class="card info">
      <h2>¿Que ocurre internamente?</h2>
      <p>
        Si <strong>activo</strong> es true, el párrafo se muestra.
        Si es false, el párrafo desaparece del DOM.
      </p>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const logueado = ref(false)
function toggleLogin(){
  logueado.value = !logueado.value
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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}
pre{
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
.bienvenida {
  color: #2e7d32;
}
.info {
  background: #f0f7ff;
}
</style>