<script>
export default {
  name: "Card",
  props: ["name", "indirizzo", "telefono", "email"],
};
</script>

<template>
  <ul>
    <li>
      <h2>{{ name }} <span>.</span></h2>
    </li>
    <li>
      <a href="#">
        <i class="fas fa-location-dot orange"></i>
        <span>
          {{ indirizzo }}
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fas fa-phone orange"></i>
        <span>
          {{ telefono }}
        </span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="fa-regular fa-envelope orange"></i>
        <span>
          {{ email }}
        </span>
      </a>
    </li>
    <li>
      <a href="#" class="social">
        <i class="fa-brands fa-linkedin-in social"></i>
      </a>
      <a href="#" class="social">
        <i class="fa-brands fa-facebook-f social"></i>
      </a>
      <a href="#" class="social">
        <i class="fa-brands fa-twitter social"></i>
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use "../assets/scss/ContattiCard";
</style>
