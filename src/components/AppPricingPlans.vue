<script>
  export default {
    name: "APpPricingPlans",

    data() {
      return {
        cardData: [
          {
            plan: "Basic plan",
            price: 100,
            feature: [
              "Lorem ipsum dolor svit elit",
              "Adipiscing elit sed eiusi net",
              "Tempor incididunt ut labor",
            ],
          },
          {
            plan: "Premium plan",
            price: 200,
            feature: [
              "Lorem ipsum dolor svit elit",
              "Adipiscing elit sed eiusi net",
              "Tempor incididunt ut labor",
            ],
          },
          {
            plan: "Deluxe plan",
            price: 150,
            feature: [
              "Lorem ipsum dolor svit elit",
              "Adipiscing elit sed eiusi net",
              "Tempor incididunt ut labor",
            ],
          },
        ],
      };
    },
  };
</script>
<template>
  <section>
    <div class="container">
      <h2>Pricing plans.</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      <div class="line"></div>

      <div class="row">
        <div class="col" v-for="(data, index) in cardData">
          <div class="card" :class="{ black: index === 1 }">
            <h4>{{ data.plan }}<span class="point">.</span></h4>
            <div class="price">
              <h2>{{ data.price }}</h2>
              <span>$</span>
            </div>

            <div class="orange"></div>
            <ol>
              <li v-for="features in cardData[index].feature">
                <div class="feature">
                  <i class="fas fa-check"></i>
                  <span> {{ features }} </span>
                </div>
              </li>
            </ol>
            <button>
              <span>PURCHASE</span> <i class="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  @use "../assets/scss/partials/variables.scss";
  section {
    background-image: url("/img/pricingBg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    padding-top: 150px;
    padding-bottom: 150px;
    color: white;

    h2 {
      font-size: 50px;
      margin-bottom: 15px;
    }

    p {
      margin-bottom: 25px;
    }

    .line {
      background-color: white;
      width: 60px;
      height: 2px;
      margin: 0 auto;
      margin-bottom: 50px;
    }

    .row {
      .col {
        .card {
          text-align: left;
          padding: 50px;

          .point {
            color: variables.$arancione;
          }

          h4 {
            margin-bottom: 20px;
          }
          .price {
            display: flex;
            h2 {
              margin-bottom: 20px;
              font-weight: bolder;
            }
            span {
              font-size: 25px;
            }
          }

          .orange {
            background-color: variables.$arancione;
            width: 60px;
            height: 2px;
            margin-bottom: 30px;
          }

          ol {
            list-style-type: none;
            padding: 0;
            line-height: 4;

            li {
              i {
                margin-right: 10px;
              }
              span {
                font-size: 15px;
              }
            }
          }

          button {
            width: max-content;
            text-align: left;
            padding: 20px;
            margin-right: 20px;
            border: none;
            background-color: variables.$arancione;
            color: white;
            font-size: 15px;
            font-weight: 800;

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
        }
      }
    }

    .black {
      color: white;
      background-color: variables.$marrone;
    }
  }
</style>
