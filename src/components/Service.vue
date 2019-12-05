<template>
  <div>
    <h1>Services :</h1>
    <article v-for="(service, idx) in services" :key="idx">
      <h1>{{ service.nom }}</h1>
      <h2>{{ service.type }}</h2>
      <p>{{ service.detail }}</p>
    </article>
  </div>
</template>

<script>
import firebase, { firestore } from "firebase";

import { db } from "../main";

export default {
  name: "Service",
  data() {
    return {
      services: []
    };
  },
  firestore() {
    return {
      services: db.collection("service").orderBy("createdAt")
    };
  },
  mounted() {
    this.services = [];
    const that = this
    
    db.collection("service")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          // doc.data() is never undefined for query doc snapshots
        //   console.log(doc.id, " => ", doc.data());
          that.services.push(doc.data());
        });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
  }
};
</script>
 <style scoped>
.gg {
  font-size: 56px;
  color: red;
}
</style>