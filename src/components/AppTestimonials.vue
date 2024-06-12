<script>
  import { defineComponent } from "vue";
  import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";
  import "vue3-carousel/dist/carousel.css";
  export default defineComponent({
    name: "AppTestimonials",
    data() {
      return {
        testimonials: [
          {
            img: "https://everlead.qodeinteractive.com/wp-content/uploads/2019/04/h3-img-07.png",
            name: "Clarice Hastings",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolore in quasi sint alias quam nostrum nesciunt tenetur.",
          },
          {
            img: "https://everlead.qodeinteractive.com/wp-content/uploads/2019/04/h3-img-08.png",
            name: "Brenda Kelly",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, dolore in quasi sint alias quam nostrum nesciunt tenetur.",
          },
          {
            img: "https://everlead.qodeinteractive.com/wp-content/uploads/2019/04/h3-img-04.png",
            name: "Cynthia Clark",
            description:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,dolore in quasi sint alias quam nostrum nesciunt tenetur.",
          },
        ],
      };
    },
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
  });
</script>
<template>
  <section>
    <div class="content">
      <h2>Testimonials.</h2>
      <p>lorem ipusm dolor sit amet, consectetur adipiscing elit</p>
      <div class="line"></div>
      <Carousel
        :wrap-around="true"
        :autoplay="3000"
        :transition="500"
        :pauseAutoplayOnHover="true"
      >
        <Slide v-for="slide in testimonials" :key="slide">
          <div class="carousel__item">
            <img :src="slide.img" alt="" />
            <h5>{{ slide.name }}</h5>
            <p>" {{ slide.description }} "</p>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  @use "/src/assets/scss/partials/variables.scss";

  section {
    background-color: variables.$marrone;
    padding-top: 100px;
    padding-bottom: 100px;

    .content {
      max-width: 1800px;
      margin: 0 auto;
      text-align: center;

      h2 {
        color: white;
        font-size: 50px;
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

      .carousel__prev,
      .carousel__next {
        box-sizing: content-box;
        border: 5px solid white;
        color: white;
      }

      .carousel__item {
        min-height: 200px;
        width: 100%;
        background-color: transparent;
        color: white;
        font-size: 20px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img {
          margin-bottom: 30px;
        }

        h5 {
          font-size: 19px;
          line-height: 1.368em;
          margin-bottom: 40px;
        }

        p {
          font-size: 25px;
          line-height: 35px;
          color: variables.$grigio-paragrafi;
          padding-left: 300px;
          padding-right: 300px;
        }
      }

      .carousel__slide {
        padding: 10px;
      }
    }
  }
</style>
