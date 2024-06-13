<script>
  import { defineComponent } from "vue";
  import { Carousel, Slide } from "vue3-carousel";

  import "vue3-carousel/dist/carousel.css";

  export default defineComponent({
    name: "AboutUsSwiper",

    data() {
      return {
        images: [
          "https://everlead.qodeinteractive.com/wp-content/uploads/2019/05/h4-clients-img-03.png",
          "https://everlead.qodeinteractive.com/wp-content/uploads/2019/05/h4-clients-img-05.png",
          "https://everlead.qodeinteractive.com/wp-content/uploads/2019/05/h4-clients-img-07.png",
          "https://everlead.qodeinteractive.com/wp-content/uploads/2019/05/h4-clients-img-09.png",
          "https://everlead.qodeinteractive.com/wp-content/uploads/2019/05/h4-clients-img-01.png",
        ],
      };
    },
    components: {
      Carousel,
      Slide,
    },
  });
</script>

<template>
  <section>
    <div class="container">
      <Carousel :items-to-show="5" :wrap-around="true">
        <Slide v-for="image in images" :key="slide">
          <div class="carousel__item">
            <img :src="image" alt="" />
          </div>
        </Slide>

        <template #addons> </template>
      </Carousel>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  section {
    background-color: #fafafa;
    padding-top: 50px;
    padding-bottom: 50px;

    .container {
      .carousel_item {
        img {
          width: 100%;
        }
      }
    }
  }
</style>
