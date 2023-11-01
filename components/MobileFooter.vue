<template>
  <footer>
    <footer class="p-5">
      <h1>Get in touch</h1>
      <p>
        Feel free to send us an eamil at <span>hello@elite-edge.com</span> or
        call <span>(+234) 904 584 1324</span> or pay us a visit at
        <span>3 Tinuola Close, Akowonjo, Egbeda, Lagos</span>
      </p>

      <div class="social-links">
        <a href="" target="_blank">Instagram</a>
        <a href="" target="_blank"> Facebook</a>
        <a href="" target="_blank">linkedin</a>
      </div>
    </footer>
  </footer>
</template>

<script>
export default {
  name: 'MobileFooter',
}
</script>

<style lang="scss">
footer {
  background-color: #1b0905;
  h1 {
    color: #fff;
    font-size: 8vw;
    font-weight: 600;
    margin-bottom: 10vw;
  }
  p {
    color: #fff;
    font-size: 3.6vw;
    line-height: 2.3;
    span {
      text-decoration: underline;
    }
  }
  .social-links {
    margin-top: 60px;
    a {
      color: #fff;
      font-size: 3.5vw;
      margin-right: 30px;
      text-decoration: none;
      display: inline-table;
    }
  }
}
</style>
