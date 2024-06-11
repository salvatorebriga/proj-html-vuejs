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
          <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDarkDropdown"
                aria-controls="navbarNavDarkDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item dropdown">
                    <button
                      class="btn btn-dark dropdown-toggle"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Dropdown
                    </button>
                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li><a class="dropdown-item" href="#">Action</a></li>
                      <li>
                        <a class="dropdown-item" href="#">Another action</a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#"
                          >Something else here</a
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
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
