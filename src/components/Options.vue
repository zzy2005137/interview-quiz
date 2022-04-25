<template>
  <div class="options">
    <div v-for="(option, key) in options" :key="key">
      <el-card shadow="hover" class="card" @click="makeChoice(option)">
        {{ option }}
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Options",
  data() {
    return {
      options: ["JavaScript", "CSS", "Vue", "HTTP"],
    };
  },
  methods: {
    makeChoice(option) {
      this.$router.push("/question/" + option);
    },
  },
};
</script>

<style scoped>
.card {
  margin-top: 1em;
  cursor: pointer;
}
</style>
