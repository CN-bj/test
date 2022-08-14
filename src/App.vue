<template>
  <div>
   <router-link to="/student">去学生组件</router-link>
   <router-link to="/school">去学校组件</router-link>
  <div>
     <router-view></router-view>
  </div>
  </div>
</template>

<script>

export default {
  name: "App",
 
};
</script>


