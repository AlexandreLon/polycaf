<template>
  <nav>
    <div></div>
    <div id="nav-logo-container">
      <img src="../assets/logo.png" alt="Logo" />
    </div>
    <div id="nav">
      <!-- <button id="connexion">{{connexion}}</button> -->
      <router-link class="menu" to="login">Login</router-link>
      <br />
      <router-link class="menu" to="SignUp">Sign Up</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      // connexion: "Connexion"
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
nav img {
  height: 100%;
}

.menu {
  display: inline-block;
  margin-left: 25px;
  font-size: 1.75em;
}
</style>
