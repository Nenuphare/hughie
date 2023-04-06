import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'

//vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import '@mdi/font/css/materialdesignicons.css'

import {createStore} from "vuex"
export const Store = createStore({
    state(){
        return {
            idArticle:''
        }
    },
    mutations:{
        setIdArticle:(state, status ) => state.idArticle = status
    }
})

const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    }
})


const app = createApp(App)

app.use(router)
app.use(Store)
//app.mount('#app')

app.use(vuetify).mount('#app')