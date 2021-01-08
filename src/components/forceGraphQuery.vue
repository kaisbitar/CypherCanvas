<template>
  <div class="forceGraphQuery">
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
  </div>
</template>

<script>
export default {
  name: "forceGraphQuery",
  data: () => ({
    query:
      "MATCH (n)-[r]->(m) RETURN { id: id(n), label:head(labels(n)), caption:n.name } as source, { id: id(m), label:head(labels(m)), caption:m.name} as target, { type:type(r)} as rel LIMIT 30"
  }),
  methods: {
    async runQuery() {
      const session = this.$neo4j.getSession();
      session.run(this.query).then(result => {
        session.close();
        this.$store.commit("setRecordsResults", result.records);
      });
    }
  },
  computed: {},
  created() {
    console.log(this.inputText);
  },
  mounted() {
    this.runQuery();
  }
};
</script>
<style></style>
