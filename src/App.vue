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
      <button type="button" class="btn btn-primary" v-on:click="getRandomItem()">Get Items</button>
      <b-table striped hover items:="items" :fields="fields"></b-table>
    </div>
  </template>
    
  </div>
</template>

<script>
import axios from "axios";
import { useQuery } from '@vue/apollo-composable'

const API = "https://www.dnd5eapi.co/api/";

export default {
  name: "App",
  data() {
    return {
      fields: ["name", "type", "rarity", "price"],
      items: [{}],
      allMundaneItemsCount: null,
      allMundaneItems: null,
    };
  },
  methods: {
    getAllItems: function () {
      axios.get(API + "/equipment/").then(function (response) {
        this.allMundaneItemsCount = response.data.count;
        this.allMundaneItems = response.data.results;
        console.log("all items", this.allMundaneItems);
        console.log("all items count", this.allMundaneItemsCount);
      });
    },
    getRandomItem: function () {
      var item;
      var randomIndex;

      randomIndex = Math.floor(Math.random() * this.allMundaneItemsCount);
      item = this.allMundaneItems[randomIndex];
      console.log("random item", item);
      return item;
    },
    getItemProperties: function () {},
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
    //this.getAllItems();
    axios.get(API + "/equipment/").then(function (response) {
        this.allMundaneItemsCount = response.data.count;
        this.allMundaneItems = response.data.results;
        console.log("all items", this.allMundaneItems);
        console.log("all items count", this.allMundaneItemsCount);
      });
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
