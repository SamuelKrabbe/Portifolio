<template>
  <v-app>
    <v-container class="fill-height" fluid>
      <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
          <Login/>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import Login from './components/Login';

export default {
  name: 'App',

  components: {
    Login,
  },

  data: () => ({
    //
  }),
};
</script>
