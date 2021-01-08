<template>
  <v-app>
    <appSkeleton />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import appSkeleton from "./components/appSkeleton.vue";

export default {
  name: "App",
  components: {
    appSkeleton
  },
  data: () => ({})
};
</script>
