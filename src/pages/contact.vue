<script>
import ContactusForm from "../components/ContactusForm.vue";
import ContactusContatti from "../components/ContactusContatti.vue";
import ContactMappa from "../components/ContactMappa.vue";
export default {
  name: "contact",
  components: {
    ContactusForm,
    ContactusContatti,
    ContactMappa,
  },
};
</script>
<template>
  <ContactMappa />
  <ContactusContatti />
  <ContactusForm />
</template>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
