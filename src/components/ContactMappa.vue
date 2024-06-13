<script>
export default {
  name: "Mappa",
};
</script>
<template>
  <div>
    <iframe
      src="https://snazzymaps.com/embed/616067"
      width="100%"
      height="650px"
      style="border: none"
    ></iframe>
  </div>
</template>
<style scoped lang="scss">
div {
  padding: 1px;
}
iframe {
  &:focus {
    border: none;
    box-shadow: none;
    box-decoration-break: none;
  }
}
</style>
