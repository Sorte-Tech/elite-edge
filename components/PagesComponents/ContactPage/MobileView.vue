<template>
  <div class="contact">
    <div class="px-5 content">
      <h1>Contact Us</h1>
      <p>
        complete the form or email <br />
        <span>hello@elite-edge.com</span>
      </p>
      <form action="">
        <input type="text" placeholder="Fullnake" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="You Address" />
        <button>send message</button>
      </form>
    </div>
    <div class="footer">
      <MobileFooter />
    </div>
  </div>
</template>

<script>
import MobileFooter from '../../MobileFooter'
export default {
  components: {
    MobileFooter,
  },
}
</script>

<style lang="scss" scoped>
.contact {
  .content {
    h1 {
      padding-top: 30vw;
    }
    h1 {
      font-size: 8vw;
      font-weight: 600;
    }

    p {
      font-size: 4vw;
      span {
        text-decoration: underline;
      }
    }
  }

  height: 100hh;
  form {
    input {
      width: 100%;
      padding: 7vw 0 3vw;
      border: none;
      font-size: 19px;

      border-bottom: 1px solid #000;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: rgba(0, 0, 0, 0.335);
      }
    }
    button {
      margin-top: 10vw;
      border: 1px solid #000;
      padding: 12px 40px;
      border-radius: 30px;
      background: transparent;
      text-transform: uppercase;
    }
  }
}

.footer {
  margin-top: 20vw;
  //   position: absolute;
  //   bottom: 0;
}
</style>
