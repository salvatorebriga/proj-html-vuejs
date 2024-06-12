<script>
import AboutUsJumbo from "../components/AboutUsJumbo.vue";
import OurSpecialties from "../components/OurSpecialties.vue";
import CreativeLeader from "../components/AppCreativeLeader.vue";
export default {
  name: "aboutUs",

  components: {
    AboutUsJumbo,
    OurSpecialties,
    CreativeLeader,
  },
};
</script>
<template>
  <AboutUsJumbo />
  <OurSpecialties />
  <CreativeLeader />
</template>

<style lang="scss" scoped></style>
