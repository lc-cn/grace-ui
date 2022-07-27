import { createApp } from 'vue'
import {GrButton} from 'grace-ui'
import 'grace-ui/theme-default/index.scss'
import App from './App.vue'
console.log(GrButton)
createApp(App).use(GrButton).mount('#app')
