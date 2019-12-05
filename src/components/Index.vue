<template>
  <div>
    <Menu />
    <Header />
  </div>
</template>

<script>
    import Error404 from "./Error404";
    import Header from "./Header";
    import Menu from "./Menu";
    import CategoryDetails from "./CategoryDetails";
    export default {
      name: "Index",
      components: {CategoryDetails, Menu, Error404, Header}
    }
</script>

<style scoped>

</style>
