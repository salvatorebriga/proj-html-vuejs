<script>
  export default {
    name: "AppContactUs",
  };
</script>
<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="cardL">
            <img src="../../public/img/MapContactUs.PNG" alt="MapContactUs" />
          </div>
        </div>
        <div class="col">
          <div class="cardR">
            <h2>Contact us<span>.</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing edit</p>
            <div class="line"></div>

            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <textarea placeholder="Write a message..."></textarea>

            <button class="orange">
              <span>PURCHASE</span> <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  section {
    background-color: #fafafa;
    padding-top: 100px;
    padding-bottom: 100px;
    .container {
      .row {
        display: flex;
        flex-wrap: nowrap;
        .col {
          width: 50%;
          .cardL {
            padding-top: 100px;
            img {
              position: relative;
              bottom: 0;
              right: 0;
              width: 100%;
            }
          }
          .cardR {
            padding: 50px;

            h2 {
              font-size: 50px;
              margin-bottom: 20px;
              span {
                color: #ff4612;
              }
            }
            p {
              font-size: 20px;
              color: gray;
            }

            .line {
              background-color: #ff4612;
              width: 70px;
              height: 2px;
              margin-bottom: 50px;
            }

            input {
              width: calc(100% / 2 - 10px);
              margin: 5px;
              margin-bottom: 50px;
            }

            textarea {
              margin: 5px;
              margin-bottom: 40px;
              width: calc(100% - 10px);
            }

            input,
            textarea {
              border: none;
              background-color: #fafafa;
              border-bottom: 1px solid gray;
              padding: 10px;
            }
            button {
              padding: 20px;
              margin-right: 20px;
              border: none;

              &:hover > span {
                margin-right: 10px;
                transition: 0.5s;
              }

              &:hover > i {
                margin-right: 20px;
                transition: 0.5s;
              }

              span {
                margin-right: 30px;
                transition: 0.5s;
              }

              i {
                transition: 0.5s;
              }
            }

            .orange {
              background-color: #ff4612;
              color: white;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    section {
      .container {
        .row {
          flex-direction: column;
          .col {
            width: calc(100%);
            .cardL {
              padding-top: 0px;
            }
          }
        }
      }
    }
  }
</style>
