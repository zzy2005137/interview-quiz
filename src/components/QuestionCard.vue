<template>
  <div class="question-card"></div>

  <div class="choice">
    <el-button color="#626aef" :dark="isDark">掌握</el-button>
    <el-button color="#626aef" :dark="isDark" plain>模糊</el-button>
  </div>
</template>

<script>
export default {
  name: "QuesationCard",
  data() {
    return {
      question: "Can you explain what is scope chain",
      answer:
        " Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to",
    };
  },
};
</script>

<style scoped>
.question-card {
  width: 30em;
}
.choice {
  margin-top: 2em;
}
</style>
