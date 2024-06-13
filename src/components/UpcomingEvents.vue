<script>
  export default {
    name: "UpcomingEvents",
  };
</script>
<template>
  <section>
    <div class="container">
      <div class="events">
        <div class="label">
          <h4>Upcoming Events</h4>
        </div>
        <p>Sorry, no post match your criteria</p>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
  section {
    background-color: #fafafa;
    padding-top: 150px;
    padding-bottom: 150px;

    .container {
      position: relative;
      .events {
        position: absolute;
        bottom: 0;
        left: 0;

        .label {
          padding: 1px 47px 8px;
          background-color: #fafafa;
          -webkit-box-shadow: 2px 3px 10px 0 rgba(0, 0, 0, 0.09);
          box-shadow: 2px 3px 10px 0 rgba(0, 0, 0, 0.09);
          z-index: 1;
          width: 450px;
          h4 {
            color: #1e1e1e;
            font-family: "Libre Baskerville", serif;
            margin: 25px 0;
            -ms-word-wrap: break-word;
            word-wrap: break-word;
          }
        }

        p {
          margin-top: 10px;
          color: gray;
          font-weight: lighter;
        }
      }
    }
  }
</style>
