<template>
  <section class="landing-page" :class="statusClass">
    <div class="container">
      <div class="landing-page__banner">
        <div class="landing-page__banner-text">
          <h1>
            <p>{{ $t("knowPlaces") }}</p>
            <p>{{ $t("toWorkRemotely") }}</p>
            <p>{{ $t("inSalvador") }}</p>
          </h1>
          <div>
            <p>
              {{ $t("descriptionCity") }}
            </p>
            <nuxt-link to="/search">
              <Icon name="TextIcon" class="landing-page__text-circle" />
              <Icon name="ArrowIcon" class="landing-page__arrow" />
            </nuxt-link>
          </div>
        </div>
        <NuxtImg src="/cafelier.jpg" alt="foto da cidade" />
      </div>
    </div>

    <div class="how-it-works">
      <div class="container how-it-works__block">
        <Icon name="WaveIcon" class="how-it-works__wave" />
        <Icon name="WaveIcon" class="how-it-works__wave" />
        <Icon name="SunIcon" class="how-it-works__sun" />
        <h2> {{ $t("enjoyCity") }}</h2>
        <section class="row justify-content-center">
          <div class="col-12 col-lg-3">
            <div class="how-it-works__item">
              <div>
                <Icon name="PcIcon" />
              </div>
              <h3> {{ $t("benefitTitleOne") }}</h3>
              <p>
                {{ $t("benefitDescriptionOne") }}
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <div class="how-it-works__item">
              <div>
                <Icon name="PinIcon" />
              </div>
              <h3> {{ $t("benefitTitleTwo") }}</h3>
              <p>
                {{ $t("benefitDescriptionTwo") }}
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <div class="how-it-works__item">
              <div>
                <Icon name="InstagramIcon" />
              </div>
              <h3> {{ $t("benefitTitleThree") }}</h3>
              <p>
                {{ $t("benefitDescriptionThree") }}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "#components";
import { useI18n } from 'vue-i18n';

const { locale, t } = useI18n()

const statusClass = computed(() => {
  return `landing-page-${locale.value}`
});

useHead(() => ({
  title: t('title'),
  meta: [
    { name: 'description', content: t('description') },
    // Open Graph / Facebook
    { property: 'og:title', content: t('title') },
    { property: 'og:description', content: t('description') },
    // Twitter
    { name: 'twitter:title', content: t('title') },
    { name: 'twitter:description', content: t('description') },
  ],
}))
</script>

<style lang="sass">
@import "../assets/styles/pages/landing-page/landing-page"
</style>
