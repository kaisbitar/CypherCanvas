<template>
  <v-container>
    <v-card flat :loading="isLoading">
      <v-row>
        <v-container style="max-width:500px" class="ml-0">
          <v-chip label class="ml-0 mb-4">
            Search for:
          </v-chip>
          <v-text-field
            :append-outer-icon="'mdi-cloud-search-outline'"
            v-model="specialExpressions"
            @click:append-outer="fetchResults()"
            label="Search for.."
          ></v-text-field>
        </v-container>

        <v-container style="max-width:500px">
          <v-chip label class="ml-0 mb-2">
            Search by:
          </v-chip>
          <v-combobox
            v-model="searchType"
            :items="searchByItems"
            chips
            label="Select search category.."
          ></v-combobox>
        </v-container>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { fetchSearchResults } from "@/api/api.js";

export default {
  name: "App",
  components: {},
  data: () => ({
    searchType: "tags",
    specialExpressions: "test",
    searchByItems: [
      "context",
      "folder",
      "public_id",
      "tags",
      "filename",
      "colors"
    ],
    isLoading: true
  }),
  methods: {
    fetchResults() {
      let appApi = "http://127.0.0.1:8080";
      fetchSearchResults(appApi, this.searchType, this.specialExpressions)
        .then(apiItems => {
          this.$store.state.apiItems = apiItems;
          this.isLoading = false;
          return apiItems;
        })
        .then((this.isLoading = true));
    }
  },
  created() {
    this.fetchResults();
  },
  updated() {}
};
</script>
