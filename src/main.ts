import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitch,
  faTwitter,
  faTiktok,
  faYoutube,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTwitch, faTwitter, faTiktok, faYoutube, faDiscord)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
