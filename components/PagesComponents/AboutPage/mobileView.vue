<template>
  <div class="about-page">
    <section class="px-5">
      <div class="about w-100">
        <h1>Who we are</h1>
        <div class="">
          <p class="">
            We are a media and advertising company that constantly pioneers the
            cause of innovative communication by delivering strategic and
            engagement focused solutions to our clients, exploring existing and
            emerging media while leveraging technology to deliver effective
            communication.
          </p>
          <p class="mt-5">
            We are a full service marketing communications agency providing
            solutions across a broad range of marketing communication services
            to brands and businesses. We are a brand, digital and marketing
            communication agency that loves to turn “The spotlight” on brands.
          </p>
        </div>
        <div class="">
          <h3>Your plug to better marketing and advertising solutions.</h3>
        </div>
      </div>
    </section>

    <section class="strength">
      <b-img src="@/assets/images/png/elite-edge-bg-img1.png" class=""></b-img>
      <div class="px-5">
        <h1>Our Strength</h1>
        <div class="">
          <h5>
            Brand identity <br />
            and visual design:
          </h5>
          <p>
            We have the best brand managers and creative designers who offer
            clients bespoke supports on brand positioning and differentiation,
            visual designs that achieves distinct brand outlook and trend
            spotting that help companies determine where, how and when to
            compete.
          </p>
        </div>
        <div class="">
          <h5>Digital marketing:</h5>
          <p>
            We pride ourselves in our dedicated digital marketing and media
            experts offering comprehensive perspectives and hand-on support for
            online strategies, leveraging social media, analytics and market
            research.
          </p>
        </div>
        <div class="">
          <h5>Social & ads:</h5>
          <p>
            We infuse social media marketing into an established online
            marketing plan which gives outstanding results and gets businesses
            ranked in the top search engines
          </p>
        </div>
        <div class="">
          <h5>content marketing:</h5>
          <p>
            We don’t just create content, we measure and track, using the
            combined effort of our creative writers and graphics designers, your
            next content won’t go unnoticed. Above all, we substantiate your ROI
          </p>
        </div>
        <div class="">
          <h5>Media planning & buying:</h5>
          <p>
            Our team of marketing guru determines when, where, and how often
            they will run an advertisement in order to maximize engagements and
            ROI
          </p>
        </div>

        <h1 class="quote">
          You are what you do, <br />
          not what you say you ll do
        </h1>
      </div>
    </section>
    <section class="px-4 team">
      <h1 class="px-5">Our Team</h1>
      <div class="d-flex justify-content-between">
        <div class="heads">
          <b-img src="@/assets/images/png/C9-Ceo.png" class=""></b-img>
          <div class="position">
            <h3 class="mb-0">Peter Adetula</h3>
            <span>CEO</span>
          </div>
        </div>
        <div class="heads">
          <b-img src="@/assets/images/png/Jumoke-C9.png"></b-img>
          <div class="position">
            <h3 class="mb-0">Jumoke Benjamin</h3>
            <span>Operation manager</span>
          </div>
        </div>
      </div>

      <div class="w-100 d-none">
        <div class="members d-flex justify-content-between">
          <div class="">
            <div class="pix" v-for="item in 3" :key="item">
              <b-img
                src="@/assets/images/png/elite-edge-bg-img2.png"
                class=""
              ></b-img>
            </div>
          </div>
          <div class="down">
            <div class="pix" v-for="item in 3" :key="item">
              <b-img
                src="@/assets/images/png/elite-edge-bg-img2.png"
                class=""
              ></b-img>
            </div>
          </div>
          <div class="down">
            <div class="pix" v-for="item in 3" :key="item">
              <b-img src="@/assets/images/png/elite-edge-bg-img2.png"></b-img>
            </div>
          </div>
        </div>
      </div>
    </section>
    <MobileFooter />
  </div>
</template>
<script>
import MobileFooter from '../../../components/MobileFooter'
export default {
  components: {
    MobileFooter,
  },
}
</script>

<style lang="scss" scoped>
.about-page {
  .about {
    margin-top: 30vw;
    h1 {
      font-size: 7.5vw;
      font-weight: 600;
      font-family: $primary-font !important;
    }
    p {
      font-size: 4vw;
      font-weight: 300;
      line-height: 2.1;
      margin-top: 4vw;
    }
    h3 {
      font-size: 7.4vw;
      margin-top: 19vw;
      line-height: 1.7;
      font-weight: 400;
      font-family: $secondary-font;
    }
  }
  .strength {
    margin-top: 10vw;
    img {
      width: 100vw;
      height: 80vw;
    }
    h1 {
      margin-top: 15vw;
      font-size: 7.5vw;
      font-weight: 600;
      font-family: $primary-font !important;
    }

    h5 {
      margin-top: 10vw;
      font-size: 5.1vw;
      line-height: 1.8;
      font-weight: 600;
      font-family: $primary-font !important;
    }

    p {
      font-size: 4vw;
      font-weight: 300;
      line-height: 2.1;
      margin-top: 2vw;
    }

    .quote {
      margin-top: 10vw;
      font-size: 6.5vw;
      line-height: 1.8;
      font-weight: 500;
      text-align: center;
      font-family: $secondary-font !important;
    }
  }

  .team {
    margin-bottom: 25vw;
    h1 {
      margin-top: 15vw;
      font-size: 7.5vw;
      font-weight: 600;
      margin-bottom: 8vw;
      font-family: $primary-font !important;
    }
    .heads {
      position: relative;
      img {
        width: 43vw;
        height: 46vw;
        object-fit: cover;
      }
      .position {
        position: absolute;
        padding: 2.4vw 0 3vw 5.4vw;
        right: -1.9vw;
        bottom: 2vw;
        width: 38vw;
        background-color: rgb(29, 13, 1);
        h3 {
          font-size: 3.5vw;
          color: rgb(202, 191, 191);
          text-transform: capitalize;
          font-family: $secondary-font;
        }
        span {
          display: block;
          font-size: 2vw;
          font-weight: 300ƒ;
          color: rgb(202, 191, 191);
          text-transform: uppercase;
        }
      }
      &:nth-child(2) {
        .position {
          right: 0;
        }
      }
    }

    .members {
      margin-top: 5vw;
      .down {
        margin-top: 8vw;
        &:nth-child(3) {
          margin-top: 3vw;
        }
      }
      .pix {
        position: relative;
        margin-bottom: 2vw;
        img {
          width: 28.5vw;
          height: 27vw;
        }
      }
    }
  }
}
</style>
