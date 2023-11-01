<template>
  <div class="mobile-landing-page">
    <div class="px-4">
      <section class="hero">
        <div class="caption">
          <h1>
            We are brand digital <br />
            and marketing communication <br />
            agency, we turn the spotlight <br />
            on brands
          </h1>
          <p>
            We are culture shapers, storytellers and collaborators, your partner
            to reaching a perfect state of happiness.
          </p>
        </div>
        <div class="bg-img">
          <div class="bg-img-wrapper">
            <b-img
              src="@/assets/images/png/elite-edge-bg-img1.png"
              class=""
            ></b-img>
            <b-img
              src="@/assets/images/png/elite-edge-bg-img2.png"
              class=""
            ></b-img>
            <b-img
              src="@/assets/images/png/elite-edge-bg-img3.png"
              class=""
            ></b-img>
          </div>
        </div>
        <p class="scroll">Scroll to continue</p>
      </section>

      <section class="">
        <div class="about w-100">
          <h1>Who we are</h1>
          <div class="">
            <p class="">
              We are a media and advertising company that constantly pioneers
              the cause of innovative communication by delivering strategic and
              engagement focused solutions to our clients, exploring existing
              and emerging media while leveraging technology to deliver
              effective communication.
            </p>
            <p>
              We are a full service marketing communications agency providing
              solutions across a broad range of marketing communication services
              to brands and businesses. We are a brand, digital and marketing
              communication agency that loves to turn “The spotlight” on brands.
            </p>
          </div>
          <div class="d-flex justify-content-between align-items-end">
            <h3>Your plug to better marketing and advertising solutions.</h3>
          </div>
        </div>
      </section>

      <section class="projects">
        <div class="product" v-for="(item, index) in projectsData" :key="index">
          <b-img :src="item.project_image" class=""></b-img>
          <div class="d-flex justify-content-between align-items-center py-4">
            <h1 class="mr-2">{{ item.project_name }}</h1>
            <p>Branding, marketing, social meadia</p>
          </div>
        </div>
        <nuxt-link to="/projects" class="mx-auto text-center d-block">
          <button>View all products</button>
        </nuxt-link>
      </section>
    </div>

    <section class="strength py-5">
      <div class="px-5">
        <p>
          Our mix of insight, creativity, and technical innovation helps us
          deliver solutions that meet the business needs of our clients.
        </p>
        <ul>
          <li class="d-flex">Create</li>
          <li class="text-center w-100">conceive</li>
          <li class="text-right">connect</li>
        </ul>
      </div>
    </section>
    <MobileFooter />
  </div>
</template>

<script>
import MobileFooter from '../../../components/MobileFooter'
import PageContent from '../ProjectPage/content.json'
export default {
  data() {
    return {
      PageContent,
      projectsData: [],
    }
  },
  mounted() {
    this.getProjects()
  },
  components: {
    MobileFooter,
  },
  methods: {
    getProjects() {
      this.projectsData = this.PageContent.projects.slice(0, 3)
    },
  },
}
</script>

<style lang="scss" scoped>
.mobile-landing-page {
  padding: 10rem 0 0;
  .hero {
    height: 80vh;
    position: relative;

    .caption {
      position: relative;
      z-index: 5;
      text-align: center;
      h1 {
        line-height: 1.5;
        font-weight: 500;
        font-size: 6vw !important;
        font-family: $secondary-font;
      }
      p {
        width: 70%;
        font-size: 4vw;
        font-weight: 500;
        margin: 30px auto 0;
        opacity: 0.5;
        font-family: $primary-font;
      }
    }

    .bg-img {
      position: relative;
      margin-top: 10vw;
      img {
        width: 75vw;
        position: absolute;
        top: 9vw;
        right: 0;
        &:first-child {
          top: 12vw;
          z-index: 3;
          right: 8vw;
        }
        &:nth-child(2) {
          z-index: 2;
          right: 12vw;
        }
        &:nth-child(3) {
          top: 15vw;
          z-index: 1;
          right: 3vw;
        }
      }
    }
    .scroll {
      position: absolute;
      bottom: 0;
      font-size: 5.5vw;
      opacity: 0.5;
    }
  }

  .about {
    margin-top: 15vw;
    h1 {
      font-size: 10vw;
      font-weight: 600;
      font-family: $primary-font !important;
    }
    p {
      font-size: 4vw;
      font-weight: 300;
      line-height: 2.3;
      margin-top: 4vw;
    }
    h3 {
      font-size: 8vw;
      margin-top: 3.8vw;
      line-height: 1.7;
      font-weight: 400;
      font-family: $secondary-font;
    }
    img {
      width: 20vw !important;
    }
  }

  .projects {
    margin-top: 15vw;
    .product {
      img {
        width: 100%;
        height: 100vw;
      }

      h1 {
        font-size: 5vw;
        width: 45%;
        font-size: 600;
        font-family: $primary-font;
      }
      p {
        width: 45%ƒ;
        font-size: 3vw;
        text-align: right;
      }
    }

    button {
      color: #fff;
      border: none;
      margin: 20vw auto 0;
      text-transform: uppercase;
      border-radius: 30px;
      font-size: 3vw;
      padding: 20px 90px;
      background-color: #260c07;
      margin-bottom: 20px;
    }
  }

  .strength {
    margin-top: 15vw;
    background-color: #260c07;
    p {
      color: #fff;
    }
    ul {
      padding: 0;
      margin-top: 10vw;
      li {
        color: #fff;
        list-style: none;
        font-size: 5vw;
        padding: 4vw 0;
        text-transform: uppercase;
        font-family: $secondary-font;
        &:not(:last-child) {
          border-bottom: 1px solid rgba(218, 165, 32, 0.226);
        }
      }
    }
  }
}
</style>
