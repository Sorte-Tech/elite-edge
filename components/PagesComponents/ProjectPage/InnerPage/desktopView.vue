<template>
  <div class="">
    <div class="v-container3 project" ref="details">
      <div class="panel product">
        <div class="page-title">
          <h1>{{ PageContent.projects[$route.params.id].project_name }}</h1>
        </div>
        <p>
          {{ PageContent.projects[$route.params.id].description }}
        </p>
        <div class="d-flex align-items-center h-100">
          <b-img
            :src="PageContent.projects[$route.params.id].project_image"
          ></b-img>
        </div>
      </div>
      <div class="panel caption">
        <div class="">
          <p>
            {{ PageContent.projects[$route.params.id].description2 }}
          </p>
          <h1>
            {{ PageContent.projects[$route.params.id].project_quote }}
            <br />
            <span>
              {{ PageContent.projects[$route.params.id].project_qoute2 }}
            </span>
          </h1>
          <p>
            {{ PageContent.projects[$route.params.id].description3 }}
          </p>
        </div>
        <div class="d-flex align-items-center h-100">
          <b-img
            :src="PageContent.projects[$route.params.id].large_image"
          ></b-img>
          <div class="gallery d-flex flex-column justify-content-between">
            <b-img
              :src="PageContent.projects[$route.params.id].small_image"
            ></b-img>
            <b-img
              :src="PageContent.projects[$route.params.id].small_image2"
            ></b-img>
          </div>
        </div>
      </div>
      <div class="panel d-flex align-items-center h-100"></div>
    </div>
    <div class="indicator">
      <progress max="100" value="7"></progress>
    </div>
  </div>
</template>

<script>
import PageContent from '../content.json'
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
        trigger: '.v-container3',
        start: 'top top',
        pin: true,
        scrub: 1,
        end: () => '+=' - document.querySelector('.v-container3').offsetWidth,
      },
    })

    tl.to(sections, {
      duration: 2,
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
    })

    this.$gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: {
        scrub: 0.3,
        end: () => '+=' + this.$refs.details.offsetWidth,
      },
    })
  },
}
</script>

<style lang="scss" scoped>
.v-container3 {
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.panel {
  height: 100vh;
  display: flex;
  font-weight: 600;
  font-size: 1.5em;
  z-index: 10 !important;
  width: 90vw;
  position: relative;
  box-sizing: border-box;
}

.project {
  position: relative;
  .page-title {
    h1 {
      position: absolute;
      font-size: 4.6vw;
      top: 5.7rem;
      left: 15rem;
      font-family: $secondary-font;
    }
  }
  .product {
    padding-left: 10vw;

    p {
      width: 35vw;
      font-size: 1.3vw;
      font-weight: 300;
      margin-right: 5vw;
      line-height: 1.9;
      margin-top: 15vw;
      text-align: left;
    }
    img {
      height: 85vh;
      width: 38vw;
      object-fit: cover;
      position: relative;
    }
  }
  .caption {
    padding-left: 8vw;
    p {
      width: 38vw;
      font-size: 1.1vw;
      font-weight: 300;
      margin-right: 5vw;
      line-height: 1.9;
      margin-top: 3.7vw;
    }
    h1 {
      width: 38vw;
      font-size: 3.2vw;
      margin-top: 3.5vw;
      font-family: $secondary-font;
      span {
        font-family: $secondary-font;
        position: relative;
        &:after {
          content: '';
          left: 0;
          bottom: 25px;
          height: 2px;
          width: 100%;
          position: absolute;
          background-color: #000;
        }
      }
    }
    img {
      height: 85vh;
      width: 80vw;
      margin-left: 8vw;
      object-fit: cover;
      position: relative;
    }
  }
  .gallery {
    width: 30vw;
    height: 85vh;
    position: relative;
    margin-left: 1vw;
    img {
      width: 100%;
      height: 23.3vw;
      display: block;
    }
  }
}
</style>
