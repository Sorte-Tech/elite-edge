<template>
  <div>
    <b-sidebar
      id="sidebar-backdrop"
      title="Sidebar with backdrop"
      backdrop
      shadow
      right
      z-index="10000"
      bg-variant="white"
      no-header
      d-flex
      flex-column
    >
      <template #default="{ hide }">
        <img
          src="../assets/images/png/light-logo.svg"
          class="second-logo"
          alt=""
        />
        <div class="menu-container">
          <ul>
            <li>
              <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about">Who We Are</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects">Portfolio</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">Contact Us</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <b-button variant="transparent " class="text-light" @click="hide">
            <b-img src="~svg/closeIcon.svg" width="15" class="close-button" />
            &nbsp; close
          </b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: 'TheSidebar',
  data() {
    return {
      sidebarWidth: '40%',
    }
  },

  mounted() {
    if (window.innerWidth <= 768) {
      this.sidebarWidth = '100%'
    }
  },
}
</script>

<style lang="scss">
.b-sidebar {
  background-color: #1b0905 !important;
  @media screen and (max-width: 992px) {
    width: 100%;
  }
  .btn:focus,
  .btn.focus {
    box-shadow: none;
  }
  .second-logo {
    top: 20vw;
    left: 42%;
    width: 15vw;
    position: absolute;
  }

  .btn {
    left: 37%;
    position: absolute;
    bottom: 20vw;
    font-size: 4.2vw;
    text-transform: uppercase;
  }
  .menu-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 2.3rem;

    ul {
      list-style: none;
      text-decoration: none;
      padding: 0;
      margin: 0;
      li {
        margin-bottom: 30px;
        font-weight: 500;
        font-family: $secondary-font;
        a {
          font-size: 7vw;
          color: var(--light);
        }
        a:hover {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
