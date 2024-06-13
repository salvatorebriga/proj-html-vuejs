<script>
  export default {
    name: "AppJasonBickford",
    data() {
      return {
        img: [
          "https://everlead.qodeinteractive.com/wp-content/uploads/2019/04/h1-img-02.jpg",
          "https://everlead.qodeinteractive.com/wp-content/uploads/2019/04/h1-img-01.jpg",
          "https://everlead.qodeinteractive.com/wp-content/uploads/2019/04/h1-img-03.jpg",
        ],
        nome: "Jason Bickford",
        role: "Founder and executive director",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",

        currentIndex: 0,
        interval: null,
      };
    },

    methods: {
      nextClick() {
        if (this.currentIndex < this.img.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      },

      prevClick() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.img.length - 1;
        }
      },

      thumbClick(index) {
        console.log(index);
        this.currentIndex = index;
      },

      isActive(index) {
        return index === this.currentIndex;
      },

      autoPlay() {
        this.interval = setInterval(() => {
          this.nextClick();
        }, 3000);
      },

      stopAutoPlay() {
        clearInterval(this.interval);
        this.interval = null;
      },
    },
  };
</script>

<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="colL">
          <div class="card">
            <div
              class="item"
              v-for="(item, index) in img"
              :key="index"
              v-show="index === currentIndex"
              @mouseover="stopAutoPlay"
              @mouseleave="autoPlay"
            >
              <img :src="item" />
            </div>

            <div class="buttons">
              <div class="prev" @click="prevClick">
                <i class="fas fa-angle-left"></i>
              </div>
              <div class="next" @click="nextClick">
                <i class="fas fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="colR">
          <div class="card">
            <h2>{{ nome }}<span>.</span></h2>
            <span> {{ role }} </span>
            <div class="line"></div>
            <p>{{ text }}</p>

            <img src="../../public/img/sign.PNG" alt="" />

            <div class="icons">
              <i class="fab fa-telegram"></i>
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  section {
    padding-top: 100px;
    padding-bottom: 100px;
    background-color: #fafafa;
    .container {
      .row {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        position: relative;
        .colL {
          width: 50%;
          .card {
            position: relative;
            .item {
              img {
                width: 100%;
              }
            }

            .buttons {
              position: absolute;
              display: flex;
              bottom: 0;
              left: 0;
              cursor: pointer;
              color: white;

              .prev {
                padding: 15px;
                background-color: #ff4612;
                display: flex;
                justify-content: center;
                align-items: center;
                i {
                  font-size: 20px;
                }

                &:hover {
                  background-color: #ef4212;
                }
              }
              .next {
                padding: 20px;
                background-color: #ff4612;
                display: flex;
                justify-content: center;
                align-items: center;
                i {
                  font-size: 20px;
                }

                &:hover {
                  background-color: #ef4212;
                }
              }
            }
          }
        }
        .colR {
          position: absolute;
          left: 45%;
          width: calc(50% + 50px);
          background-color: white;
          z-index: 2;
          .card {
            border: none;
            padding: 60px;
            position: relative;

            .line {
              background-color: #ff4612;
              width: 60px;
              height: 2px;
              margin-bottom: 50px;
            }

            h2 {
              font-weight: 600;

              span {
                color: #ff4612;
              }
            }

            span {
              font-size: 10px;
              color: gray;
              margin-bottom: 10px;
            }

            p {
              font-size: 14px;
              color: gray;
              margin-bottom: 25px;
            }

            img {
              width: 20%;
              position: absolute;
              bottom: 50px;
              right: 150px;
            }

            .icons {
              display: flex;
              gap: 10px;

              i {
                font-size: 25px;
                color: #ff4612;
                cursor: pointer;

                &:hover {
                  color: #ef4212;
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    section {
      .container {
        .row {
          .colR {
            .card {
              padding: 20px;

              h2 {
                font-size: 30px;
              }

              img {
                width: 15%;
                position: absolute;
                bottom: 20px;
                right: 100px;
              }
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
          display: flex;
          flex-direction: column;
          .colL {
            width: 100%;
          }
          .colR {
            position: static;
            width: calc(100%);
            background-color: transparent;
            .card {
              padding: 20px;

              h2 {
                font-size: 30px;
              }

              img {
                width: 15%;
                position: absolute;
                bottom: 20px;
                right: 100px;
              }
            }
          }
        }
      }
    }
  }
</style>
