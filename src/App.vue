<template>
  <NavBar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from './components/nav/NavBar.vue'

export default defineComponent({
  name: 'App',
  components: { NavBar },
})
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #262626;
  background-color: #e9e1d9;
  display: flex;
  flex-direction: column;
  min-width: 350px;
}
body {
  margin: 0;
}
</style>
