<template>
  <div>
    <h1>v-show</h1>

    <p>
      v-show oculta o muestra un elemento mediante CSS.
    </p>

    <button @click="mostrar = !mostrar">
      Mostrar / Ocultar
    </button>

    <p v-show="mostrar">
      Este mensaje aparece usando v-show.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mostrar: false
    }
  }
}
</script>