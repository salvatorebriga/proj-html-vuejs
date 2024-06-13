<script>
  export default {
    name: "bubbles",

    data() {
      return {
        bubblesData: [
          {
            number: 12,
            text: "Years of experience",
          },
          {
            number: 36,
            text: "Successful project",
          },
          {
            number: 76,
            text: "Reliable clients",
          },
          {
            number: 12,
            text: "Years of experience",
          },
        ],
      };
    },
  };
</script>
<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col" v-for="bubble in bubblesData">
          <div class="card">
            <h2>{{ bubble.number }}</h2>
            <p>{{ bubble.text }}</p>
            <div class="line"></div>
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
          width: calc(100% / 4);
          padding: 10px;
          text-align: center;

          .card {
            border: none;
            border-radius: 50%;
            background-color: #ff4612;
            color: white;
            text-align: center;
            width: 230px;
            height: 230px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h2 {
              font-size: 50px;
              font-weight: 800;
            }

            .line {
              background-color: white;
              width: 70px;
              height: 2px;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1140px) {
    section {
      .container {
        .row {
          flex-wrap: wrap;
          .col {
            width: calc(100% / 2);

            .card {
              h2 {
              }

              .line {
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    section {
      .container {
        .row {
          flex-wrap: wrap;
          .col {
            width: 100%;
          }
        }
      }
    }
  }
</style>
