<script>
import Links from "./AppFooterLinks.vue";
import Contatti from "./AppFooterContatti.vue";
export default {
  name: "AppFooter",
  components: {
    Links,
    Contatti,
  },
  data() {
    return {
      titoloLinks: "Important links",
      links: [
        {
          indirizzo: "#",
          nome: "About me",
        },
        {
          indirizzo: "#",
          nome: "About us",
        },
        {
          indirizzo: "#",
          nome: "Language packs",
        },
        {
          indirizzo: "#",
          nome: "Become a coach",
        },
        {
          indirizzo: "#",
          nome: "Monthly events",
        },
      ],
      contatti: [
        {
          icona: "fas fa-location-dot",
          contatto: "457 BigBlue Street/, NY 10013",
          indirizzo: "#",
        },
        {
          icona: "fas fa-phone",
          contatto: "(315)5512-2579",
          indirizzo: "#",
        },
        {
          icona: "fa-regular fa-envelope",
          contatto: "everlead@qodeinteractive.com",
          indirizzo: "#",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="footer">
    <div class="principale">
      <div class="container">
        <div class="row d-flex">
          <div class="col-3">
            <ul>
              <li>
                <h5>About</h5>
              </li>
              <li>
                <p>
                  We created Everlead to effectively become the stepping stone
                  towards meeting all your goals & achieving business success.
                </p>
              </li>

              <li>
                <a href="#">
                  <i class="fa-brands fa-linkedin-in social"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-facebook-f social"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-twitter social"></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-3">
            <ul>
              <li>
                <h5>Twitter</h5>
              </li>
              <li>Couldn't connect with Twitter</li>
            </ul>
          </div>
          <div class="col-3">
            <ul>
              <li>
                <h5>
                  {{ titoloLinks }}
                </h5>
              </li>
              <!-- inserimento dinamico dei links -->
              <li v-for="link in links">
                <Links :indirizzo="link.indirizzo" :nome="link.nome" />
              </li>
            </ul>
          </div>
          <div class="col-3">
            <ul>
              <li>
                <h5>Contact me</h5>
              </li>
              <!-- inserimento dinamico dei contatti -->
              <li v-for="contatto in contatti">
                <Contatti
                  :icona="contatto.icona"
                  :contatto="contatto.contatto"
                  :indirizzo="contatto.indirizzo"
                />
              </li>
              <li>
                <input type="text" placeholder="Your Name" />
                <button type="submit">
                  <span>
                    <i class="fas fa-arrow-right-long"></i> SUBSCRIBE</span
                  >
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="finale">
      <a href="#"> © 2019 Qode nteractive, All Rights Reserved </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../assets/scss/AppFooter";
</style>
