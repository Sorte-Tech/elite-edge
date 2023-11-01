<template>
  <div class="projects-page">
    <div class="fixed-content">
      <h1 class="page-title">Portfolio</h1>
    </div>
    <div class="v-container" ref="projects">
      <section
        class="panel align-items-center"
        v-for="(item, index) in PageContent.projects"
        :key="index"
      >
        <a :href="'/projects/' + index">
          <div class="wrapper">
            <b-img :src="item.project_image"></b-img>
            <p class="mb-0">{{ item.project_name }}</p>
          </div>
        </a>
      </section>

      <!-- <section class="panel align-items-center">
        <a href="/projects/3">
          <div class="wrapper">
            <b-img src="@/assets/images/png/project01.png"></b-img>
            <p class="mb-0">iswagger</p>
          </div>
        </a>
      </section>
      <section class="panel align-items-center">
        <a href="/projects/1">
          <div class="wrapper">
            <b-img src="@/assets/images/png/elite-edge-bg-img1.png"></b-img>
            <p class="mb-0">ishease</p>
          </div>
        </a>
      </section>
      <section class="panel align-items-center">
        <a href="/projects/1">
          <div class="wrapper">
            <b-img src="@/assets/images/png/elite-edge-bg-img1.png"></b-img>
            <p class="mb-0">ishease</p>
          </div>
        </a>
      </section>
      <section class="panel align-items-center">
        <a href="/projects/1">
          <div class="wrapper">
            <b-img src="@/assets/images/png/elite-edge-bg-img1.png"></b-img>
            <p class="mb-0">ishease</p>
          </div>
        </a>
      </section>
      <section class="panel align-items-center">
        <a href="/projects/1">
          <div class="wrapper">
            <b-img src="@/assets/images/png/elite-edge-bg-img1.png"></b-img>
            <p class="mb-0">ishease</p>
          </div>
        </a>
      </section> -->
      <!-- <section class="panel align-items-center"></section> -->
    </div>
    <div class="indicator">
      <progress max="100" value="30"></progress>
    </div>
  </div>
</template>

<script>
import PageContent from './content.json'
export default {
  data() {
    return {
      PageContent,
      progessBar: '',
    }
  },
  mounted() {
    const sections = this.$gsap.utils.toArray('.panel')
    const tl = this.$gsap.timeline({
      scrollTrigger: {
        trigger: '.v-container',
        start: 'top top',
        pin: true,
        scrub: 2,
        paused: true,
        end: () => '+=' - document.querySelector('.v-container').offsetWidth,
      },
    })

    tl.to(sections, {
      duration: 2,
      xPercent: -100 * (sections.length - 1.5),
      ease: 'none',
    })
    this.progessBar = this.$gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: {
        scrub: 0.3,
        end: () => '+=' + document.querySelector('.v-container').offsetWidth,
        onLeave: (self) => {
          self.kill()
          this.$router.push('/contact')
        },
      },
    })
  },
  beforeDestroy() {
    this.progessBar.kill()
  },
}
</script>

<style lang="scss" scoped>
.v-container {
  width: 55vw;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  padding: 0 10rem;
}

.panel {
  width: 100vw;
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
