<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link class="menu" to="login">Login</router-link>
    <br>
    <router-link class="menu" to="SignUp">Sign Up</router-link>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.menu {
  display: block;
  font-size: 2em;
  margin-top: 25px;
}
</style>
