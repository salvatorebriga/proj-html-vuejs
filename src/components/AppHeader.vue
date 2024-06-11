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
      <div class="row align-items-center">
        <div class="col-md-6">
        <ul class="list-unstyled list-inline">
          <li class="list-inline-item">
           <a href="#" class=""> +44 300 303 0266</a>
          </li>
          <li class="list-inline-item">
           <a href="#">everlead@qodeinteractive.com</a>
          </li>
          <li class="list-inline-item">
            follow us
          </li>
          <li class="list-inline-item">icone</li>
        </ul>
        
        </div>
        <!-- left section -->
        
        <!-- right section -->
        <div class="col-md-6 text-end">
         <ul class="list-unstyled list-inline">
          <li class="list-inline-item">
             <a href="#" class="ms-3" data-toggle="modal" data-target="#loginModal">Login</a>
          </li>
          <li class="list-inline-item">
             <a href="#" class="ms-3" data-toggle="modal" data-target="#registerModal">Register</a>
          </li>
         </ul>

         
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

<style lang="scss" scoped>
.top-bar {
  background-color: #181515;
  color: #d2d2d2;
  padding: 10px 0;

  a {
    color: #d2d2d2;
    margin-right: 15px;

    &:hover {
      color: #ffffff;
    }
  }
}


</style>
