<template>
  <div class="" style="">
    <div class="fixed-content">
      <h1 class="page-title">Portfolio</h1>
    </div>
    <div
      class="v-container4 projects-page"
      ref="projects"
      style="width: 300vw; flex-wrap: no-wrap"
    >
      <section
        class="panel align-items-center"
        v-for="(item, index) in PageContent.projects"
        :key="index"
      >
        <nuxt-link :to="'/projects/' + index">
          <div class="wrapper">
            <b-img :src="item.project_image"></b-img>
            <p class="mb-0">{{ item.project_name }}</p>
          </div>
        </nuxt-link>
      </section>

      <!-- <section class="panel align-items-center">
        <nuxt-link to="/projects/3">
          <div class="wrapper">
            <b-img src="@/assets/images/png/project01.png"></b-img>
            <p class="mb-0">iswagger</p>
          </div>
        </nuxt-link>
      </section>
      <section class="panel align-items-center">
        <nuxt-link to="/projects/1">
          <div class="wrapper">
            <b-img src="@/assets/images/png/elite-edge-bg-img1.png"></b-img>
            <p class="mb-0">ishease</p>
          </div>
        </nuxt-link>
      </section>
      <section class="panel align-items-center">
        <nuxt-link to="/projects/1">
          <div class="wrapper">
            <b-img src="@/assets/images/png/elite-edge-bg-img1.png"></b-img>
            <p class="mb-0">ishease</p>
          </div>
        </nuxt-link>
      </section>
      <section class="panel align-items-center">
        <nuxt-link to="/projects/1">
          <div class="wrapper">
            <b-img src="@/assets/images/png/elite-edge-bg-img1.png"></b-img>
            <p class="mb-0">ishease</p>
          </div>
        </nuxt-link>
      </section>
      <section class="panel align-items-center">
        <nuxt-link to="/projects/1">
          <div class="wrapper">
            <b-img src="@/assets/images/png/elite-edge-bg-img1.png"></b-img>
            <p class="mb-0">ishease</p>
          </div>
        </nuxt-link>
      </section> -->
      <!-- <section class="panel align-items-center"></section> -->
    </div>
    <div class="indicator">
      <progress max="100" value="30"></progress>
    </div>
  </div>
</template>

<script>
import PageContent from '../components/PagesComponents/ProjectPage/content.json'
export default {
  data() {
    return {
      PageContent,
    }
  },
  mounted() {
    const sections = this.$gsap.utils.toArray('.panel')
    const tl = this.$gsap.timeline({
      scrollTrigger: {
        trigger: '.v-container4',
        start: 'top top',
        pin: true,
        scrub: 1,
        paused: true,
        end: () => '+=' - document.querySelector('.v-container4').offsetWidth,
      },
    })

    tl.to(sections, {
      duration: 2,
      xPercent: -100 * (sections.length - 2),
      ease: 'none',
    })
    this.$gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: {
        scrub: 0.3,
        end: () => '+=' + document.querySelector('.v-container4').offsetWidth,
        // onLeave: (self) => {
        //   self.kill()
        //   this.$router.push('/contact')
        // },
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.v-container4 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  padding: 0 10rem;
}

.panel {
  width: 40vw;
  height: 100vh;
  display: flex;
  z-index: 2;
  margin-right: 2vw;
  position: relative;
  box-sizing: border-box;
}
.fixed-content {
  .page-title {
    position: fixed;
    font-size: 4.6vw;
    top: 5.6rem;
    left: 15rem;
    font-family: $secondary-font;
  }
}

.projects-page {
  .wrapper {
    height: 23.2vw;
    width: 40vw;
    margin-top: 5.7vw;
    position: relative;
    overflow: hidden;
    &:hover {
      img {
        transform: rotate(20deg) scale(1.6, 1.6);
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 1s ease-in-out;
  }
  p {
    position: absolute;
    bottom: 0vw;
    color: #fff;
    width: 100%;
    font-size: 1.7vw;
    padding: 0.6vw 0;
    text-align: center;
    font-weight: 500;
    text-transform: capitalize;
    background-color: #1b0905;
    font-family: $secondary-font;
  }
}

// .view-more {
//   width: 40vw;
//   margin-top: 5.7vw;

//   p {
//     padding: 3.5rem 1.8rem;
//     color: rgb(202, 191, 191);
//     text-align: center;
//     display: inline-block;
//     border-radius: 50%;
//     font-weight: 400;
//     font-size: 1vw;
//     line-height: 1.7;
//     cursor: pointer;
//     text-transform: uppercase;
//     font-family: $secondary-font;
//     background-color: rgb(29, 13, 1);
//   }
// }
</style>
