<template>
  <div>
    <div class="page-wrapper"></div>
    <div class="top-base">
      <the-header />
      <!-- <TheSidebar /> -->
      <main>
        <transition :name="transitionName" mode="out-in">
          <Nuxt />
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: 'slide-left',
    }
  },
  // transition: {
  //   name: 'home',
  //   mode: 'out-in',
  // },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
  },
  components: {
    TheHeader: () => import('@/components/TheHeader'),
  },
  mounted() {
    // alert('hello')
    if (window.outerWidth <= 768) {
      this.$gsap.to('.second-logo', {
        opacity: 1,
      })
    }
  },
}
</script>
<style></style>
