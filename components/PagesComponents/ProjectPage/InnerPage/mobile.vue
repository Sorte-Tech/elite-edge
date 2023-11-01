<template>
  <div class="project">
    <section class="">
      <div class="title px-5">
        <h1>{{ PageContent.projects[$route.params.id].project_name }}</h1>
        <p>Branding, Marketing, Social Media</p>
      </div>
      <b-img
        :src="PageContent.projects[$route.params.id].project_image"
        class="product-img"
      ></b-img>
    </section>
    <section class="caption">
      <div class="px-4">
        <p>
          {{ PageContent.projects[$route.params.id].description2 }}
        </p>
        <h1>
          {{ PageContent.projects[$route.params.id].project_quote }}<br />
          <span>
            {{ PageContent.projects[$route.params.id].project_qoute2 }}
          </span>
        </h1>
        <p>
          {{ PageContent.projects[$route.params.id].description3 }}
        </p>
      </div>
    </section>
    <section class="gallery">
      <b-img
        :src="PageContent.projects[$route.params.id].project_image"
        class="mb-4 px-4 w-100"
      ></b-img>
      <b-img
        :src="PageContent.projects[$route.params.id].large_image"
        class="w-100 mb-4 full-img"
      ></b-img>
      <div class="d-flex side px-4 justify-content-between">
        <b-img
          :src="PageContent.projects[$route.params.id].small_image"
        ></b-img>
        <b-img
          :src="PageContent.projects[$route.params.id].small_image2"
          class=""
        ></b-img>
      </div>

      <p class="px-5">
        {{ PageContent.projects[$route.params.id].description }}
      </p>
      <b-img
        :src="PageContent.projects[$route.params.id].small_image"
        class="w-100 mb-4 full-img"
      ></b-img>

      <p @click="nextProject" class="next-page">Next Project</p>
    </section>
    <MobileFooter />
  </div>
</template>
<script>
import PageContent from '../content.json'
import MobileFooter from '../../../MobileFooter'
export default {
  data() {
    return {
      PageContent,
    }
  },
  components: {
    MobileFooter,
  },
  methods: {
    nextProject() {
      if (this.$route.params.id < this.PageContent.projects.length - 1) {
        const idx = Number(this.$route.params.id) + 1
        this.$router.push('/projects/' + idx)
      } else {
        this.$router.push('/projects/0')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.project {
  margin-top: 30vw;
  .title {
    h1 {
      font-size: 6vw;
      font-weight: 600;
    }
    p {
      font-size: 3.5vw;
    }
  }
  .product-img {
    width: 100vw;
    height: 130vw;
    object-fit: cover;
  }

  .caption {
    p {
      font-size: 4vw;
      font-weight: 300;
      line-height: 1.9;
      margin-top: 3.7vw;
    }
    h1 {
      font-size: 7vw;
      margin-top: 3.5vw;
      margin: 10vw 0;
      line-height: 1.8;
      font-family: $secondary-font;
      span {
        font-family: $secondary-font;
        position: relative;
        &:after {
          content: '';
          left: 0;
          bottom: 15px;
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
}
.gallery {
  .side {
    img {
      width: 42.5vw;
      height: 47vw;
      object-fit: cover;
    }
  }
  p {
    font-size: 4vw;
    font-weight: 300;
    line-height: 1.9;
    margin: 10vw 0;
  }

  .full-img {
    height: 80vw;
    object-fit: cover;
  }
  .next-page {
    color: #000;
    font-size: 6vw;
    padding: 12vw 0;
    text-align: center;
    display: block;
    text-decoration: underline;
    text-transform: capitalize;
  }
}
</style>
