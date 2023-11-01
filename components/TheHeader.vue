<template>
  <b-container fluid>
    <div class="nav-wrapper">
      <div class="nav">
        <header class="d-flex justify-content-between align-items-start w-100">
          <nuxt-link to="/">
            <div class="logo-brand">
              <img
                src="../assets/images/png/elite-edge-logo.png"
                alt=""
                class="default-logo"
                v-if="$route.path == '/'"
              />
              <img
                src="../assets/images/png/elite-edge-logo2.png"
                class="second-logo"
                alt=""
              />
            </div>
          </nuxt-link>

          <div class="links" align="right">
            <nuxt-link to="/about">about</nuxt-link> <br />
            <nuxt-link to="/projects">portfolio</nuxt-link> <br />
            <nuxt-link to="/contact">contact us</nuxt-link>
          </div>
          <!-- <button v-b-toggle.sidebar-backdrop.>click</button> -->
          <div class="menu-toggle d-lg-none" v-b-toggle.sidebar-backdrop>
            <div class=""></div>
            <p class="text-right mb-0">MENU</p>
          </div>
        </header>
      </div>
    </div>
    <MibileSidebar />
  </b-container>
</template>

<script>
import MibileSidebar from './MibileSidebar'
export default {
  name: 'TheHeader',

  components: {
    MibileSidebar,
  },
  mounted() {
    if (window.outerWidth < 768) {
      this.headerFlow()
    }
  },
  methods: {
    headerFlow() {
      const showHeader = this.$gsap
        .from('.nav', {
          yPercent: -500,
          paused: true,
          duration: 0.6,
        })
        .progress(1)

      this.$ScrollTrigger.create({
        start: 'top top',
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showHeader.play() : showHeader.reverse()
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  top: 5rem;
  position: fixed;
  left: 0;
  width: 100vw;
  z-index: 200;
  padding: 0 9rem;
}
header {
  .logo-brand {
    position: relative;
    img {
      width: 180px;
      margin-top: -24px;
    }
    .second-logo {
      width: 65px;
      left: 0;
      top: 2vw;
      position: absolute;
    }
  }

  .links {
    a {
      color: $dark;
      font-size: 27px;
      text-decoration: none;
      display: inline-block;
      font-weight: 500;
      text-transform: uppercase;
      font-family: $secondary-font;
      &.nuxt-link-exact-active {
        color: red;
        position: relative;
        transition: 0.25s all ease-out;
        &::after {
          top: 17px;
          content: '';
          height: 3px;
          width: 110%;
          position: absolute;
          left: -10%;
          background: $dark;
          outline: none;
          animation: line 0.35s linear forwards;
        }
      }
    }
  }
  @keyframes line {
    from {
      width: 0%;
    }
    to {
      width: 120%;
    }
  }
}
@media screen and (max-width: 768px) {
  .links {
    display: none;
  }

  .nav {
    top: 3rem;
    position: fixed;
    padding: 0 2rem;
  }
  header {
    .logo-brand {
      position: relative;
      .default-logo {
        display: none;
      }
      .second-logo {
        width: 50px;
        left: 0;
        position: absolute;
      }
    }
  }
}
.menu-toggle {
  position: relative;
  width: 23vw;
  p {
    font-weight: 600;
    font-size: 5vw;
    margin-top: -9px;
  }
  div {
    &::before {
      content: '';
      position: absolute;
      background-color: #000;
      height: 3px;
      width: 20px;
      top: -1px;
      left: 0;
    }
    &::after {
      content: '';
      position: absolute;
      background-color: #000;
      height: 3px;
      width: 20px;
      top: 10px;
      left: 0;
    }
  }
}
</style>
