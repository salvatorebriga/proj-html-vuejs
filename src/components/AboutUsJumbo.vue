<script>
export default {
  name: "AboutUsJumbo",
};
</script>

<template>
  <div class="jumbo">
    <div class="content">
      <h1>About Us</h1>
    </div>
  </div>
</template>

<style lan="scss" scoped>
.jumbo {
  height: 497px;
  background-image: url("/img/about-us-title-img.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  .content {
    padding-left: 150px;
    h1 {
      font-size: 75px;
      margin-bottom: 50px;
    }
  }
}
</style>
