<template>
  <div>
    <ProjectPage class="desktop-view" />

    <MobilePage class="mobile-view" />
  </div>
</template>

<script>
import MobilePage from '../../components/PagesComponents/ProjectPage/mobileView'
import ProjectPage from '../../components/PagesComponents/ProjectPage/desktopView'
export default {
  components: {
    MobilePage,
    ProjectPage,
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
