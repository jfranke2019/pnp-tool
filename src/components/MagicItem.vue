<template>
  <div>
    <h1 id="title">{{ title }}</h1>
    <h2 id="price"> {{ priceQuantity }} {{ priceUnit }} </h2>
    <h2 id="url"> {{ url }}</h2>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {};
  },
  props: {
    title: String,
    priceQuantity: Number,
    priceUnit: String,
    url: String,
  },
};
</script>