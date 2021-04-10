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
          join us. Together we will save games... “Bridging the gap between
          casual and hardcore since 2021” - Kef
        </p>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #0f001c;
}
.content {
  display: flex;
  max-width: 800px;
  padding: 15px;
}

.about {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 100;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: 1px;
}

.links {
  padding-top: 15px;
}
</style>
