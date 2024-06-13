<!-- src/components/Dropdown.vue -->
<template>
  <ul class="dropdown-menu" :aria-labelledby="labelId">
    <li v-for="(item, index) in items" :key="index">
      <router-link v-if="item.route" :to="item.route">{{
        item.name
      }}</router-link>
      <a v-else :href="item.link">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AppElementDd",
  props: {
    items: {
      type: Array,
      required: true,
    },
    labelId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.dropdown-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;
  position: absolute;
  background-color: #f0f0f0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.dropdown-menu li {
  padding: 10px;
}

.dropdown-menu li:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

a {
  color: #ffffff;
}
</style>
