<script>
  export default {
    name: "carouselCard",
    props: ["img", "time", "artist", "heading", "text"],
  };
</script>

<template>
  <div class="card">
    <img :src="img" :alt="img" />
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
    text-align: center;

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
      padding-left: 20px;
      padding-right: 20px;
      color: variables.$grigio-paragrafi;
    }
  }
</style>
