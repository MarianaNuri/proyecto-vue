<template>
  <div class="page">

  
    <div class="header">
      <h2>Tecnológico Nacional de México</h2>
      <h3>Campus Tuxtla Gutiérrez</h3>
      <div class="line"></div>
    </div>

    <h1 class="main-title">Proyecto Unidad 3</h1>
    <p class="subtitle">
      Desarrollo de una SPA utilizando Vue.js y Vue Router
    </p>

    <div class="card info">
      <p><strong>Materia:</strong> Programación Web</p>
      <p><strong>Docente:</strong> Jorge Octavio Guzmán Sánchez</p>
      <p><strong>Semestre:</strong>  5° Semestre</p>
    </div>

  
    <div class="card">
      <h2>Integrantes</h2>
      <ul>
        <li>Mariana Chávez Nuricumbo</li>
        <li>Eva del Carmen González Santiz</li>
        <li>Yazmín Guadalupe Chacón Hernández</li>
      </ul>
    </div>

  
    <div class="card">
      <h2>Descripción del Proyecto</h2>
      <p>
        Esta aplicación demuestra el uso de directivas como 
        <strong>v-if, v-else-if, v-else, v-show, v-for y v-bind:key</strong>
        dentro de una SPA.
      </p>
    </div>


    <div class="card">
      <h2>Ejemplo interactivo</h2>
      <button @click="mostrar = !mostrar">
        {{ mostrar ? "Ocultar mensaje" : "Mostrar mensaje" }}
      </button>

      <transition name="fade">
        <p v-if="mostrar" class="mensaje">
          Vue actualiza el DOM de forma reactiva.
        </p>
      </transition>
    </div>

    <p class="footer">Marzo 2026</p>

  </div>
</template>

<script setup>
import { ref } from 'vue'
const mostrar = ref(false)
</script>

<style scoped>

.page {
  min-height: 100vh;
  padding: 50px 20px;
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(135deg, #0f3d2e, #1e6f5c);
  text-align: center;
}

.header h2 {
  color: #e8f6ef;
  margin-bottom: 5px;
}

.header h3 {
  color: #cdeee3;
  margin-bottom: 10px;
}

.line {
  width: 80px;
  height: 3px;
  background: #a3f7bf;
  margin: 10px auto 30px auto;
  border-radius: 3px;
}

.main-title {
  color: #ffffff;
  font-size: 2.3rem;
  margin-bottom: 5px;
}

.subtitle {
  color: #d9f3ea;
  margin-bottom: 40px;
}

.card {
  background: white;
  padding: 25px;
  margin: 20px auto;
  border-radius: 14px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  max-width: 750px;
  text-align: left;
  border-left: 6px solid #1e6f5c;
}

.card h2 {
  margin-bottom: 10px;
  color: #145c4b;
}

ul {
  padding-left: 20px;
}

button {
  background: linear-gradient(135deg, #1e6f5c, #289672);
  color: white;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

button:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.mensaje {
  margin-top: 15px;
  font-weight: 500;
  color: #145c4b;
}

.footer {
  margin-top: 40px;
  color: #e8f6ef;
  font-size: 0.9rem;
}

/* Animación */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>