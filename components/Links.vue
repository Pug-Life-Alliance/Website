<template>
  <div class="links">
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

<style>
.links {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
}
a {
  display: flex;
  color: #ffffff;
  font-size: 32px;
  padding: 20px;
}
a:hover {
  color: #c6c6c6;
}
</style>
