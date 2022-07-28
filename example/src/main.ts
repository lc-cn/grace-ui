import { createApp } from 'vue'
import GraceUI from 'grace-ui'
import 'grace-ui/style/index.scss'
import App from './App.vue'
console.log(GraceUI)
createApp(App).use(GraceUI).mount('#app')
