<script>
export default {
  name: "ContactusForm",
};
</script>
<template>
  <section class="image">
    <div class="container">
      <div class="row">
        <div class="col-5">
          <h2>Contact us.</h2>
          <p>Lorem ipsum dolor svit consectetur</p>
          <form>
            <div class="mb-3">
              <input type="text" class="form-control" placeholder="Your Name" />
            </div>
            <div class="mb-3">
              <input
                type="email"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Your Email"
              />
            </div>
            <div>
              <textarea
                class="form-control"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button type="submit" class="btn">
              <span>Send</span> <i class="fas fa-arrow-right-long"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
@use "../assets/scss/ContactusForm";
</style>
