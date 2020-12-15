<template>
  <div>
    <v-container fluid>
      <v-row class="ml-1">
        <v-col cols="12" md="6">
          <v-textarea
            name="input-7-1"
            label="Query"
            v-model="query"
            placeholder="Enter Cypher query.."
            :value="query"
            hint=""
          ></v-textarea>
          <v-btn @click="runQuery()" v-model="query">Run</v-btn>
        </v-col>
      </v-row>
      <v-col id="3d-graph" cols="12" md="6"> </v-col>
    </v-container>
  </div>
</template>
<script src="//unpkg.com/three-spritetext"></script>

<script>
import ForceGraph3D from "3d-force-graph";

export default {
  name: "ForceGraph",
  components: {
    // searchCategorie
  },
  data: () => ({
    viz: null,
    response: null,
    query:
      "MATCH (n)-[r]->(m) RETURN { id: id(n), label:head(labels(n)), caption:n.name, size:2 } as source, { id: id(m), label:head(labels(m)), caption:m.title, size:50, released:m.released, tagline:m.tagline } as target, {role: m.roles, type:type(r)} as rel LIMIT 200"
  }),
  methods: {
    async runQuery() {
      const session = this.$neo4j.getSession();
      session.run(this.query).then(result => {
        session.close();
        this.drawGraph(result.records);
      });
    },
    drawGraph(result) {
      const elem = document.getElementById("3d-graph");
      var gData = this.prepareObj(result);
      ForceGraph3D()(elem)
        .width(700)
        .height(350)
        .graphData(gData)
        .nodeAutoColorBy("label")
        .nodeVal("size")
        .linkAutoColorBy("type")
        .linkWidth("weight")
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
  mounted() {
    this.runQuery();
  }
};
</script>
<style>
#3d-graph {
  width: 400px;
}
</style>
