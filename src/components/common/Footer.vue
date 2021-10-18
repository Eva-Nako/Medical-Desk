<!-- @format -->

<template>
  <v-footer color="primary " flat class="foot" style="padding: none">
    <v-img src="" class="img"></v-img>
    <v-row>
      <v-col>
        <v-card-text class="pt-8 ml-8 footer">
          Addres:Tirana,Albania <br />
          Email: omline@example.com <br />
          Phone: xxx xxx xxx
        </v-card-text>
      </v-col>
      <v-col cols="6">
        <v-card-text class="pt-8 ml-8 footer" style="width: 100%;">
          <h3>Support</h3>
          <br />
          <p>
            Faq&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Termini
          </p>
        </v-card-text>
      </v-col>
    </v-row>

    <v-card-text class="pt-8 ml-8 footer">
      {{ new Date().getFullYear() }}@
      <strong>NewMediaCommunication</strong>
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.img {
  position: absolute;
  width: 191px;
  height: 67px;
  left: 176px;
  top: 11px;
}

.foot {
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  width: 100%;
  height: 320px;
  background-size: auto;
}

.footer {
  color: white;
}
</style>
