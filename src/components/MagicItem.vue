<template>
  <div>
    <a id="title" :href="url"> {{ title }} </a>
    <h2 id="price"> {{ priceQuantity }} {{ priceUnit }} </h2>
  </div>
</template>

<script>
export default {
  name: "MagicItem",
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