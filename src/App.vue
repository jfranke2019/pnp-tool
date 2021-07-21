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
      <div class="main-container">
        <b-container>
          <b-row>
            <b-col>
              <label for="item-sb">Item Quantity</label>
              <b-form-spinbutton
                id="item-sb"
                v-model="itemQuantity"
                min="1"
                max="50"
              ></b-form-spinbutton>
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="getRandomMundaneItem()"
              >
                Get Items
              </button>
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="getRandomMagicItem()"
              >
                Get Magic Items
              </button>
            </b-col>
            <b-col cols="8">
              <b-table striped hover v-bind:items="items" :fields="fields">
                <template #cell(name)="data">
                  <a id="item-link" :href="`${data.value}`">{{
                    data.item.name
                  }}</a>
                </template>
              </b-table>
            </b-col>
          </b-row>
        </b-container>
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
      fields: [
        {
          key: "name",
          label: "name",
          formatter: (value, key, item) => {
            const BASE = "https://www.dndbeyond.com";
            return BASE + item.url.slice(4);
          },
        },
        "type",
        "rarity",
        "price",
      ],
      items: [],
      allMundaneItemsCount: null,
      allMundaneItems: null,
      allMagicItemsCount: null,
      allMagicItems: null,
      itemQuantity: 5,
    };
  },
  methods: {
    getAllMundaneItems: function () {
      let self = this;
      axios.get(API + "equipment/").then(function (response) {
        self.allMundaneItemsCount = response.data.count;
        self.allMundaneItems = response.data.results;
      });
    },
    getAllMagicItems: function () {
      let self = this;
      axios.get(API + "magic-items/").then(function (response) {
        self.allMagicItemsCount = response.data.count;
        self.allMagicItems = response.data.results;
      });
    },
    getRandomMundaneItem: function () {
      let self = this;
      var item = {};
      var randomIndex;
      for (var i = 0; i < self.itemQuantity; i++) {
        randomIndex = Math.floor(Math.random() * self.allMundaneItemsCount);
        item = self.getMundaneItemProperties(
          self.allMundaneItems[randomIndex].index
        );
        self.items.push(item);
      }
    },
    getRandomMagicItem: function () {
      let self = this;
      var item = {};
      var randomIndex;
      randomIndex = Math.floor(Math.random() * self.allMagicItemsCount);
      item = self.getMagicItemProperties(self.allMagicItems[randomIndex].index);
      self.items.push(item);
    },
    getMundaneItemProperties: function (index) {
      var item = { name: "", type: "", rarity: "Mundane", price: "", url: "" };
      axios.get(API + "/equipment/" + index).then(function (response) {
        item.name = response.data.name;
        item.type = response.data.equipment_category.name;
        item.price =
          response.data.cost.quantity + " " + response.data.cost.unit;
        item.url = response.data.url;
      });
      return item;
    },
    getMagicItemProperties: function (index) {
      var item = { name: "", type: "", rarity: "", price: "" };
      axios.get(API + "/magic-items/" + index).then(function (response) {
        item.name = response.data.name;
        item.type = response.data.equipment_category.name;
        item.url = response.data.url;
      });
      // TODO: getMagicItemRarity()
      // TODO: getMagicItemPrice()
      return item;
    },
    getMagicItemPrice: function () {},
    getMagicItemValuesFromCSV: function () {}
  },
  mounted() {
    this.getAllMundaneItems();
    this.getAllMagicItems();
    this.getMagicItemValuesFromCSV();
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