<script>
  import AppJumbo from "../components/AppJumbo.vue";
  import OurSpecialties from "../components/OurSpecialties.vue";
  import LatestNews from "../components/LatestNews.vue";
  import AppCreative from "../components/AppCreativeLeader.vue";
  import AppVideo from "../components/AppVideo.vue";
  export default {
    name: "homePage",

    components: {
      AppJumbo,
      OurSpecialties,
      LatestNews,
      AppVideo,
      AppCreative,
    },
  };
</script>
<template>
  <AppJumbo />
  <OurSpecialties />
  <AppCreative />
  <LatestNews />
  <AppVideo />
</template>
