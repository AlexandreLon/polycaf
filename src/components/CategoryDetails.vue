<template>
    <div id="details-container">
      <CategoryDetailsCrous v-if="detailToShow === 'Crous'" />
      <CategoryDetailsApl v-if="detailToShow === 'Apl'" />
      <CategoryDetailsCaf v-if="detailToShow === 'Caf'" />
    </div>
</template>

<script>
    import CategoryDetailsCaf from "./CategoryDetailsCaf";
    import CategoryDetailsCrous from "./CategoryDetailsCrous";
    import CategoryDetailsApl from "./CategoryDetailsApl";
    export default {
      name: "CategoryDetails",
      components: {CategoryDetailsApl, CategoryDetailsCrous, CategoryDetailsCaf},
      props: {
        detailToShow: String
      }
    }
</script>

<style>
  #details-container{
    z-index: 10;
    position: absolute;
    top: 100%;
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
    padding: 60px 10px 10px 10px;
    background-color: var(--dark-grey);
  }
</style>
