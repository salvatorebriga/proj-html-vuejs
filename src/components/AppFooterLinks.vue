<script>
export default {
  name: "Links",
  props: ["indirizzo", "nome"],
};
</script>
<template>
  <a :href="`${indirizzo}`">{{ nome }}</a>
</template>
