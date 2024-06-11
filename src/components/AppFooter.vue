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

              <li>icone</li>
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
              <li><a href="#">iconcina prova</a></li>
              <li><a href="#">iconcina prova</a></li>
              <li><a href="#">iconcina prova</a></li>
              <li></li>
              <li>
                <input type="text" placeholder="Your Name" />
                <button>SUBSCRIBE</button>
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
.footer {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.556em;
  color: white;

  .principale {
    background-color: rgb(24, 21, 21);
    // height: 400px;
    padding: 90px 0;
    ::selection {
      background-color: #ff4612;
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
              color: rgb(150, 150, 150);

              h5 {
                color: white;
              }

              h5::after {
                content: "";
                display: block;
                width: 35px;
                height: 1px;
                margin-top: 20px;
                background-color: #ff4612;
              }

              a {
                color: rgb(150, 150, 150);
                &:hover {
                  color: white;
                }
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
