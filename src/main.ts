import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faTwitch,
  faTwitter,
  faTiktok,
  faYoutube,
  faDiscord,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router'

library.add(faTwitch, faTwitter, faTiktok, faYoutube, faDiscord)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')
