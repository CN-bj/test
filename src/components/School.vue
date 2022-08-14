<template>
  <div>
    <h1>我是School组件</h1>
    <button @click="showSchool">去pag页面</button>
  </div>
</template>

<script>
export default {
  name: "school",
  methods:{
    showSchool(){
      this.$router.push({
        name:'pag',
      });
    }
  }
};
</script>

<style>
</style>