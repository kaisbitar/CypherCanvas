<template>
  <div>
    <v-container fluid>
      <v-row class="ml-1">
        <v-col cols="12" md="6">
          <forceGraphQuery />
        </v-col>
      </v-row>
      <forceGraphCanvas />
      <v-col id="3d-graph" cols="12" md="6"> </v-col>
    </v-container>
  </div>
</template>

<script>
import forceGraphQuery from "./forceGraphQuery";
import forceGraphCanvas from "./forceGraphCanvas";

export default {
  name: "ForceGraph",
  components: {
    forceGraphQuery,
    forceGraphCanvas
  },
  data: () => ({
    viz: null,
    response: null
  }),
  methods: {},
  mounted() {
    // console.log(this.$neo4j.getDriver());
  }
};
</script>
<style></style>
