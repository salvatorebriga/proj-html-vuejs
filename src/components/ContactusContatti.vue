<script>
import Card from "./ContattiCard.vue";
export default {
  name: "ContactusContatti",
  components: {
    Card,
  },
  data() {
    return {
      cities: [
        {
          name: "LA",
          indirizzo: "457 BlgBlue Street, NY 10013",
          telefono: "(111) 1234-5678",
          email: "everlead1@qodeinteractive.com",
        },
        {
          name: "NY",
          indirizzo: "457 BlgBlue Street, NY 10013",
          telefono: "(222) 1234-5678",
          email: "everlead2@qodeinteractive.com",
        },
        {
          name: "NO",
          indirizzo: "289 O'Keefe Ave, N= 70112",
          telefono: "(333) 1234-5678",
          email: "everlead3@qodeinteractive.com",
        },
      ],
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Contact us <span>.</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <div class="line"></div>
      </div>

      <div class="col-4" v-for="city in cities">
        <Card
          :name="city.name"
          :indirizzo="city.indirizzo"
          :telefono="city.telefono"
          :email="city.email"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/ContactusContatti";
</style>
