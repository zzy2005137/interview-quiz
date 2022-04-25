<template>
  <div class="question">
    <h1>Quetion Page</h1>
    <h2>{{ $route.params.subject }}</h2>
    <QuestionCard></QuestionCard>
  </div>
</template>

<script>
import QuestionCard from "../components/QuestionCard.vue";
export default {
  components: {
    QuestionCard,
  },
};
</script>
