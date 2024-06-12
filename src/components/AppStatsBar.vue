<script>
export default {
  name: "StatsBar",
  props: {
    name: String,
    percentage: Number,
  },
};
</script>
<template>
  <div class="mr_stat">
    <div class="d-flex justify-content-between">
      <h5>{{ name }}</h5>
      <h5>{{ percentage }}%</h5>
    </div>
    <div class="bar">
      <div :style="{ width: percentage + '%' }" class="bar up"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.mr_stat .bar {
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
}

.mr_stat .bar .up {
  height: 100%;
  background-color: #ff4612;
}
</style>
