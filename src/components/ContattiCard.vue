<script>
export default {
  name: "Card",
  props: ["name", "indirizzo", "telefono", "email"],
};
</script>

<template>
  <ul>
    <li>
      {{ name }}
    </li>
    <li>
      {{ indirizzo }}
    </li>
    <li>
      {{ telefono }}
    </li>
    <li>
      {{ email }}
    </li>
  </ul>
</template>
