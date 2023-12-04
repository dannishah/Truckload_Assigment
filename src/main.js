/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'
import Header from "@/components/Header.vue"
import Main from "@/components/Main.vue";
import Features from "@/components/Features.vue";
import Cargo from "@/components/Cargo.vue";
import Footer from "@/components/Footer.vue";
import MainBookTruck from "@/components/MainBookTruck.vue";
import ExpansionBookTruck from "@/components/ExpansionBookTruck.vue";
import MainCarMoving from "@/components/MainCarMoving.vue";
import MainRegister from "@/components/MainRegister.vue";

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
app.component('HeaderH', Header)
app.component('MainH', Main)
app.component('FeaturesH', Features)
app.component('CargoH', Cargo)
app.component('FooterH', Footer)
app.component('MainBookTruck', MainBookTruck)
app.component('ExpansionBookTruck', ExpansionBookTruck)
app.component('MainCarMoving', MainCarMoving)
app.component('MainRegister', MainRegister)
