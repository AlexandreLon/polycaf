<template>
  <div>
    <Menu @showMenu="onClickConnection" />
    <div id="container-index">
      <div id="sub-container">
        <Header id="header" :class="{ 'move-screen' : menuOpen === true}" />
        <LoginContainer class="log-in-container" :class="{ 'move-menu' : menuOpen === true}" />
      </div>
    </div>
  </div>
</template>

<script>
    import Error404 from "./Error404";
    import Header from "./Header";
    import Menu from "./Menu";
    import Formulaire from "./Formulaire";
    import CategoryDetails from "./CategoryDetails";
    import LoginContainer from "./LoginContainer";
    export default {
      name: "Index",
      methods: {
        onClickConnection (value) {
          this.menuOpen = value
        }
      },
      data() {
        return {
          menuOpen: false,
        };
      },
      components: {LoginContainer, CategoryDetails, Menu, Error404, Header, Formulaire}
    }
</script>

<style scoped>
  .log-in-container{
    transition: 0.2s;
    transform: translate(100%, 0);
    position: fixed;
    display: flex;
    flex-wrap: wrap;
    width: 350px;
    height: 100vh;
    background: var(--dark-grey);
    top: 0;
    right: 0;
  }
  .move-menu{
    transform: translate(0, 0);
  }
  #sub-container{
    overflow: auto;
  }
  #container-index{
    width: 100vw;
    height: auto;
    overflow: hidden;
  }
  #header{
    overflow: hidden;
    transition: 0.2s;
  }
  .move-screen{
    transform: translate(-350px, 0);
  }
</style>
