<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <!-- header top -->
  <!-- left section -->
  <div class="top-bar mb-3">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <a href="#" class="link-font-size"
                ><i class="fa-solid fa-phone"></i
                ><span>Call +44 300 303 0266</span></a
              >
            </li>
            <li class="list-inline-item">
              <a href="#"
                ><i class="fa-regular fa-envelope"></i
                ><span>everlead@qodeinteractive.com</span></a
              >
            </li>
            <li class="list-inline-item">follow us</li>
            <li class="list-inline-item">
              <i class="fa-brands fa-linkedin"></i>
            </li>
            <li class="list-inline-item">
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li class="list-inline-item">
              <i class="fa-brands fa-square-twitter"></i>
            </li>
          </ul>
        </div>
        <!-- left section -->

        <!-- right section -->
        <div class="col-md-6 text-end">
          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <a
                href="#"
                class="ms-3"
                data-toggle="modal"
                data-target="#loginModal"
              >
                <i class="fa-regular fa-user"></i>
                <span>login</span>
              </a>
            </li>
            <li class="list-inline-item">
              <a
                href="#"
                class="ms-3"
                data-toggle="modal"
                data-target="#registerModal"
              >
                <i class="fa-solid fa-pen"></i>
                <span>register</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- /right section -->
      </div>
    </div>
  </div>
  <!-- /header top -->

  <!-- header -->
  <header>
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <img src="/img/logo-img-01.png" alt="logo" class="mt-0 logo" />
        </div>

        <div class="col-md-9 text-end">
          <!-- navbar -->
          <div class="dropdown">
            <a
              class="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>

            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
          <!-- navbar -->

          <ul class="list-unstyled list-inline">
            <li class="list-inline-item">
              <router-link :to="{ name: 'homepage' }">homepage</router-link>
            </li>
            <li class="list-inline-item">
              <router-link :to="{ name: 'aboutUs' }">About Us</router-link>
            </li>
            <li class="list-inline-item">
              <router-link :to="{ name: 'contact' }">contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <!-- /header -->
</template>

<style lang="scss" scoped>
.top-bar {
  background-color: #181515;
  color: #d2d2d2;
  padding: 10px 0;

  a {
    color: #d2d2d2;
    margin-right: 15px;
    font-size: 13px;

    &:hover {
      color: #ffffff;
    }
  }
}

.logo {
  height: 24px;
}
</style>
