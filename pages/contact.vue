<template>
  <div>
    <ContactPage class="desktop-view" />

    <MobilePage class="mobile-view" />
  </div>
</template>

<script>
import MobilePage from '../components/PagesComponents/ContactPage/MobileView'
import ContactPage from '../components/PagesComponents/ContactPage/desktopView'
export default {
  components: {
    MobilePage,
    ContactPage,
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
