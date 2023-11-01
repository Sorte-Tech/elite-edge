<template>
  <div>
    <AboutPage class="desktop-view" />
    <MobilePage class="mobile-view" />
  </div>
</template>

<script>
import MobilePage from '../components/PagesComponents/AboutPage/mobileView'
import AboutPage from '../components/PagesComponents/AboutPage/desktopView'
export default {
  components: {
    MobilePage,
    AboutPage,
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1025px) {
  .mobile-view {
    display: none;
  }
}
@media screen and (max-width: 1024px) {
  .desktop-view {
    display: none;
  }
}
</style>
