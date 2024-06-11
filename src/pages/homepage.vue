<script>
  import AppJumbo from "../components/AppJumbo.vue";
  import OurSpecialties from "../components/OurSpecialties.vue";
  import LatestNews from "../components/LatestNews.vue";
  export default {
    name: "homePage",

    components: {
      AppJumbo,
      OurSpecialties,
      LatestNews,
    },
  };
</script>
<template>
  <AppJumbo />
  <OurSpecialties />
  <LatestNews />
</template>

<style lang="scss" scoped></style>
