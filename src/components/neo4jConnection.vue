<template>
  <div></div>
</template>

<script>
export default {
  name: "MyComponent",
  data: () => ({
    protocol: "bolt",
    host: "localhost",
    port: 7687,
    username: "neo4j",
    password: "d1r++Neo4j",
    response: null
  }),
  methods: {
    connect() {
      if (!this.$neo4j) return;
      return this.$neo4j.connect(
        this.protocol,
        this.host,
        this.port,
        this.username,
        this.password
      );
    },
    driver() {
      // Get a driver instance
      return this.$neo4j.getDriver();
    }
  },
  created() {
    this.connect();
  }
};
</script>
