<script>
import AboutUsJumbo from "../components/AboutUsJumbo.vue";
import OurSpecialties from "../components/OurSpecialties.vue";
import CreativeLeader from "../components/AppCreativeLeader.vue";
import OurGatherings from "../components/AppOurGatherings.vue";
export default {
  name: "aboutUs",

  components: {
    AboutUsJumbo,
    OurSpecialties,
    OurGatherings,
    CreativeLeader,
  },
};
</script>
<template>
  <AboutUsJumbo />
  <OurSpecialties />
  <OurGatherings />
  <CreativeLeader />
</template>

<style lang="scss" scoped></style>
