<template>
  <div>
    <!-- header top -->
    <div class="top-bar" v-show="!isHomePage">
      <div class="container">
        <div class="row align-items-center">
          <!-- left section -->
          <div class="col-md-8">
            <ul class="list-unstyled list-inline mr-margin-auto">
              <li class="list-inline-item">
                <a href="#" class="link-font-size"
                  ><i class="fa-solid fa-phone icon-color"></i
                  ><span class="ps-2">Call +44 300 303 0266</span></a
                >
              </li>
              <li class="list-inline-item">
                <a href="#"
                  ><i class="fa-regular fa-envelope icon-color"></i
                  ><span class="ps-2">everlead@qodeinteractive.com</span></a
                >
              </li>
              <li class="list-inline-item">FOLLOW US</li>
              <li class="list-inline-item">
                <i class="fa-brands fa-linkedin-in social"></i>
              </li>
              <li class="list-inline-item">
                <i class="fa-brands fa-facebook-f social"></i>
              </li>
              <li class="list-inline-item">
                <i class="fa-brands fa-twitter social"></i>
              </li>
            </ul>
          </div>
          <!-- left section -->

          <!-- right section -->
          <div class="col-md-4 text-end">
            <ul class="list-unstyled list-inline mr-margin-auto">
              <li class="list-inline-item">
                <a
                  href="#"
                  class="ms-3"
                  data-toggle="modal"
                  data-target="#loginModal"
                  ><i class="fa-regular fa-user icon-color"></i
                  ><span class="ps-2">login</span></a
                >
              </li>
              <li class="list-inline-item">
                <a
                  href="#"
                  class="ms-3"
                  data-toggle="modal"
                  data-target="#registerModal"
                  ><i class="fa-solid fa-pen icon-color"></i
                  ><span class="ps-2">register</span></a
                >
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
        <div class="row align-items-center">
          <div class="col-md-3">
            <img src="/img/logo-img-01.png" alt="logo" class="mt-0 logo" />
          </div>
          <div class="col-md-9 text-end">
            <!-- navbar -->
            <nav class="navbar navbar-expand-lg navbar-light">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                  <!-- Home Dropdown -->
                  <li class="nav-item dropdown">
                    <router-link
                      to="/"
                      class="nav-link dropdown-toggle"
                      id="homeDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      >Home</router-link
                    >
                    <ul class="dropdown-menu" aria-labelledby="homeDropdown">
                      <li class="list-inline-item">
                        <router-link :to="{ name: 'homepage' }"
                          >homepage</router-link
                        >
                      </li>
                      <li><a href="#">Business coaching</a></li>
                      <li><a href="#">Blog divided</a></li>
                      <li><a href="#">Grid home</a></li>
                      <li><a href="#">Grid home</a></li>
                      <li><a href="#">Wellness coaching</a></li>
                    </ul>
                  </li>
                  <!-- Pages Dropdown -->
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="pagesDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      >Pages</a
                    >
                    <ul class="dropdown-menu" aria-labelledby="pagesDropdown">
                      <li>
                        <router-link to="/about" class="dropdown-item"
                          >About Us</router-link
                        >
                      </li>
                      <li><a href="#">About me</a></li>
                      <li>
                        <router-link to="/contact" class="dropdown-item"
                          >Contact</router-link
                        >
                      </li>
                      <li><a href="#">Become a coach</a></li>
                      <li>Pricing plans</li>
                      <li>Get in touch</li>
                      <li>Portfolio lists</li>
                      <li>Gallery list</li>
                      <li>404 error page</li>
                    </ul>
                  </li>
                  <!-- Blog Dropdown -->
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="blogDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      >Blog</a
                    >
                    <ul class="dropdown-menu" aria-labelledby="blogDropdown">
                      <li>Subpage</li>
                      <li>Subpage</li>
                      <li>Subpage</li>
                    </ul>
                  </li>
                  <!-- Shop Dropdown -->
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="shopDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      >Shop</a
                    >
                    <ul class="dropdown-menu" aria-labelledby="shopDropdown">
                      <li>Subpage</li>
                      <li>Subpage</li>
                      <li>Subpage</li>
                    </ul>
                  </li>
                  <!-- Events Dropdown -->
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="eventsDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      >Events</a
                    >
                    <ul class="dropdown-menu" aria-labelledby="eventsDropdown">
                      <li>Subpage</li>
                      <li>Subpage</li>
                      <li>Subpage</li>
                    </ul>
                  </li>
                  <!-- Elements Dropdown -->
                  <li class="nav-item dropdown">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="elementsDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      >Elements</a
                    >
                    <!-- Utilizzo del componente Dropdown -->
                    <AppElementDd
                      :items="elementsSubpages"
                      labelId="elementsDropdown"
                    />
                  </li>
                </ul>
              </div>
              <!-- search bar -->
              <div class="search-bar">
                <input
                  v-show="searchVisible"
                  type="text"
                  placeholder="Cerca..."
                />
                <button @click="toggleSearch">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              <!-- /search bar -->
              <!-- Burger menu -->
              <button @click="toggleSideMenu" class="burger-menu">
                <i class="fa-solid fa-bars"></i>
              </button>
              <!-- side menu section -->
              <section :class="{ open: sideMenuOpen }" class="mkdf-side-menu">
                sono la side bar
              </section>
              <!-- /side menu section -->
              <!-- burger menu -->
            </nav>
            <!-- navbar -->
          </div>
        </div>
      </div>
    </header>
    <!-- /header -->
  </div>
