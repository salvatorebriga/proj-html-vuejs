<script>
  export default {
    name: "AppHeader",
  };
</script>
<template>
  <ul>
    <li><router-link :to="{ name: 'homepage' }">homepage</router-link></li>
    <li><router-link :to="{ name: 'aboutUs' }">About Us</router-link></li>
    <li><router-link :to="{ name: 'contact' }">contact</router-link></li>
  </ul>
</template>

<style lang="scss" scoped></style>
