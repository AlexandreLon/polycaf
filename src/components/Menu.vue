<template>
  <nav>
    <div></div>
    <div id="nav-logo-container">
      <img src="../assets/logopolycaf.png" alt="Logo" />
    </div>
    <div id="nav-connection">
      <button v-on:click="onClickConnection" id="button-connection">{{connexion}}</button>

      <!--
      <router-link class="menu" to="login">Login</router-link>
      <br />
      <router-link class="menu" to="sign-up">Sign Up</router-link>
      -->
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    onClickConnection () {
      this.menuOpen = !this.menuOpen
      this.$emit('showMenu', this.menuOpen)
    }
  },
  data() {
    return {
      menuOpen: false,
      connexion: "Connexion"
    };
  }
};
</script>

<style scoped>
nav {
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  z-index: 1000;
  justify-content: space-between;
}
nav div {
  width: 100%;
}
nav #nav-logo-container {
  display: flex;
  justify-content: center;
}
nav #nav-connection {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
nav img {
  height: 100%;
}
#button-connection {
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
.menu {
  display: inline-block;
  margin-right: 15%;
  font-size: 1.75em;
}
</style>
