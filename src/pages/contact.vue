<script>
import ContactusForm from "../components/ContactusForm.vue";
import ContactusContatti from "../components/ContactusContatti.vue";
export default {
  name: "contact",
  components: {
    ContactusForm,
    ContactusContatti,
  },
};
</script>
<template>
  <ContactusContatti />
  <ContactusForm />
</template>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
