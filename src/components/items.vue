<template>
  <v-container class="more">
    <h4 class="mt-n7">
      Assests count:
      <!-- <strong> -->
      <span class="green--text lighten-1 font-weight-bold">{{
        this.$store.state.apiItems.total_count
      }}</span>
      <!-- </strong> -->
    </h4>
    <v-card class="d-flex flex-row mb-6" flat>
      <v-card flat v-for="(item, index) in items" :key="index" class="pa-2">
        <v-col class="d-inline" cols="1" sm="6" md="1">
          <v-img width="200" height="150" :src="item.secure_url" />
          <!-- <div 
        v-for="(info,index2) in item"
       :key="index2"
        >{{index2}} - {{info}}</div> -->
          <!-- {{item['public_id']}} -->

          <div class="imageInfo">
            <b>public_id:</b>
            <span class=" grey--text darken-1">{{ item["public_id"] }} </span>
          </div>
          <div class="imageInfo">
            <b>folder:</b>
            <span class=" grey--text darken-1">{{ item["folder"] }}</span>
          </div>
          <div class="imageInfo">
            <b>filename:</b>
            <span class=" grey--text darken-1">{{ item["filename"] }} </span>
          </div>
          <div class="imageInfo">
            <b>format:</b>
            <span class=" grey--text darken-1">{{ item["format"] }}</span>
          </div>
          <div class="imageInfo">
            <b>url:</b>
            <span class=" grey--text darken-1">{{ item["url"] }} </span>
          </div>
          <div class="imageInfo">
            <b>secure_url:</b>
            <span class=" grey--text darken-1">{{ item["secure_url"] }} </span>
          </div>
          <div class="imageInfo">
            <b>status:</b>
            <span class=" grey--text darken-1">{{ item["status"] }} </span>
          </div>
          <div class="imageInfo">
            <b>access_mode:</b>
            <span class=" grey--text darken-1">{{ item["access_mode"] }} </span>
          </div>
        </v-col>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "items",
  components: {},
  data: () => ({}),
  methods: {},
  computed: {
    items() {
      return this.$store.state.apiItems.resources;
    }
  },
  created() {},
  updated() {}
};
</script>

<style scoped>
.imageInfo {
  max-width: 300px;
  font-size: 13px;
}
</style>
