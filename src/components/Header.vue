<template>
  <div id="big-container">
    <div id="container">
        <div id="heading">
            <video id="videoBG" poster="poster.JPG" autoplay muted loop>
                <source src="../assets/bgheader.mp4" type="video/mp4">
            </video>
        </div>

        <div id="informations">
            testing that
        </div>
    </div>
    <CategoryDetails :detailToShow="'caf'" />
  </div>
</template>

<script>
    import Category from "./Category";
    import CategoryDetails from "./CategoryDetails";
    export default {
        components: {Category, CategoryDetails}
    }
</script>

<style scoped>
  #big-container{

  }
#container {
  overflow: hidden;
  position: relative;
  padding: 80px 0 0 0;
  min-height: 100vh;
  box-sizing: border-box;
}
#heading {
  top: 0;
    height: 100vh;
    width: 100vw;
    overflow:hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
}
#videoBG {
    width:auto;
    min-height: 100vh;
}

#informations {
    position: relative;
    z-index: 2;
}

</style>
