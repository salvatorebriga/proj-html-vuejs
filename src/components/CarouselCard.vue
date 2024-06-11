<script>
  export default {
    name: "carouselCard",
    props: ["img", "time", "artist", "heading", "text"],
  };
</script>

<template>
  <div class="card">
    <img :src="img" :alt="img" />

    <div class="label">
      <i class="fas fa-tag"></i>
      <p>Business, Leading</p>
    </div>
    <div class="info">
      <i class="fas fa-clock"></i>
      <span> {{ time }} </span>
      <i class="fas fa-user"></i>
      <span> {{ artist }} </span>
    </div>

    <h3>{{ heading }}</h3>

    <p>{{ text }}</p>
  </div>
</template>

<style lang="scss" scoped>
  @use "../assets/scss/partials/variables.scss";

  .card {
    border: none;
    width: 500px;
    background-color: transparent;
    text-align: left;
    position: relative;

    .label {
      position: absolute;
      background-color: variables.$arancione;
      bottom: 160px;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px;
      font-size: 12px;
      color: rgb(255, 255, 255);

      i {
        margin-right: 10px;
      }

      p {
        padding-left: 0px;
        padding-right: 0px;
        margin-bottom: 0;
        color: rgb(255, 255, 255);
      }
    }

    img {
      width: 100%;
      height: 350px;
      margin-bottom: 20px;
    }

    .info {
      display: flex;
      justify-content: left;
      align-items: center;

      margin-bottom: 20px;
      i {
        font-size: 13px;
        margin-right: 5px;
        color: variables.$arancione;
      }

      span {
        color: variables.$grigio-paragrafi;
        font-size: 15px;
        margin-right: 10px;
      }
    }

    h3 {
      margin-bottom: 20px;
      font-weight: bold;
    }

    p {
      color: variables.$grigio-paragrafi;
    }
  }
</style>
