<template>
  <div class="welcome">
    <h1>Interview Quiz</h1>
    <Options></Options>
  </div>
</template>

<script>
import Options from "@/components/Options.vue";
export default {
  name: "Welcome",
  components: {
    Options,
  },
};
</script>
