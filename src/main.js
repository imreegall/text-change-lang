import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import {createI18n} from "vue-i18n";

const localStorageLang = localStorage.getItem('lang')

const messages = {
    "ru": {
        "welcome": "Привет!"
    },
    "en": {
        "welcome": "Hello!"
    }
}

const i18n = createI18n({
    seo: true,
    legacy: true,
    locale: localStorageLang || "ru",
    fallbackLocale: 'en',
    messages
})

const app = createApp(App)

app.use(i18n)
app.mount('#app')
