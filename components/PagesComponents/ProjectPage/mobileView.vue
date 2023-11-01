<template>
  <div>
    <section class="projects px-4">
      <h1>Our Portfolio</h1>
      <a
        :href="'projects/' + index"
        class="product"
        v-for="(item, index) in PageContent.projects"
        :key="index"
      >
        <b-img :src="item.project_image" class=""></b-img>
        <div class="d-flex justify-content-between align-items-center py-4">
          <h1 class="mr-2 mb-0">
            {{ item.project_name }}
          </h1>
          <p class="mb-0">Branding, marketing, social meadia</p>
        </div>
      </a>
    </section>
    <MobileFooter />
  </div>
</template>

<script>
import MobileFooter from '../../MobileFooter'
import PageContent from './content.json'
export default {
  data() {
    return {
      PageContent,
    }
  },
  components: {
    MobileFooter,
  },
}
</script>

<style lang="scss" scoped>
.projects {
  margin-top: 30vw;
  h1 {
    font-weight: 600;
    font-size: 7vw;
    margin-bottom: 10vw;
  }
  .product {
    margin-bottom: 12vw;
    display: block;
    color: #000;
    img {
      width: 100%;
      height: 100vw;
      object-fit: cover;
    }

    h1 {
      font-size: 5vw;
      width: 45%;
      font-size: 600;
      text-transform: capitalize;
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
</style>