</template>

<script>
import AppElementDd from "./AppElementDd.vue";

export default {
  name: "AppHeader",
  components: {
    AppElementDd,
  },
  data() {
    return {
      searchVisible: false,
      sideMenuOpen: false,
      isHomePage: false,
      elementsSubpages: [
        { name: "Subpage 1", link: "#" },
        { name: "Subpage 2", link: "#" },
        { name: "Subpage 3", link: "#" },
      ],
    };
  },
  mounted() {
    this.isHomePage = this.$route.path === "/";
  },
  watch: {
    $route(to) {
      this.isHomePage = to.path === "/";
    },
  },
  methods: {
    toggleSearch() {
      this.searchVisible = !this.searchVisible;
    },
    toggleSideMenu() {
      this.sideMenuOpen = !this.sideMenuOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  position: sticky;
  top: 0;
  z-index: 1100;
  background-color: #181515;
  color: #d2d2d2;
  padding: 16px 0;

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

.search-bar {
  display: flex;
  align-items: center;
}

.search-bar input {
  width: 200px;
  padding: 8px;
  border-radius: 4px;
  margin-right: 10px;
}

.search-bar button {
  background-color: #ffffff;
  color: black;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}

/* Stile per l'icona di ricerca */
.search-bar button i {
  font-size: 16px;
}

/* side menu */
.mkdf-side-menu {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.mkdf-side-menu.open {
  transform: translateX(0);
}

.burger-menu {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
}

/* Stile per l'header fissato */
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 1000;
  transition: top 0.3s;
}

.hidden {
  top: -100px;
}

main {
  margin-top: 100px;
}

.dropdown-menu {
  vertical-align: middle;
  background-color: #191516;
  padding: 10px;
  color: #ffffff;

  li {
    width: 275px;
    padding: 0;
  }

  a {
    color: #ffffff;

    &:hover {
      color: #cccccc;
    }
  }
}

.social {
  background-color: white;
  color: black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  text-align: center;
  padding-top: 6px;
  margin-right: 10px;
  font-size: 12px;

  &:hover {
    background-color: #ff4612;
  }
}

.icon-color {
  color: #ff4612;
}

.mr-margin-auto {
  margin: auto;
}
</style>
