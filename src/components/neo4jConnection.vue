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
    password: "1234",
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
      // .then(driver => {
      // Update the context of your app
      // console.log(driver);
      // });
    },
    driver() {
      // Get a driver instance
      return this.$neo4j.getDriver();
    },
    testQuery() {
      // Get a session from the driver
      const session = this.$neo4j.getSession();

      // Or you can just call this.$neo4j.run(cypher, params)
      session
        .run("MATCH (n:{Person}) RETURN n limit 5000")
        .then(res => {
          this.response = res;
        })
        .then(() => {
          session.close();
        });
    }
  },
  created() {
    this.connect();
    // this.testQuery();
  }
};
</script>
