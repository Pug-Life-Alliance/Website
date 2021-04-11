<template>
  <div class="social-links">
    <a href="https://discord.gg/pJcspnkwKS" title="PLA Discord">
      <font-awesome-icon :icon="['fab', 'discord']" />
    </a>
    <a href="https://twitter.com/AlliancePug" title="PLA Twitter">
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </a>
    <a href="https://www.twitch.tv/keflojake" title="PLA Twitch">
      <font-awesome-icon :icon="['fab', 'twitch']" />
    </a>
    <a
      href="https://www.youtube.com/channel/UCXJeZOHlxIoBvMxJqQbjeMQ"
      title="PLA Youtube"
    >
      <font-awesome-icon :icon="['fab', 'youtube']" />
    </a>
    <a
      href="https://www.tiktok.com/@puglifealliance?lang=en"
      title="PLA TikTok"
    >
      <font-awesome-icon :icon="['fab', 'tiktok']" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Links',
})
</script>

<style scoped>
.social-links {
  display: flex;
  flex-flow: row wrap;
  margin: 0 auto;
  justify-content: center;
}
a {
  display: flex;
  color: #262626;
  font-size: 32px;
  padding: 20px;
}
a:hover {
  color: #464646;
}
</style>
