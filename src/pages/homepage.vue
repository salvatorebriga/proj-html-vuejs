<script>
  import AppJumbo from "../components/AppJumbo.vue";
  import OurSpecialties from "../components/OurSpecialties.vue";
  import LatestNews from "../components/LatestNews.vue";
  import AppCreative from "../components/AppCreativeLeader.vue";
  import AppVideo from "../components/AppVideo.vue";
  import AppTestimonials from "../components/AppTestimonials.vue";
  export default {
    name: "homePage",

    components: {
      AppJumbo,
      OurSpecialties,
      LatestNews,
      AppVideo,
      AppCreative,
      AppTestimonials,
    },
  };
</script>
<template>
  <AppJumbo />
  <OurSpecialties />
  <AppCreative />
  <LatestNews />
  <AppVideo />
  <AppTestimonials />
</template>
