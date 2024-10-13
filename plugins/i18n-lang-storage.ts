import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(({ $i18n }) => {
  if (process.client) {
    const savedLang = localStorage.getItem('user-lang')
    if (savedLang && (savedLang === 'en' || savedLang === 'pt')) {
      $i18n.setLocale(savedLang)
    } else {
      const browserLang = navigator.language.split('-')[0]
      const newLang = browserLang === 'pt' ? 'pt' : 'en'
      $i18n.setLocale(newLang)
      localStorage.setItem('user-lang', newLang)
    }

    $i18n.onLanguageSwitched = (oldLocale: string, newLocale: string) => {
      localStorage.setItem('user-lang', newLocale)
    }
  }
})