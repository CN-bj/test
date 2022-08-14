<template>
  <div>
    <h1>我是Student组件</h1>
    <button @click="handler">点击获取数据</button>
    <h1>{{ name }}</h1>
    <h1>{{ sex }}</h1>
    <h1>{{ day }}</h1>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "student",
  data() {
    return {
      day: 3,
    };
  },
  methods: {
    async handler() {
      this.$store.dispatch("getUser");
      
    },
  },
  computed: {
    ...mapGetters(["name"]),
    ...mapState({
      sex: (state) => state.student.user.sex,
    }),
  },
};
</script>

<style>
</style>