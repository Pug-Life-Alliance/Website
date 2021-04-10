<template>
  <div class="links">
    <a href="https://discord.gg/pJcspnkwKS">
      <font-awesome-icon :icon="['fab', 'discord']" />
    </a>
    <a href="https://twitter.com/AlliancePug">
      <font-awesome-icon :icon="['fab', 'twitter']" />
    </a>
    <a href="https://youtube.com/channel/UCXJeZOH">
      <font-awesome-icon :icon="['fab', 'youtube']" />
    </a>
    <a href="google.com">
      <font-awesome-icon :icon="['fab', 'tiktok']" />
    </a>
  </div>
</template>

<style>
.links {
  padding-top: 16px;
  padding-bottom: 16px;
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
