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
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>Our Gatherings</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div class="row g-3">
        <div class="col-md-4" v-for="item in items" :key="item.id">
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
    </div>
  </div>
</template>
<style lang="scss" scoped>
.article {
  border: 1px solid #ddd;
  padding: 15px;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  background-color: black;
  color: white;
  padding: 10px;
}

.hoover-title.show {
  opacity: 1;
}
</style>
