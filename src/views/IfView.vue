<template>
  <div>
    <h1>v-bind:key</h1>

    <p>
      La directiva v-bind:key permite identificar de forma única
      cada elemento dentro de un bucle v-for.
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