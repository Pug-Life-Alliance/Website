<template>
  <div class="container">
    <div class="content">
      <div>
        <Logo />
        <p class="about">
          PLA was created with a single goal in mind, to bring the joy back into
          playing games. Somewhere along the way we, as gamers, lost the simple
          joy and relief that living in a fantasy world brings. We don’t want to
          have to work or feel like we are obligated to play, we want to dive
          into a story and get lost for a few hours and escape the world. If you
          are looking for a group of like minded people to play with, come and
          join us. Together we will save games...
        </p>
        <p class="quote">
          <i>Bridging the gap between casual and hardcore since 2021 - Kef</i>
        </p>
        <Links />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logo from '../components/Logo.vue'
import Links from '../components/Links.vue'

export default defineComponent({
  name: 'Home',
  components: { Logo, Links },
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
.about {
  padding: 20px;
  font-family: 'Roboto', Georgia, sans-serif;
  font-size: 20px;
  color: #ffffff;
}
.quote {
  padding: 20px;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 18px;
  color: #ffffff;
}
</style>
