<script>
export default {
  name: "AppTeam",
};
</script>

<template>
  <div class="container-fluid mr-bg-color">
    <div class="row">
      <div class="col-sm-4 position-relative">
        <div
          id="carouselExampleControlsNoTouching"
          class="carousel slide"
          data-bs-touch="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/img/our-gatherings-01.jpg" class="d-block" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/img/latestNews2.jpg" class="d-block" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/img/founder.jpg" class="d-block" alt="..." />
            </div>
          </div>
          <!-- Posizionamento corretto dei pulsanti all'interno del carousel -->
          <button
            class="carousel-control-prev carousel-nav"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next carousel-nav"
            type="button"
            data-bs-target="#carouselExampleControlsNoTouching"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-sm-8 mr-p-50">
        <div class="content text-align-left">
          <h3>Jason Bickford</h3>
          <span class="role">Founder and Executive Director</span>
          <div class="line"></div>
          <p class="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat a
            laborum, praesentium nulla corporis mollitia unde accusantium
            assumenda provident quia iste tempora pariatur obcaecati aspernatur
            aperiam quis? Cumque, commodi in!
          </p>
          <h2 class="firma">Jason Bickford</h2>
          <div class="social-icons">
            <a href="#"><i class="fa-brands fa-linkedin-in social"></i></a>
            <a href="#"><i class="fa-brands fa-facebook-f social"></i></a>
            <a href="#"><i class="fa-brands fa-twitter social"></i></a>
          </div>
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
  padding: 89px 60px 110px 61px;
  position: relative;
  bottom: 20px;
  right: 100px;
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

  &:hover {
    background-color: black;
  }
}

.firma {
  font-family: TuesdayNight;
  font-size: 29px;
  line-height: 40px;
  font-weight: 300;
  color: #ff4612;
  margin: -19px 0 -41px 62.7%;
}

.mr-p-50 {
  padding: 50px;
}

.position-relative {
  position: relative;
}

.carousel-nav {
  position: absolute;
  bottom: -300px;
  left: 10px;
  z-index: 10;
  border: none;
  outline: none;
  color: #ff4612;
}

.carousel-control-next {
  left: 50px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #ff4612;
  width: 30px;
  height: 30px;
}

img {
  width: 700px;
  height: 500px;
}

h3 {
  font-size: 35px;
  line-height: 1.257em;
}

.role {
  display: block;
  font-size: 15px;
  font-weight: 300;
  line-height: 24px;
  margin-top: 4px;
  color: #606060;
}

p {
  font-size: 18px;
  font-weight: 300;
  line-height: 1.556em;
  color: #606060;
}
</style>
