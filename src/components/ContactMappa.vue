<script>
export default {
  name: "Mappa",
};
</script>
<template>
  <iframe
    src="https://snazzymaps.com/embed/616067"
    width="100%"
    height="600px"
    style="border: none"
  ></iframe>
</template>
<style scoped lang="scss">
@use "../assets/scss/partials/variables.scss" as *;

iframe {
  margin-top: 90px;
}
</style>
