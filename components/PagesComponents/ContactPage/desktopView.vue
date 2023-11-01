<template>
  <div class="contact">
    <div class="d-flex align-items-center h-100 w-100">
      <div class="form d-flex flex-column justify-content-between">
        <div class="position-relative">
          <div class="contact-directory">
            <h1>
              Hello! My name is
              <label @click="showContactForm">Fullname</label>
            </h1>
            <h1>
              you can reach me via
              <label @click="showContactForm">Email </label>
            </h1>
            <h1>
              <label @click="showContactForm">Here is My Message </label>
            </h1>
          </div>
          <form action="" class="contact-form">
            <input type="text" placeholder="Fullname" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Your Message" />
          </form>
          <button class="mt-5">Send Message</button>
        </div>

        <div class="address">
          <p class="mb-1">
            You can also reach us via <span>(+234 908 765 9876)</span> or
          </p>
          <p>
            come pay us a visit at 3,
            <span>3, Tinuola Close , Akowonjo, Egbeda Busstop, Lagos</span>
          </p>
        </div>
      </div>
      <div class="bg-img">
        <div class="bg-img-wrapper">
          <b-img
            src="@/assets/images/png/elite-edge-bg-img1.png"
            class="invisible"
          ></b-img>
          <b-img
            src="@/assets/images/png/elite-edge-bg-img3.png"
            class=""
          ></b-img>
          <b-img
            src="@/assets/images/png/elite-edge-bg-img2.png"
            class=""
          ></b-img>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.365644558144!2d3.3019818149416125!3d6.601401024083862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91af739f6ed7%3A0x2c8a1710d6125543!2sPertinence%20Group!5e0!3m2!1sen!2sng!4v1618338880530!5m2!1sen!2sng"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            class="c9-map"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="indicator">
      <progress max="100" value="95"></progress>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      fullname: null,
      message: null,
    }
  },

  methods: {
    showContactForm() {
      this.$gsap.to('.contact-directory', {
        marginLeft: -70,
        opacity: 0,
        duration: 1,
      })

      this.$gsap.fromTo(
        '.contact-form',
        {
          left: 70,
          duration: 1,
        },
        {
          left: 0,
          opacity: 1,
          duration: 1,
          delay: 1.4,
          zIndex: 6,
        }
      )
    },
  },
}
</script>

<style lang="scss" scoped>
.contact {
  position: relative;
  z-index: 10;
  height: 100vh;
  padding: 0 9rem;
  .form {
    width: 50%;
    height: 54%;
    margin-top: 7.5vw;
    h1 {
      font-size: 3vw;
      font-weight: 400;
      font-family: $secondary-font;
      label {
        cursor: text;
        font-weight: 500;
        position: relative;
        font-family: $primary-font;

        &::after {
          left: 0;
          bottom: 7px;
          content: '';
          height: 2px;
          width: 100%;
          background: #000;
          position: absolute;
        }
      }
    }
    button {
      font-size: 1.2vw;
      padding: 0.8vw 3.5vw;
      background: transparent;
      font-family: $secondary-font;
    }
    .contact-directory {
      position: relative;
      z-index: 3;
    }
  }

  .bg-img {
    // .amp {
    //   width: 78vw;
    //   height: 30vw;
    // }
    img {
      width: 38vw;
      position: absolute;
      top: 19.5vw;
      right: 0;
      &:first-child {
        top: 22vw;
        z-index: 3;
        right: 13rem;
      }
      &:nth-child(2) {
        z-index: 2;
        right: 9rem;
      }
      &:nth-child(3) {
        top: 25vw;
        z-index: 1;
        right: 11rem;
      }
    }
  }
  .address {
    p {
      font-size: 1vw;
      span {
        font-weight: 600;
        font-size: 1.8;
        display: inline-block;
        text-decoration: underline;
      }
    }
  }
  form {
    opacity: 0;
    top: -1vw;
    position: absolute;
    z-index: 1;
    input {
      width: 85%;
      padding: 0 0 0.2vw 10px;
      border: none;
      font-size: 30px;
      margin-bottom: 3vw;
      border-bottom: 2px solid #000 !important;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: rgba(0, 0, 0, 0.335);
      }
      &:last-child {
        margin-bottom: 4vw;
      }
    }
  }
}

.c9-map {
  z-index: 3000 !important;
  position: absolute;
  width: 39vw;
  height: 21vw;
  top: 22vw;
  z-index: 3;
  right: 13rem;
}
</style>
