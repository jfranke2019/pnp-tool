<template>
  <div id="app">
    <h1>DnD 5e - Merchant Simulation</h1>

    <Item
      v-bind:title="item.data.name"
      v-bind:priceQuantity="item.data.cost.quantity"
      v-bind:priceUnit="item.data.cost.unit"
      v-bind:url="item.data.url"
    />

    <MagicItem
      
    />
  </div>
</template>

<script>
import axios from "axios";
import Item from "./components/Item.vue";
import MagicItem from "./components/MagicItem.vue"

const API = "https://www.dnd5eapi.co/api/";

export default {
  name: "App",
  data() {
    return {
      item: null,
      magic: null
    };
  },
  components: {
    Item,
    MagicItem
  },
  mounted() {
    axios
      .get(API + "/equipment/club")
      .then((response) => (this.item = response));
    axios
      .get(API + "/magic-items/adamantine-armor")
      .then((response) => (this.magic = response))
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  margin-top: 60px;
}
body {
  background-color: #2c3e50;
}
</style>
