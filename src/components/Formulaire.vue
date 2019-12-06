<template>
  <div class="form-group" v-if="!isSubmitted">
    <label for="email">Mail</label>
    <input type="text" id="email" class="form-control" v-model="userData.email" />

    <label for="nom">Nom</label>
    <input type="text" id="nom" class="form-control" v-model="userData.nom" />

    <label for="prenom">Prénom</label>
    <input type="text" id="prenom" class="form-control" v-model="userData.prenom" />

    <label for="homme">
      <input type="radio" id="homme" value="homme" v-model="radioBoxOption" /> Homme
    </label>
    <label for="femme">
      <input type="radio" id="femme" value="femme" v-model="radioBoxOption" /> Femme
    </label>

    <label for="age">Age</label>
    <input type="number" min="15" max="99" id="age" class="form-control" v-model="userData.age" />

    <label for="coef">Coefficient Familiale année 2018</label>
    <input type="number" id="coef" class="form-control" v-model="userData.coef" />

    <label for="cafBefore">
      <input type="checkbox" id="cafBefore" value="cafBefore" v-model="userData.cafBefore" /> J'ai déjà perçu des droits via la CAF
    </label>

    <label for="prof">Je suis ...</label>
    <select id="prof" class="form-control" v-model="userData.profession">
      <option v-for="prof in profs">{{ prof }}</option>
    </select>

    <button class="btn btn-primary" @click.prevent="submitted">Lancer la simulation</button>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Formulaire",
  data() {
    return {
      userData: {
        email: "",
        nom: "",
        prenom: "",
        age: "",
        coef: ""
      },
      profs: ["Étudiant", "Lycéen", "Salarié", "Au chômage", "Retraité"],
      radioBoxOption: "Homme",
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
      console.log(userData);
    }
  }
};
</script>

<style scoped>
.form-group {
    display: block;
    width: 100%;
    height: 200px;
    background-color: black;
}
</style>