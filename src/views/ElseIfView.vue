<template>
  <div class="page">
    <h1>Directiva v-else-if</h1>

    <div class="card">
      <h2>¿Qué es v-else-if</h2>
      <p>
        <strong>v-else-if</strong> en Vue es una directiva de renderizado condicional que actúa como un "else if" de JavaScript, permitiendo mostrar elementos HTML solo si una condición previa de <strong>v-if</strong> es falsa y su propia condición es verdadera.
      </p>
      <p>
        Se usa para encadenar múltiples condiciones tras un <strong>v-if</strong>.
      </p>
    </div>
    <div class="card">
      <h2>Funcionamiento</h2>
      <ul>
        <li><strong>v-if:</strong> Evalua la primera condicion.</li>
        <li><strong>v-else-if:</strong> Evalúa otra condición si la anterior fue falsa.</li>
        <li><strong>v-else:</strong> Se ejecuta si ninguna condición anterior se cumple.</li>
      </ul>

      <h2>Estructura basica:</h2>
      <pre>
&lt;p v-if="condicion1"&gt;Estado 1&lt;/p&gt;
&lt;p v-else-if="condicion2"&gt;Estado 2&lt;/p&gt;
&lt;p v-else&gt;Otro estado&lt;/p&gt;
      </pre>
    </div>

    <div class="card ejemplo">
      <h2>Ejemplo interactivo</h2>

      <button @click="cambiarEstado">
        Cambiar tipo de usuario
      </button>

      <div class="estado">
        <p v-if="rol === 'admin'" class="admin">
          Bienvenido administrador
        </p>
        <p v-else-if="rol === 'usuario'" class="usuario">
          Bienvenido Usuario
        </p>
        <p  v-else class="invitado">
          Bienvenido invitado
        </p>
      </div>
    </div>

    <div class="card info">
      <h2>¿Que ocurre internamente?</h2>
      <p>Vue evalúa las condiciones en orden.
        Cuando encuentra una que es verdadera,
        renderiza ese bloque y deja de evaluar las demás.
      </p>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const rol = ref('invitado')

function cambiarEstado(){
  if (rol.value === 'invitado'){
    rol.value = 'usuario'
  } else if (rol.value === 'usuario') {
    rol.value = 'admin'
  } else {
    rol.value = 'invitao'
  }
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
.admin {
  color: #6a1b9a;
}
.usuario {
  color: #1565c0;
}
.invitado {
  color: #c62828;
}

.info {
  background: #f0f7ff;
}
</style>