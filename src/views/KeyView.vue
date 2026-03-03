<template>
  <div class="page">
    <h1>Directiva v-bind:key</h1>

    <div class="card">
      <h2>¿Qué es v-bind:key?</h2>
      <p>
        <strong>v-bind:key</strong> permite identificar de forma única
        cada elemento generado con <strong>v-for</strong>.
      </p>
      <p>
        Ayuda a Vue a optimizar el renderizado cuando la lista cambia.
      </p>
    </div>

    <div class="card">
      <h2>Funcionamiento</h2>
      <ul>
        <li>Se usa junto con v-for.</li>
        <li>Debe tener un valor único (como un id).</li>
      </ul>

      <h2>Estructura básica:</h2>
      <pre>
&lt;li v-for="usuario in usuarios" :key="usuario.id"&gt;
  {{ usuario.nombre }}
&lt;/li&gt;
      </pre>
    </div>

    <div class="card ejemplo">
      <h2>Ejemplo</h2>

      <ul>
        <li v-for="usuario in usuarios" :key="usuario.id">
          {{ usuario.nombre }}
        </li>
      </ul>
    </div>

    <div class="card info">
      <h2>¿Qué ocurre internamente?</h2>
      <p>
        Vue usa el valor de <strong>key</strong> para saber qué elemento cambió,
        fue agregado o eliminado, haciendo las actualizaciones más eficientes.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const usuarios = ref([
  { id: 1, nombre: 'Mariana' },
  { id: 2, nombre: 'Eva' },
  { id: 3, nombre: 'Yazmin' }
])
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