<template>
  <div>
    <h1>v-</h1>

    <p>
      prueba.
    </p>

    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuarios: [
        { id: 1, nombre: 'Mariana' },
        { id: 2, nombre: 'Eva' },
        { id: 3, nombre: 'Yazmin' }
      ]
    }
  }
}
</script>