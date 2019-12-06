<template>
    <div id="login-container">
      <Login />
    </div>
</template>

<script>
    import Login from "./Login";
    export default {
        name: "LoginContainer",
      components: {Login}
    }
</script>

<style scoped>
  #login-container{
    padding: 80px 0 0 0;
    position: fixed;
  }
</style>
