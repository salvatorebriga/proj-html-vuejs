<script>
  export default {
    name: "AppHeader",
  };
</script>

<template>
  <!-- header top -->
  <!-- left section -->
  <div class="top-bar">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          numero di telefono
          <span>email</span>
          <span>follow us</span>
        </div>
        <!-- left section -->
        
        <!-- right section -->
        <div class="col-md-6">
          
          <a href="#" class="ml-3" data-toggle="modal" data-target="#loginModal">Login</a>
                      <a href="#" class="ml-3" data-toggle="modal" data-target="#registerModal">Register</a>
        </div>
        <!-- /right section -->

      </div>
    </div>
  </div>
  <!-- /header top -->
  <ul>
    <li><router-link :to="{ name: 'homepage' }">homepage</router-link></li>
    <li><router-link :to="{ name: 'aboutUs' }">About Us</router-link></li>
    <li><router-link :to="{ name: 'contact' }">contact</router-link></li>
  </ul>
</template>

<style lang="scss" scoped></style>
