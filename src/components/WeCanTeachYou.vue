<script>
  import { defineComponent } from "vue";
  import { Carousel, Navigation, Slide } from "vue3-carousel";

  import "vue3-carousel/dist/carousel.css";

  export default defineComponent({
    name: "WeCanTeachYou",

    data() {
      return {
        team: [
          {
            img: "https://everlead.qodeinteractive.com/wp-content/uploads/2019/05/h1-team-img-01.jpg",
            name: "Christine Yin",
            role: "Founder",
          },
          {
            img: "https://everlead.qodeinteractive.com/wp-content/uploads/2019/04/h1-team-img-02.jpg",
            name: "Stephen Griffin",
            role: "Life Coach",
          },
          {
            img: "https://everlead.qodeinteractive.com/wp-content/uploads/2019/04/h1-team-img-03.jpg",
            name: "Sandra Harvey",
            role: "Instructor",
          },
          {
            img: "https://everlead.qodeinteractive.com/wp-content/uploads/2019/05/h1-team-img-04.jpg",
            name: "Ruth Hunter",
            role: "Manager",
          },
          {
            img: "https://everlead.qodeinteractive.com/wp-content/uploads/2019/05/h1-team-img-05.jpg",
            name: "Maya Adams",
            role: "Nutritionist",
          },
        ],
      };
    },

    components: {
      Carousel,
      Slide,
      Navigation,
    },
  });
</script>

<template>
  <section>
    <h2>We can teach you<span>.</span></h2>
    <p>lorem ipusm dolor sit amet, consectetur adipiscing elit</p>
    <div class="line"></div>
    <Carousel
      :items-to-show="3"
      :wrap-around="true"
      :autoplay="3000"
      :transition="500"
    >
      <Slide v-for="slide in team" :key="slide">
        <div class="carousel__item">
          <div class="card">
            <img :src="slide.img" alt="" />
            <h4>{{ slide.name }}</h4>
            <p>{{ slide.role }}</p>

            <div class="label">
              <i class="fas fa-share-nodes"></i>
            </div>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </section>
</template>

<style lang="scss" scoped>
  @use "../assets/scss/partials/variables.scss";
  section {
    text-align: center;
    padding-top: 100px;
    padding-bottom: 50px;
    max-width: 1400px;
    margin: 0 auto;

    h2 {
      font-size: 50px;
      margin-bottom: 15px;
      span {
        color: variables.$arancione;
      }
    }

    p {
      color: variables.$grigio-paragrafi;
      margin-bottom: 25px;
    }

    .line {
      background-color: variables.$arancione;
      width: 60px;
      height: 2px;
      margin: 0 auto;
      margin-bottom: 50px;
    }

    .carousel__item {
      min-height: 200px;
      width: 100%;
      background-color: transparent;
      color: var(--vc-clr-white);
      font-size: 20px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;

      .card {
        display: block;
        text-align: left;
        border: none;
        position: relative;
        img {
          width: 100%;
          margin-bottom: 25px;
        }

        h4 {
          font-size: 26px;
          line-height: 1.308em;
          color: black;
          margin-bottom: 20px;
          font-weight: 800;
        }

        p {
          color: variables.$grigio-paragrafi;
          font-size: 15px;
        }

        .label {
          background-color: variables.$arancione;
          width: max-content;
          padding: 10px 20px;
          position: absolute;
          bottom: 105px;
          right: 15px;
          color: white;
        }
      }
    }

    .carousel__slide {
      padding: 10px;
    }
  }
</style>
