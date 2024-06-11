<script>
  import AppJumbo from "../components/AppJumbo.vue";
  import OurSpecialties from "../components/OurSpecialties.vue";
  import LatestNews from "../components/LatestNews.vue";
  import AppVideo from "../components/AppVideo.vue";
  export default {
    name: "homePage",

    components: {
      AppJumbo,
      OurSpecialties,
      LatestNews,
      AppVideo,
    },
  };
</script>
<template>
  <AppJumbo />
  <OurSpecialties />
  <LatestNews />
  <AppVideo />
</template>

<style lang="scss" scoped></style>
