<!-- @format -->

<template>
  <v-container>
    <v-toolbar flat color="primary " class="mainHeader">
       <v-img src="" class="img"></v-img>
      <v-toolbar-title>Medical Desk</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-col cols="4" md="1" class="mb-1">
        <h3>Cellulare</h3>
        <v-select
          style="border-color: #92a8d1;"
          label="Italiano"
          background-color="white"
          required
          outlined
        ></v-select>
      </v-col>
    </v-toolbar>
  </v-container>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      e1: "Florida",
      e2: "Texas",
      e3: null,
      e4: null,
      states: ["Italy", "Albania"],
    };
  },
};
</script>

<style scoped>
.img {
  position: absolute;
  width: 189px;
  height: 77px;
  left: 176px;
  top: 11px;
}

.mainHeader {
  width: 100%;
  overflow: hidden;
  height: 148px;
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
}

.head {
  color: white;
}
</style>
