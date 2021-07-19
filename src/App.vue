<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" sticky>
    <b-navbar-brand href="#">DnD 5e Helper</b-navbar-brand>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#">Link 2</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <template>
    <div class="container">
      <button type="button" class="btn btn-primary" v-on:click="getRandomMundaneItem()">Get Items</button>
      <button type="button" class="btn btn-primary" v-on:click="getMundaneItemProperties(items[0].index)">Get Items</button>
      <b-table striped hover v-bind:items="items" :fields="fields"></b-table>
    </div>
  </template>
    
  </div>
</template>

<script>
import axios from "axios";
const API = "https://www.dnd5eapi.co/api/";

export default {
  name: "App",
  data() {
    return {
      fields: ["name", "type", "rarity", "price"],
      items: [{}],
      types: [{}],
      rarities: [{}],
      prices: [{}],
      allMundaneItemsCount: null,
      allMundaneItems: null,
    };
  },
  methods: {
    getAllMundaneItems: function () {
      let self = this;
      axios.get(API + "/equipment/").then(function (response) {
        self.allMundaneItemsCount = response.data.count;
        self.allMundaneItems = response.data.results;
      });
    },
    //TODO: quantity
    getRandomMundaneItem: function () {
      let self = this;
      var item;
      var randomIndex;
      randomIndex = Math.floor(Math.random() * self.allMundaneItemsCount);
      item = self.allMundaneItems[randomIndex];
      self.items.push(item);
    },
    getMundaneItemProperties: function (index) {
      //let self = this;
      axios.get(API + "/equipment/" + index).then(function(response){
        console.log("type", response.data.category_range)
        //self.types.push(response.data.category_range)
      });
    },
    getRandomMagicItem: function (apiResponse) {
      alert(apiResponse);
    },
    capitalizeLetters: function (string) {
      alert(string);
    },
    createURL: function (apiUrl) {
      const BASE = "https://www.dndbeyond.com";
      var url = apiUrl.slice(4);
      return BASE + url;
    },
  },
  mounted() {
    this.getAllMundaneItems();
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
}
body {
  background-color: #2c3e50;
}
</style>