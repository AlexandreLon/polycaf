<template>
    <nav>
      <div>
      </div>
      <div id="nav-logo-container">
        <img src="../assets/logopolycaf.png" alt="Logo" />
      </div>
      <div id="nav-connection">
        <button id="button-connection">{{connexion}}</button>
      </div>
    </nav>
</template>

<script>
    export default {
      name: "Menu",
      data(){
          return {
            connexion: "Connexion"
          }
      }
    }

</script>

<style scoped>
  nav{
    position: fixed;
    width: 100%;
    height: 80px;
    display: flex;
    z-index: 1000;
    justify-content: space-between;
  }
  nav div{
    width: 100%;
  }
  nav #nav-logo-container{
    display: flex;
    justify-content: center;
  }
  nav #nav-connection{
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  nav img{
    height: 100%;
  }
  #button-connection{
    color: white;
    height: 100%;
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
    margin-right: 10%;
    font-size: 16px;
    padding: 0 20px;
  }
</style>
