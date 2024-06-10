<template>
  <section class="landing-page">
    <div class="container">
      <div class="landing-page__banner">
        <div class="landing-page__banner-text">
          <h1>
            <p>Cafeterias e outros locais</p>
            <p>para trabalhar remotamente</p>
            <p>em Salvador</p>
          </h1>
          <div>
            <p>
              Desbrave essa cidade maravilhosa sendo um nômade digital para
              conhecer o que ela tem de melhor!
            </p>
            <div>
              <Icon name="TextIcon" class="landing-page__text-circle" />
              <Icon name="ArrowIcon" class="landing-page__arrow" />
            </div>
          </div>
        </div>
        <NuxtImg src="/salvador.png" alt="foto da cidade" />
      </div>
    </div>

    <div class="how-it-works">
      <div class="container how-it-works__block">
        <Icon name="WaveIcon" class="how-it-works__wave" />
        <Icon name="WaveIcon" class="how-it-works__wave" />
        <Icon name="SunIcon" class="how-it-works__sun" />
        <h2>Aproveite o melhor do nomadismo digital em Salvador!</h2>
        <section class="row justify-content-center">
          <div class="col-12 col-lg-3">
            <div class="how-it-works__item">
              <div>
                <Icon name="PcIcon" />
              </div>
              <h3>Explore o melhor da cidade enquanto trabalha!</h3>
              <p>
                Cafeterias e estabelecimentos para trabalhar remotamente e
                desbrave a cidade para conhecer mais!
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <div class="how-it-works__item">
              <div>
                <Icon name="PinIcon" />
              </div>
              <h3>Explore o melhor da cidade enquanto trabalha!</h3>
              <p>
                Cafeterias e estabelecimentos para trabalhar remotamente e
                desbrave a cidade para conhecer mais!
              </p>
            </div>
          </div>
          <div class="col-12 col-lg-3">
            <div class="how-it-works__item">
              <div>
                <Icon name="InstagramIcon" />
              </div>
              <h3>Explore o melhor da cidade enquanto trabalha!</h3>
              <p>
                Cafeterias e estabelecimentos para trabalhar remotamente e
                desbrave a cidade para conhecer mais!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from "#components";

export default {
  components: {
    Icon,
  },
};
</script>

<style lang="sass">
@import "../assets/styles/pages/landing-page/landing-page"
</style>
