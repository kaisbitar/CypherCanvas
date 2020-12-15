<template>
  <v-app>
    <siteMenu />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import siteMenu from "./components/siteMenu.vue";

export default {
  name: "App",
  components: {
    siteMenu
  },
  data: () => ({})
};
</script>
