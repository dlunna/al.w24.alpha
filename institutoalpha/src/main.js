import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faMedal } from '@fortawesome/free-solid-svg-icons'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faWhatsapp } from '@fortawesome/free-brands-svg-icons'



/*<i class="fa-solid fa-school"></i>*/
/* add icons to the library */
library.add(faMedal, faCertificate, faAward, faHome, faFacebookF, faWhatsapp)




const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
import 'bootstrap/dist/js/bootstrap.bundle.min.js'



/* Set up using Vue 3 */
//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App)
//.component('font-awesome-icon', FontAwesomeIcon)
//.mount('#app')