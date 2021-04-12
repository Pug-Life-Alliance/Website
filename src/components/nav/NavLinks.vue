<template>
  <div class="links-container">
    <router-link to="/podcast" class="link">Podcast</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'navLinks',
})
</script>

<style scoped>
.links-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
}
.link {
  display: flex;
  width: 75px;
  font-family: Roboto, Arial, Helvetica, sans-serif;
  text-decoration: none;
  justify-content: flex-end;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: #262626;
  padding: 20px 0;
}
.link:hover {
  color: #464646;
}
</style>
