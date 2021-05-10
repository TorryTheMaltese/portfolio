<template>
  <router-view :key="this.$route.fullPath"></router-view>
</template>

<script>
import router from "./routes/routes.js";

export default {
  router
};
</script>

<style lang="scss" scoped></style>
