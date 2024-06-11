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
              <!-- <li><hr class="linea" /></li> -->
              <li>prova</li>
              <li>prova</li>
              <li>prova</li>
              <li>prova</li>
            </ul>
          </div>
          <div class="col-3">
            <ul>
              <li>
                <h5>Twitter</h5>
              </li>
              <li>prova</li>
              <li>prova</li>
              <li>prova</li>
              <li>prova</li>
            </ul>
          </div>
          <div class="col-3">
            <ul>
              <li>
                <h5>Important links</h5>
              </li>
              <li>prova</li>
              <li>prova</li>
              <li>prova</li>
              <li>prova</li>
            </ul>
          </div>
          <div class="col-3">
            <ul>
              <li>
                <h5>Contact me</h5>
              </li>
              <li>prova</li>
              <li>prova</li>
              <li>prova</li>
              <li>prova</li>
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
    padding: 70px;

    .container {
      .row {
        .col-3 {
          ul {
            list-style: none;
            li {
              margin: 20px 0;

              h5::after {
                content: "";
                display: block;
                width: 35px;
                height: 1px;
                margin-top: 20px;
                background-color: #ff4612;
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
      line-height: 22px;
      letter-spacing: 0.3px;
      text-decoration: none;
      color: white;
    }
  }
}
</style>
