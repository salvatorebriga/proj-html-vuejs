<script>
export default {
  name: "AppHeader",
  data() {
    return {
      // Impostazione iniziale: barra di ricerca nascosta
      searchVisible: false,
      // Impostazione iniziale: menu laterale chiuso
      sideMenuOpen: false,
    };
  },
  methods: {
    toggleSearch() {
      // Inverti lo stato della visibilità della ricerca
      this.searchVisible = !this.searchVisible;
    },
    toggleSideMenu() {
      // Inverti lo stato del menu laterale
      this.sideMenuOpen = !this.sideMenuOpen;
    },
  },
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
                  >
                    Home
                  </router-link>
                  <ul class="dropdown-menu" aria-labelledby="homeDropdown">
                    <li class="list-inline-item">
                      <router-link :to="{ name: 'homepage' }"
                        >homepage</router-link
                      >
                    </li>
                    <li>Subpage</li>
                    <li>Subpage</li>
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
                  >
                    Pages
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="pagesDropdown">
                    <li>
                      <router-link to="/about" class="dropdown-item"
                        >About Us</router-link
                      >
                    </li>
                    <li>Subpage</li>
                    <li>
                      <router-link to="/contact" class="dropdown-item"
                        >Contact</router-link
                      >
                    </li>
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
                  >
                    Blog
                  </a>
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
                  >
                    Shop
                  </a>
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
                  >
                    Events
                  </a>
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
                  >
                    Elements
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="elementsDropdown">
                    <li>Subpage</li>
                    <li>Subpage</li>
                    <li>Subpage</li>
                  </ul>
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
  width: 526px;
  padding: 127px 111px 36px 114px;
  background-color: #1e1e1e;
  text-align: left;
}

.mkdf-side-menu.open {
  display: block;
}

/* burger menu */
.burger-menu {
  background: none;
  border: none;
  color: #000; /* Colore dell'icona del burger menu */
  cursor: pointer;
  font-size: 20px;
}
</style>
