<script>
  export default {
    name: "AppJumbo",
  };
</script>
<template>
  <div class="jumbo">
    <div class="content">
      <h1>We are Everlead<span>.</span></h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
        quaerat architecto ratione quod.
      </p>
      <div>
        <button>
          <span>READ MORE</span> <i class="fas fa-arrow-right"></i>
        </button>
        <button class="orange">
          <span>PURCHASE</span> <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "../assets/scss/partials/variables.scss";
  .jumbo {
    height: 100vh;
    background-image: url("/img/jumboImage.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    color: white;
    display: flex;
    align-items: center;

    .content {
      padding-left: 150px;
      h1 {
        font-size: 75px;
        margin-bottom: 50px;
        span {
          color: variables.$arancione;
        }
      }

      p {
        margin-bottom: 60px;
      }

      button {
        padding: 20px;
        margin-right: 20px;
        border: none;

        &:hover > span {
          margin-right: 10px;
          transition: 0.5s;
        }

        &:hover > i {
          margin-right: 20px;
          transition: 0.5s;
        }

        span {
          margin-right: 30px;
          transition: 0.5s;
        }

        i {
          transition: 0.5s;
        }
      }
    }

    .orange {
      background-color: variables.$arancione;
      color: white;
    }
  }
</style>
