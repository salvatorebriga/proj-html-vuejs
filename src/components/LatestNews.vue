<script>
  import { defineComponent } from "vue";
  import { Carousel, Navigation, Slide } from "vue3-carousel";

  import "vue3-carousel/dist/carousel.css";

  import CarouselCard from "./CarouselCard.vue";

  export default defineComponent({
    name: "latestNews",
    data() {
      return {
        slideElement: [
          {
            img: "/img/latestNews1.jpg",
            time: "May 5, 2019",
            artist: "Amanda Doe",
            heading: "New Business Day",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ...",
          },
          {
            img: "/img/latestNews2.jpg",
            time: "May 5, 2019",
            artist: "Amanda Doe",
            heading: "Team Building",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ...",
          },
          {
            img: "/img/latestNews3.jpg",
            time: "May 5, 2019",
            artist: "Amanda Doe",
            heading: "Boost Motivation",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ...",
          },
          {
            img: "/img/latestNews4.jpg",
            time: "May 5, 2019",
            artist: "Amanda Doe",
            heading: "Next Investment",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eius mas tellus dolor ...",
          },
        ],
      };
    },
    components: {
      Carousel,
      Slide,
      Navigation,
      CarouselCard,
    },
  });
</script>

<template>
  <section>
    <div class="container">
      <h2>Latest news<span>.</span></h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div class="line"></div>

      <Carousel
        :items-to-show="3"
        :wrap-around="true"
        :autoplay="3000"
        :pauseAutoplayOnHover="true"
        :transition="500"
      >
        <Slide v-for="slide in slideElement" :key="slide">
          <div class="carousel__item">
            <CarouselCard
              :img="slide.img"
              :time="slide.time"
              :artist="slide.artist"
              :heading="slide.heading"
              :text="slide.text"
            />
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @use "/src/assets/scss/partials/variables.scss";

  section {
    background-color: white;
    padding-bottom: 100px;
    padding-top: 100px;
    .container {
      text-align: center;
      max-width: 1900px;
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
    }
  }
</style>
