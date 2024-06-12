<script>
export default {
  name: "Contatti",
  props: ["icona", "contatto", "indirizzo"],
};
</script>
<template>
  <a :href="`${indirizzo}`"><i :class="`${icona}`"></i> {{ contatto }} </a>
</template>

<style scoped lang="scss">
@use "../assets/scss/partials/variables.scss" as *;

i {
  color: $arancione;
  margin-right: 5px;
}
</style>
