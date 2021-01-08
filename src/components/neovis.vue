<template>
  <div class="home" id="viz"></div>
</template>

<script>
// @ is an alias to /src
import NeoVis from "neovis.js";

export default {
  name: "Home",
  components: {},
  data: () => ({
    viz: null
  }),
  methods: {
    draw() {
      var config = {
        container_id: "viz",
        server_url: "bolt://localhost:7687",
        server_user: "neo4j",
        server_password: "d1r++",
        labels: {
          Person: {
            caption: "name",
            size: "pagerank",
            community: "community",
            title_properties: ["name", "pagerank"]
          },
          Movie: {
            caption: "title"
          }
        },
        initial_cypher: "MATCH p=()-->() RETURN p LIMIT 100"
      };

      this.viz = new NeoVis(config);
      console.log(this.viz);

      this.viz.render();
      // return config;
    }
  },
  mounted() {
    // console.log(process.env);
    this.draw();
  }
};
</script>
<style>
#viz {
  height: 500px;
}
</style>
