<script>
export default {
  name: "AppTeam",
};
</script>

<template>
  <div class="container-fluid mb-5 mr-bg-color">
    <div class="row">
      <div class="col-sm-4">
        <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide"
          data-bs-touch="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/img/our-gatherings-01.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img src="/img/latestNews2.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/img/founder.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-sm-8">
        <div class="content text-align-left">
          <h3>giovanni</h3>
          <span>founder</span>
          <div class="line"></div>
          <p class="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a
            laborum, praesentium nulla corporis mollitia unde accusantium
            assumenda provident quia iste tempora pariatur obcaecati aspernatur
            aperiam quis? Cumque, commodi in!
          </p>
          <h2 class="firma">giovanni</h2>
          <a href="#"><i class="fa-brands fa-linkedin-in social"></i></a>
          <a href="#"><i class="fa-brands fa-facebook-f social"></i></a>
          <a href="#"><i class="fa-brands fa-twitter social"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mr-bg-color {
  background-color: #fafafa;
  padding: 100px;
}

.content {
  background-color: #ffffff;
}

.line {
  background-color: #ff4612;
  width: 60px;
  height: 2px;
  margin-right: 0;
  margin-bottom: 50px;
}

.social {
  background-color: #ff4612;
  color: white;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  text-align: center;
  padding-top: 6px;
  margin-right: 10px;
}

.firma {
  font-family: TuesdayNight;
  font-size: 29px;
  line-height: 40px;
  font-weight: 300;
  color: #ff4612;
  margin: -19px 0 -41px 62.7%;
}
</style>
