<template>
  <div>
    <h1>Test</h1>
    <p>
      {{hello}}
    </p>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "app",
  data: function () {
    return {
      hello: '',
    }
  },
  apollo: {
    hello: gql`
      query {
        hello
      }
    `,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
