<template>
  <div id="big-container">
    <div ref="container" id="container">
      <div id="heading">
        <video id="videoBG" poster="poster.JPG" autoplay muted loop>
          <source src="../assets/boursebg.mp4" type="video/mp4">
        </video>
      </div>

      <div id="informations">
        <h1>{{detailToShowChild}}</h1>
        <button v-on:click="clickOn(detailToShowChild)" class="button-blue">Découvrir</button>
        <h2>Rubriques</h2>
        <div>
          <ul>
            <li class="li-category">
              <div>Crous</div>
              <video v-on:click="clickOn('Crous')" class="mini_player"  muted>
                <source src="../assets/boursebg.mp4" type="video/mp4">
              </video>
            </li>
            <li class="li-category">
              <div>Apl</div>
              <video v-on:click="clickOn('Apl')" class="mini_player" muted>
                <source src="../assets/aplbg.mp4" type="video/mp4">
              </video>
            </li>
            <li class="li-category">
              <div>Caf</div>
              <video v-on:click="clickOn('Caf')" class="mini_player" muted>
                <source src="../assets/bgheader.mp4" type="video/mp4">
              </video>
            </li>
            <li class="li-category">
              <router-link to="/error404">
                <img class="mini_player" src="../assets/error.png" alt="error404">
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <CategoryDetails ref="categoryDetails" v-show="detailToShowChild != null && openDetail" :detailToShow="detailToShowChild" />
  </div>
</template>

<script>
  import Category from "./Category";
  import CategoryDetails from "./CategoryDetails";
  export default {
    components: {Category, CategoryDetails},
    data(){
      return {
        detailToShowChild: 'Crous',
        openDetail: false
      }
    },
    methods: {
      clickOn: function (clicked) {
        this.detailToShowChild = clicked;
        this.openDetail = true;

        let ref = this.$refs;

        setTimeout(function(){
          window.scroll({
            behavior: 'smooth',
            top: ref.container.offsetHeight
          });
        }, 10);

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
  #informations h1 {
    font-size: 45pt;
    color: white;
  }
  .mini_player{
    min-width: 100%;
    max-height: 100%;
  }
  .li-category{
    object-fit: fill;
    overflow: hidden;
    max-width: 250px;
    height: 150px;
    cursor:pointer;
    box-shadow: 1px 3px 5px rgba(0, 0, 0, .4);
    transition: 0.5s;
    position: relative;
  }
  .li-category:hover{
    transform: scale(1.15);
  }
  .li-category div{
    position: absolute;
    width: 100%;
    top : 50%;
    transform: translate(0, -50%);
    z-index: 10;
    color : white;
    text-align: center;
    font-size: 30px;
    text-shadow: #000 0px 1px 5px;
  }
</style>
