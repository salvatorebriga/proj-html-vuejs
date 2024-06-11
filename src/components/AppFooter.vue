<script>
export default {
  name: "AppFooter",
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
                <h5>Important links</h5>
              </li>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Language packs</a>
              </li>
              <li>
                <a href="#">Become a coach</a>
              </li>
              <li>
                <a href="#">Monthly events</a>
              </li>
            </ul>
          </div>
          <div class="col-3">
            <ul>
              <li>
                <h5>Contact me</h5>
              </li>
              <li>
                <a href="#"
                  ><i class="fas fa-location-dot"></i> 457 BigBlue Street, NY
                  10013</a
                >
              </li>
              <li>
                <a href="#">
                  <i class="fas fa-phone"></i>
                  (315)5512-2579
                </a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa-regular fa-envelope"></i>
                  everlead@qodeinteractive.com</a
                >
              </li>
              <li></li>
              <li>
                <input type="text" placeholder="Your Name" />
                <button type="submit">
                  <span>SUBSCRIBE</span>
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
