import { reactive } from "vue";

export const store = reactive({
  stats: [
    { name: "Mentorship", percentage: 78 },
    { name: "Education", percentage: 95 },
    { name: "Learning", percentage: 65 },
    { name: "Motivation", percentage: 83 },
  ],
});
