<template>
  <div>
    <Menu></Menu>
    <CategoryDetails :detailToShow="'caf'" />
  </div>
</template>

<script>
    import Error404 from "./Error404";
    import Menu from "./Menu";
    import CategoryDetails from "./CategoryDetails";
    export default {
      name: "Index",
      components: {CategoryDetails, Menu, Error404}
    }
</script>

<style scoped>

</style>
