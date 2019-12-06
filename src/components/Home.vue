<template>
  <div class="home">
    <button @click="logout">Logout</button>
      <router-link to="/">Accueil</router-link>
    <Service></Service>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from "@/components/Index.vue";
import Service from "@/components/Service.vue";
import firebase from 'firebase'
import {db} from '../main'


// var user = auth.currentUser;
// console.log(user.uid)

// db.collection("users")
//   .doc(user.uid)
//   .set({
//     name: user.displayName,
//     profession: "Étudiant",
//     age: 21,
//     revenur: 2000
//   })
//   .then(function() {
//     console.log("Document successfully written!");
//   })
//   .catch(function(error) {
//     console.error("Error writing document: ", error);
//   });

export default {
  name: "home",
  components: {
    Index,
    Service
  },
  mounted() {},
  methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>
 <style scoped>
</style>