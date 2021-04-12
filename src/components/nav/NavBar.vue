<template>
  <div class="nav-container">
    <div class="width-wrapper">
      <Logo />
      <NavLinks />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavLinks from './NavLinks.vue'
import Logo from '../Logo.vue'

export default defineComponent({
  name: 'navBar',
  components: { NavLinks, Logo },
})
</script>

<style scoped>
.nav-container {
  display: flex;
  justify-content: center;
  flex: 1 1 auto;
}
.width-wrapper {
  display: flex;
  max-width: 1100px;
  flex-flow: row wrap;
  justify-content: space-between;
  flex: 1 1 auto;
  margin: 20px;
}
</style>
