<template>
  <router-link to="/">
    <img class="logo" src="../assets/pla_logo_head_text.svg" alt="PLA Logo" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Logo',
})
</script>

<style scoped>
.logo {
  height: 100px;
  width: auto;
}
</style>
