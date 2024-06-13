<script>
  import AppJumbo from "../components/AppJumbo.vue";
  import OurSpecialties from "../components/OurSpecialties.vue";
  import LatestNews from "../components/LatestNews.vue";
  import AppCreative from "../components/AppCreativeLeader.vue";
  import AppVideo from "../components/AppVideo.vue";
  import AppTestimonials from "../components/AppTestimonials.vue";
  import AppPricingPlans from "../components/AppPricingPlans.vue";
  import WeCanTeachYou from "../components/WeCanTeachYou.vue";
  import bubbles from "../components/bubbles.vue";
  export default {
    name: "homePage",

    components: {
      AppJumbo,
      OurSpecialties,
      LatestNews,
      AppVideo,
      AppCreative,
      AppTestimonials,
      AppPricingPlans,
      WeCanTeachYou,
      bubbles,
    },
  };
</script>
<template>
  <AppJumbo />
  <OurSpecialties />
  <AppCreative />
  <LatestNews />
  <AppTestimonials />
  <AppVideo />
  <bubbles />
  <WeCanTeachYou />
  <AppPricingPlans />
</template>
