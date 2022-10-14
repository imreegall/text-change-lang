<template>
  <div class="vite-change-lang">
    <p>v2</p>
    <p @click="changeLang">Сменить язык</p>
    <p class="lang">{{this.$i18n.locale}}</p>
    <p>{{$t('nav.collection')}}</p>
  </div>
</template>

<script>
export default {
  name: "vite-change-lang",
  methods: {
    changeLang(elem) {
      const currentLang = document.querySelector('.lang').innerHTML
      if (currentLang === 'ru') {
        this.$i18n.locale = 'en'
      }
      else {
        this.$i18n.locale = 'ru'
      }
      localStorage.setItem('lang', this.$i18n.locale)
    }
  }
}
</script>

<style scoped>

</style>