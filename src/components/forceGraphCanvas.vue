<template>
  <div class="forceGraphCanvas">
    <v-row class="ml-1">
      <v-col id="3d-graph" cols="12" md="6"> </v-col>
    </v-row>
  </div>
</template>
<script src="//unpkg.com/three-spritetext"></script>
<script>
import ForceGraph3D from "3d-force-graph";

export default {
  name: "forceGraphCanvas",
  components: {},
  data: () => ({}),
  methods: {
    drawGraph() {
      const elem = document.getElementById("3d-graph");
      if (!this.records) return;
      var gData = this.prepareObj(this.records);
      ForceGraph3D()(elem)
        .width(700)
        .height(350)
        .graphData(gData)
        .nodeAutoColorBy("caption")
        .nodeVal("size")
        .linkAutoColorBy("type")
        .linkWidth("weight")
        .backgroundColor("#000")
        .nodeLabel(node => `${node.label}: ${node.caption}`)
        .onNodeClick(node =>
          window.open(
            `https://www.google.com/search?q=${node.caption}`,
            "_blank"
          )
        )
        .onNodeHover(node => (elem.style.cursor = node ? "pointer" : null));
    },
    prepareObj(records) {
      const nodes = {};
      const links = records.map(r => {
        var source = r.get("source");
        source.id = source.id.toNumber();
        nodes[source.id] = source;
        var target = r.get("target");
        target.id = target.id.toNumber();
        nodes[target.id] = target;
        var rel = r.get("rel");
        return Object.assign({ source: source.id, target: target.id }, rel);
      });
      const gData = { nodes: Object.values(nodes), links: links };
      return gData;
    }
  },
  computed: {
    records() {
      return this.$store.state.records;
    }
  },
  watch: {
    records() {
      this.drawGraph();
    }
  },
  mounted() {
    console.log(this.$store.state.records);
  }
};
</script>
<style>
#3d-graph {
  width: 400px;
}
</style>
