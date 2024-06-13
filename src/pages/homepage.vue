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
  import AppTeam from "../components/AppTeam.vue";
  import UpcomingEvents from "../components/UpcomingEvents.vue";
  import AppContactUs from "../components/AppContactUs.vue";
  import AboutUsSwiper from "../components/AboutUsSwiper.vue";
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
      AppTeam,
      UpcomingEvents,
      AppContactUs,
      AboutUsSwiper,
    },
  };
</script>
<template>
  <AppJumbo />
  <OurSpecialties />
  <AppCreative />
  <LatestNews />
  <AppTeam />
  <UpcomingEvents />
  <AppTestimonials />
  <AppVideo />
  <bubbles />
  <WeCanTeachYou />
  <AppContactUs />
  <AboutUsSwiper />
  <AppPricingPlans />
</template>
