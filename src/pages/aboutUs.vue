<script>
import AboutUsJumbo from "../components/AboutUsJumbo.vue";
import OurSpecialties from "../components/OurSpecialties.vue";
import CreativeLeader from "../components/AppCreativeLeader.vue";
import OurGatherings from "../components/AppOurGatherings.vue";
// import AppTeam from "../components/AppTeam.vue";
import AppJasonBickford from "../components/AppJasonBickford.vue";

export default {
  name: "aboutUs",

  components: {
    AboutUsJumbo,
    OurSpecialties,
    OurGatherings,
    CreativeLeader,
    // AppTeam,
    AppJasonBickford,
  },
};
</script>
<template>
  <AboutUsJumbo />
  <OurSpecialties />
  <!-- <AppTeam /> -->
  <AppJasonBickford />
  <OurGatherings />
  <CreativeLeader />
</template>

<style lang="scss" scoped></style>
