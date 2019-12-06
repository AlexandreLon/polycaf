<template>
  <div class="sign-up">
    <h2>S'inscrire</h2>
    <input type="text" v-model="email" placeholder="Email" />
    <br />
    <input type="password" v-model="password" placeholder="Password" />
    <br />
    <button class="button-blue" @click="signUp">S'inscrire</button>
  </div>
</template>

 <script>
import firebase from "firebase";
export default {
  name: "signUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("/home");
            // alert('user created')
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
.sign-up {
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