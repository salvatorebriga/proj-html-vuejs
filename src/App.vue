<script>
  import AppHeader from "./components/AppHeader.vue";
  import AppFooter from "./components/AppFooter.vue";
  export default {
    name: "app",

    components: {
      AppHeader,
      AppFooter,
    },
  };
</script>

<template>
  <AppHeader />

  <router-view></router-view>

  <AppFooter />
</template>

<style lang="scss" scoped></style>
