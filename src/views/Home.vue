<template>
  <div class="home">
    <neo4jConnection />
    <forceGraph />
  </div>
</template>

<script>
// @ is an alias to /src
import neo4jConnection from "../components/neo4jConnection.vue";
import forceGraph from "../components/forceGraph.vue";

export default {
  name: "Home",
  components: {
    neo4jConnection,
    forceGraph
  },
  data: () => ({
    viz: null
  }),
  methods: {},
  mounted() {}
};
</script>
<style></style>
