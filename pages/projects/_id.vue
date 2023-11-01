<template>
  <div>
    <ProjectDetails class="desktop-view" />
    <MobileView class="mobile-view" />
  </div>
</template>
<script>
import MobileView from '../../components/PagesComponents/ProjectPage/InnerPage/mobile'
import ProjectDetails from '../../components/PagesComponents/ProjectPage/InnerPage/desktopView'
export default {
  components: {
    MobileView,
    ProjectDetails,
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
