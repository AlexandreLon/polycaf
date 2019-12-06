<template>
    <div id="login-container">
      <div style="width:100%;display:flex;justify-content:center;height:30px;">
        <button class="register" v-on:click="choice = !choice"  v-if="choice">Je n'ai pas de compte</button>
        <button class="register" v-on:click="choice = !choice"  v-if="!choice">J'ai déjà un compte</button>
      </div>
      <Login v-if="choice" />
      <SignUp v-if="!choice" />

    </div>
</template>

<script>
    import Login from "./Login";
    import SignUp from "./SignUp";
    export default {
      name: "LoginContainer",
      components: {Login, SignUp},
      data(){
        return {
          choice: true,
      }
      
    }}
</script>

<style scoped>
  #login-container{
    padding: 80px 0 0 0;
    position: fixed;
  }

  .register {
    border:0;
    margin:0;
    padding:0;
    text-decoration: none;
    color: white;
    background: none;
    height: 20px;
  }
</style>
