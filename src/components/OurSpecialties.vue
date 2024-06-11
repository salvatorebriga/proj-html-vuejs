<script>
  export default {
    name: "ourSpecialties",
    data() {
      return {
        content: [
          {
            text: "Knowing",
            img: "/img/clessidra.PNG",
          },
          {
            text: "Selling",
            img: "/img/persone.PNG",
          },
          {
            text: "Learning",
            img: "/img/note.PNG",
          },
          {
            text: "Contact",
            img: "/img/way.PNG",
          },
        ],
      };
    },
  };
</script>

<template>
  <div class="container">
    <h2>Our Specialties<span>.</span></h2>

    <p>lorem ipusm dolor sit amet, consectetur adipiscing elit</p>

    <div class="line"></div>

    <div class="row">
      <div class="col" v-for="content in content">
        <div class="card">
          <div class="circle">
            <img :src="content.img" :alt="content.text" />
          </div>
          <h3>{{ content.text }}</h3>
          <p>Lorem ipsum dolor sit amet, quis consect</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;

    h2 {
      font-size: 50px;
      margin-bottom: 15px;
      span {
        color: orangered;
      }
    }

    p {
      color: gray;
      margin-bottom: 25px;
    }

    .line {
      background-color: orangered;
      width: 60px;
      height: 2px;
      margin: 0 auto;
      margin-bottom: 50px;
    }

    .row {
      display: flex;
      flex-wrap: nowrap;

      .col {
        width: calc(100% / 4);

        .card {
          padding: 10px;
          border: none;

          .circle {
            height: 150px;
            width: 150px;
            border: 1px solid orangered;
            margin: 0 auto;
            margin-bottom: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-position: center;
            padding-bottom: 5px;

            img {
              width: 90%;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
</style>
