<template>
  <div>
    <v-navigation-drawer v-model="drawer" app left>
      <v-list dense>
        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-resistor-nodes</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="'/'">
                <h3>Neovis</h3>
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- <h3>البحث على مستوى:</h3> -->

        <v-list-item>
          <v-list-item-action>
            <v-icon>mdi-resistor-nodes</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <router-link :to="'/contact'">
                <h3>Force Graph</h3>
              </router-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>ICE Data Sience</v-toolbar-title>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  components: {},

  data: () => ({
    drawer: true
  })
};
</script>
