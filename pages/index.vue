<template>
  <div>
    <LandingPage class="desktop-view" />

    <MobilePage class="mobile-view" />
  </div>
</template>

<script>
import MobilePage from '../components/PagesComponents/LandingPage/mobileView'
import LandingPage from '../components/PagesComponents/LandingPage/desktopView'
export default {
  components: {
    MobilePage,
    LandingPage,
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
