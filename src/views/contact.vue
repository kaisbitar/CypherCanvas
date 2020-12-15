<template>
  <div class="contact">
    <neo4jConnection />
    <forceGraph />
  </div>
</template>
<script>
import neo4jConnection from "../components/neo4jConnection.vue";
import forceGraph from "../components/forceGraph.vue";

export default {
  name: "App",
  components: {
    neo4jConnection,
    forceGraph
  },
  data: () => ({}),
  mounted() {
    // console.log(this.$neo4j.getDriver());
  }
};
</script>
