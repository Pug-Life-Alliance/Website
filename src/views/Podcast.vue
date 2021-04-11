<template>
  <div class="container">
    <div class="content">
      <div><h1>Podcasts</h1></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'podcasts',
})
</script>

<style>
.container {
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #0f001c;
}
.content {
  display: flex;
  margin: 0 auto;
  max-width: 800px;
  padding: 24px;
}
</style>
