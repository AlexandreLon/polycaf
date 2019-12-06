<template>
  <div class="login">
    <h2>Connexion</h2>
    <input type="text" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <div class="flex-right">
      <button class="button-blue" @click="login">Connexion</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            //TODO : connecte
          },
          err => {
            alert("Oops. " + err.message);
          }
        );
    }
  }
};
</script>

<style scoped>
/* "scoped" attribute limit the CSS to this component only */
.login {
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
h2{
  color:#ededed;
  text-align: center;
}
  input[type=text], input[type=password]{
    box-sizing: border-box;
    font-size: 18px;
    width: 100%;
    border-radius: 6px;
    border: 2px solid transparent;
    color: #888b9a;
    padding: 10px 24px;
    margin: 4px 0;
    resize: vertical;
    outline: 0;
  }
  .flex-right{
    display : flex;
    justify-content: flex-end;
  }
  .button-blue{
    margin : 0;
  }
</style>
