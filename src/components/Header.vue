<template>
  <div id="big-container">
    <div id="container">
        <div id="heading">
            <video id="videoBG" poster="poster.JPG" autoplay muted loop>
                <source src="../assets/bgheader.mp4" type="video/mp4">
            </video>
        </div>

        <div id="informations">
            <h1>Crous</h1>
            <button id="discover">Découvrir</button>
            <h2>Rubriques</h2>
            <div>
                <ul>
                    <li>
                      <video v-on:click="clickOn('crous')" class="mini_player"  muted>
                         <source src="../assets/boursebg.mp4" type="video/mp4">
                     </video></li>
                    <li>
                      <video v-on:click="clickOn('apl')" class="mini_player" muted>
                         <source src="../assets/aplbg.mp4" type="video/mp4">
                     </video></li>
                    <li>
                      <video v-on:click="clickOn('caf')" class="mini_player" muted>
                         <source src="../assets/bgheader.mp4" type="video/mp4">
                     </video>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <CategoryDetails ref="categoryDetails" v-if="detailToShowChild != null" :detailToShow="detailToShowChild" />
  </div>
</template>

<script>
    import Category from "./Category";
    import CategoryDetails from "./CategoryDetails";
    export default {
      components: {Category, CategoryDetails},
      data(){
        return {
          detailToShowChild: null
        }
      },
      mounted : function(){
        console.log(this.$refs.categoryDetails)
      },
      methods: {
        clickOn: function (clicked) {
          this.detailToShowChild = clicked;

          console.log(this.$refs)
          console.log(this.$refs.categoryDetails)
          console.log(this.$refs['categoryDetails'])
/*
          window.scroll({
            behavior: 'smooth',
            top: categoryDetails.offsetTop
          });
          */
        }
      }
    }
</script>

<style scoped>
  #big-container{
    position: relative;
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
    position: fixed;
    width:auto;
    min-height: 100vh;
}

#informations {
    position: relative;
    z-index: 2;
    margin-left: 5%;
    margin-top: 30vh;
}

#informations h2 {
    color: white;

}

#informations ul li {
    list-style: none;
    display: inline-block;
    margin-right: 2%;
}

.mini_player {
    max-width: 250px;
    cursor:pointer;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, .4);
}

#informations h1 {
    font-size: 45pt;
    color: white;
}


#discover {
    margin: 0;
    border:0;
    background-color: var(--color-blue);
    color: white;
    font-size: 15pt;
    padding: 15px 30px;
    border-radius: 5px;
    cursor:pointer;
}



</style>
