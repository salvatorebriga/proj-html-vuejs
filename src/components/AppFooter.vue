<script>
export default {
  name: "AppFooter",
};
</script>

<template>
  <div class="footer">
    <div class="principale"></div>
    <div class="finale">
      <a href="#"> © 2019 Qode nteractive, All Rights Reserved </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  .principale {
    background-color: rgb(24, 21, 21);
    height: 400px;
  }

  .finale {
    text-align: center;
    background-color: rgb(255, 70, 18);
    padding: 12px 0;
    a {
      font-size: 13px;
      line-height: 22px;
      letter-spacing: 0.3px;
      text-decoration: none;
      color: white;
    }
  }
}
</style>
