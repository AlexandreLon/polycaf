<template>
  <div class="home">
    <h1 class="gg">GG LOGGED IN</h1>
    <button @click="logout">Logout</button>

    <Service></Service>

  </div>


</template>

<script>
import firebase from "firebase";
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Service from "@/components/Service.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Service
  },
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
.gg {
  font-size: 56px;
  color: red;
}
</style>