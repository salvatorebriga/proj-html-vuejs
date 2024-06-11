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
                <button type="submit">SUBSCRIBE</button>
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
@use "../assets/scss/partials/variables.scss";
.footer {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.556em;
  color: white;

  .principale {
    background-color: variables.$marrone;
    // height: 400px;
    padding: 100px 0 235px 0;
    ::selection {
      background-color: variables.$arancione;
      color: white;
    }

    .container {
      .row {
        .col-3 {
          ul {
            list-style: none;
            li {
              margin: 5px 0;
              font-size: small;
              color: variables.$grigino;

              h5 {
                color: white;
              }

              h5::after {
                content: "";
                display: block;
                width: 35px;
                height: 1px;
                margin-top: 20px;
                background-color: variables.$arancione;
              }

              .social {
                background-color: white;
                color: black;
                border-radius: 50%;
                width: 25px;
                height: 25px;
                text-align: center;
                padding-top: 6px;
                margin-right: 10px;

                &:hover {
                  background-color: variables.$arancione;
                  transition: all 0.4s ease-in-out;
                }
              }

              a {
                color: rgb(150, 150, 150);
                &:hover {
                  color: white;
                }

                i {
                  color: variables.$arancione;
                  margin-right: 5px;
                }
              }

              input,
              button {
                background: none;
                border: none;
                color: white;
                margin-top: 20px;
                border-bottom: 1px solid white;
              }
            }
          }
        }
      }
    }
  }

  .finale {
    text-align: center;
    background-color: rgb(255, 70, 18);
    padding: 5px 0;
    a {
      font-size: 10px;
      font-weight: lighter;
      letter-spacing: 0.3px;
      color: white;
    }
  }
}
</style>
