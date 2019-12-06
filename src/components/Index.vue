<template>
  <div>
    <Menu />
    <Header />
    <Formulaire />
  </div>
</template>

<script>
    import Error404 from "./Error404";
    import Header from "./Header";
    import Menu from "./Menu";
    import Formulaire from "./Formulaire";
    import CategoryDetails from "./CategoryDetails";
    export default {
      name: "Index",
      components: {CategoryDetails, Menu, Error404, Header, Formulaire}
    }
</script>

<style scoped>

</style>
