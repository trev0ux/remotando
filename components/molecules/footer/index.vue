<template>
  <footer class="footer">
    <div class="container">
        <a href="https://github.com/trev0ux/remotando">{{ $t("seeGithub") }}</a>
        <logo-icon icon-name="LogoIcon" />
      <p class="m-0">{{ $t("footerText") }}</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="sass">
@import "./footer.scss"
</style>
