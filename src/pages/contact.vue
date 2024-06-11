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
  <div>
    <h2>sono la pagina di contatti</h2>
  </div>
  <ContactusContatti />
  <ContactusForm />
</template>

<style lang="scss" scoped>
h2 {
  text-align: center;
}
</style>
