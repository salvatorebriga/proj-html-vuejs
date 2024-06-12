<script>
import { store } from "../store";
import StatsBar from "./AppStatsBar.vue";
export default {
  name: "CreativeLeader",
  components: {
    StatsBar,
  },
  setup() {
    return {
      stats: store.stats,
    };
  },
};
</script>
<template>
  <section id="ms_stats">
    <div class="ms_big_container .container-xxl">
      <div class="container-md">
        <div class="row row-cols-2 g-5">
          <div class="col">
            <h3 class="pb-1">
              Creative Leader<span class="text_primary">.</span>
            </h3>
            <div class="line"></div>
            <div class="spacer pb-3"></div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium eveniet quae pariatur? Quisquam, a soluta! Excepturi,
              error velit. Impedit, quia accusantium? Aliquid, fuga amet? Aut
              alias repellat perspiciatis neque quaerat vitae velit, adipisci
              corrupti atque!
            </p>
            <span class="fs_08 fw-bold text_dark">READ MORE</span>
          </div>
          <!-- /.col -->
          <div class="col">
            <StatsBar
              v-for="s in stats"
              :key="s.name"
              :name="s.name"
              :percentage="s.percentage"
            />
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.ms_medium_container -->
    </div>
    <!-- /.ms_big_container -->
  </section>
</template>
<style scoped>
.ms_big_container {
  padding: 8rem 0;
}

.text_primary {
  color: #ff4612;
}

.fs_08 {
  font-size: 0.8rem;
}

.text_dark {
  color: #181515;
}

.spacer {
  height: 1rem;
}

.line {
  background-color: #ff4612;
  width: 60px;
  height: 2px;
  margin-right: 0;
  margin-bottom: 50px;
}
</style>
