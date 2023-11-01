<template>
  <div>
    <div class="v-container" ref="about">
      <div class="fixed-content">
        <h1 class="page-title">Who we are</h1>
        <h1 class="page-title">The Team</h1>
        <b-img src="@/assets/images/svg/c9-circle.svg"></b-img>
      </div>

      <section class="panel align-items-center">
        <div class="about w-100">
          <div class="d-flex">
            <p class="mr-5">
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
      <section
        class="panel align-items-center justify-content-between brand-identity"
      >
        <h1>
          You are what you do, <br />
          not what you say you ll do
        </h1>
        <div class="">
          <h5>Brand identity and visual design:</h5>
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
      </section>
      <section class="panel align-items-center brand-identity">
        <div class="mx-5">
          <h5>Social & ads:</h5>
          <p>
            We infuse social media marketing into an established online
            marketing plan which gives outstanding results and gets businesses
            ranked in the top search engines
          </p>
        </div>
        <div class="mr-5">
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
      </section>
      <section class="panel team align-items-center" id="team">
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

        <div class="members ml-5 d">
          <div class="d-flex mb-3">
            <div class="pix mr-3" v-for="item in 2" :key="item">
              <b-img
                src="@/assets/images/png/elite-edge-bg-img2.png"
                class=""
              ></b-img>
              <div class="position">
                <h3 class="mb-0">Jumoke Benjamin</h3>
                <span>Operation manager</span>
              </div>
            </div>
          </div>
          <div class="d-flex">
            <div class="pix mr-3" v-for="item in 2" :key="item">
              <b-img
                src="@/assets/images/png/elite-edge-bg-img2.png"
                class="mr-3"
              ></b-img>
              <div class="position">
                <h3 class="mb-0">Jumoke Benjamin</h3>
                <span>Operation manager</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="page-end"></div>
    </div>
    <div class="indicator">
      <progress max="100" value="4"></progress>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      PageOffset: '',
    }
  },
  mounted() {
    const sections = this.$gsap.utils.toArray('.panel')
    const tl = this.$gsap.timeline({
      scrollTrigger: {
        trigger: '.v-container',
        start: 'top top',
        pin: true,
        scrub: 1,
        paused: true,
        end: () => '+=' + this.$refs.about.offsetWidth,
      },
    })

    tl.to(sections, {
      duration: 2,
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
    })

    this.$gsap.timeline({
      scrollTrigger: {
        trigger: '.team',
        scrub: true,
        start: '720% 100%',
        end: '750% 100%',
        // markers: true,
        paused: true,
        onEnterBack: () => {
          this.pageTitleEnter()
        },
        onLeave: (self) => {
          this.pageTitleLeave()
        },
      },
    })

    this.$gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: {
        scrub: 0.3,
        end: () => '+=' + this.$refs.about.offsetWidth,
        onLeave: (self) => {
          self.kill()
          this.$router.push('/projects')
        },
      },
    })
  },
  methods: {
    pageTitleLeave() {
      this.$gsap.to('.page-title:first-child', {
        opacity: 0,
        ease: 'power2.out',
        duration: 1,
      })
      this.$gsap.to('.page-title:nth-child(2)', {
        opacity: 1,
        ease: 'power2.out',
        duration: 1,
        delay: 0.4,
      })
    },

    pageTitleEnter() {
      this.$gsap.to('.page-title:first-child', {
        opacity: 1,
        ease: 'power2.out',
        duration: 1,
        delay: 0.4,
      })
      this.$gsap.to('.page-title:nth-child(2)', {
        opacity: 0,
        ease: 'power2.out',
        duration: 1,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.v-container {
  width: 400%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
}

.panel {
  width: 100vw;
  height: 100vh;
  display: flex;
  font-weight: 600;
  font-size: 1.5em;
  z-index: 2;
  position: relative;
  box-sizing: border-box;
}
.about {
  padding: 2rem 9rem 0;
  p {
    width: 32vw;
    font-size: 1.2vw;
    font-weight: 300;
    line-height: 2.3;
    margin-top: 4vw;
  }
  h3 {
    width: 47.6vw;
    font-size: 3.2vw;
    margin-top: 3.8vw;
    font-family: $secondary-font;
  }
}
.brand-identity {
  h1 {
    width: 39%;
    font-size: 3.2vw;
    font-weight: 400;
    font-family: $secondary-font;
  }
  div {
    width: 27%;
    h5 {
      font-size: 1.7vw;
      font-weight: 300;
      text-transform: capitalize;
      font-family: $secondary-font;
    }
    p {
      font-size: 1.1vw;
      line-height: 1.8;
      font-weight: 300;
    }
  }
}
.fixed-content {
  position: relative;
  .page-title {
    position: fixed;
    font-size: 4.6vw;
    top: 5.5rem;
    left: 15rem;
    font-family: $secondary-font;

    &:nth-child(2) {
      opacity: 0;
    }
  }
  img {
    bottom: 8rem;
    left: 70rem;
    z-index: 1x;
    position: fixed;
    width: 20vw !important;
  }
}

.team {
  .heads {
    position: relative;
    &:first-child {
      margin-right: 2vw;
    }

    &:nth-child(2) {
      img {
        border: 1px solid $primary;
      }
    }

    img {
      width: 23vw;
      height: 22vw;
      object-fit: cover;
    }
    .position {
      position: absolute;
      padding: 1.3vw 0 1.3vw 5.4vw;
      right: -1.9vw;
      bottom: 2vw;
      width: 18vw;
      background-color: rgb(29, 13, 1);
      h3 {
        font-size: 1.3vw;
        color: rgb(202, 191, 191);
        text-transform: capitalize;
        font-family: $secondary-font;
      }
      span {
        display: block;
        font-size: 0.6vw;
        font-weight: 300ƒ;
        color: rgb(202, 191, 191);
        text-transform: uppercase;
      }
    }
  }

  .members {
    .pix {
      width: 11vw;
      height: 10.5vw;
      position: relative;
      &:hover {
        .position {
          opacity: 1;
          bottom: 0.3vw;
        }
        img {
          border: 2px solid rgb(231, 49, 25);
        }
      }
      img {
        width: 11vw;
        height: 10.5vw;
        cursor: pointer;
      }
      .position {
        position: absolute;
        bottom: -4vw;
        right: -1vw;
        min-width: 7vw;
        opacity: 0;
        padding: 0.6vw 2vw;
        color: goldenrod;
        transition: 0.25s ease-in-out;
        background-color: rgb(231, 49, 25);
        h3 {
          font-size: 1vw;
          font-family: $secondary-font;
        }
        span {
          display: block;
          font-size: 0.6vw;
        }
      }
    }
  }
}
</style>
