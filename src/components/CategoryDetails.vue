<template>
    <div id="details-container">
      <CategoryDetailsCaf v-if="detailToShow === 'caf'" />
    </div>
</template>

<script>
    import CategoryDetailsCaf from "./CategoryDetailsCaf";
    export default {
      name: "CategoryDetails",
      components: {CategoryDetailsCaf},
      props: {
        detailToShow: String
      }
    }
</script>

<style scoped>
  #details-container{
    width: 100%;
    min-height: 100vh;
    background-color: var(--dark-grey);
  }
</style>
