<script>
export default {
  name: "OurGatherings",
  data() {
    return {
      items: [
        {
          id: 1,
          image: "/img/our-gatherings-01.jpg",
          alt: "img01",
          title: "Motivation theories",
          category: "Educative",
          showTitle: false,
        },
        {
          id: 2,
          image: "/img/our-gatherings-02.jpg",
          alt: "img01",
          title: "Project Blue",
          category: "Educative",
          showTitle: false,
        },
        {
          id: 3,
          image: "/img/our-gatherings-03.jpg",
          alt: "img01",
          title: "creative Motivation",
          category: "Educative",
          showTitle: false,
        },
        {
          id: 4,
          image: "/img/our-gatherings-04.jpg",
          alt: "img01",
          title: "Online Education",
          category: "Educative",
          showTitle: false,
        },
        {
          id: 5,
          image: "/img/our-gatherings-05.jpg",
          alt: "img01",
          title: "Great Leader",
          category: "Educative",
          showTitle: false,
        },
        {
          id: 6,
          image: "/img/our-gatherings-06.jpg",
          alt: "img01",
          title: "Online Coaching",
          category: "Educative",
          showTitle: false,
        },
        {
          id: 7,
          image: "/img/our-gatherings-01.jpg",
          alt: "img01",
          title: "Motivation theories",
          category: "Educative",
          showTitle: false,
        },
        {
          id: 8,
          image: "/img/our-gatherings-02.jpg",
          alt: "img01",
          title: "Motivation theories",
          category: "Educative",
          showTitle: false,
        },
        {
          id: 9,
          image: "/img/our-gatherings-03.jpg",
          alt: "img01",
          title: "Motivation theories",
          category: "Educative",
          showTitle: false,
        },
      ],
      // Variabile di stato per controllare la visibilità dell'ultima riga
      showLastRow: false,
    };
  },
  methods: {
    showTitle(id) {
      this.items.forEach((item) => {
        if (item.id === id) {
          item.showTitle = true;
        }
      });
    },
    hideTitle(id) {
      this.items.forEach((item) => {
        if (item.id === id) {
          item.showTitle = false;
        }
      });
    },
    toggleLastRow() {
      this.showLastRow = !this.showLastRow;
    },
  },
};
</script>

<template>
  <div class="container p-5">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2>Our Gatherings<span>.</span></h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div class="line"></div>
      </div>
      <div class="row g-3">
        <div class="col-md-4" v-for="item in items.slice(0, 6)" :key="item.id">
          <div class="article p-3">
            <div
              class="img-article"
              @mouseenter="showTitle(item.id)"
              @mouseleave="hideTitle(item.id)"
            >
              <img :src="item.image" :alt="item.alt" />
              <div class="hoover-title" :class="{ show: item.showTitle }">
                <div class="article-title">
                  <h5>{{ item.title }} <span class="text-orange">.</span></h5>
                  <p>{{ item.category }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-4"
          v-if="showLastRow"
          v-for="item in items.slice(6, 9)"
          :key="item.id"
        >
          <div class="article p-3">
            <div
              class="img-article"
              @mouseenter="showTitle(item.id)"
              @mouseleave="hideTitle(item.id)"
            >
              <img :src="item.image" :alt="item.alt" />
              <div class="hoover-title" :class="{ show: item.showTitle }">
                <div class="article-title">
                  <h5>{{ item.title }} <span class="text-orange">.</span></h5>
                  <p>{{ item.category }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 mt-3 d-flex justify-content-center">
        <button @click="toggleLastRow" class="orange">
          {{ showLastRow ? "Show less" : "Load more" }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article {
  margin-bottom: 20px;
}

.img-article img {
  width: 100%;
  height: auto;
}

.text-orange {
  color: #ff4612;
}

.img-article {
  position: relative;
  overflow: hidden;
}

.hoover-title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: black;
  color: white;
  padding: 10px;
  box-sizing: border-box;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.img-article:hover .hoover-title {
  opacity: 1;
}

button.orange {
  background-color: #ff4612;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
}

h2 {
  font-size: 50px;
  margin-bottom: 15px;
  span {
    color: #ff4612;
  }
}

p {
  color: gray;
  margin-bottom: 25px;
}

.line {
  background-color: #ff4612;
  width: 60px;
  height: 2px;
  margin: 0 auto;
  margin-bottom: 50px;
}
</style>
