<template>
  <div id="app">
    <p @click="changeLangButton">Сменить язык</p>
    <nft-burger-menu />
    <nft-navigation
        @selectedLang="changeLangOfNavigation"
    />
  </div>
</template>

<script>
import nftBurgerMenu from "./components/nft-burger-menu.vue"
import nftNavigation from "./components/nft-navigation.vue"

export default {
  // *название компонента
  name: 'App',

  // дети компонента
  components: {
    nftBurgerMenu,
    nftNavigation
  },

  // не персональные данные компонента (из родителя)
  props: {},

  // персональные данные
  data() {
    return {
      title: '',
      pageLang: this.$i18n.locale
    }
  },

  // вычисляемое свойство
  computed: {},

  // события
  methods: {
    //закрытие языковой панели при клике на любое другое место
    closeLangMenu: (e) => {
      const menu = document.querySelector('.changeLangMenu')
      const menu_is_active = menu.classList.contains('active')

      if (menu_is_active) {
        const target = e.target

        const btn = document.querySelector('.changeLangBtn')

        const its_menu = target === menu
        const its_btn = target === btn || btn.contains(target)

        if (!its_menu && !its_btn) {
          menu.classList.toggle('active')
        }
      }
    },

    changeLangOfNavigation(value) {
      this.$i18n.locale = value
      localStorage.setItem('lang', value)
      document.documentElement.setAttribute('lang', value)
    },

    changeLangButton() {
      if (this.$i18n.locale === 'ru') {
        this.$i18n.locale = 'en'
        localStorage.setItem('lang', 'en')
        document.documentElement.setAttribute('lang', 'en')
      }
      else {
        this.$i18n.locale = 'ru'
        localStorage.setItem('lang', 'ru')
        document.documentElement.setAttribute('lang', 'ru')
      }
    }
  },

  // слежение за изменением
  watch: {
    pageLang(newLang) {
      this.$i18n.locale = newLang
      localStorage.setItem('lang', newLang)
      document.documentElement.setAttribute('lang', newLang)
      console.log("lang is changed!" + newLang)
    }
  },

  // хук, который отрабатывает после загрузки страницы
  mounted() {
    // закрытие меню выбора языка по клику в любое другое место
    document.addEventListener('click', this.closeLangMenu)

    // плавная прокрутка до якоря
    document.querySelectorAll('a[href*="#"]').forEach(elem => {
      elem.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = elem.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    })

    // изменение языка
    // const langMenuElems = document.querySelectorAll('.changeLangMenu > li')
    // langMenuElems.forEach(elem => {
    //   elem.addEventListener('click', element => {
    //     this.pageLang = element.currentTarget.innerText.toLowerCase()
    //     alert(element.currentTarget.innerText.toLowerCase())
    //   })
    // })

    // setTimeout(() => {
    //   // this.$i18n.locale = 'fa'
    //   this.pageLang = 'fa'
    // }, 2000)
  },
}
</script>

<style lang="scss">
  #app {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
    color: #F5F5F5;
    min-height: 100vh;

    @media (max-width: 1439px) {
      background-color: $main-background-mobile;
    }

    @media (min-width: 1440px) {
      background-color: $main-background-desktop;
    }
  }
</style>